
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919XXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

export default function WhatsAppButton({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.025, filter: "brightness(1.08)" }}
      whileTap={{ scale: 0.97 }}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-between gap-4 rounded-full px-5 py-2.5 text-sm ${
        dark ? "bg-[#151515] text-white" : "bg-white text-[#25211e]"
      } ${compact ? "min-w-[174px]" : "min-w-[198px]"}`}
    >
      <span className="flex items-center gap-2">
        <MessageCircle className="size-3.5" />
        Chat on Whatsapp
      </span>

      <span
        className={`grid size-7 place-items-center rounded-full ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <ArrowUpRight className="size-4" />
      </span>
    </motion.a>
  );
}
