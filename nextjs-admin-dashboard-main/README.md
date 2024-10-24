- **다크 모드**와 **라이트 모드**를 모두 지원합니다.
- 인증(**NextAuth**), 데이터베이스(**Postgres** with **Prisma**), 검색(**Algolia**)을 포함한 필수 통합 기능.

1. 기존 구조 분석
   src/
   ├── app/ # App Router 페이지들
   │ ├── auth/ # 인증 관련
   │ ├── forms/ # 폼 요소들
   │ └── ui-elements/ # UI 컴포넌트
   ├── components/ # 컴포넌트
   │ ├── common/ # 공통 컴포넌트
   │ ├── Auth/ # 인증 관련 컴포넌트
   │ ├── FormElements/ # 폼 컴포넌트
   │ ├── Header/ # 헤더 컴포넌트
   │ ├── Layouts/ # 레이아웃
   │ └── Sidebar/ # 사이드바
   └── types/ # 타입 정의
2. DMSLS에 맞게 수정한 구조
   src/
   ├── pages/ # Pages Router 사용
   │ ├── index.tsx # 메인 페이지
   │ ├── admin/
   │ │ ├── login.tsx # 관리자 로그인
   │ │ └── dashboard/
   │ │ ├── index.tsx # 대시보드 메인
   │ │ ├── depression/ # 우울증 문진
   │ │ ├── anxiety/ # 불안장애 문진
   │ │ ├── panic/ # 공황장애 문진
   │ │ └── adhd/ # ADHD 문진
   │ └── api/ # API 라우트
   ├── components/
   │ ├── common/ # 공통 컴포넌트
   │ │ ├── Button.tsx
   │ │ ├── Input.tsx
   │ │ └── Loading.tsx
   │ ├── layout/ # 레이아웃 컴포넌트
   │ │ ├── AdminLayout.tsx
   │ │ ├── Header.tsx
   │ │ └── Sidebar.tsx
   │ └── survey/ # 설문 관련 컴포넌트
   │ ├── SurveyList.tsx
   │ ├── SurveyForm.tsx
   │ └── SurveyResult.tsx
   ├── hooks/ # 커스텀 훅
   │ ├── useAuth.ts # 인증 관련
   │ └── useSurvey.ts # 설문 관련
   ├── types/ # 타입 정의
   │ ├── survey.ts
   │ └── user.ts
   └── utils/ # 유틸리티 함수
   ├── firebase.ts # Firebase 설정
   └── format.ts # 데이터 포맷팅
3. 주요 변경사항:

App Router → Pages Router 변경
불필요한 UI 요소들 제거
설문 관련 구조 추가
Firebase 통합 구조 추가

4. 재사용할 만한 컴포넌트들:

Layouts 시스템
Header & Sidebar 구조
FormElements (설문에 활용)
Loading 컴포넌트
DarkMode 시스템 (선택적)

5. 추천 작업 순서:

기본 레이아웃 구조 가져오기
인증 시스템 통합
설문 관련 컴포넌트 개발
대시보드 페이지 구현

이런 구조로 진행하면 어떨까요? 특정 부분에 대해 더 자세히 알고 싶으신 부분이 있다면 말씀해 주세요!
