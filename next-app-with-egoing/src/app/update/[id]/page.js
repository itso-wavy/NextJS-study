'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Update({ params }) {
  const id = params.id;
  const router = useRouter();
  const [topic, setTopic] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    const fetchTopic = async () => {
      const res = await fetch('http://localhost:5000/topics/' + id);
      const topic = await res.json();
      const { title, body } = topic;

      setTopic({ title, body });
    };

    fetchTopic();
  }, [id]);

  const onChangeHandler = e => {
    const { name, value } = e.target;

    setTopic(topic => ({ ...topic, [name]: value }));
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      body: e.target.body.value,
    };

    const res = await fetch('http://localhost:5000/topics/' + id, {
      method: 'PATCH',
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
      <h2>Update</h2>
      <input
        name='title'
        placeholder='title'
        value={topic.title}
        onChange={onChangeHandler}
      />
      <textarea
        name='body'
        placeholder='body'
        value={topic.body}
        onChange={onChangeHandler}
      ></textarea>
      <button>게시</button>
    </form>
  );
}
