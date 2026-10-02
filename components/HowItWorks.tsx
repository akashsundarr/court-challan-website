"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileText,
  MessageCircle,
  Navigation,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Tell Us Your Issue",
    description: "Share your vehicle number and explain the issue you’re facing.",
    Icon: MessageCircle,
  },
  {
    number: "02",
    title: "Review Your Details",
    description: "Our team reviews the information you provide.",
    Icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Get Guidance",
    description: "Receive guidance on the relevant process and documentation.",
    Icon: FileText,
  },
  {
    number: "04",
    title: "Move Forward",
    description: "Proceed with the appropriate next steps with our assistance.",
    Icon: Navigation,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#0c0908] px-6 py-20 md:px-12 md:py-10"
    >
      <div className="mx-auto max-w-[1160px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 text-center md:mb-16"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#d6b79a]">
            HOW IT WORKS
          </p>
          <h2 className="mx-auto max-w-[640px] text-2xl font-light leading-tight tracking-[-0.035em] text-white sm:text-3xl md:text-[36px]">
            A simple process from enquiry to assistance.
          </h2>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#9b6537]/5 via-[#9b6537]/35 to-[#9b6537]/5 md:bottom-auto md:left-[12.5%] md:right-[12.5%] md:top-[19px] md:h-px md:w-auto md:bg-gradient-to-r"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-8 md:grid-cols-4 md:gap-6"
          >
            {steps.map(({ number, title, description, Icon }) => (
              <motion.article
                key={number}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease }}
                className="relative grid grid-cols-[40px_1fr] gap-x-4 md:flex md:flex-col md:items-center md:text-center"
              >
                <div className="relative z-10 row-span-3 grid size-10 place-items-center rounded-full border border-[#9b6537]/35 bg-[#0c0908] text-[#d6b79a] shadow-[0_0_0_6px_#0c0908] md:mb-6">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={1.5} />
                </div>
                <span className="self-end text-[11px] font-medium tracking-[0.18em] text-[#b9823f] md:mb-3">
                  {number}
                </span>
                <h3 className="mt-1 text-base font-medium text-white/90 md:mt-0">
                  {title}
                </h3>
                <p className="mt-2 max-w-[245px] text-sm leading-6 text-white/50 md:mt-3">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
