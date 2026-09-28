import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  name?: string;
  className?: string;
};

/** White 52px pill input with a leading search icon (hero and search banner). */
export function SearchField({ id, label, placeholder, name = "q", className }: SearchFieldProps) {
  return (
    <div className={cn("relative w-full sm:w-115.25", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Search
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-6 size-6 -translate-y-1/2 text-shuttle-gray-400"
      />
      <Input
        id={id}
        name={name}
        type="search"
        placeholder={placeholder}
        className="h-13 rounded-pill border-0 bg-white py-3 pr-6 pl-14 text-body-l text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus-visible:ring-electric-lime-400 md:text-body-l"
      />
    </div>
  );
}
