'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meal';

function isInValidText(text) {
  return !text || text.trim() === '';
}

export default async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.instructions) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Invalid data.');
    return {
      message: 'Invalid input.',
    }; // 직렬화 가능한 객체
  }

  await saveMeal(meal);

  redirect('/meals');
}
