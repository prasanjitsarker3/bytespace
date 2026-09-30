# ByteSpace

ByteSpace is an online learning platform front end. Learners can browse hundreds of courses across categories, view course details, explore creator profiles, and sign in or register.

## Features

- **Home page** with hero, course categories, featured courses, partners, testimonials, and call to action.
- **Courses page** with search and pagination.
- **Course detail page** with preview, curriculum tabs, reviews, and a sidebar.
- **Creator profile page** for each instructor.
- **Login and register** pages with social sign-in.
- **Fully responsive** layout for mobile, tablet, and desktop.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) with [Base UI](https://base-ui.com)
- [Embla Carousel](https://www.embla-carousel.com)
- [Lucide Icons](https://lucide.dev)
- [Sharp](https://sharp.pixelplumbing.com) for image blur placeholders
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `pnpm dev`         | Start the development server                 |
| `pnpm build`       | Build for production                         |
| `pnpm start`       | Run the production build                     |
| `pnpm lint`        | Run ESLint                                   |
| `pnpm images:blur` | Regenerate blur placeholders for images      |

## Project Structure

```
src/
├── app/          # Routes: home, courses, courses/[slug], creators/[slug], login, register
├── components/   # UI primitives, page sections, course, creator, and auth components
├── content/      # Static page content and data
└── lib/          # Utilities and generated blur data
```
