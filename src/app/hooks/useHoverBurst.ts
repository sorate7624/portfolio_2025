import { useEffect, useRef } from "react";

const shapes = ["line", "zigzag", "circle", "polygon"];
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
  "#809cc9",
];

export default function useHoverBurst(index: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;

    async function initMojs() {
      const mojs =
        (await import("@mojs/core")).default || (await import("@mojs/core"));
      const itemDim = element.getBoundingClientRect();

      const handleMouseEnter = () => {
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
            scale: { 0.8: 1 },
            fill: "none",
            points: 8,
            stroke: chosenColor,
            strokeDasharray: "100%",
            strokeDashoffset: { "-100%": "100%" },
            duration: 1000,
            delay: 50,
            easing: "quad.out",
            isShowEnd: false,
          },
        });

        burstInstance.play();
      };

      element.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      };
    }

    initMojs();
  }, [index]);

  return ref;
}
