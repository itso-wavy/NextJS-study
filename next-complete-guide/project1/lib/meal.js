import sql from 'better-sqlite3';

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
