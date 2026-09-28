import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { socialProviders } from "@/content/auth";

/** "or" divider plus the Facebook / Google sign-in buttons (Login only). */
export function SocialSignIn() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-body-l text-ink-400">or</span>
        <Separator className="flex-1" />
      </div>
      <div className="flex gap-4">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            type="button"
            variant="outline"
            aria-label={`Sign in with ${provider.name}`}
            className="size-18 rounded-pill border-ink-200 bg-white hover:bg-shuttle-gray-50"
          >
            <Image src={provider.logo} alt="" width={40} height={40} />
          </Button>
        ))}
      </div>
    </div>
  );
}
