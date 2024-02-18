import { Suspense } from 'react';
import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meal';
import MealsLoadingPage from './loading-out';

async function Meals() {
  // 데이터를 가져오는 컴포넌트 분리
  const meals = await getMeals(); // db 내 data 가져오기 <-> useEffect(()=>fetch, [])

  return <MealsGrid meals={meals} />;
}

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
        {/* <MealsGrid meals={meals} /> */}
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
