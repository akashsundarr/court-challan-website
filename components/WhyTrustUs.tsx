"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const trustPoints = [
  {
    number: "01",
    title: "Clear Guidance",
    description:
      "Help understand the relevant steps and requirements before moving forward.",
  },
  {
    number: "02",
    title: "Direct Assistance",
    description:
      "Get direct support regarding your vehicle-related issue.",
  },
  {
    number: "03",
    title: "Documentation Support",
    description:
      "Assistance with organizing the information and documentation required for the process.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "Clear communication about the issue, requirements, and next steps.",
  },
];

export default function WhyTrustUs() {
  return (
    <section
      id="why-trust-us"
      className="relative overflow-hidden bg-[#0c0908] px-6 py-20 md:px-12 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 left-[18%] size-[480px] rounded-full bg-[radial-gradient(circle,rgba(155,101,55,0.13),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1160px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease }}
          className="max-w-[470px]"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#d6b79a]">
            <span className="h-px w-8 bg-[#9b6537]" />
            WHY TRUST US
          </p>

          <h2 className="text-3xl font-light leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-[42px]">
            Vehicle issues are complicated. Getting help shouldn&apos;t be.
          </h2>

          <p className="mt-6 max-w-[440px] text-base leading-7 text-white/55">
            We help simplify the process around vehicle challans and
            blacklist-related procedures, providing clear guidance,
            documentation support, and direct assistance from enquiry to
            resolution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
          }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {trustPoints.map((point) => (
            <motion.article
              key={point.number}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease }}
              whileHover={{ y: -3 }}
              className="group relative min-h-[158px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-300 hover:border-[#9b6537]/40 hover:bg-white/[0.045] sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-colors duration-300 group-hover:via-[#d6b79a]/30" />
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.18em] text-[#d6b79a]/75">
                  {point.number}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-[#b9823f]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d6b79a]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-medium text-white/90">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/50">
                {point.description}
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.025]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
