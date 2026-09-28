"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { pillVariants } from "@/components/shared/pill";
import { routes } from "@/content/routes";

const tabs = [
  { label: "About", href: routes.course },
  { label: "Lessons", href: routes.courseLessons },
  { label: "Reviews", href: routes.courseReviews },
];

/** About / Lessons / Reviews tabs; each tab is its own route. */
export function CourseTabNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Course sections">
      <ul className="flex flex-wrap gap-4">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <li key={tab.label}>
              <Link href={tab.href} aria-current={active ? "page" : undefined} className={pillVariants({ active })}>
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
