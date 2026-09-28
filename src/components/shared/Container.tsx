import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

/** The 1200px content column with the site's responsive side gutters. */
export function Container<T extends React.ElementType = "div">({ as, className, ...props }: ContainerProps<T>) {
  const Tag = as ?? "div";
  return <Tag className={cn("mx-auto w-full max-w-page px-4 md:px-6 xl:px-0", className)} {...props} />;
}
