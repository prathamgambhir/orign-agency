import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion-primitives";
import { Toaster } from "@/components/ui/sonner"; // Importing shadcn sonner provider component

export const metadata = {
  title: "Get in Touch | Orign Creative Agency",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf3] px-5 py-10 text-[#07111f] md:px-8">
      {/* Mounted Sonner Toaster container provider */}
      <Toaster position="top-right" closeButton richColors />
      
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-between">
        <Link href="/" className="mt-24 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#07111f]/60 hover:text-[#b00046]">
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <section className="grid gap-10 py-12 lg:grid-cols-[0.82fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <h1 className="text-5xl font-medium md:text-7xl">Have an idea?</h1>
              <p className="font-serif text-5xl italic text-[#07111f]/35 md:text-7xl">Let&apos;s build</p>
              <div className="mt-20 max-w-md">
                <a href="mailto:orign911@gmail.com" className="border-b border-[#07111f]/25 pb-3 text-2xl font-medium">
                  info@orign.studio
                </a>
                <p className="mt-8 leading-7 text-[#07111f]/58">
                  We are accepting new partnerships for brand films, websites, podcasts, shoots, and social systems. Expect a response within 8-12 hours.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </section>

        <footer className="border-t border-[#07111f]/12 py-6 text-sm text-[#07111f]/58">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p>@{new Date().getFullYear()} Orign Creative Studio</p>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/orign.co/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/orign-co-75a232418/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://x.com/orign911" target="_blank" rel="noreferrer">
                X (Formerly Twitter)
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}