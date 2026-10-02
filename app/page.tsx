"use client";

import Services from "../components/Services";
import WhyTrustUs from "../components/WhyTrustUs";
import HowItWorks from "../components/HowItWorks";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Statistics, ScrollProgress } from "../components/Statistics";
import WhatsAppButton from "../components/WhatsAppButton";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917902533313?text=Hello%20Court%20Challan%2C%20I%20need%20assistance.";
const heroImage = "/court-hero.png";
const challanImage = "/court-challan-service.png";
const blacklistImage = "/blacklist-service.png";
const ease = [0.22, 1, 0.36, 1] as const;
const reveal = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } };

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2.5 ${light ? "text-white" : "text-[#b9823f]"}`}
      aria-label="Court Challan home"
    >
      <span className="grid size-8 place-items-center rounded-sm border border-current">
        <Shield className="size-4" strokeWidth={1.5} />
      </span>
      <span className="text-[10px] font-semibold uppercase leading-[1.05] tracking-[.18em]">
        Court
        <br />
        Challan
      </span>
    </a>
  );
}





function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 70]);
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-end overflow-hidden bg-[#3b271c] text-white sm:min-h-[820px]"
    >
      <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
        style={{ y }}
        src={heroImage}
        alt="Courthouse with vehicle, challan notice, and gavel"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,20,12,.82),rgba(51,31,19,.48)_52%,rgba(30,20,15,.52))]" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-6 pb-20 pt-40 md:px-12 lg:px-16 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.35 }}
          className="max-w-[650px]"
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.65, ease }}
            className="mb-8 flex items-center gap-3 text-sm font-medium"
          >
            <span className="h-px w-12 bg-white/80" /> PROFESSIONAL LEGAL
            ASSISTANCE
          </motion.div>
          <h1 className="max-w-[700px] text-[clamp(3.5rem,8vw,6.7rem)] font-light leading-[.94] tracking-[-.065em]">
            {["Resolve Vehicle", "Court Challans", "Without the Hassle"].map(
              (line) => (
                <motion.span
                  key={line}
                  variants={reveal}
                  transition={{ duration: 0.75, ease }}
                  className="block"
                >
                  {line}
                </motion.span>
              ),
            )}
          </h1>
          <motion.p
            variants={reveal}
            transition={{ duration: 0.65, ease }}
            className="mt-8 max-w-[560px] text-base leading-6 text-white/90 md:text-lg"
          >
            We provide professional assistance for pending court challans,
            blacklist-related vehicle issues, and legal procedural support.
          </motion.p>
          <motion.div
            variants={reveal}
            transition={{ duration: 0.65, ease }}
            className="mt-9"
          >
            <WhatsAppButton />
          </motion.div>
          <motion.div
            variants={reveal}
            transition={{ duration: 0.65, ease }}
            className="mt-16 flex items-center gap-5 border-l border-white/70 pl-5"
          >
            <div className="text-2xl tracking-[.18em]">★★★★★</div>
            <div className="text-base font-medium">
              100+ Positive Client Reviews
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
      transition={{ duration: 0.75, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FlowSection({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}







export default function Page() {
  return (
    <main className="overflow-hidden bg-white">
      <ScrollProgress />
      <FlowSection>
        <Hero />
      </FlowSection>
      <FlowSection>
        <Statistics />
      </FlowSection>
      <FlowSection>
        <Services />
      </FlowSection>
      <FlowSection>
        <WhyTrustUs />
      </FlowSection>
      <FlowSection>
        <HowItWorks />
      </FlowSection>
      <FlowSection>
        <ContactSection />
      </FlowSection>
      <FlowSection>
        <Footer />
      </FlowSection>
    </main>
  );
}
