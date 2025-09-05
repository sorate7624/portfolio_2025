(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/constants/skills.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "skills": ()=>skills
});
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
        name: "jquery",
        image: "/images/skill/jquery.png"
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
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/constants/links.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "links": ()=>links
});
const links = [
    {
        label: "라테일 홈페이지",
        href: "https://www.latale.com/Main",
        image: "/images/link/latale_main.png",
        tooltips: "html, javascript, jquery, pug, less, webpack"
    },
    {
        label: "라테일 2025년 2분기 \n업데이트 이벤트 페이지(모바일 포함)",
        href: "https://www.latale.com/event/2025/2q-update/",
        image: "/images/link/latale_2q_update.png",
        tooltips: "vue, typescript, scss, webpack, mobile"
    },
    {
        label: "라테일 2025년 2분기 \n메인 이벤트 페이지",
        href: "https://www.latale.com/event/2025/attendance/",
        image: "/images/link/latale_2q_main.png",
        tooltips: "vue, typescript, scss, private animation library, webpack"
    },
    {
        label: "라테일 버닝 이벤트 페이지",
        href: "https://www.latale.com/event/2025/ultra-burning/",
        image: "/images/link/latale_ultra.png",
        tooltips: "vue, typescript, scss, private animation library, webpack"
    },
    {
        label: "[동남아]드래곤네스트\n 2025년 6월 랜딩 이벤트 페이지",
        href: "https://sea.dragonnest.com/news/pages/104",
        image: "/images/link/sea_jun.png",
        tooltips: "react, typescript, styled-component, motion, vite"
    },
    {
        label: "[동남아]드래곤네스트\n 2025년 8월 랜딩 이벤트 페이지",
        href: "https://sea.dragonnest.com/news/pages/106",
        image: "/images/link/sea_aug.png",
        tooltips: "react, typescript, styled-component, motion, vite"
    },
    {
        label: "[북미]드래곤네스트\n 2025년 1월 랜딩 이벤트 페이지",
        href: "https://us.dragonnest.com/news/pages/104",
        image: "/images/link/na_jan.png",
        tooltips: "react, typescript, styled-component, motion, vite"
    },
    {
        label: "[북미]드래곤네스트\n 2025년 8월 랜딩 이벤트 페이지",
        href: "https://us.dragonnest.com/news/pages/112",
        image: "/images/link/na_aug.png",
        tooltips: "react, typescript, styled-component, motion, vite"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/constants/experience.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "experience": ()=>experience
});
const experience = [
    {
        title: "데이터 분석 대시보드",
        list: [
            {
                subTitle: "데이터 시각화",
                desc: "<em>Tabulator, TUI Chart</em>를 이용해 표 및 차트 형태의 시각화 구성"
            },
            {
                subTitle: "API 연동",
                desc: "<em>RESTFul API</em>를 통한 데이터 통신 처리"
            },
            {
                subTitle: "미리보기 및 다운로드",
                desc: "PDF 파일 미리보기 및 다운로드 기능 구현"
            },
            {
                subTitle: "웹 푸시 알림",
                desc: "Firebase 기반 웹 푸시 알림 기능 구현"
            },
            {
                subTitle: "웹 표준",
                desc: "<em>웹 표준 및 웹접근성 준수</em>로 보편적인 사용성 확보"
            }
        ]
    },
    {
        title: "이벤트/프로모션 페이지",
        list: [
            {
                subTitle: "랜딩페이지 제작",
                desc: "다양한 이벤트 및 프로모션 페이지 제작"
            },
            {
                subTitle: "애니메이션 구현",
                desc: "CSS Keyframes, animation 활용 및 <em>Motion, AOS, GSAP</em> 등을 통한 인터랙션 강화"
            },
            {
                subTitle: "성능 최적화",
                desc: "Lighthouse 기반 성능 개선 및 SEO 최적화 적용"
            },
            {
                subTitle: "다국어 처리",
                desc: "<em>i18n</em>을 이용한 글로벌 대응 인터페이스 구축"
            }
        ]
    },
    {
        title: "백오피스 운영",
        list: [
            {
                subTitle: "코드 리팩토링",
                desc: "레거시 코드 분석 및 유지 보수"
            },
            {
                subTitle: "성과 관리",
                desc: "지속적인 성능 모니터링 및 코드 품질 관리"
            },
            {
                subTitle: "bootstrap 사용",
                desc: "<em>반응형 레이아웃</em> 및 UI 컴포넌트 표준화"
            }
        ]
    },
    {
        title: "챗봇 프로젝트",
        list: [
            {
                subTitle: "PWA 기반 앱 개발",
                desc: "오프라인 대응이 가능한 PWA\n                  기반 챗봇 UI 개발"
            },
            {
                subTitle: "실시간 기능",
                desc: "<em>Socket.IO</em>를 활용한 실시간 메시지 처리"
            },
            {
                subTitle: "AI 연동",
                desc: "<em>Ollama AI</em> 연결을 통한 대화형 인터페이스 구현"
            }
        ]
    },
    {
        title: "테스트",
        list: [
            {
                subTitle: "Mocha+Chai+Mochawesome",
                desc: "<br/>유틸리티 함수를 <em>TDD 스타일</em>로 단위 테스트"
            },
            {
                subTitle: "Cypress",
                desc: "<em>E2E 통합 테스트</em>, UI/API 테스트"
            }
        ]
    },
    {
        title: "R&D",
        list: [
            {
                subTitle: "",
                desc: "<em>Vue</em>에서 <em>React</em>로 마이그레이션"
            },
            {
                subTitle: "",
                desc: "<em>Vue CLI</em>에서 <em>Vite</em> 기반으로 마이그레이션"
            },
            {
                subTitle: "",
                desc: "<em>Scss</em>에서 <em>Styled-componenets</em>로 마이그레이션"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useHoverBurst.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>useHoverBurst
});
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
                const mojs = (await __turbopack_context__.r("[project]/node_modules/@mojs/core/dist/mo.umd.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).default || await __turbopack_context__.r("[project]/node_modules/@mojs/core/dist/mo.umd.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const itemDim = element.getBoundingClientRect();
                const handleMouseEnter = {
                    "useHoverBurst.useEffect.initMojs.handleMouseEnter": ()=>{
                        const chosenShape = Math.floor(Math.random() * shapes.length);
                        const chosenColor = colors[index % colors.length];
                        const centerX = itemDim.left + itemDim.width / 2 + window.scrollX;
                        const centerY = itemDim.top + itemDim.height / 2 + window.scrollY - 750;
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
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/SkillItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SkillItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../app/scss/module/Main.module.scss'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHoverBurst$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useHoverBurst.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function SkillItem(param) {
    let { skill, index } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useHoverBurst$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(index);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: styles.box,
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
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/scss/module/Main.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "box": "Main-module-scss-module__bM8u3W__box",
  "custom-swiper": "Main-module-scss-module__bM8u3W__custom-swiper",
  "experience": "Main-module-scss-module__bM8u3W__experience",
  "intro": "Main-module-scss-module__bM8u3W__intro",
  "link": "Main-module-scss-module__bM8u3W__link",
  "profile": "Main-module-scss-module__bM8u3W__profile",
  "skill": "Main-module-scss-module__bM8u3W__skill",
});
}),
"[project]/src/app/pages/MainView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MainView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$mousewheel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mousewheel$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/mousewheel.mjs [app-client] (ecmascript) <export default as Mousewheel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/skills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/constants/experience.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-type-animation/dist/esm/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-tooltip/dist/react-tooltip.min.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SkillItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SkillItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/scss/module/Main.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
            __turbopack_context__.r("[project]/node_modules/@mojs/core/dist/mo.umd.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then({
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
            return '\n        <button class="pagination '.concat(className, '">\n          <svg class="heart" viewBox="0 0 24 24">\n            <path\n              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 C2 6 4 4 6.5 4c1.54 0 3.04.81 3.9 2.09C11.26 4.81 12.76 4 14.3 4 C16.8 4 18.8 6 18.8 8.5c0 3.78-3.4 6.86-8.25 11.49L12 21.35z"\n            />\n          </svg>\n        </button>');
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
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["custom-swiper"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Intro"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["intro"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["profile"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeAnimation"], {
                                        style: {
                                            whiteSpace: "pre-line",
                                            lineHeight: "normal"
                                        },
                                        sequence: [
                                            "이름: 최혜진\n" + "자기소개: 개발자가 되어 게임회사에서 일하며,\n지금까지 꿈꿔온 목표들을 하나씩 이루어가고 있는\n프론트엔드 개발자입니다.\n\n" + "취미: 게임, 여행, 러닝\n" + "이메일: sorate_@naver.com\n" + "깃헙: https://github.com/sorate7624\n",
                                            20000,
                                            "",
                                            1000
                                        ],
                                        repeat: Infinity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/MainView.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 95,
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
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Skill"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["skill"],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].map((skill, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SkillItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    skill: skill,
                                    index: index
                                }, skill.name, false, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 129,
                                    columnNumber: 22
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["experience"],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((experience, index)=>{
                                const rotateAngles = {
                                    0: 6,
                                    4: 6,
                                    1: -3,
                                    5: -3,
                                    2: 4,
                                    3: -3
                                };
                                var _rotateAngles_index;
                                const rotate = (_rotateAngles_index = rotateAngles[index]) !== null && _rotateAngles_index !== void 0 ? _rotateAngles_index : 0;
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
                                            lineNumber: 163,
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
                                                            lineNumber: 168,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: list.desc
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, "list-".concat(index + 1), true, {
                                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, experience.title, true, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Project"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["link"],
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$constants$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["links"].map((link, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: link.href,
                                    target: "_blank",
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$scss$2f$module$2f$Main$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["box"], " ").concat("link-".concat(index + 1)),
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
                                            src: link.image,
                                            alt: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            anchorSelect: ".link-".concat(index + 1),
                                            content: link.tooltips
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/pages/MainView.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/src/app/pages/MainView.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/MainView.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/pages/MainView.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/MainView.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(MainView, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = MainView;
var _c;
__turbopack_context__.k.register(_c, "MainView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_a6dfe8cf._.js.map