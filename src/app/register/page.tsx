import type { Metadata } from "next";

import { AuthScreen } from "@/components/auth/AuthScreen";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
};

export default function RegisterPage() {
  return <AuthScreen mode="register" />;
}
