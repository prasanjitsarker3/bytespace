import { Navbar, type NavSection } from "@/components/sections/Navbar";
import { GridBackdrop } from "@/components/shared/Backdrops";
import { cn } from "@/lib/utils";

/** Blue top band of an inner page: grid pattern, fixed site header, then the page's banner content. */
export function PageBanner({
  active,
  className,
  children,
}: {
  active?: NavSection;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Kept outside the isolated banner so its z-index competes with the whole page. */}
      <Navbar active={active} />
      <div className={cn("relative isolate overflow-hidden bg-primary", className)}>
        <GridBackdrop preload />
        {children}
      </div>
    </>
  );
}
