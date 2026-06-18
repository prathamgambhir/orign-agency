import { Play } from "lucide-react";
import { DriftCard } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  title: string;
  tag?: string;
  src: string;
  type: "image" | "video" | "youtube" | "instagram";
  format?: "landscape" | "portrait" | "square";
  className?: string;
};

export function MediaCard({
  title,
  tag,
  src,
  type,
  format = "landscape",
  className,
}: MediaCardProps) {
  return (
    <DriftCard
      className={cn(
        "group overflow-hidden rounded-3xl border border-[#07111f]/10 bg-white p-2.5 shadow-[0_18px_60px_rgba(7,17,31,0.08)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.25rem] bg-[#f1efe7]",
          format === "landscape" && "aspect-[16/9]",

          format === "portrait" && "mx-auto aspect-9/16",
          format === "square" && "aspect-9/9",
        )}
      >
        {type === "youtube" ? (
          <iframe
            src={src}
            title={title}
            className="size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : type === "instagram" ? (
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            aria-label={title}
            className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#ffc1c7,transparent_30%),linear-gradient(135deg,#b00046,#6b4cff)]"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-white/10 text-white/90">
              <Play className="size-8" />
            </span>
          </a>
        ) : type === "video" ? (
          <video
            src={src}
            className="size-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img src={src} alt={title} className="size-full object-cover transition duration-700 group-hover:scale-105" />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/20" />
        <span className="sr-only">{tag}</span>

      </div>
    </DriftCard>
  );
}
