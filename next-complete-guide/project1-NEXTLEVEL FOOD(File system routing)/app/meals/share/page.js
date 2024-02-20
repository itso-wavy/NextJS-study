'use client';

import { useFormState } from 'react-dom';
import ImagePicker from '@/components/image/image-picker';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import shareMeal from '@/lib/actions';
import classes from './page.module.css';

export default function ShareMealPage() {
  // async function shareMeal(formData) {
  //   'use server'; // Server Action 생성, 서버에서만 실행되는 함수
  //   // form의 action 속성에 접근 가능

  //   const meal = {
  //     title: formData.get('title'),
  //     image: formData.get('image'),
  //     summary: formData.get('summary'),
  //     instructions: formData.get('instructions'),
  //     creator: formData.get('name'),
  //     creator_email: formData.get('email'),
  //   };
  // }

  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          {/* <form className={classes.form} action={shareMeal}> */}
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' required />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email' name='email' required />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
            ></textarea>
          </p>
          <ImagePicker name='image' label='your image' />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
            {/* <button type='submit'>Share Meal</button> */}
          </p>
        </form>
      </main>
    </>
  );
}
