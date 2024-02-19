# react

1. 인터랙티브한 UI 개발을 도와주는 라이브러리
2. 선언적 코드 작성이 가능하다는 게 가장 강력한 장점!

# next.js

```bash
npx creact-next-app
npm i
npm run dev
```

## Basic

### 1. 보호된 파일명

// app 폴더 내

- layout.js
- page.js
- globals.css
- icon.png

// 그 외

- loading.js
- error.js
- not-found.js
- route.js

### 2. next 제공 components

1. **Link**

```js
import Link from 'next/link';

<Link href='/about'>About Us</Link>;
```

2. **Image**

```js
import Image from 'next/image';
import logoImg from '@/assets/logo.png';

{
  /* <img src={logoImg.src} alt='A plate with food in it' /> */
}
<Image src={logoImg} alt='A plate with food in it' priority />;
```

- lazy loading
- 너비 높이 자동 추론, srcset 속성 생성, 뷰포트/기기에 따른 크기 조절
- 이미지 포맷을 브라우저에 따라 변형

* > DB에서 가져오거나 사용자가 등록하는 등의 이미지는 크기를 사전에 알 수 없으므로 Image의 `fill` 속성을 사용
  ```js
  <Image src={image} alt={title} fill />
  // fill: 부모 컴포넌트에 이미지를 가득 채우는 속성
  ```

1. **서버 vs 클라이언트 컴포넌트**

- useState, useEffect 사용
- eventHandler 사용

4. 다이나믹 세그먼트

```js
// path: meals/[slug]

<Link href={`/meals/${slug}}`}>View Details</Link>
```

5. 캐싱
   히스토리 페이지와 데이터를 모두 캐싱, 새로고침시 리셋됨

6. loading.js / error.js / not-found.js

- `error.js`는 클라이언트 컴포넌트로 동작
- NotFound(): 가장 가까운 error 페이지 또는 not-found 페이지 표시

7. formData 다루기

```js
async function shareMeal(formData) {
  'use server';
  // Server Action 생성, 서버에서만 실행되는 함수
  // form의 action 속성에 접근 가능

  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
  };
}
```

- 일반적으로 클라이언트와 서버 측 코드는 실행 환경이 다르므로 파일을 분리하여 로직을 관리한다. Next.js에서는 서버 측 로직(server action, 'use server' 사용)을 모듈화하여 클라이언트 코드에서 import하여 사용한다.
- 비동기 작업을 위한 async: 네트워크 요청(클라이언트), 데이터베이스 쿼리(서버)
