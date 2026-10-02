"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const challanImage = "/court-challan-service.png";
const blacklistImage = "/blacklist-service.png";

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 bg-[#0c0908] px-6 py-16 md:px-12 md:py-24"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 z-0 h-48 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(155,101,55,0.22)_0%,rgba(155,101,55,0.08)_35%,transparent_75%)] blur-2xl" />
      <div className="pointer-events-none absolute -top-20 left-1/2 z-0 h-40 w-[60%] -translate-x-1/2 rounded-full bg-[#9b6537]/10 blur-[90px]" />

      {/* Subtle background noise texture to match the overall theme */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]"></div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="text-center text-3xl font-medium tracking-tight text-white md:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#d6b79a] to-transparent" />
        </SectionReveal>

        {/* Reduced vertical spacing for a more cohesive, connected feel */}
        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-24">
          <ServiceItem
            index="01"
            title="Court Challan Assistance"
            description="Assistance for pending court challans including documentation, procedural guidance, and coordination support to help you resolve the issue efficiently."
            image={challanImage}
            alt="Court documents, gavel, and vehicle"
          />

          <ServiceItem
            reverse
            index="02"
            title="Vehicle Blacklist Clearance"
            description="Support for blacklist-related vehicle issues including verification, documentation, and legal procedural assistance."
            image={blacklistImage}
            alt="Blacklist clearance documents and vehicle"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  index,
  title,
  description,
  image,
  alt,
  reverse = false,
}: {
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <article
      className={`flex flex-col gap-8 md:items-center md:gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Image Column */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20, scale: 0.98 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        className="w-full overflow-hidden rounded-2xl border border-[#36261e]/80 bg-[#140e0b] shadow-2xl ring-1 ring-inset ring-white/5 md:w-1/2"
      >
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease }}
          src={image}
          alt={alt}
          className="aspect-[4/3] w-full object-cover object-center opacity-80 transition-opacity duration-500 hover:opacity-100"
        />
      </motion.div>

      {/* Text Column */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="flex w-full flex-col justify-center md:w-1/2"
      >
        {/* Inner wrapper adds padding on the inner edge to keep text away from the image */}
        <div className={`flex flex-col ${reverse ? "md:pr-8" : "md:pl-8"}`}>
          <span className="mb-4 text-sm font-semibold tracking-widest text-[#d6b79a]">
            {index}
          </span>

          <h3 className="mb-4 text-2xl font-medium tracking-tight text-white md:text-3xl">
            {title}
          </h3>

          <p className="text-lg leading-relaxed text-white/60 md:text-xl">
            {description}
          </p>
        </div>
      </motion.div>
    </article>
  );
}

function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}
