"use client";

import { ChevronDownIcon, XIcon } from "lucide-react";
import { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type CategoryComboboxProps = {
  categories: readonly string[];
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  className?: string;
};

/** Searchable single-select category picker with a clear button, used on small screens. */
export function CategoryCombobox({
  categories,
  value,
  onChange,
  className,
}: CategoryComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("flex w-full items-center gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          aria-label="Filter courses by category"
          className="flex h-12 min-w-0 flex-1 items-center justify-between gap-2 rounded-pill bg-shuttle-gray-50 px-5 text-left text-label-m font-medium text-shuttle-gray-950 transition-colors focus-ring hover:bg-shuttle-gray-100 data-popup-open:bg-shuttle-gray-100"
        >
          <span className={cn("truncate", !value && "text-shuttle-gray-400")}>
            {value ?? "All categories"}
          </span>
          <ChevronDownIcon
            className={cn(
              "size-5 shrink-0 text-shuttle-gray-700 transition-transform",
              open && "rotate-180",
            )}
          />
        </PopoverTrigger>

        <PopoverContent align="start" className="w-(--anchor-width) p-0">
          <Command>
            <CommandInput placeholder="Search category..." />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {categories.map((category) => {
                  const selected = category === value;
                  return (
                    <CommandItem
                      key={category}
                      value={category}
                      data-checked={selected}
                      onSelect={() => {
                        onChange(category);
                        setOpen(false);
                      }}
                      className={cn(
                        "py-2.5",
                        selected && "font-medium text-primary",
                      )}
                    >
                      {category}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
            {value && (
              <div className="border-t border-shuttle-gray-100 p-1">
                <button
                  type="button"
                  onClick={() => {
                    onChange(undefined);
                    setOpen(false);
                  }}
                  className="w-full rounded-sm px-2 py-2.5 text-center text-sm font-medium text-shuttle-gray-700 hover:bg-muted hover:text-shuttle-gray-950"
                >
                  Clear filter
                </button>
              </div>
            )}
          </Command>
        </PopoverContent>
      </Popover>

      {value && (
        <button
          type="button"
          aria-label="Clear category filter"
          onClick={() => onChange(undefined)}
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-shuttle-gray-50 text-shuttle-gray-700 transition-colors focus-ring hover:bg-shuttle-gray-100 hover:text-shuttle-gray-950"
        >
          <XIcon className="size-5" />
        </button>
      )}
    </div>
  );
}
