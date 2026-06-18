import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { services, type ServiceKey } from "@/lib/agency-data";
import { ButtonLink } from "@/components/button";
import { MediaCard } from "@/components/media-card";
import { Reveal } from "@/components/motion-primitives";

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = services.find((item) => item.key === serviceKey)!;
  const Icon = service.Icon;

  return (
    <main className="min-h-screen bg-[#fbfaf3] text-[#07111f]">
      {/* SECTION 1: Header */}
      <section className="relative overflow-hidden px-5 pb-14 pt-32 md:px-8 border-b border-[#07111f]/12">
        <div
          className="absolute inset-x-0 top-0 h-80 opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle at 18% 20%, transparent 28%), radial-gradient(circle at 82% 20%, #c7a7ff, transparent 30%)`,
          }}
        />
        {/* Changed max-w-6xl to max-w-7xl to perfectly match the grid below */}
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#07111f]/60 transition hover:text-[#b00046]">
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
          </Reveal>
          
          {/* FIX: Changed items-start to items-end so the button aligns beautifully with the bottom of the heading on desktop */}
          <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#07111f]/10 bg-white/70 px-4 py-2 text-xs font-black uppercase shadow-sm">
                  <Icon className="size-4" />
                  {service.shortTitle}
                </span>
                <h1 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.92] text-[#07111f] md:text-6xl">
                  {service.title}
                </h1>
              </div>
            </Reveal>
            
            <Reveal delay={0.12}>
              {/* FIX: Removed 'items-start' and 'justify-end'. On desktop, the grid column handles the positioning. On mobile, it will now stack naturally. */}
              <div className="flex lg:justify-end">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Plan this service
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Media Cards */}
      <section className="px-5 pb-20 pt-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* FIX: Added items-stretch so that cards in the same row always have the exact same height, even if text length varies */}
          <div className="mt-10 grid gap-6 items-stretch md:grid-cols-2">
            {service.samples.map((sample, index) => (
              <Reveal key={sample.title} delay={index * 0.08} className="h-full">
                <MediaCard {...sample} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}