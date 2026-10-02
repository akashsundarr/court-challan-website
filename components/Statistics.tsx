"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function Statistics() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#0c0908] px-6 py-10 md:px-12 md:py-14"
    >
      <div className="relative mx-auto grid max-w-[820px] grid-cols-3 divide-x divide-white/10 text-center">
        <Stat value={7} suffix="+" label="Years Experience" delay={0} />
        <Stat value={200} suffix="+" label="Happy Clients" delay={0.1} />
        <Stat value={500} suffix="+" label="Challans Cleared" delay={0.2} />
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / 650, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease }}
      className="px-4 py-1 sm:px-8"
    >
      <div className="text-3xl font-medium tracking-tight text-[#d6b79a] sm:text-4xl md:text-5xl">
        {count}
        {suffix}
      </div>

      <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/40 sm:text-xs">
        {label}
      </div>
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-gradient-to-r from-[#9b6537] via-[#d6b79a] to-[#c58a52] shadow-[0_0_12px_rgba(214,183,154,0.4)]"
      aria-hidden="true"
    />
  );
}
