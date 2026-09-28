import type { Metadata } from "next";

import { AuthScreen } from "@/components/auth/AuthScreen";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
};

export default function LoginPage() {
  return <AuthScreen mode="login" />;
}
