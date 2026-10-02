'use client'

import { FormEvent, useState } from 'react'
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
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/919999155702?text=Hello%20Court%20Challan%2C%20I%20need%20assistance.'
const heroImage = '/court-hero.png'
const challanImage = '/court-challan-service.png'
const blacklistImage = '/blacklist-service.png'

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${light ? 'text-white' : 'text-[#b9823f]'}`} aria-label="Court Challan home">
      <span className="grid size-8 place-items-center rounded-sm border border-current">
        <Shield className="size-4" strokeWidth={1.5} />
      </span>
      <span className="text-[10px] font-semibold uppercase leading-[1.05] tracking-[0.18em]">Court<br />Challan</span>
    </a>
  )
}

function WhatsAppButton({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-between gap-4 rounded-full px-5 py-2.5 text-sm transition hover:scale-[1.02] ${dark ? 'bg-[#151515] text-white' : 'bg-white text-[#25211e]'} ${compact ? 'min-w-[174px]' : 'min-w-[198px]'}`}>
      <span className="flex items-center gap-2"><MessageCircle className="size-3.5" /> Chat on Whatsapp</span>
      <span className={`grid size-7 place-items-center rounded-full ${dark ? 'bg-white text-black' : 'bg-black text-white'}`}><ArrowUpRight className="size-4" /></span>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="absolute inset-x-0 top-0 z-20 px-6 py-7 text-white md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between">
        <div className="flex items-center gap-7">
          <Brand light />
          <span className="hidden h-7 w-px bg-white/60 md:block" />
          <div className="hidden items-center gap-9 text-sm md:flex">
            <a href="#home" className="hover:text-[#e9c28b]">Home</a><a href="#services" className="hover:text-[#e9c28b]">Reviews</a><a href="#services" className="hover:text-[#e9c28b]">Services</a><a href="#contact" className="hover:text-[#e9c28b]">Contact</a>
          </div>
        </div>
        <div className="hidden md:block"><WhatsAppButton compact /></div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-black/70 p-5 text-sm backdrop-blur md:hidden"><a href="#home" onClick={() => setOpen(false)}>Home</a><a href="#services" onClick={() => setOpen(false)}>Services</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a><WhatsAppButton compact /></div>}
    </nav>
  )
}

function Hero() {
  return <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden bg-[#3b271c] text-white sm:min-h-[820px]">
    <img src={heroImage} alt="Courthouse with vehicle, challan notice, and gavel" className="absolute inset-0 size-full object-cover object-center" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,20,12,.82),rgba(51,31,19,.48)_52%,rgba(30,20,15,.52))]" />
    <Navbar />
    <div className="relative z-10 mx-auto w-full max-w-[1160px] px-6 pb-20 pt-40 md:px-12 lg:px-16 lg:pb-24">
      <div className="max-w-[650px]">
        <div className="mb-8 flex items-center gap-3 text-sm font-medium"><span className="h-px w-12 bg-white/80" /> PROFESSIONAL LEGAL ASSISTANCE</div>
        <h1 className="max-w-[700px] text-[clamp(3.5rem,8vw,6.7rem)] font-light leading-[.94] tracking-[-.065em]">Resolve Vehicle<br />Court Challans<br />Without the Hassle</h1>
        <p className="mt-8 max-w-[560px] text-base leading-6 text-white/90 md:text-lg">We provide professional assistance for pending court challans, blacklist-related vehicle issues, and legal procedural support.</p>
        <div className="mt-9"><WhatsAppButton /></div>
        <div className="mt-16 flex items-center gap-5 border-l border-white/70 pl-5"><div className="text-2xl tracking-[.18em]">★★★★★</div><div className="text-base font-medium">100+ Positive Client Reviews</div></div>
      </div>
    </div>
  </section>
}

function Services() {
  return <section id="services" className="bg-white px-6 py-20 text-black md:px-12 md:py-28"><div className="mx-auto max-w-[900px]"><h2 className="text-center text-4xl font-semibold tracking-[-.04em] md:text-5xl">Our Services</h2><div className="mt-20 flex flex-col gap-24 md:mt-24 md:gap-32">
    <ServiceItem title="Court Challan Assistance" description="Assistance for pending court challans including documentation, procedural guidance, and coordination support to help you resolve the issue efficiently." image={challanImage} alt="Court documents, gavel, and vehicle" />
    <ServiceItem reverse title="Vehicle Blacklist Clearance Support" description="Support for blacklist-related vehicle issues including verification, documentation, and legal procedural assistance." image={blacklistImage} alt="Blacklist clearance documents and vehicle" />
  </div></div></section>
}

function ServiceItem({ title, description, image, alt, reverse = false }: { title: string; description: string; image: string; alt: string; reverse?: boolean }) {
  return <article className="flex flex-col gap-8"><h3 className="text-center text-3xl font-normal tracking-[-.035em] md:text-4xl">{title}</h3><div className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}><img src={image} alt={alt} className="aspect-[1.7] w-full max-w-[390px] rounded-xl object-cover" /><p className="max-w-[480px] text-xl leading-[1.28] tracking-[-.025em] md:text-[26px]">{description}</p></div></article>
}

function Statistics() {
  return <section className="bg-white px-6 pb-28 pt-4 md:px-12"><div className="mx-auto flex max-w-[900px] flex-col justify-between gap-12 text-center sm:flex-row sm:gap-5"><Stat value="7+" label="Years of experience" /><Stat value="200+" label="Happy Clients" /><Stat value="500+" label="Challan Cleared" /></div></section>
}
function Stat({ value, label }: { value: string; label: string }) { return <div className="flex-1"><div className="text-4xl font-medium tracking-[-.04em] md:text-5xl">{value}</div><div className="mt-2 text-sm">{label}</div></div> }

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) { setError('Please complete all required fields.'); form.reportValidity(); return } setError(''); setSubmitted(true); form.reset() }
  if (submitted) return <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><div className="mb-5 grid size-14 place-items-center rounded-full bg-white text-[#8f5c32]"><Check /></div><h3 className="text-2xl font-medium">Thank you for reaching out.</h3><p className="mt-3 max-w-[310px] text-sm text-white/75">Our team will review your details and contact you shortly.</p><button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline underline-offset-4">Send another enquiry</button></div>
  return <form onSubmit={submit} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate><Field label="Name" placeholder="Your Name" /><Field label="Vehicle Number" placeholder="eg: KL 07 A 1234" /><Field label="Phone" placeholder="1234567890" type="tel" /><label className="flex flex-col gap-2 text-xs font-medium">Issue Regarding<select required defaultValue="" className="h-10 rounded-lg border-0 bg-[#382d27]/80 px-3 text-sm font-normal text-white outline-none"><option value="" disabled>Select an issue</option><option>Court Challan</option><option>Blacklist Clearance</option><option>Other Vehicle Issue</option></select></label><label className="col-span-full flex flex-col gap-2 text-xs font-medium">Message<textarea required placeholder="I need..." className="min-h-20 resize-y rounded-lg border-0 bg-[#382d27]/80 px-3 py-3 text-sm font-normal text-white outline-none placeholder:text-white/35" /></label>{error && <p className="col-span-full text-xs text-[#ffd7bf]">{error}</p>}<button className="col-span-full flex h-11 items-center justify-between rounded-full bg-white px-5 text-sm font-medium text-[#241c18] transition hover:bg-[#f2e9df]">Submit form <span className="grid size-7 place-items-center rounded-full bg-black text-white"><ArrowUpRight className="size-4" /></span></button></form>
}
function Field({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) { return <label className="flex flex-col gap-2 text-xs font-medium">{label}<input required type={type} placeholder={placeholder} className="h-10 rounded-lg border-0 bg-[#382d27]/80 px-3 text-sm font-normal text-white outline-none placeholder:text-white/35" /></label> }

function ContactSection() { return <section id="contact" className="relative overflow-hidden bg-[linear-gradient(135deg,#9b6537,#c58a52_45%,#e1b184)] px-6 py-16 text-white md:px-12 md:py-20"><div className="pointer-events-none absolute -bottom-48 left-[35%] size-[800px] rounded-full border border-white/20" /><div className="pointer-events-none absolute -bottom-64 left-[49%] size-[850px] rounded-full border border-white/15" /><div className="relative mx-auto grid max-w-[900px] items-center gap-7 md:grid-cols-[1fr_1.05fr]"><div className="rounded-2xl border border-white/10 bg-[#5d412c]/60 p-6 shadow-2xl backdrop-blur-sm md:p-7"><h2 className="text-center text-2xl font-medium leading-tight md:text-[26px]">Get Assistance for Your Vehicle Issue</h2><p className="mx-auto mt-4 max-w-[340px] text-center text-sm leading-5 text-white/85">Fill out the form and our team will contact you regarding your vehicle court challan or blacklist-related issue.</p><ContactForm /></div><ContactInfo /></div></section> }
function ContactInfo() { return <div className="rounded-2xl border border-white/10 bg-[#5d412c]/60 p-7 shadow-2xl backdrop-blur-sm md:p-8"><h2 className="text-2xl font-medium md:text-[27px]">Need Immediate Assistance?</h2><p className="mt-6 max-w-[340px] text-center text-sm leading-5 text-white/90 md:text-left">Contact our team directly on WhatsApp for faster support regarding vehicle court challans and blacklist-related issues.</p><div className="mt-6 flex justify-center md:justify-start"><WhatsAppButton dark compact /></div><div className="mt-7 flex flex-col gap-5 text-sm"><span className="flex items-center gap-3"><Phone className="size-4" /> +91 04843582847</span><span className="flex items-center gap-3"><Clock3 className="size-4" /> 9995155702</span><span className="flex items-center gap-3"><Mail className="size-4" /> uniquewehelp@gmail.com</span><span className="flex items-center gap-3"><MapPin className="size-4" /> Unique Online Solutions, Kaloor</span></div></div> }

function Footer() { return <footer className="bg-[#171717] px-6 py-12 text-white/55 md:px-12 md:py-14"><div className="mx-auto flex max-w-[900px] flex-col justify-between gap-12 md:flex-row"><div className="max-w-[270px]"><Brand light /><p className="mt-7 text-xs leading-[1.55]">Professional assistance for vehicle court challans and blacklist-related legal procedures across Kerala. Fast, reliable, and hassle-free support for resolving vehicle legal issues.</p><p className="mt-6 text-xs">© 2026 Court Challan. All rights reserved.</p></div><div className="grid grid-cols-2 gap-16 text-xs"><div><h3 className="mb-4 text-sm font-medium text-white">Sections</h3><div className="flex flex-col gap-4"><a href="#home">Home</a><a href="#services">Services</a><a href="#contact">Contact</a><a href={WHATSAPP_URL}>Whatsapp</a></div></div><div><h3 className="mb-4 text-sm font-medium text-white">Socials</h3><div className="flex flex-col gap-4"><a href="#">Twitter</a><a href="#">Instagram</a><a href="#">TikTok</a></div></div></div></div></footer> }

export default function Page() { return <main className="overflow-hidden bg-white"><Hero /><Services /><Statistics /><ContactSection /><Footer /></main> }
