"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, services } from "@/lib/agency-data";
import { ButtonLink } from "@/components/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const MotionLink = motion(Link);

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#07111f]/10 bg-[#fbfaf3]/82 px-4 py-2.5 text-[#07111f] shadow-[0_18px_55px_rgba(7,17,31,0.08)] backdrop-blur-xl md:px-5">
        <MotionLink
          href="/"
          className="group flex items-center gap-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          <Image
            src="/logo.jpeg"
            alt="Orign logo"
            width={38}
            height={38}
            className="rounded-full object-cover"
          />
        </MotionLink>

        <div className="hidden items-center gap-5 text-[0.68rem] font-bold uppercase text-[#07111f]/62 lg:flex">
          {navItems.map((item) => (
            <MotionLink
              key={item.href}
              href={item.href}
              className="transition hover:text-[#b00046]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              {item.label}
            </MotionLink>
          ))}
          <div className="group relative py-2">
            <span className="cursor-default transition group-hover:text-[#b00046]">Pages</span>
            <div className="invisible absolute left-1/2 top-full grid w-60 -translate-x-1/2 translate-y-3 gap-1 rounded-3xl border border-[#07111f]/10 bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((service) => (
                <Link
                  href={service.href}
                  key={service.key}
                  className="rounded-2xl px-4 py-3 text-[#07111f]/70 hover:bg-[#fbfaf3] hover:text-[#b00046]"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <ButtonLink href="/contact" className="hidden h-10 px-5 md:inline-flex">
          Get in touch
        </ButtonLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden items-center justify-center size-10 rounded-full hover:bg-white/50 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-x-0 top-20 mx-4 rounded-3xl border border-[#07111f]/10 bg-white/95 backdrop-blur-xl shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-bold uppercase text-[#07111f] transition hover:bg-lime-300 hover:text-[#07111f]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-[#07111f]/10 pt-2 mt-2">
                <p className="px-4 py-2 text-xs font-bold uppercase text-[#07111f]/60">Services</p>
                {services.map((service) => (
                  <Link
                    href={service.href}
                    key={service.key}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-[#07111f]/70 transition hover:bg-lime-300 hover:text-[#07111f]"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
              <MotionLink
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-lime-300 px-6 py-2.5 text-xs font-black uppercase text-[#07111f] transition hover:bg-lime-400"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                Get in Touch
              </MotionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
