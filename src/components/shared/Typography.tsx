import { cn } from "@/lib/utils";

type TextProps = { className?: string; children: React.ReactNode };

/** Poppins 44px section heading (Figma "Heading M"). */
export function SectionHeading({
  as: Tag = "h2",
  id,
  className,
  children,
}: TextProps & { as?: "h1" | "h2"; id?: string }) {
  return (
    <Tag id={id} className={cn("font-heading text-heading-m font-semibold text-shuttle-gray-950", className)}>
      {children}
    </Tag>
  );
}

/** Poppins 20px block title used inside pages and cards (Figma "Heading XS"). */
export function BlockTitle({ as: Tag = "h2", className, children }: TextProps & { as?: "h2" | "h3" }) {
  return (
    <Tag className={cn("font-heading text-heading-xs font-semibold text-shuttle-gray-950", className)}>{children}</Tag>
  );
}

/** Satoshi 16px grey body copy (Figma "Body M"). */
export function BodyText({ className, children }: TextProps) {
  return <p className={cn("text-body-m leading-[1.6] text-shuttle-gray-700", className)}>{children}</p>;
}

/** Centered heading + lead paragraph that opens a home-page section. */
export function SectionIntro({
  id,
  title,
  headingClassName,
  children,
}: {
  id: string;
  title: string;
  headingClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-229.25 flex-col items-center gap-4 text-center">
      <SectionHeading id={id} className={headingClassName}>
        {title}
      </SectionHeading>
      <p className="text-body-l text-shuttle-gray-700">{children}</p>
    </div>
  );
}
