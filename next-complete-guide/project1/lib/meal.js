import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(res => setTimeout(res, 2000));

  // throw new Error('Failed to Fetching Meals...');

  return db.prepare('SELECT * FROM meals').all();
  // run: 데이터 주입, 변경
  // get: 데이터 1열 가져오기
  // all: 데이터 여러열 가져오기
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  // ('SELECT * FROM meals WHERE slug = ' + slug) 대신
  // sql injection 방지를 위해 `?` 사용하고 플레이스홀더에 들어갈 인자를 get에 전달
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // string을 소문자 처리

  meal.instructions = xss(meal.instructions); // 사용자 입력값 검열

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer(); // buffer로 변환시 promise 반환

  stream.write(Buffer.from(bufferedImage), err => {
    if (err) throw new Error('Saving image failed!');
  }); // write 함수는 buffer를 필요로 함

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title, 
      @summary, 
      @instructions, 
      @creator, 
      @creator_email, 
      @image, 
      @slug
      )
    `
  ).run(meal);
}
