import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { footerColumns, legalLinks } from "@/content/home";

const footerLink =
  "rounded-sm text-shuttle-gray-950 transition-colors hover:text-primary focus-ring";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pt-16 pb-10 lg:pt-17.75 lg:pb-12">
      <Container className="flex flex-col gap-16 lg:gap-32.5">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-23">
          <div className="flex max-w-132 flex-col gap-11.25">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" className="self-start" />
              <p className="text-body-s text-shuttle-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <form action="/" className="flex max-w-126 flex-col gap-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="h-13 rounded-full bg-white px-6 text-body-m text-shuttle-gray-950 placeholder:text-shuttle-gray-950 focus-visible:border-primary md:text-body-m sm:w-94"
                />
                <Button type="submit" variant="secondary" size="pill">
                  Search
                </Button>
              </div>
              <p className="text-body-xs text-shuttle-gray-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:max-w-145 xl:w-145 xl:pt-12">
            {footerColumns.map((column) => (
              <div key={column.links[0]}>
                {column.heading && <h2 className="sr-only">{column.heading}</h2>}
                <ul className="flex flex-col gap-4 text-body-s">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className={footerLink}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5.75">
          <Separator />
          <div className="flex flex-col gap-4 text-body-xs text-shuttle-gray-950 sm:flex-row sm:items-start sm:justify-between">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <ul className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className={footerLink}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
