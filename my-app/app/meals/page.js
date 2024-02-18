import Link from 'next/link';
import classes from './page.module.css';
import MealItem from '@/components/meals/meal-item';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href='meals/share'>Share your favorite recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <MealItem title='' slug='' image='' summary='' creator=''></MealItem>
      </main>
    </>
  );
}
