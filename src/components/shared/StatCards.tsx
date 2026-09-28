import { Star } from "lucide-react";

import { AvatarStack } from "@/components/shared/AvatarStack";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { Badge } from "@/components/ui/badge";
import { studentAvatars } from "@/content/home";
import { cn } from "@/lib/utils";

type CardProps = { className?: string };

const floatingCard = "flex flex-col gap-2 rounded-panel p-4";

export function LearningProgressCard({ className }: CardProps) {
  return (
    <div className={cn(floatingCard, "bg-white text-shuttle-gray-950", className)}>
      <p className="text-label-s font-medium">Learning Progress</p>
      <p className="font-heading text-display-stat font-semibold">55%</p>
      <ProgressBar value={56} track="subtle" label="Learning progress" className="w-50" />
    </div>
  );
}

export function HappyStudentsCard({
  className,
  compact = false,
  lime = false,
}: CardProps & { compact?: boolean; lime?: boolean }) {
  return (
    <div className={cn(floatingCard, "w-64.5", lime ? "bg-electric-lime-400" : "bg-white", className)}>
      <div>
        <p className="text-label-m font-medium text-shuttle-gray-950">Happy Students</p>
        <p className="flex items-center gap-0.5">
          <span className={cn(compact ? "text-caption font-bold" : "text-body-xs", "text-shuttle-gray-950")}>
            4.5
          </span>
          <span className={cn(compact ? "text-caption" : "text-body-xs", "text-shuttle-gray-400")}>(240)</span>
          <Star
            aria-label="rating"
            className={cn("size-4", lime ? "fill-primary text-primary" : "fill-electric-lime-500 text-electric-lime-500")}
          />
        </p>
      </div>
      <AvatarStack avatars={studentAvatars} more="2K+" size={43} tone={lime ? "dark" : "lime"} />
    </div>
  );
}

export function CategoryStatCard({ className }: CardProps) {
  return (
    <div className={cn("rounded-panel bg-white p-4", className)}>
      <p className="text-label-m font-medium text-shuttle-gray-950">UI/UX Design</p>
      <p className="flex items-center gap-2 text-shuttle-gray-400">
        <span className="text-body-xs">200 Courses</span>
        <span aria-hidden className="text-caption">
          •
        </span>
        <span className="text-body-xs">1000+ Students</span>
      </p>
    </div>
  );
}

function RevenueBadge() {
  return (
    <Badge className="h-auto rounded-pill bg-electric-lime-500 px-2 py-0.5 text-caption font-medium text-shuttle-gray-950">
      +12$
    </Badge>
  );
}

export function TotalRevenueCard({ className }: CardProps) {
  return (
    <div className={cn(floatingCard, "bg-primary text-primary-foreground", className)}>
      <div>
        <p className="text-label-m font-medium">Total Revenue</p>
        <p className="text-caption">July 1-28</p>
      </div>
      <div className="flex w-50 items-center justify-between">
        <p className="font-heading text-heading-s font-semibold">$120.29</p>
        <RevenueBadge />
      </div>
      <ProgressBar value={56} track="white" className="w-50" />
    </div>
  );
}

export function YearToDateCard({ className }: CardProps) {
  return (
    <div className={cn(floatingCard, "w-33.5 items-start bg-primary text-primary-foreground", className)}>
      <div>
        <p className="text-label-m font-medium">Year to Date</p>
        <p className="text-caption">2023</p>
      </div>
      <p className="font-heading text-heading-s font-semibold whitespace-nowrap">$1,200.38</p>
      <RevenueBadge />
    </div>
  );
}
