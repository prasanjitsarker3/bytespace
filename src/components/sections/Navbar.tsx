import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";

import { HeaderShell } from "@/components/sections/HeaderShell";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/content/home";
import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

export type NavSection = (typeof navLinks)[number]["label"];

const lightLink =
  "rounded-sm text-body-m text-shuttle-gray-50 transition-colors hover:text-electric-lime-400 focus-ring-light";

/** Site header: logo, main links, account links and cart; a slide-out menu below lg. */
export function Navbar({ active = "Home" }: { active?: NavSection }) {
  return (
    <HeaderShell>
      <Container className="grid h-20 grid-cols-[1fr_auto] items-center transition-[height] duration-300 ease-out lg:h-30 lg:grid-cols-[1fr_auto_1fr] lg:group-data-[scrolled=true]/header:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={link.label === active ? "page" : undefined}
                  className={cn(lightLink, link.label === active && "font-medium")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-6">
          <Link href={routes.login} className={cn(lightLink, "hidden lg:inline")}>
            Sign In
          </Link>
          <Link href={routes.register} className={cn(lightLink, "hidden lg:inline")}>
            Join Us
          </Link>
          <Link href="#cart" aria-label="Shopping cart" className={lightLink}>
            <ShoppingBag aria-hidden className="size-6" />
          </Link>
          <MobileMenu active={active} />
        </div>
      </Container>
    </HeaderShell>
  );
}

function MobileMenu({ active }: { active: NavSection }) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Open menu"
            className="text-shuttle-gray-50 hover:bg-shuttle-gray-50/10 hover:text-electric-lime-400 lg:hidden"
          />
        }
      >
        <Menu aria-hidden className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-primary text-primary-foreground">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo />
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.label === active ? "page" : undefined}
              className={cn(lightLink, "py-2 text-label-l", link.label === active && "font-medium")}
            >
              {link.label}
            </Link>
          ))}
          <Separator className="my-3 bg-shuttle-gray-50/20" />
          <Link href={routes.login} className={cn(lightLink, "py-2 text-label-l")}>
            Sign In
          </Link>
          <Link
            href={routes.register}
            className={cn(buttonVariants({ variant: "secondary", size: "pill" }), "mt-3 w-full")}
          >
            Join Us
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
