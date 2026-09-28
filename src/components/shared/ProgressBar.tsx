import { cn } from "@/lib/utils";

type ProgressBarProps = {
  /** 0 to 100 */
  value: number;
  /** Track colour: "subtle" on floating stat cards, "muted" in page content, "white" on blue cards */
  track?: "subtle" | "muted" | "white";
  /** Announce as a progressbar; turn off for purely visual bars (e.g. rating breakdown) */
  label?: string;
  className?: string;
};

const trackClass = {
  subtle: "bg-shuttle-gray-50",
  muted: "bg-shuttle-gray-100",
  white: "bg-white",
};

/** 8px lime bar on a rounded track, used by every progress and rating bar in the design. */
export function ProgressBar({ value, track = "muted", label, className }: ProgressBarProps) {
  const a11y = label
    ? { role: "progressbar", "aria-label": label, "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100 }
    : { "aria-hidden": true };

  return (
    <div
      {...a11y}
      className={cn("h-2 overflow-hidden rounded-pill", trackClass[track], className)}
    >
      <div className="h-full rounded-pill bg-electric-lime-400" style={{ width: `${value}%` }} />
    </div>
  );
}
