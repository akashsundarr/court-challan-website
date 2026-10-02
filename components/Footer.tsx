"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const WHATSAPP_URL = "https://wa.me/919XXXXXXXXX";

const reveal = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={reveal}
      transition={{ duration: 0.75, ease }}
      className="relative overflow-hidden bg-[#0d0907] px-6 py-12 text-white/60 md:px-12 md:py-16"
    >
      {/* Subtle Noise Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]"></div>

      {/* Subtle Ambient Top Glow */}
      <div className="pointer-events-none absolute -top-[50%] left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-[#3d2a1d]/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-[900px] flex-col justify-between gap-12 md:flex-row">
        {/* Brand */}
        <div className="max-w-[270px]">
          <a
            href="#home"
            aria-label="Court Challan Home"
            className="inline-flex opacity-90 transition-opacity hover:opacity-100"
          >
            <img
              src="/court-challan-logo.png"
              alt="Court Challan"
              className="h-auto w-[140px] object-contain"
            />
          </a>

          <p className="mt-7 text-sm leading-relaxed text-white/50">
            Professional assistance for vehicle court challans and
            blacklist-related legal procedures across Kerala. Fast, reliable,
            and hassle-free support for resolving vehicle legal issues.
          </p>

          <p className="mt-6 text-xs text-white/30">
            © 2026 Court Challan. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-16 text-sm">
          <div>
            <h3 className="mb-5 font-medium tracking-wide text-[#d6b79a]">
              Sections
            </h3>

            <div className="flex flex-col gap-4">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["Contact", "#contact"],
                ["Whatsapp", WHATSAPP_URL],
              ].map(([label, href]) => (
                <motion.a
                  key={label}
                  whileHover={{
                    x: 3,
                    color: "#ffffff",
                  }}
                  className="text-white/60 transition-colors"
                  href={href}
                  target={label === "Whatsapp" ? "_blank" : undefined}
                  rel={label === "Whatsapp" ? "noreferrer" : undefined}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-5 font-medium tracking-wide text-[#d6b79a]">
              Socials
            </h3>

            <div className="flex flex-col gap-4">
              {["Twitter", "Instagram", "Facebook"].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{
                    x: 3,
                    color: "#ffffff",
                  }}
                  className="text-white/60 transition-colors"
                  href="#"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
