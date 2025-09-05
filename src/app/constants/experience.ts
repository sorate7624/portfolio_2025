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
        desc: `<em>Tabulator, TUI Chart</em>를 이용해 표 및 차트 형태의 시각화 구성`,
      },
      {
        subTitle: "API 연동",
        desc: `<em>RESTFul API</em>를 통한 데이터 통신 처리`,
      },
      {
        subTitle: "미리보기 및 다운로드",
        desc: `PDF 파일 미리보기 및 다운로드 기능 구현`,
      },
      {
        subTitle: "웹 푸시 알림",
        desc: `Firebase 기반 웹 푸시 알림 기능 구현`,
      },
      {
        subTitle: "웹 표준",
        desc: `<em>웹 표준 및 웹접근성 준수</em>로 보편적인 사용성 확보`,
      },
    ],
  },
  {
    title: "이벤트/프로모션 페이지",
    list: [
      {
        subTitle: "랜딩페이지 제작",
        desc: `다양한 이벤트 및 프로모션 페이지 제작`,
      },
      {
        subTitle: "애니메이션 구현",
        desc: `CSS Keyframes, animation 활용 및 <em>Motion, AOS, GSAP</em> 등을 통한 인터랙션 강화`,
      },
      {
        subTitle: "성능 최적화",
        desc: `Lighthouse 기반 성능 개선 및 SEO 최적화 적용`,
      },
      {
        subTitle: "다국어 처리",
        desc: `<em>i18n</em>을 이용한 글로벌 대응 인터페이스 구축`,
      },
    ],
  },
  {
    title: "백오피스 운영",
    list: [
      {
        subTitle: "코드 리팩토링",
        desc: `레거시 코드 분석 및 유지 보수`,
      },
      {
        subTitle: "성과 관리",
        desc: `지속적인 성능 모니터링 및 코드 품질 관리`,
      },
      {
        subTitle: "bootstrap 사용",
        desc: `<em>반응형 레이아웃</em> 및 UI 컴포넌트 표준화`,
      },
    ],
  },
  {
    title: "챗봇 프로젝트",
    list: [
      {
        subTitle: "PWA 기반 앱 개발",
        desc: `오프라인 대응이 가능한 PWA
                  기반 챗봇 UI 개발`,
      },
      {
        subTitle: "실시간 기능",
        desc: `<em>Socket.IO</em>를 활용한 실시간 메시지 처리`,
      },
      {
        subTitle: "AI 연동",
        desc: `<em>Ollama AI</em> 연결을 통한 대화형 인터페이스 구현`,
      },
    ],
  },
  {
    title: "테스트",
    list: [
      {
        subTitle: "Mocha+Chai+Mochawesome",
        desc: `<br/>유틸리티 함수를 <em>TDD 스타일</em>로 단위 테스트`,
      },
      {
        subTitle: "Cypress",
        desc: `<em>E2E 통합 테스트</em>, UI/API 테스트`,
      },
    ],
  },
  {
    title: "R&D",
    list: [
      {
        subTitle: "",
        desc: `<em>Vue</em>에서 <em>React</em>로 마이그레이션`,
      },
      {
        subTitle: "",
        desc: `<em>Vue CLI</em>에서 <em>Vite</em> 기반으로 마이그레이션`,
      },
      {
        subTitle: "",
        desc: `<em>Scss</em>에서 <em>Styled-componenets</em>로 마이그레이션`,
      },
    ],
  },
];
