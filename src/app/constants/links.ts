interface Links {
  label: string;
  href: string;
  image: string;
  tooltips: string;
}
export const links: Links[] = [
  {
    label: "라테일 홈페이지",
    href: "https://www.latale.com/Main",
    image: "/images/link/latale_main.png",
    tooltips: `성과:
    - 유튜브 iframe을 팝업 클릭 시 로드하도록 변경해 초기 렌더링 속도 개선
    - 웹팩 미들웨어 설정으로 로컬 개발 서버 구동 시간 약 200배 단축 (1분45초에서 1초로 구동)
    `,
  },
  {
    label: "라테일 2026년 2월 \n메인 이벤트 페이지",
    href: "https://www.latale.com/event/2026/feb-main/",
    image: "/images/link/latale_feb_main.png",
    tooltips: `성과:
    - 이미지 포맷(JPG/PNG)를 WebP로 변경해 페이지 로딩 성능 개선
    (약 10배 이상 빨라짐)`,
  },
  {
    label: "라테일 버닝 5.1 이벤트 페이지",
    href: "https://www.latale.com/event/2025/ultra-burning-5-1/",
    image: "/images/link/latale_ultra.png",
    tooltips: `성과:
    - 내부 애니메이션 라이브러리를 활용하여 다양한 연출 구현`,
  },
  {
    label: "라테일 2026년 1분기 업데이트 안내 페이지",
    href: "https://www.latale.com/event/2026/1q-update/",
    image: "/images/link/latale_1q_update.png",
    tooltips: `성과:
    - 유지보수를 효율을 위해 PC/Mobile로 분리되었던 프로젝트 통합
    - 모바일 적응형 레이아웃 구현`,
  },
  {
    label: "[동남아]드래곤네스트\n 클래식 홈페이지 및 이벤트·프로모션 페이지",
    href: "https://seaclassic.dragonnest.com",
    image: "/images/link/cls_main.png",
    tooltips: `성과:
    - 사전예약 이벤트·프로모션 페이지 효과로 이용자 수 대폭 증가
    - 이벤트 페이지 성과로 일회성 프로모션에서 정기 이벤트 운영으로 확대`,
  },
  {
    label: "[동남아]드래곤네스트\n 2025년 8월 랜딩 이벤트 페이지",
    href: "https://sea.dragonnest.com/news/pages/106",
    image: "/images/link/sea_aug.png",
    tooltips: `성과:
    - React 및 Vite 도입
    - Vite 기반 개발 환경 구축으로 개발 속도 단축`,
  },
];
