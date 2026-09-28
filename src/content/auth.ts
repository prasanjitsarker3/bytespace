// Copy taken verbatim from the Figma frame. Figma typos are kept as designed.

import { routes } from "@/content/routes";

export const authCopy = {
  login: {
    asideTitle: "Sign in with ease",
    asideBody:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    eyebrow: "Sign In",
    title: "Welcome Back",
    submit: "Sign In",
    switchPrompt: "New user?",
    switchLabel: "Create an account",
    switchHref: routes.register,
  },
  register: {
    asideTitle: "Sign up and come in",
    asideBody:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    submit: "Continue",
    switchPrompt: "Already have an account?",
    switchLabel: "Login",
    switchHref: routes.login,
  },
} as const;

export type AuthMode = keyof typeof authCopy;

export type AuthField = {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
};

export const authFields: Record<AuthMode, AuthField[]> = {
  register: [
    { id: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
    { id: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
    { id: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
  ],
  login: [
    { id: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
    { id: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "current-password" },
  ],
};

export const socialProviders = [
  { name: "Facebook", logo: "/images/social-facebook.svg" },
  { name: "Google", logo: "/images/social-google.svg" },
] as const;
