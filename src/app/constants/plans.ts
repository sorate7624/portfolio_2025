interface Plans {
  title: string;
  description: string[];
}

export const plans: Plans[] = [
  {
    title: "단기 목표(3~6개월, 현재 진행형)",
    description: [
      "Vue 2 → Vue 3 마이그레이션 완료 (현재 약 70% 진행)",
      "드레곤네스트 랜딩 이벤트 페이지 빌드 시간 약 90% 단축 (Webpack → Vite)",
      "레거시 Pug 템플릿 점진적 모던화 (재사용 가능한 컴포넌트 구조)",
      "풀스택 역량 강화",
    ],
  },
  {
    title: "장기 목표(1년~5년)",
    description: [
      "프론트엔드 챕터 리드 경험 (기술 의사결정 주도)",
      "주니어/미들 개발자 멘토링 프로그램 운영",
      "회사 전체 기술 방향성 설정",
      "업계 인정받는 전문가",
    ],
  },
  {
    title: "지속 학습",
    description: [
      "시니어 또는 테크 리드로 팀 성장 견인",
      "프론트엔드 아키텍처 설계 역량 확보",
      "오픈소스 기여 또는 기술 블로그 운영 (업계 인지도)",
      "Web3, Blockchain 등 학습",
    ],
  },
];
