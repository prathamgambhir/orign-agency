import Link from "next/link";
import Image from "next/image";
import raghav from "../../public/founders/raghav.jpeg";
import gambhir from "../../public/founders/gambhir.jpeg";
import aditya from "../../public/founders/aditya.jpeg";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  Megaphone,
  PenTool,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import {
  DriftCard,
  Reveal,
  MarqueeRow,
  ScaleIn,
} from "@/components/motion-primitives";
import { MediaCard } from "@/components/media-card";
import { processSteps, services } from "@/lib/agency-data";

// Consolidate work samples from all services
const work = [
  ...services.slice(0, 2).flatMap((service) =>
    service.samples.slice(0, 2).map((sample) => ({
      ...sample,
      tag: service.shortTitle,
    })),
  ),
  ...services.slice(2, 4).flatMap((service) =>
    service.samples.slice(0, 2).map((sample) => ({
      ...sample,
      tag: service.shortTitle,
    })),
  ),
];

const reviewsRow1 = [
  {
    id: "OR-01",
    author: "Aarav Mehta",
    role: "Founder, Delta Growth Labs",
    avatarText: "AM",
    tag: "Next.js / Infra",
    text: "They completely overhauled our fragmented consumer pipeline into an optimization engine that scaled our engineering infrastructure. The modular logic behind their UI systems completely altered our primary acquisition metrics."
  },
  {
    id: "OR-02",
    author: "Elena Rostova",
    role: "Chief Marketing Officer, Aura",
    avatarText: "ER",
    tag: "Identity",
    text: "Our multi-channel shoot, content loops, and landing page finally felt like a single premium brand voice speaking clearly. They don't just export files; they design systems that print retention."
  },
  {
    id: "OR-04",
    author: "Bhuvan Gambhir",
    role: "CEO, Gambhir Internationals",
    avatarText: "BG",
    tag: "UI-UX / Web",
    text: "Our commercial multi-cam shoots went from logistically messy to absolutely systematic. They engineered our content engine so every creative output had an explicit analytical objective."
  },
  {
    id: "OR-03",
    author: "Rohan Sharma",
    role: "VP of Product, Zephyr Fintech",
    avatarText: "RS",
    tag: "Video Engine",
    text: "Meticulous engineering execution. They designed our enterprise landing systems with custom Tailwind logic that brought our interactive components to life. Conversion friction was essentially eliminated."
  },
  {
    id: "OR-05",
    author: "Devon Cho",
    role: "Founder, Paradigm Media Group",
    avatarText: "DC",
    tag: "Growth Systems",
    text: "Meticulous, faster than humanly possible, and incredibly strategic. Every single asset delivered had a mechanical purpose assigned to it. Absolutely no creative fluff here."
  },
  {
    id: "OR-06",
    author: "Kabir Malhotra",
    role: "Director of Brand, Vyper Commerce",
    avatarText: "KM",
    tag: "Social Systems",
    text: "The clipping systems they set up for our distribution took our founder-led media assets straight to hyper-scale. They map out virality like standard software deployment."
  },
  {
    id: "OR-07",
    author: "Pooja Hegde",
    role: "Creative Producer, The Matrix Pod",
    avatarText: "PH",
    tag: "Showrunners",
    text: "Our studio layout and post-production workflow completely changed after their audit. They balanced absolute typographical perfection with automated batch video delivery."
  }
];

const reviewsRow2 = [
  {
    id: "OR-08",
    author: "Sarah Jenkins",
    role: "Executive Producer, The Next Wave",
    avatarText: "SJ",
    tag: "Showrunners",
    text: "Our founder-led podcast went from improvised to hyper-intentional without losing its underlying personality. They managed to balance extreme design polish with absolute structural efficiency."
  },
  {
    id: "OR-09",
    author: "Vikram Sait",
    role: "Chief Growth Officer, Omnichannel IN",
    avatarText: "VS",
    tag: "Clipping / Automations",
    text: "Our raw audience retention metrics went vertical within weeks of integrating their short-form production framework. They handle raw timeline cuts with deep product engineering precision."
  },
  {
    id: "OR-10",
    author: "Nisha Patel",
    role: "Founder, Bloom Cosmetics",
    avatarText: "NP",
    tag: "Brand Shoot",
    text: "The lookbook and premium ad assets they directed redefined how we present luxury e-commerce in India. No creative fluff—just beautiful, performance-optimized visual materials."
  },
  {
    id: "OR-11",
    author: "Kilian Cross",
    role: "Director of Organic, Stealth Labs",
    avatarText: "KC",
    tag: "Content Engine",
    text: "They understand immediate social loop mechanics and world-class typographical layouts at the same exact time. Our raw viewer retention charts went almost completely vertical inside 45 days."
  },
  {
    id: "OR-12",
    author: "Arjun Verma",
    role: "Head of Marketing, Juno Payments",
    avatarText: "AV",
    tag: "Web Dev",
    text: "They built our high-traffic marketing framework using clean Next.js architecture that feels elite and converts beautifully. Best technical design layout team in the region, bar none."
  },
  {
    id: "OR-13",
    author: "Meera Deshmukh",
    role: "Director, Catalyst Studio",
    avatarText: "MD",
    tag: "Media Pipelines",
    text: "Our media workflows were entirely transformed by their content delivery network blueprint. They are the tactical architecture partners you hire when you want to dominate distribution."
  },
  {
    id: "OR-14",
    author: "Rithvik Reddy",
    role: "Founder, Apex Webworks",
    avatarText: "RR",
    tag: "Growth Engines",
    text: "Unparalleled clarity in engineering logic. They bridged the gap between complex digital design systems and extreme front-end web speed. Our platform engagement multiplied 3x."
  },
  {
    id: "OR-15",
    author: "Divya Kapoor",
    role: "VP of Digital, NeoRetail",
    avatarText: "DK",
    tag: "Social Systems",
    text: "They transformed our enterprise's digital footprint into an active interactive workspace. Their systematic approach to content distribution eliminated all guesswork from our channels."
  }
];

const team = [
  {
    name: "Pratham Raghav",
    role: "Operations Head",
    src: raghav, // Pass your imported source variable reference here cleanly
    // bg: "bg-[#ff4b3e]"
  },
  {
    name: "Pratham Gambhir",
    role: "Technical Head",
    src: gambhir, // Replace with your real 'Gambhir' variable reference once imported
    // bg: "bg-[#b9ff17]" // Clean bright lime accent matching the hero image vibe
  },
  {
    name: "Aditya Kumar",
    role: "Creative Head",
    src: aditya, // Replace with your real 'Aditya' variable reference once imported
    // bg: "bg-[#c7a7ff]"
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbfaf3] text-[#07111f]">
      {/* Hero Section */}

      {/* Revamped High-Impact Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#fbfaf3] px-4 pb-16 pt-24 sm:px-6 md:px-8 lg:min-h-[100vh]">
        {/* Layer 1: Ambient Mesh Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(185,255,23,0.35),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(199,167,255,0.4),transparent_25%),radial-gradient(circle_at_15%_75%,rgba(255,75,62,0.2),transparent_30%)] pointer-events-none" />

        {/* Layer 2: Subtle Modern Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,17,31,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,17,31,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Reference Image Layout Layer: Abstract flanking lifestyle assets inspired by image_825581.png */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-25 sm:opacity-40">
          {/* Top Left Asset Silhouette (Sneakers Reference) */}
          <div className="absolute -top-12 -left-16 w-44 h-44 sm:w-64 sm:h-64 rotate-12 bg-gradient-to-br from-lime-300 to-emerald-200 rounded-[3rem] blur-sm transform opacity-60" />
          {/* Bottom Right Asset Silhouette (Product Tube Reference) */}
          <div className="absolute -bottom-16 -right-12 w-40 h-64 sm:w-56 sm:h-80 -rotate-12 bg-gradient-to-tr from-violet-300 to-fuchsia-200 rounded-[2rem] blur-sm transform opacity-60" />
        </div>

        {/* Layer 3: Dynamic Floating Tech Badges (Premium layout on desktop) */}
        <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:block pointer-events-none z-10">
          <div className="absolute top-[20%] left-[4%] -rotate-6 animate-bounce [animation-duration:8s] bg-white border border-[#07111f]/10 px-4 py-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-2">
            <span className="size-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#07111f]/70">
              Web Infrastructure
            </span>
          </div>
          <div className="absolute top-[24%] right-[4%] rotate-3 animate-bounce [animation-duration:11s] bg-white border border-[#07111f]/10 px-4 py-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#07111f]/70">
              Interface Design
            </span>
          </div>
          <div className="absolute bottom-[26%] left-[6%] rotate-6 bg-[#07111f] px-4 py-2 rounded-xl shadow-xl flex items-center gap-2">
            <Sparkles className="size-3 text-lime-300 fill-lime-300" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">
              Cinematic Reels
            </span>
          </div>
          <div className="absolute bottom-[24%] right-[6%] -rotate-3 bg-white border border-[#07111f]/10 px-4 py-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#ff4b3e]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#07111f]/70">
              Social Architecture
            </span>
          </div>
        </div>

        {/* Main Hero Container */}
        <div className="relative z-20 mx-auto w-full max-w-5xl flex flex-col items-center justify-center text-center">
          {/* Animated Micro Badge */}
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#07111f]/12 bg-[#07111f] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-md sm:mb-8 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-300"></span>
              </span>
              Digital Marketing and Creative Agency
            </div>
          </Reveal>

          {/* High-Impact Kinetic Typography matching image_825581.png layout structures */}
          <Reveal delay={0.1}>
            <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.95] text-[#07111f] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.8rem] flex flex-col items-center">
              <span className="block">Elevate Your</span>

              {/* Inline layout containing the purple graphic token mimicking the image reference */}
              <span className="inline-flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-4">
                Brand
                <span className="inline-flex items-center justify-center size-8 sm:size-14 md:size-16 rounded-full bg-[#561bf4] border-2 border-lime-300 text-white shadow-md transform hover:rotate-45 transition-transform duration-300 mx-1">
                  <span className="size-3 sm:size-5 border-2 border-white rounded-sm rotate-45 flex items-center justify-center">
                    <span className="size-1 bg-white rounded-full" />
                  </span>
                </span>
                with Our
              </span>

              {/* Wrapped pill layout mimicking the vibrant "Creative Magic" segment */}
              <span className="inline-flex items-center justify-center flex-wrap gap-x-3 mt-1">
                <span className="inline-block bg-[#b9ff17] text-[#07111f] px-4 py-0 sm:px-7 sm:py-1.5 rounded-[1.2rem] sm:rounded-[2rem] border-2 border-[#07111f] shadow-[4px_4px_0px_#07111f] transform -rotate-1 tracking-tight normal-case font-black">
                  Creative
                </span>
                <span className="block">Magic</span>
              </span>
            </h1>
          </Reveal>

          {/* Structured Paragraph Body */}
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-md text-xs font-bold leading-relaxed text-[#07111f]/70 px-4 sm:mt-10 sm:text-base sm:max-w-xl md:text-lg">
              Orign architects high-retention podcasts, premium digital
              interfaces, dynamic shorts, and brand systems that dictate market
              positioning.
            </p>
          </Reveal>

          {/* Premium Asymmetrical Interactive Buttons */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 px-4 sm:w-auto sm:flex-row sm:gap-6 sm:px-0">
              <Link
                href="#work"
                className="group relative flex w-full items-center justify-center gap-3 rounded-full bg-[#07111f] px-8 py-4 text-xs font-black uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-[#b00046] active:scale-[0.98] sm:w-auto"
              >
                Explore Case Studies
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 border-b-2 border-[#07111f] py-2 text-xs font-black uppercase tracking-wider text-[#07111f] transition-colors duration-300 hover:text-[#b00046] hover:border-[#b00046] sm:w-auto"
              >
                Secure a Quote
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Modern Absolute Bottom Indicator Anchor */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#07111f]/40">
          <div className="w-px h-8 bg-gradient-to-b from-[#07111f]/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-3 py-12 md:px-8 md:py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div>
              <p className="text-xs font-black uppercase text-[#ff4b3e] md:text-sm">
                You know what?
              </p>
              <h2 className="mt-2 md:mt-3 max-w-4xl text-2xl font-black uppercase leading-[1] text-[#073653] sm:text-3xl md:text-5xl">
                We design meaningful, not just quick impressions
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5 md:mt-12">
            {services.map((service, index) => {
              const Icon = service.Icon;
              return (
                <Reveal key={service.key} delay={index * 0.05}>
                  <DriftCard className="service-notch min-h-56 md:min-h-64 rounded-2xl md:rounded-3xl border border-[#07111f]/10 bg-white p-5 md:p-7 text-[#073653] shadow-[0_18px_55px_rgba(7,17,31,0.06)] sm:p-6">
                    <div className="flex h-full flex-col justify-between gap-6 md:gap-8">
                      <div className="flex items-start justify-between gap-3 md:gap-4">
                        <h3 className="max-w-sm text-lg font-black uppercase leading-none sm:text-2xl md:text-3xl">
                          {service.shortTitle}
                        </h3>
                        <span className="grid size-10 md:size-12 shrink-0 place-items-center rounded-full bg-lime-300 sm:size-11">
                          <Icon className="size-5 md:size-6" />
                        </span>
                      </div>
                      <div>
                        <p className="max-w-xl text-xs md:text-sm leading-6 md:leading-7 text-[#073653]/70">
                          {service.intro}
                        </p>
                        <Link
                          href={service.href}
                          className="mt-4 md:mt-6 inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-black uppercase transition hover:text-[#b00046]"
                        >
                          Explore
                          <ArrowUpRight className="size-4 md:size-5" />
                        </Link>
                      </div>
                    </div>
                  </DriftCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="px-3 py-12 text-[#07111f] md:px-8 md:py-20 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-[0.7fr_0.3fr] md:items-end md:gap-8">
              <div>
                <p className="text-xs font-black uppercase text-[#ff8a3d] md:text-sm">
                  Let us show you
                </p>
                <h2 className="mt-2 md:mt-3 max-w-3xl text-2xl font-black uppercase leading-none sm:text-3xl md:text-5xl">
                  How we drive your brand to new heights
                </h2>
              </div>
              <p className="text-sm leading-6 md:leading-8 text-[#07111f]/62 md:text-base">
                A focused path from messy ambition to polished, useful creative.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 space-y-3 md:mt-14 md:space-y-6">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="grid gap-3 rounded-2xl md:rounded-3xl border border-[#07111f]/10 bg-[#ffc1c7]/55 p-4 md:p-6 shadow-sm transition duration-300 hover:-translate-y-1 md:grid-cols-[0.35fr_0.45fr_0.2fr] md:items-center md:gap-6">
                  <div className="flex items-center gap-3 md:gap-6">
                    <BadgeCheck className="size-6 md:size-9 shrink-0 text-[#b00046]" />
                    <h3 className="text-base font-black uppercase leading-none md:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm leading-6 md:leading-7 text-[#07111f]/65">
                    {step.body}
                  </p>
                  <span className="grid size-10 md:size-14 place-items-center justify-self-start rounded-full bg-[#b00046] text-white md:justify-self-end">
                    <ArrowUpRight className="size-4 md:size-6" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modernized Recent Work Section */}
      <section
        id="work"
        className="relative px-3 py-14 bg-[#07111f] text-white md:px-8 md:py-28 rounded-t-[1.5rem] md:rounded-t-[4rem] sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 border-b border-white/10 pb-8 md:pb-10">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-widest text-lime-300 mb-2">
                  Selected Showcase
                </p>
                <h2 className="text-2xl font-black uppercase leading-[1.1] sm:text-3xl md:text-4xl">
                  Where flawless engineering meets disruptive design.
                </h2>
              </div>
              <p className="text-xs md:text-sm leading-6 md:leading-7 text-white/60 max-w-xs md:text-right">
                We craft intentional identity shifts through modern web
                infrastructure, targeted media formats, and digital precision.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
            {work.map((sample, index) => (
              <ScaleIn key={`${sample.title}-${index}`} delay={index * 0.15}>
                <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 p-2 md:p-3 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-lime-300/40 hover:bg-white/10">
                  <div className="overflow-hidden rounded-lg md:rounded-2xl">
                    <MediaCard {...sample} />
                  </div>
                  <div className="mt-3 md:mt-4 px-2 flex justify-between items-center">
                    <div>
                      <span className="text-xs font-bold text-lime-300/90 uppercase tracking-wider">
                        {sample.tag}
                      </span>
                    </div>
                    <div className="size-8 md:size-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-lime-300 group-hover:text-[#07111f] group-hover:border-transparent group-hover:rotate-45 flex-shrink-0">
                      <ArrowUpRight className="size-4 md:size-5" />
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Rolling Reviews Carousel (Refined & Fully Uniform) */}
      <section
        id="reviews"
        className="py-24 bg-[#fbfaf3] overflow-hidden border-t border-[#07111f]/5"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8 mb-16 sm:px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#07111f] px-3 py-1 rounded-md inline-block mb-3">
                  Verified Ecosystem Trust
                </span>
                <h2 className="text-4xl font-black uppercase tracking-tighter text-[#07111f] sm:text-5xl md:text-6xl leading-[0.9]">
                  Proof in the{" "}
                  <span className="inline-block text-transparent [-webkit-text-stroke:1px_#07111f] font-serif lowercase italic tracking-normal normal-case pr-1">
                    metrics.
                  </span>
                </h2>
              </div>
              <p className="max-w-xs text-xs font-bold leading-relaxed text-[#07111f]/60 border-l-2 border-[#b9ff17] pl-4">
                How precise architectural mapping and creative magic unlocked
                compounding scaling loops for hyper-growth brands.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Infinite Rolling Rows Container */}
        <div className="flex flex-col gap-8 overflow-visible pointer-events-none select-none">
          {/* Row 1: Leftward Infinite Stream */}
          <MarqueeRow direction="left" speed={250}>
            {/* We map multiple times to ensure continuous DOM presence preventing any white gaps */}
            {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map(
              (review, index) => (
                <div
                  key={`row1-${index}`}
                  className="w-[320px] h-[220px] sm:w-[440px] sm:h-[210px] flex flex-col justify-between shrink-0 rounded-2xl border-2 border-[#07111f] bg-white p-6 shadow-[4px_4px_0px_#07111f] mx-4 pointer-events-auto transition-all duration-300 hover:bg-[#b9ff17]/10 hover:shadow-[6px_6px_0px_#07111f] hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 sm:size-10 rounded-full border border-[#07111f] bg-slate-100 flex items-center justify-center font-black text-xs uppercase overflow-hidden shadow-inner text-[#07111f]">
                          {review.avatarText}
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black uppercase tracking-wider text-[#07111f] leading-none mb-0.5">
                            {review.author}
                          </h4>
                          <span className="text-[9px] font-bold text-[#07111f]/50 uppercase tracking-widest">
                            {review.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-xs sm:text-[13px] font-medium leading-relaxed text-[#07111f] whitespace-normal line-clamp-4">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#07111f]/10 pt-3 mt-2">
                    <span className="text-[9px] font-black text-[#07111f]/40 uppercase tracking-widest">
                      Review
                    </span>
                    <ArrowUpRight className="size-3.5 text-[#07111f]/60" />
                  </div>
                </div>
              ),
            )}
          </MarqueeRow>

          {/* Row 2: Rightward Infinite Stream */}
          <MarqueeRow direction="right" speed={220}>
            {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map(
              (review, index) => (
                <div
                  key={`row2-${index}`}
                  className="w-[320px] h-[220px] sm:w-[440px] sm:h-[210px] flex flex-col justify-between shrink-0 rounded-2xl border-2 border-[#07111f] bg-white p-6 shadow-[4px_4px_0px_#07111f] mx-4 pointer-events-auto transition-all duration-300 hover:bg-[#b9ff17]/10 hover:shadow-[6px_6px_0px_#07111f] hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 sm:size-10 rounded-full border border-[#07111f] bg-slate-100 flex items-center justify-center font-black text-xs uppercase overflow-hidden shadow-inner text-[#07111f]">
                          {review.avatarText}
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black uppercase tracking-wider text-[#07111f] leading-none mb-0.5">
                            {review.author}
                          </h4>
                          <span className="text-[9px] font-bold text-[#07111f]/50 uppercase tracking-widest">
                            {review.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-xs sm:text-[13px] font-medium leading-relaxed text-[#07111f] whitespace-normal line-clamp-4">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#07111f]/10 pt-3 mt-2">
                    <span className="text-[9px] font-black text-[#07111f]/40 uppercase tracking-widest">
                      Review
                    </span>
                    <ArrowUpRight className="size-3.5 text-[#07111f]/60" />
                  </div>
                </div>
              ),
            )}
          </MarqueeRow>
        </div>
      </section>

      {/* Upgraded High-Conversion Audience Options Card Section */}
      <section className="px-3 py-12 md:px-8 md:py-24 bg-gradient-to-b from-[#fbfaf3] to-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#07111f] text-white p-6 md:p-16 border border-white/10 shadow-2xl sm:p-10">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 size-80 rounded-full bg-gradient-to-br from-lime-300/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-80 rounded-full bg-gradient-to-tr from-[#ff4b3e]/10 to-transparent blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-lime-300 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                  <Sparkles className="size-3.5 fill-lime-300" /> Partnerships
                  open 2026
                </span>
                <h2 className="text-2xl font-black uppercase leading-[1.05] sm:text-3xl md:text-5xl">
                  Let&apos;s Build Your Brand&apos;s Future Through Design
                </h2>
                <p className="mt-3 md:mt-4 max-w-lg mx-auto text-xs md:text-base text-white/60 leading-5 md:leading-6">
                  Pick the path tailored to your scale. We execute swiftly,
                  mapping modern tech architecture directly onto raw aesthetic
                  power.
                </p>
              </Reveal>

              <div className="mt-8 md:mt-12 grid gap-4 md:grid-cols-2 md:gap-6 text-left">
                <Reveal delay={0.1}>
                  <AudienceCard
                    icon={<Megaphone className="size-8 md:size-10" />}
                    title="For Companies"
                    button="Let's Collaborate"
                    color="bg-[#24d4c6]"
                    description="We scale internal content setups, build custom apps, and engineer high-impact marketing systems."
                  />
                </Reveal>
                <Reveal delay={0.2}>
                  <AudienceCard
                    icon={<PenTool className="size-8 md:size-10" />}
                    title="For Creators"
                    button="Start Your Project"
                    color="bg-lime-300"
                    description="Turn premium individual formats, episodic podcasts, and unique aesthetics into a sustainable standalone empire."
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="px-4 py-20 bg-[#fbfaf3] md:px-8 md:py-28 sm:px-6 border-t border-[#07111f]/5"
      >
        <div className="mx-auto max-w-5xl">
          {/* Kinetic Header Section matching your site's modern tone */}
          <Reveal>
            <div className="flex flex-col items-center text-center mb-12 md:mb-20">
              <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#07111f] px-3 py-1 rounded-md inline-block mb-3">
                Creative Lead
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#07111f] sm:text-5xl md:text-6xl leading-[0.9]">
                The Minds Behind <br />
                <span className="inline-block text-transparent [-webkit-text-stroke:1px_#07111f] font-serif lowercase italic tracking-normal normal-case pr-1">
                  the magic.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-xs font-bold leading-relaxed text-[#07111f]/60 px-4">
                A precise architecture of tactical thinkers, design pureists,
                and content engineers collaborating to break retention ceilings.
              </p>
            </div>
          </Reveal>

          {/* Revamped Team Grid Container */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1}>
                <DriftCard className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#07111f] bg-white p-4 shadow-[4px_4px_0px_#07111f] transition-all duration-300 hover:shadow-[6px_6px_0px_#07111f] hover:-translate-y-1">
                  <div>
                    {/* Image wrapper containing the custom colored background box element */}
                    <div
                      className={`relative aspect-square w-full overflow-hidden rounded-xl border border-[#07111f]/10`}
                    >
                      {/* Next.js optimized Image layer - using luminosity blend for a sleek editorial style */}
                      <Image
                        src={member.src}
                        alt={member.name}
                        fill
                        priority={index === 0}
                        className="object-cover object-top mix-blend-luminosity transition-transform duration-500 group-hover:scale-105 group-hover:mix-blend-normal"
                      />
                    </div>

                    {/* Structural textual metadata area */}
                    <div className="mt-4 px-1">
                      <h3 className="text-lg font-black uppercase tracking-tight text-[#07111f] leading-none mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold italic text-[#07111f]/60">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Card footer layer containing aesthetic tracking identifier tokens */}
                  <div className="flex items-center justify-between border-t border-[#07111f]/10 pt-3 mt-6 px-1">
                    <span className="text-[9px] font-black text-[#07111f]/30 uppercase tracking-widest">
                      Core Core Engine
                    </span>
                    <ArrowUpRight className="size-3.5 text-[#07111f]/40 transition-transform duration-300 group-hover:text-[#07111f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </DriftCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="px-3 py-12 md:px-8 md:py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 md:grid-cols-[0.36fr_0.64fr]">
          <Reveal>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#073653] md:text-4xl">
                Common
              </h2>
              <p className="font-serif text-2xl md:text-4xl italic text-black/45">
                Questions
              </p>
              <p className="mt-3 md:mt-4 max-w-xs text-xs md:text-base leading-5 md:leading-6 text-black/60">
                Everything you need to know about how we work.
              </p>
              <ButtonLink
                href="/contact"
                variant="dark"
                className="mt-4 md:mt-6 w-full md:w-auto"
              >
                Contact us
              </ButtonLink>
            </div>
          </Reveal>
          <div className="space-y-3 md:space-y-4">
            {[
              [
                "What is your typical timeline?",
                "Most focused projects take two to six weeks depending on the scope, approvals, and production needs.",
              ],
              [
                "Do you offer development?",
                "Yes. We design and develop responsive websites in Next.js with animation, forms, and launch support.",
              ],
              [
                "How do we handle revisions?",
                "Each project includes structured review rounds so feedback stays clear and momentum stays high.",
              ],
              [
                "Can you manage ongoing social media?",
                "Yes. We can plan, create, publish, and review monthly content cycles for your brand.",
              ],
            ].map(([question, answer], index) => (
              <Reveal key={question} delay={index * 0.06}>
                <details className="group rounded-lg md:rounded-2xl border border-black/10 bg-white p-3 md:p-5 transition-all duration-300 hover:-translate-y-0.5 open:bg-[#ff3a2d] open:text-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 md:gap-5 text-sm md:text-lg font-bold">
                    {question}
                    <ChevronDown className="size-4 md:size-5 shrink-0 transition duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 md:mt-4 max-w-2xl text-xs md:text-base leading-5 md:leading-7 opacity-80">
                    {answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Modernized Core Call-To-Action Banner */}
      <footer className="px-3 pb-6 md:px-8 md:pb-8 sm:px-6 my-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/contact"
              className="group relative block overflow-hidden rounded-2xl md:rounded-3xl bg-[#07111f] p-5 md:p-14 text-white border border-white/10 shadow-2xl transition duration-500 sm:p-8 my-24"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lime-300/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <p className="text-xs font-black uppercase tracking-widest text-lime-300 mb-1 md:mb-2">
                    Next Phase Strategy
                  </p>
                  <h2 className="text-lg font-black uppercase leading-[1.1] sm:text-xl md:text-4xl tracking-tight">
                    Ready to boost your brand&apos;s strategic impact and
                    achieve significant growth?
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 md:gap-3 self-start rounded-full bg-white/10 border border-white/10 px-4 md:px-5 py-2 md:py-3 text-xs font-black uppercase tracking-wider text-white transition duration-300 group-hover:bg-lime-300 group-hover:text-[#07111f] group-hover:border-transparent md:self-center">
                  Get in touch
                  <ArrowUpRight className="size-3 md:size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-6 md:gap-8 py-8 md:py-12 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <p className="flex items-center gap-2 text-lg md:text-2xl font-black uppercase text-[#073653]">
                <Image
                  src="/logo.jpeg"
                  alt="Orign logo"
                  width={28}
                  height={28}
                  className="rounded-full object-cover md:size-8"
                />
                Orign
              </p>
              <p className="mt-3 md:mt-4 max-w-sm text-xs md:text-sm leading-5 md:leading-6 text-[#073653]/70">
                Follow us for production notes, launch ideas, design systems,
                and creative strategy.
              </p>
              <a
                href="mailto:orign911@gmail.com"
                className="mt-3 md:mt-4 block text-xs md:text-sm font-bold text-[#073653] hover:underline"
              >
                info@orign.studio
              </a>
            </div>
            <FooterLinks
              title="Pages"
              links={["Home", "Services", "Work", "Contact"]}
            />
            <FooterLinks
              title="Services"
              links={services.slice(0, 4).map((s) => s.shortTitle)}
            />
            <FooterLinks
              title="Social"
              links={["Instagram", "YouTube", "LinkedIn", "Behance"]}
            />
          </div>

          <div className="flex flex-col justify-between gap-3 md:gap-4 border-t border-[#073653]/20 pt-4 md:pt-6 text-xs md:text-sm text-[#073653]/70">
            <p>© 2026 Orign Creative Studio</p>
            <p>All Rights Reserved</p>
          </div>

          <Link
            href="/"
            className="group mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-4 rounded-2xl md:rounded-[2rem] border border-[#07111f]/12 py-3 md:py-4 text-center text-[8vw] md:text-[8.8rem] font-black uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(7,17,31,0.18)] transition duration-500 hover:border-lime-300 hover:text-[#07111f] hover:[text-shadow:0_0_44px_rgba(185,255,23,0.65)]"
          >
            Orign
          </Link>
        </div>
      </footer>
    </main>
  );
}

function FloatingTile({
  label,
  className,
  color,
}: {
  label: string;
  className: string;
  color: string;
}) {
  return (
    <div
      className={`absolute hidden rounded-2xl bg-gradient-to-br ${color} p-5 text-sm font-black uppercase shadow-2xl opacity-70 blur-[0.2px] md:block ${className}`}
    >
      {label}
    </div>
  );
}

function AudienceCard({
  icon,
  title,
  button,
  color,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  button: string;
  color: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-4 md:p-6 backdrop-blur-sm">
      <div>
        <div className="text-lime-300">{icon}</div>
        <h3 className="mt-3 md:mt-4 text-base md:text-lg font-black text-white uppercase tracking-tight">
          {title}
        </h3>
        <p className="mt-1 md:mt-2 text-xs text-white/60 leading-5">
          {description}
        </p>
      </div>
      <Link
        href="/contact"
        className={`mt-4 md:mt-6 inline-flex w-full justify-center items-center rounded-lg md:rounded-xl ${color} py-2 md:py-3 text-xs font-black text-[#07111f] shadow-md transition transform active:scale-[0.98] hover:opacity-90`}
      >
        {button}
      </Link>
    </div>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#073653]">
        {title}
      </h3>
      <div className="mt-2 md:mt-4 grid gap-1 md:gap-2 text-xs md:text-sm text-[#073653]/70">
        {links.map((link) => (
          <a
            key={link}
            href={link === "Contact" ? "/contact" : "#"}
            className="transition hover:text-[#b00046]"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
