import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ margin: '0 auto', width: 'fit-content' }}>
      <Image src='/chrome-flower.png' alt='' width='300' height='300' />
    </div>
  );
}
