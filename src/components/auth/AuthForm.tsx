import Link from "next/link";

import { SocialSignIn } from "@/components/auth/SocialSignIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authCopy, authFields, type AuthMode } from "@/content/auth";

/** White form card: title, fields, submit, optional social sign-in and the switch link. */
export function AuthForm({ mode }: { mode: AuthMode }) {
  const copy = authCopy[mode];

  return (
    <section
      aria-labelledby="auth-title"
      className="flex min-h-[49rem] flex-col justify-between gap-10 rounded-pill bg-white px-6 pt-10 pb-8 sm:px-15.75 sm:pt-15.25 sm:pb-10"
    >
      <form action="#" className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-primary">{copy.eyebrow}</p>
          <h1 id="auth-title" className="font-heading text-heading-m font-semibold text-shuttle-gray-950">
            {copy.title}
          </h1>
        </div>

        <div className="flex flex-col items-end gap-6">
          {authFields[mode].map((field) => (
            <div key={field.id} className="flex w-full flex-col gap-2">
              <label htmlFor={field.id} className="text-label-s font-medium text-shuttle-gray-950">
                {field.label}
              </label>
              <Input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                className="h-13 rounded-media border-shuttle-gray-100 bg-white px-6 text-body-l text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus-visible:border-primary md:text-body-l"
              />
            </div>
          ))}
          <Button type="submit" variant="secondary" size="pill">
            {copy.submit}
          </Button>
        </div>
      </form>

      {mode === "login" && <SocialSignIn />}

      <p className="flex flex-wrap justify-center gap-1 text-body-m leading-[1.6]">
        <span className="text-ink-400">{copy.switchPrompt}</span>
        <Link href={copy.switchHref} className="rounded-sm text-primary focus-ring hover:underline">
          {copy.switchLabel}
        </Link>
      </p>
    </section>
  );
}
