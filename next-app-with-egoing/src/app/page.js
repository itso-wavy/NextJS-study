import Image from 'next/image';

export default function Home() {
  return (
    <>
      <strong>CONTENTS</strong>
      <Image src='/chrome-flower.png' alt='' width='300' height='300' />
      {/* <div><image src='/chrome-flower.png' alt=''  /></div> */}
    </>
  );
}
