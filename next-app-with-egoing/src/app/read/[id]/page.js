export default async function Read({ params }) {
  // console.log('params: ', params);

  const response = await fetch('http://localhost:5000/topics/' + params.id);
  const topic = await response.json();

  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
    </>
  );
}
