"use client";

import { useEffect, useRef, ReactNode } from "react";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticWrapper({
  children,
  className,
}: MagneticWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    };

    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
