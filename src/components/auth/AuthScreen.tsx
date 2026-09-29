import { AuthCollage } from "@/components/auth/AuthCollage";
import { AuthForm } from "@/components/auth/AuthForm";
import { GridBackdrop } from "@/components/shared/Backdrops";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { authCopy, type AuthMode } from "@/content/auth";

/** Register and Login share one Figma frame: blue grid page, collage on the left, form card on the right. */
export function AuthScreen({ mode }: { mode: AuthMode }) {
  const copy = authCopy[mode];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-primary">
      <GridBackdrop preload />

      <Container className="pb-16 lg:pb-30">
        <header className="flex h-20 items-center lg:h-30">
          <Logo markOnly />
        </header>

        <div className="grid justify-items-center gap-10 xl:grid-cols-[minmax(0,1fr)_36.1875rem] xl:justify-items-stretch xl:gap-10">
          <aside className="flex w-full max-w-144.75 flex-col gap-4 text-shuttle-gray-50 xl:max-w-none">
            <p className="font-heading text-heading-xs font-semibold">{copy.asideTitle}</p>
            <p className="max-w-118.75 text-body-l">{copy.asideBody}</p>
            <AuthCollage mode={mode} />
          </aside>
          <AuthForm mode={mode} />
        </div>
      </Container>
    </div>
  );
}
