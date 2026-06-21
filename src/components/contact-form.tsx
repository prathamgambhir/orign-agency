"use client";

import { useForm } from "react-hook-form";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { services } from "@/lib/agency-data";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { sendContactEmail } from "@/actions/mail";
// import { sendContactEmail } from "@/app/actions/mail"; // Adjust path to match your folder structure

type Inquiry = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inquiry>();

  async function onSubmit(data: Inquiry) {
    try {
      // Package data into standard FormData instances for Server Actions
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("service", data.service);
      formData.append("company", data.budget); // Mapping budget range to company/context parameter
      formData.append("message", data.message);

      const response = await sendContactEmail(null, formData);

      if (response.success) {
        toast.success("Inquiry Captured", {
          description: response.message || "Brief transmitted. Expect our loop inside 8-12 hours.",
        });
        reset();
      } else {
        toast.error("Submission Failed", {
          description: response.message || "Something broke down. Please try again.",
        });
      }
    } catch (error) {
      toast.error("Ecosystem Transmission Error", {
        description: "An unexpected error occurred. Please contact us directly.",
      });
    }
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
            disabled={isSubmitting}
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none placeholder:text-[#07111f]/35 focus:border-[#b00046] disabled:opacity-50"
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
            disabled={isSubmitting}
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none placeholder:text-[#07111f]/35 focus:border-[#b00046] disabled:opacity-50"
          />
          {errors.email && <span className="text-xs text-[#ff8c82]">{errors.email.message}</span>}
        </label>
        <label className="grid gap-2 text-xs font-black uppercase text-[#07111f]">
          Service
          <select
            {...register("service", { required: "Choose a service" })}
            disabled={isSubmitting}
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none focus:border-[#b00046] disabled:opacity-50"
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
            disabled={isSubmitting}
            className="border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none focus:border-[#b00046] disabled:opacity-50"
          >
            <option className="bg-white" value="">
              Choose budget
            </option>
            <option className="bg-white">Under ₹12,000</option>
            <option className="bg-white">₹12,000 - ₹25,000</option>
            <option className="bg-white">₹25,000 - ₹50,000</option>
            <option className="bg-white">₹50,000+</option>
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
          disabled={isSubmitting}
          className="resize-none border-b border-[#07111f]/15 bg-transparent py-3 text-base font-medium normal-case text-[#07111f] outline-none placeholder:text-[#07111f]/35 focus:border-[#b00046] disabled:opacity-50"
        />
        {errors.message && <span className="text-xs text-[#ff8c82]">{errors.message.message}</span>}
      </label>
      
      <Button
        type="submit"
        size="lg"
        className="mt-8 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            Sending brief...
            <Loader2 className="ml-2 size-4 animate-spin" />
          </>
        ) : (
          <>
            Send inquiry
            <ArrowUpRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}