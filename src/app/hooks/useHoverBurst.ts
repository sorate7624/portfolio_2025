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
    const element = ref.current;
    if (!element) {
      return;
    }

    let removeMouseEnter: (() => void) | undefined;
    let isDisposed = false;

    const initMojs = async () => {
      const mojsModule = await import("@mojs/core");
      const mojs = mojsModule.default ?? mojsModule;

      if (isDisposed) {
        return;
      }

      const handleMouseEnter = () => {
        const chosenShape = Math.floor(Math.random() * shapes.length);
        const chosenColor = colors[index % colors.length];

        const burstInstance = new mojs.Burst({
          parent: element,
          left: "50%",
          top: "50%",
          x: 0,
          y: 0,
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
      removeMouseEnter = () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
      };
    };

    void initMojs();

    return () => {
      isDisposed = true;
      removeMouseEnter?.();
    };
  }, [index]);

  return ref;
}
