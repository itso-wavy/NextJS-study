'use client';
import { useRouter } from 'next/navigation';

export default function Create() {
  const router = useRouter();

  const onSubmitHandler = async e => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      body: e.target.body.value,
    };

    const res = await fetch('http://localhost:5000/topics', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const topic = await res.json();
    const lastId = topic.id;
    router.push('/read/' + lastId);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Create</h2>
      <input name='title' placeholder='title' />
      <textarea name='body' placeholder='body' cols='30' rows='10'></textarea>
      <button>게시</button>
    </form>
  );
}
