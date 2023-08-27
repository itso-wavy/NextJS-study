'use client';
import { useRouter, useParams } from 'next/navigation';

export function Controller() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const deleteHandler = async () => {
    await fetch('http://localhost:5000/topics/' + id, {
      method: 'DELETE',
    });

    router.push('/');
    router.refresh();
  };

  let contextUI = null;
  if (id) {
    contextUI = (
      <>
        <li>
          <a href={`/update/${id}`}>update</a>
        </li>
        <li>
          <button onClick={deleteHandler}>delete</button>
        </li>
      </>
    );
  }

  return (
    <ul>
      <li>
        <a href='/create'>create</a>
      </li>
      {contextUI}
    </ul>
  );
}
