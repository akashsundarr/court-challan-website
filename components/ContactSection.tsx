"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneCall, Smartphone } from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

const ease = [0.22, 1, 0.36, 1];

export default function ContactSection() {
  const { scrollY } = useScroll();

  const circleY = useTransform(scrollY, [0, 1800], [0, -40]);
  const orbY = useTransform(scrollY, [0, 1800], [0, 80]);

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#0c0908] px-6 py-16 md:px-12 md:py-20"
    >
      {/* Subtle Noise Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]"></div>

      {/* Background decoration - Cinematic Lighting */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Soft Sepia/Streetlight Orbs */}
        <motion.div
          style={{ y: orbY }}
          className="absolute -left-[10%] -top-[10%] size-[800px] rounded-full bg-[#3d2a1d]/20 blur-[120px]"
        />
        <motion.div
          style={{ y: circleY }}
          className="absolute -bottom-[20%] -right-[5%] size-[700px] rounded-full bg-[#1f1611]/40 blur-[120px]"
        />

        {/* Decorative Rings - Extremely subtle */}
        <motion.div
          style={{ y: circleY }}
          className="absolute -bottom-48 left-[35%] size-[800px] rounded-full border-[0.5px] border-[#36261e]/30"
        />
        <div className="absolute -bottom-64 left-[49%] size-[850px] rounded-full border-[0.5px] border-[#36261e]/20" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto grid max-w-[900px] items-center gap-7 md:grid-cols-[1fr_1.05fr]">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="rounded-2xl border border-[#36261e]/80 bg-[#140e0b]/80 p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-inset ring-white/5 md:p-7"
        >
          <h2 className="text-center text-2xl font-medium tracking-tight text-white md:text-[26px]">
            Get Assistance for Your Vehicle Issue
          </h2>

          <p className="mx-auto mt-4 max-w-[340px] text-center text-sm leading-5 text-white/60">
            Fill out the form and our team will contact you regarding your
            vehicle court challan or blacklist-related issue.
          </p>

          <ContactForm />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease,
          }}
          className="h-full rounded-2xl border border-[#36261e]/80 bg-[#140e0b]/80 p-7 shadow-2xl backdrop-blur-2xl ring-1 ring-inset ring-white/5 md:p-8"
        >
          <ContactInfo />
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------
   Contact Form
-------------------------------- */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setError("Please complete all required fields.");
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      vehicleNumber: String(formData.get("vehicleNumber") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      issue: String(formData.get("issue") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
    };
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const responseText = await response.text();
      let result: unknown;

      try {
        result = JSON.parse(responseText);
      } catch {
        if (!response.ok) {
          throw new Error(
            `Enquiry submission failed (HTTP ${response.status}). Please try again.`,
          );
        }
        throw new Error(
          "The enquiry service returned an unreadable response. Please try again.",
        );
      }

      if (typeof result !== "object" || result === null) {
        throw new Error(
          "The enquiry service returned an invalid response. Please try again.",
        );
      }

      const resultRecord = result as Record<string, unknown>;
      if (!response.ok || resultRecord.success === false) {
        const message =
          typeof resultRecord.error === "string"
            ? resultRecord.error
            : typeof resultRecord.message === "string"
              ? resultRecord.message
              : `Enquiry submission failed (HTTP ${response.status}). Please try again.`;
        throw new Error(message);
      }

      const returnedId =
        typeof resultRecord.enquiryId === "string"
          ? resultRecord.enquiryId
          : typeof resultRecord.id === "string"
            ? resultRecord.id
            : "";
      if (!returnedId) {
        throw new Error(
          "The enquiry service did not return an enquiry ID. Please try again.",
        );
      }

      setEnquiryId(returnedId);
      setSubmitted(true);
      form.reset();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't submit your enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[416px] flex-col items-center justify-center text-center"
      >
        <div className="mb-6 grid size-16 place-items-center rounded-full border border-[#4a3628] bg-gradient-to-br from-[#2a1d15] to-[#140e0b] text-[#d6b79a] shadow-lg ring-1 ring-inset ring-white/10">
          <Check strokeWidth={2.5} className="size-7" />
        </div>

        <h3 className="text-2xl font-medium tracking-tight text-white">
          Thank you for reaching out
        </h3>

        <p className="mt-3 max-w-[310px] text-sm leading-relaxed text-white/60">
          Our team will review your details and contact you shortly.
        </p>
        <p className="mt-3 text-xs tracking-wide text-[#d6b79a]/70">
          Enquiry ID: {enquiryId}
        </p>

        <button
          onClick={() => {
            setSubmitted(false);
            setEnquiryId("");
          }}
          className="mt-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
      noValidate
    >
      <Field label="Name" name="name" placeholder="Your Name" />

      <Field
        label="Vehicle Number"
        name="vehicleNumber"
        placeholder="eg: KL 07 A 1234"
      />

      <Field label="Phone" name="phone" placeholder="1234567890" type="tel" />

      <label className="flex flex-col gap-2 text-xs font-medium tracking-wide text-white/80">
        Issue Regarding
        <select
          required
          name="issue"
          defaultValue=""
          className="h-[42px] rounded-xl border border-[#36261e] bg-[#0c0806] px-3 text-sm font-normal text-white shadow-inner outline-none transition-all focus:border-[#5c4230] focus:bg-[#140e0b] focus:ring-1 focus:ring-[#5c4230]"
        >
          <option value="" disabled className="text-white/30">
            Select an issue
          </option>
          <option value="Court Challan">Court Challan</option>
          <option value="Blacklist Clearance">Blacklist Clearance</option>
          <option value="Other Vehicle Issue">Other Vehicle Issue</option>
        </select>
      </label>

      <label className="col-span-full flex flex-col gap-2 text-xs font-medium tracking-wide text-white/80">
        Message
        <textarea
          required
          name="message"
          placeholder="Please describe your requirements..."
          className="min-h-24 resize-y rounded-xl border border-[#36261e] bg-[#0c0806] p-3 text-sm font-normal text-white shadow-inner outline-none transition-all placeholder:text-white/30 focus:border-[#5c4230] focus:bg-[#140e0b] focus:ring-1 focus:ring-[#5c4230]"
        />
      </label>

      {error && (
        <p className="col-span-full text-xs font-medium text-red-400">
          {error}
        </p>
      )}

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        disabled={loading}
        className="group col-span-full mt-2 flex h-12 items-center justify-between rounded-full bg-white pl-6 pr-1 text-sm font-medium tracking-wide text-black shadow-lg transition-all hover:bg-[#f0f0f0] disabled:cursor-wait disabled:opacity-70"
      >
        <span>{loading ? "Sending..." : "Submit request"}</span>
        <span className="grid size-10 place-items-center rounded-full bg-black/5 text-black transition-all group-hover:bg-black/10 group-hover:rotate-45">
          <ArrowUpRight className="size-4" />
        </span>
      </motion.button>
    </form>
  );
}

/* --------------------------------
   Reusable Form Field
-------------------------------- */

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-xs font-medium tracking-wide text-white/80">
      {label}
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-[42px] rounded-xl border border-[#36261e] bg-[#0c0806] px-3 text-sm font-normal text-white shadow-inner outline-none transition-all placeholder:text-white/30 focus:border-[#5c4230] focus:bg-[#140e0b] focus:ring-1 focus:ring-[#5c4230]"
      />
    </label>
  );
}

/* --------------------------------
   Contact Information
-------------------------------- */

function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h2 className="text-2xl font-medium tracking-tight text-white md:text-[27px]">
          Need Immediate Assistance?
        </h2>

        <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-white/60">
          Contact our team directly on WhatsApp for faster support regarding
          vehicle court challans and blacklist-related issues.
        </p>

        <div className="mt-7 inline-block rounded-full bg-white p-1 shadow-sm ring-1 ring-white/10">
          {/* Using a bright white wrapper ensures the button matches the light CTA from the image */}
          <WhatsAppButton compact />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 text-sm">
        <InfoRow icon={PhoneCall} text="+91 0484 358 2847" />
        <InfoRow icon={Smartphone} text="+91 99951 55702" />
        <InfoRow icon={Mail} text="uniquewehelp@gmail.com" />
        <InfoRow icon={MapPin} text="Unique Online Solutions, Kaloor" />
      </div>
    </div>
  );
}

/* --------------------------------
   Contact Info Row Component
-------------------------------- */

function InfoRow({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="group flex cursor-pointer items-center gap-4 rounded-xl border border-transparent p-2 transition-all hover:border-[#36261e] hover:bg-[#1f1611]/50 hover:shadow-sm">
      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#1a120e] text-[#b39a82] shadow-inner ring-1 ring-inset ring-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#241a14] group-hover:text-white">
        <Icon className="size-[18px]" />
      </div>
      <span className="font-medium text-white/80 transition-colors group-hover:text-white">
        {text}
      </span>
    </div>
  );
}
