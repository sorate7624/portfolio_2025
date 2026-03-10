interface Experience {
  title: string;
  list: {
    subTitle: string;
    desc: string;
  }[];
}
export const experience: Experience[] = [
  {
    title: "데이터 분석 대시보드",
    list: [
      {
        subTitle: "데이터 시각화",
        desc: `<em>Tabulator, TUI Chart</em>를 활용한 데이터 그리드 및 차트 구현`,
      },
      {
        subTitle: "API 연동",
        desc: `<em>RESTFul API</em>기반의 데이터 통신`,
      },
      {
        subTitle: "문서 처리",
        desc: `PDF 파일 미리보기 및 다운로드 기능 구현`,
      },
      {
        subTitle: "푸시 알림",
        desc: `FCM 기반 웹 푸시 알림 연동`,
      },
      {
        subTitle: "웹 표준",
        desc: `<em>웹 표준 및 웹 접근성 준수</em>로 범용적인 UX 제공`,
      },
    ],
  },
  {
    title: "이벤트/프로모션 페이지",
    list: [
      {
        subTitle: "랜딩페이지 제작",
        desc: `비즈니스 목적에 부합하는 랜딩페이지 제작`,
      },
      {
        subTitle: "인터랙션 구현",
        desc: `<em>GSAP, AOS, Motion</em> 및 CSS 애니메이션을 활용한 동적 UI 구현`,
      },
      {
        subTitle: "성능 최적화",
        desc: `Lighthouse 지표 기반의 성능 개선 및 SEO 최적화 수행`,
      },
      {
        subTitle: "글로벌 대응",
        desc: `<em>i18n</em> 라이브러리로 다국어 인터페이스 구축`,
      },
    ],
  },
  {
    title: "백오피스 운영",
    list: [
      {
        subTitle: "유지보수",
        desc: `레거시 코드 분석 및 지속적인 리팩토링으로 코드 품질 개선`,
      },
      {
        subTitle: "품질 관리",
        desc: `지속적인 모니터링을 통한 성능 안정화 및 운영 효율 제고`,
      },
      {
        subTitle: "UI 표준화",
        desc: `<em>Bootstrap</em> 기반의 반응형 레이아웃 및 공통 컴포넌트 설계`,
      },
    ],
  },
  {
    title: "AI 챗봇 프로젝트",
    list: [
      {
        subTitle: "PWA 개발",
        desc: `오프라인 환경을 지원하는 PWA 기반의 모바일 친화적 UI 구축`,
      },
      {
        subTitle: "실시간 통신",
        desc: `<em>Socket.IO</em>를 활용한 양방향 실시간 메시징 기능 구현`,
      },
      {
        subTitle: "AI 연동",
        desc: `<em>Ollama</em>를 연동한 LLM 기반의 대화형 인터페이스 최적화`,
      },
    ],
  },
  {
    title: "테스트 및 QA",
    list: [
      {
        subTitle: "단위 테스트",
        desc: `Mocha, Chai를 활용한 <em>TDD 방식</em>의 유틸리티 로직 검증`,
      },
      {
        subTitle: "E2E 테스트",
        desc: `<em>Cypress</em>를 활용한 시나리오 기반 통합 테스트 및 UI 자동화`,
      },
    ],
  },
  {
    title: "R&D 및 기술 전환",
    list: [
      {
        subTitle: "프레임워크 전환",
        desc: `<em>Vue.js에서 React</em>로 프레임워크 마이그레이션 주도`,
      },
      {
        subTitle: "빌드 도구 최적화",
        desc: `Vue CLI에서 <em>Vite</em>로 전환하여 개발 환경 및 빌드 속도 개선`,
      },
      {
        subTitle: "스타일링 고도화",
        desc: `SCSS에서 <em>Styled-components</em>로의 스타일 아키텍처 전환`,
      },
    ],
  },
];
