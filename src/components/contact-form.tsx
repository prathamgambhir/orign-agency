"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/agency-data";
import { Button } from "@/components/ui/button";

type Inquiry = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inquiry>();

  function onSubmit(data: Inquiry) {
    console.log("New inquiry", data);
    setSent(true);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-[#07111f]/10 bg-white/80 p-5 shadow-[0_22px_70px_rgba(7,17,31,0.08)] backdrop-blur md:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className="grid gap-2 text-xs font-black uppercase text-[#07111f]">
          Name
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="John Doe"
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none placeholder:text-[#07111f]/35 focus:border-[#b00046]"
          />
          {errors.name && <span className="text-xs text-[#ff8c82]">{errors.name.message}</span>}
        </label>
        <label className="grid gap-2 text-xs font-black uppercase text-[#07111f]">
          Email
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Use a valid email" },
            })}
            placeholder="john@company.com"
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none placeholder:text-[#07111f]/35 focus:border-[#b00046]"
          />
          {errors.email && <span className="text-xs text-[#ff8c82]">{errors.email.message}</span>}
        </label>
        <label className="grid gap-2 text-xs font-black uppercase text-[#07111f]">
          Service
          <select
            {...register("service", { required: "Choose a service" })}
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none focus:border-[#b00046]"
          >
            <option className="bg-white" value="">
              Choose service
            </option>
            {services.map((service) => (
              <option className="bg-white" key={service.key} value={service.shortTitle}>
                {service.shortTitle}
              </option>
            ))}
          </select>
          {errors.service && <span className="text-xs text-[#ff8c82]">{errors.service.message}</span>}
        </label>
        <label className="grid gap-2 text-xs font-black uppercase text-[#07111f]">
          Budget range
          <select
            {...register("budget", { required: "Choose a budget" })}
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none focus:border-[#b00046]"
          >
            <option className="bg-white" value="">
              Choose budget
            </option>
            <option className="bg-white">Under $2,000</option>
            <option className="bg-white">$2,000 - $5,000</option>
            <option className="bg-white">$5,000 - $10,000</option>
            <option className="bg-white">$10,000+</option>
          </select>
          {errors.budget && <span className="text-xs text-[#ff8c82]">{errors.budget.message}</span>}
        </label>
      </div>
      <label className="mt-8 grid gap-2 text-xs font-black uppercase text-[#07111f]">
        Message
        <textarea
          {...register("message", { required: "Tell us a little about the project" })}
          placeholder="Tell us about your project..."
          rows={5}
          className="resize-none border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none placeholder:text-[#07111f]/35 focus:border-[#b00046]"
        />
        {errors.message && <span className="text-xs text-[#ff8c82]">{errors.message.message}</span>}
      </label>
      <Button
        type="submit"
        size="lg"
        className="mt-8 w-full"
      >
        Send inquiry
        <ArrowUpRight className="size-4" />
      </Button>
      {sent && (
        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime-300/35 px-4 py-2 text-sm font-bold text-[#07111f]">
          <CheckCircle2 className="size-4" />
          Inquiry captured. Connect this form to email or a CRM when you are ready.
        </p>
      )}
    </form>
  );
}
