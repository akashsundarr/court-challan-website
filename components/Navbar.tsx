"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const ease = [0.22, 1, 0.36, 1];

  export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"],
    ["Reviews", "#reviews"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className={`fixed inset-x-0 top-0 z-50 px-6 py-5 text-white transition-[background-color,box-shadow,backdrop-filter] duration-500 md:px-12 lg:px-16 ${
        scrolled
          ? "bg-black/35 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-7">

          {/* Logo */}
          <a
            href="#home"
            className="relative flex h-10 w-[105px] shrink-0 items-center"
            aria-label="Court Challan Home"
          >
            <img
              src="/court-challan-logo.png"
              alt="Court Challan"
              className="h-auto w-[105px] object-contain"
            />
          </a>

          {/* Divider */}
          <span className="hidden h-7 w-px bg-white/60 md:block" />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 text-sm md:flex">
            {links.map(([label, href], i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.07,
                  duration: 0.5,
                  ease,
                }}
                whileHover={{
                  y: -1,
                  color: "#e9c28b",
                }}
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop WhatsApp */}
        <div className="hidden md:block">
          <WhatsAppButton compact />
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 flex flex-col gap-4 rounded-2xl bg-black/70 p-5 text-sm backdrop-blur md:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <WhatsAppButton compact />
        </motion.div>
      )}
    </motion.nav>
  );
}
