'use client';

export default async function Read({ params }) {
  console.log('params: ', params);

  const response = await fetch('http://localhost:5000/comments');
  const data = await response.json();

  return (
    <div>
      <strong>readPage</strong>
      <p>id: {params.id}</p>
      <p>comment: {data[0].body}</p>
    </div>
  );
}
