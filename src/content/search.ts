// Copy taken verbatim from the Figma frame. Figma typos are kept as designed.

import { courses } from "@/content/home";

export const searchCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
] as const;

/** Figma repeats the six home-page courses three times on the search page */
export const searchResults = [0, 1, 2].flatMap((round) =>
  courses.map((course) => ({ ...course, key: `${round}-${course.title}` })),
);

export const searchScopes = { courses: "Courses", creators: "Creators" };

export const sortOptions = { relevant: "Most relevant", newest: "Newest", rating: "Highest rated" };

export const levelOptions = {
  all: "All levels",
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};
