
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917902533313?text=Hi%2C%20I%20need%20help%20with%20a%20vehicle%20court%20challan.%20Could%20you%20please%20assist%20me%20with%20the%20process%3F";

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
