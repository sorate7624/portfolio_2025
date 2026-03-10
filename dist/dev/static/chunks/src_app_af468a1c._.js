(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/constants/skills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skills",
    ()=>skills
]);
const skills = [
    {
        name: "vue",
        image: "/images/skill/vue.png"
    },
    {
        name: "react",
        image: "/images/skill/react.png"
    },
    {
        name: "javascript",
        image: "/images/skill/javascript.png"
    },
    {
        name: "typescript",
        image: "/images/skill/typescript.png"
    },
    {
        name: "html",
        image: "/images/skill/html.png"
    },
    {
        name: "css",
        image: "/images/skill/css.png"
    },
    {
        name: "scss",
        image: "/images/skill/scss.png"
    },
    {
        name: "styled-component",
        image: "/images/skill/styled-component.png"
    },
    {
        name: "webpack",
        image: "/images/skill/webpack.png"
    },
    {
        name: "vite",
        image: "/images/skill/vite.png"
    },
    {
        name: "svn",
        image: "/images/skill/svn.png"
    },
    {
        name: "git",
        image: "/images/skill/git.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/constants/links.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "links",
    ()=>links
]);
const links = [
    {
        label: "라테일 홈페이지",
        href: "https://www.latale.com/Main",
        image: "/images/link/latale_main.png",
        tooltips: `성과:
    - 유튜브 iframe을 팝업 클릭 시 로드하도록 변경해 초기 렌더링 속도 개선
    - 웹팩 미들웨어 설정으로 로컬 개발 서버 구동 시간 약 200배 단축
    `
    },
    {
        label: "라테일 2026년 2월 \n메인 이벤트 페이지",
        href: "https://www.latale.com/event/2026/feb-main/",
        image: "/images/link/latale_feb_main.png",
        tooltips: `성과:
    - 이미지 포맷(JPG/PNG)를 WebP로 변경해 페이지 로딩 성능 개선
    (약 10배 이상 빨라짐)`
    },
    {
        label: "라테일 버닝 5.1 이벤트 페이지",
        href: "https://www.latale.com/event/2025/ultra-burning-5-1/",
        image: "/images/link/latale_ultra.png",
        tooltips: `성과:
    - 내부 애니메이션 라이브러리를 활용하여 다양한 연출 구현`
    },
    {
        label: "라테일 2025년 4분기 업데이트 안내 페이지",
        href: "https://www.latale.com/event/2025/4q-update/",
        image: "/images/link/latale_4q_update.png",
        tooltips: `성과:
    - 유지보수를 효율을 위해 PC/Mobile로 분리되었던 프로젝트 통합
    - 모바일 적응형 레이아웃 구현`
    },
    {
        label: "[동남아]드래곤네스트\n 클래식 홈페이지 및 이벤트·프로모션 페이지",
        href: "https://seaclassic.dragonnest.com/main",
        image: "/images/link/cls_main.png",
        tooltips: `성과:
    - 사전예약 이벤트·프로모션 페이지 효과로 이용자 수 대폭 증가
    - 이벤트 페이지 성과로 일회성 프로모션에서 정기 이벤트 운영으로 확대`
    },
    {
        label: "[동남아]드래곤네스트\n 2025년 8월 랜딩 이벤트 페이지",
        href: "https://sea.dragonnest.com/news/pages/106",
        image: "/images/link/sea_aug.png",
        tooltips: `성과:
    - React 및 Vite 도입
    - Vite 기반 개발 환경 구축으로 개발 속도 단축`
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/constants/experience.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experience",
    ()=>experience
]);
const experience = [
    {
        title: "데이터 분석 대시보드",
        list: [
            {
                subTitle: "데이터 시각화",
                desc: `<em>Tabulator, TUI Chart</em>를 활용한 데이터 그리드 및 차트 구현`
            },
            {
                subTitle: "API 연동",
                desc: `<em>RESTFul API</em>기반의 데이터 통신`
            },
            {
                subTitle: "문서 처리",
                desc: `PDF 파일 미리보기 및 다운로드 기능 구현`
            },
            {
                subTitle: "푸시 알림",
                desc: `FCM 기반 웹 푸시 알림 연동`
            },
            {
                subTitle: "웹 표준",
                desc: `<em>웹 표준 및 웹 접근성 준수</em>로 범용적인 UX 제공`
            }
        ]
    },
    {
        title: "이벤트/프로모션 페이지",
        list: [
            {
                subTitle: "랜딩페이지 제작",
                desc: `비즈니스 목적에 부합하는 랜딩페이지 제작`
            },
            {
                subTitle: "인터랙션 구현",
                desc: `<em>GSAP, AOS, Motion</em> 및 CSS 애니메이션을 활용한 동적 UI 구현`
            },
            {
                subTitle: "성능 최적화",
                desc: `Lighthouse 지표 기반의 성능 개선 및 SEO 최적화 수행`
            },
            {
                subTitle: "글로벌 대응",
                desc: `<em>i18n</em> 라이브러리로 다국어 인터페이스 구축`
            }
        ]
    },
    {
        title: "백오피스 운영",
        list: [
            {
                subTitle: "유지보수",
                desc: `레거시 코드 분석 및 지속적인 리팩토링으로 코드 품질 개선`
            },
            {
                subTitle: "품질 관리",
                desc: `지속적인 모니터링을 통한 성능 안정화 및 운영 효율 제고`
            },
            {
                subTitle: "UI 표준화",
                desc: `<em>Bootstrap</em> 기반의 반응형 레이아웃 및 공통 컴포넌트 설계`
            }
        ]
    },
    {
        title: "AI 챗봇 프로젝트",
        list: [
            {
                subTitle: "PWA 개발",
                desc: `오프라인 환경을 지원하는 PWA 기반의 모바일 친화적 UI 구축`
            },
            {
                subTitle: "실시간 통신",
                desc: `<em>Socket.IO</em>를 활용한 양방향 실시간 메시징 기능 구현`
            },
            {
                subTitle: "AI 연동",
                desc: `<em>Ollama</em>를 연동한 LLM 기반의 대화형 인터페이스 최적화`
            }
        ]
    },
    {
        title: "테스트 및 QA",
        list: [
            {
                subTitle: "단위 테스트",
                desc: `Mocha, Chai를 활용한 <em>TDD 방식</em>의 유틸리티 로직 검증`
            },
            {
                subTitle: "E2E 테스트",
                desc: `<em>Cypress</em>를 활용한 시나리오 기반 통합 테스트 및 UI 자동화`
            }
        ]
    },
    {
        title: "R&D 및 기술 전환",
        list: [
            {
                subTitle: "프레임워크 전환",
                desc: `<em>Vue.js에서 React</em>로 프레임워크 마이그레이션 주도`
            },
            {
                subTitle: "빌드 도구 최적화",
                desc: `Vue CLI에서 <em>Vite</em>로 전환하여 개발 환경 및 빌드 속도 개선`
            },
            {
                subTitle: "스타일링 고도화",
                desc: `SCSS에서 <em>Styled-components</em>로의 스타일 아키텍처 전환`
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/constants/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeline",
    ()=>timeline
]);
const timeline = [
    {
        color: "#0b4b9e",
        title: "인천대학교",
        subtitle: "2013.03 ~ 2018.02",
        icon: "/images/timeline/university.png"
    },
    {
        color: "#56b5ee",
        title: "자격증",
        subtitle: "2018.04 ~ 2018.06",
        icon: "/images/timeline/certificate.png"
    },
    {
        color: "#0d8ffc",
        title: "옵토레인",
        subtitle: "2018.11 ~ 2022.12",
        icon: "/images/timeline/optolane.png"
    },
    {
        color: "#c6243e",
        title: "액토즈소프트",
        subtitle: "2023.11 ~",
        icon: "/images/timeline/actozsoft.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/constants/plans.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "plans",
    ()=>plans
]);
const plans = [
    {
        title: "단기 목표(3~6개월, 현재 진행형)",
        description: [
            "레거시 Pug 템플릿 점진적 모던화 (재사용 가능한 컴포넌트 구조)",
            "풀스택 역량 강화"
        ]
    },
    {
        title: "장기 목표(1년~5년)",
        description: [
            "프론트엔드 챕터 리드 경험 (기술 의사결정 주도)",
            "주니어/미들 개발자 멘토링 프로그램 운영",
            "회사 전체 기술 방향성 설정",
            "업계 인정받는 전문가"
        ]
    },
    {
        title: "지속 학습",
        description: [
            "시니어 또는 테크 리드로 팀 성장 견인",
            "프론트엔드 아키텍처 설계 역량 확보",
            "오픈소스 기여 또는 기술 블로그 운영 (업계 인지도)",
            "Web3, Blockchain 등 학습"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/scss/module/Main.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "box": "Main-module-scss-module__bM8u3W__box",
  "custom-swiper": "Main-module-scss-module__bM8u3W__custom-swiper",
  "custom-tooltip": "Main-module-scss-module__bM8u3W__custom-tooltip",
  "experience": "Main-module-scss-module__bM8u3W__experience",
  "intro": "Main-module-scss-module__bM8u3W__intro",
  "link": "Main-module-scss-module__bM8u3W__link",
  "plans": "Main-module-scss-module__bM8u3W__plans",
  "profile": "Main-module-scss-module__bM8u3W__profile",
  "skill": "Main-module-scss-module__bM8u3W__skill",
  "timeline": "Main-module-scss-module__bM8u3W__timeline",
});
}),
"[project]/src/app/hooks/useHoverBurst.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useHoverBurst
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const shapes = [
    "line",
    "zigzag",
    "circle",
    "polygon"
];
const colors = [
    "#41b883",
    "#61dafb",
    "#ffdb3f",
    "#3178c6",
    "#e65100",
    "#0277bd",
    "#cd6799",
    "#efa9ef",
    "#21609b",
    "#8ed5fa",
    "#ffd028",
    "#809cc9"
];
function useHoverBurst(index) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoverBurst.useEffect": ()=>{
            if (!ref.current) {
                return;
            }
            const element = ref.current;
            async function initMojs() {
                const mojs = (await __turbopack_context__.A("[project]/node_modules/@mojs/core/dist/mo.umd.js [app-client] (ecmascript, async loader)")).default || await __turbopack_context__.A("[project]/node_modules/@mojs/core/dist/mo.umd.js [app-client] (ecmascript, async loader)");
                const handleMouseEnter = {
                    "useHoverBurst.useEffect.initMojs.handleMouseEnter": ()=>{
                        const itemDim = element.getBoundingClientRect();
                        const chosenShape = Math.floor(Math.random() * shapes.length);
                        const chosenColor = colors[index % colors.length];
                        const centerX = itemDim.left + itemDim.width / 2 + window.scrollX;
                        const centerY = itemDim.top + itemDim.height / 2 + window.scrollY - 20;
                        const burstInstance = new mojs.Burst({
                            left: centerX,
                            top: centerY,
                            radiusX: 110,
                            radiusY: 110,
                            count: 8,
                            children: {
                                shape: shapes[chosenShape],
                                radius: 10,
                                scale: {
                                    0.8: 1
                                },
                                fill: "none",
                                points: 8,
                                stroke: chosenColor,
                                strokeDasharray: "100%",
                                strokeDashoffset: {
                                    "-100%": "100%"
                                },
                                duration: 1000,
                                delay: 50,
                                easing: "quad.out",
                                isShowEnd: false
                            }
                        });
                        burstInstance.play();
                    }
                }["useHoverBurst.useEffect.initMojs.handleMouseEnter"];
                element.addEventListener("mouseenter", handleMouseEnter);
                return ({
                    "useHoverBurst.useEffect.initMojs": ()=>{
                        element.removeEventListener("mouseenter", handleMouseEnter);
                    }
                })["useHoverBurst.useEffect.initMojs"];
            }
            initMojs();
        }
    }["useHoverBurst.useEffect"], [
        index
    ]);
    return ref;
}
_s(useHoverBurst, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/SkillItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/scss/module/Main.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHoverBurst$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useHoverBurst.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function SkillItem({ skill, index }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHoverBurst$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(index);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].box,
        initial: {
            opacity: 0,
            scale: 0.5
        },
        whileInView: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.1 * index + 0.3,
                duration: 0.2,
                type: "spring",
                bounce: 0.3
            }
        },
        viewport: {
            once: false,
            amount: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: skill.image,
                alt: skill.name,
                width: 100,
                height: 100
            }, void 0, false, {
                fileName: "[project]/src/app/components/SkillItem.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: skill.name
            }, void 0, false, {
                fileName: "[project]/src/app/components/SkillItem.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SkillItem.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(SkillItem, "4eSrh2gaN3dVcIj/Q1Ru/UZtADo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHoverBurst$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SkillItem;
var _c;
__turbopack_context__.k.register(_c, "SkillItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/pages/MainView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/mousewheel.mjs [app-client] (ecmascript) <export default as Mousewheel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/skills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/experience.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/plans.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-type-animation/dist/esm/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-tooltip/dist/react-tooltip.min.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SkillItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SkillItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/scss/module/Main.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mailtop$2f$horizontal$2d$timeline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mailtop/horizontal-timeline/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MainView() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainView.useEffect": ()=>{
            let mojsLib;
            const clickPagination = {
                "MainView.useEffect.clickPagination": (e)=>{
                    if (!mojsLib) {
                        return;
                    }
                    new mojsLib.Burst({
                        parent: e.currentTarget,
                        left: "50%",
                        top: "50%",
                        x: 0,
                        y: 0,
                        radius: {
                            8: 70
                        },
                        count: 10,
                        children: {
                            shape: "circle",
                            radius: 8,
                            fill: "pink",
                            duration: 800
                        }
                    }).tune({
                        x: 0,
                        y: 0
                    }).replay();
                }
            }["MainView.useEffect.clickPagination"];
            __turbopack_context__.A("[project]/node_modules/@mojs/core/dist/mo.umd.js [app-client] (ecmascript, async loader)").then({
                "MainView.useEffect": (mojs)=>{
                    mojsLib = mojs.default || mojs;
                    const buttons = document.querySelectorAll(".pagination");
                    buttons.forEach({
                        "MainView.useEffect": (btn)=>{
                            btn.addEventListener("click", clickPagination);
                        }
                    }["MainView.useEffect"]);
                    return ({
                        "MainView.useEffect": ()=>{
                            buttons.forEach({
                                "MainView.useEffect": (btn)=>{
                                    btn.removeEventListener("click", clickPagination);
                                }
                            }["MainView.useEffect"]);
                        }
                    })["MainView.useEffect"];
                }
            }["MainView.useEffect"]);
        }
    }["MainView.useEffect"], []);
    const pagination = {
        clickable: true,
        renderBullet: function(index, className) {
            return `
        <button class="pagination ${className}">
          <svg class="heart" viewBox="0 0 24 24">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 C2 6 4 4 6.5 4c1.54 0 3.04.81 3.9 2.09C11.26 4.81 12.76 4 14.3 4 C16.8 4 18.8 6 18.8 8.5c0 3.78-3.4 6.86-8.25 11.49L12 21.35z"
            />
          </svg>
        </button>`;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            direction: "vertical",
            mousewheel: true,
            spaceBetween: 0,
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__["Mousewheel"]
            ],
            grabCursor: true,
            loop: false,
            keyboard: {
                enabled: true
            },
            initialSlide: 0,
            pagination: pagination,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["custom-swiper"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Intro"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["intro"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["profile"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeAnimation"], {
                                        style: {
                                            whiteSpace: "pre-line",
                                            lineHeight: "normal"
                                        },
                                        sequence: [
                                            `이름: 최혜진\n` + `자기소개: 이벤트·프로모션 페이지 최적화, \n레거시 개선, 빌드 최적화 경험을 갖춘\n 프론트엔드 개발자입니다.\n\n` + `취미: 게임, 여행, 러닝\n` + `이메일: sorate_@naver.com\n` + `깃헙: https://github.com/sorate7624\n`,
                                            15000,
                                            "",
                                            1000
                                        ],
                                        repeat: Infinity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/MainView.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: "/images/picture.jpeg",
                                    alt: "figure_picture",
                                    width: 500,
                                    height: 500,
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Skill"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["skill"],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].map((skill, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SkillItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    skill: skill,
                                    index: index
                                }, skill.name, false, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 132,
                                    columnNumber: 22
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Project"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["link"],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["links"].map((link, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: link.href,
                                    target: "_blank",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["box"]} ${`link-${index + 1}`}`,
                                    initial: {
                                        opacity: 0
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        transition: {
                                            delay: 0.1 * index + 0.3,
                                            duration: 0.2
                                        }
                                    },
                                    viewport: {
                                        once: false,
                                        amount: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            width: "320",
                                            height: "180",
                                            style: {
                                                width: "auto",
                                                height: "auto"
                                            },
                                            src: link.image,
                                            alt: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            anchorSelect: `.link-${index + 1}`,
                                            render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: "left"
                                                    },
                                                    children: link.tooltips.split("\n").map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: line
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 27
                                                        }, void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["experience"],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((experience, index)=>{
                                const rotateAngles = {
                                    0: 6,
                                    4: 6,
                                    1: -3,
                                    5: -3,
                                    2: 4,
                                    3: -3
                                };
                                const rotate = rotateAngles[index] ?? 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 1.3,
                                        rotate: 0
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: rotate,
                                        transition: {
                                            delay: 0.1 * index + 0.3,
                                            duration: 0.2,
                                            type: "spring",
                                            bounce: 0.3
                                        }
                                    },
                                    viewport: {
                                        once: false,
                                        amount: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: experience.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: experience.list.map((list, index)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        list.subTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                list.subTitle,
                                                                ": "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: list.desc
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, `list-${index + 1}`, true, {
                                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, experience.title, true, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Timeline"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["timeline"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -200
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.1,
                                        duration: 0.4
                                    }
                                },
                                viewport: {
                                    once: false,
                                    amount: 0.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mailtop$2f$horizontal$2d$timeline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {
                                    minEvents: 1,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeline"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mailtop$2f$horizontal$2d$timeline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineEvent"], {
                                            color: t.color,
                                            title: t.title,
                                            subtitle: t.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/MainView.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Plans"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["plans"],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plans"].map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["box"]} ${`box-${index + 1}`}`,
                                    initial: {
                                        opacity: 0,
                                        scale: 0.5
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            delay: 0.1 * index + 0.1,
                                            duration: 0.2
                                        }
                                    },
                                    viewport: {
                                        once: false,
                                        amount: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: plan.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: plan.description.map((desc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "- ",
                                                        desc
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, plan.title, true, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/MainView.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(MainView, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = MainView;
var _c;
__turbopack_context__.k.register(_c, "MainView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/MagneticWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagneticWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MagneticWrapper({ children, className }) {
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagneticWrapper.useEffect": ()=>{
            const element = wrapperRef.current;
            if (!element) return;
            const handleMouseMove = {
                "MagneticWrapper.useEffect.handleMouseMove": (e)=>{
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    element.style.setProperty("--mouse-x", `${x}px`);
                    element.style.setProperty("--mouse-y", `${y}px`);
                }
            }["MagneticWrapper.useEffect.handleMouseMove"];
            element.addEventListener("mousemove", handleMouseMove);
            return ({
                "MagneticWrapper.useEffect": ()=>{
                    element.removeEventListener("mousemove", handleMouseMove);
                }
            })["MagneticWrapper.useEffect"];
        }
    }["MagneticWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/MagneticWrapper.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(MagneticWrapper, "S9hay92VXuy3YMd6nM+XEC/Dmxc=");
_c = MagneticWrapper;
var _c;
__turbopack_context__.k.register(_c, "MagneticWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_af468a1c._.js.map