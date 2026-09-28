import { CircleCheck } from "lucide-react";

import { cn } from "@/lib/utils";

const tones = {
  /** Home "Create & Manage" benefits: 18px medium, dark */
  feature: { list: "gap-4", item: "items-center text-label-l font-medium text-shuttle-gray-950" },
  /** Course "Key Points": 16px body, grey */
  body: { list: "gap-3", item: "items-start text-body-m leading-[1.6] text-shuttle-gray-700" },
};

/** List with the blue filled check icon from Figma. */
export function CheckList({ items, tone = "body" }: { items: readonly string[]; tone?: keyof typeof tones }) {
  return (
    <ul className={cn("flex flex-col", tones[tone].list)}>
      {items.map((item) => (
        <li key={item} className={cn("flex gap-2", tones[tone].item)}>
          <CircleCheck aria-hidden className="size-6 shrink-0 fill-primary text-white" />
          {item}
        </li>
      ))}
    </ul>
  );
}
