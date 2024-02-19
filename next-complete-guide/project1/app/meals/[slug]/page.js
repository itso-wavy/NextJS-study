import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meal';
import NotFound from '@/app/not-found';

export default function MealDetailsPage({ params }) {
  const { slug } = params;
  const meal = getMeal(slug);

  if (!meal) {
    NotFound(); // 가장 가까운 error 페이지 또는 not-found 페이지 표시
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className='headerText'>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className='summary'>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
