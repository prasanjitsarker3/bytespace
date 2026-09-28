/** Every internal URL in one place, so links never drift apart. */

export const COURSE_SLUG = "build-digital-asset";
export const CREATOR_SLUG = "purepearl-studio";

const course = `/courses/${COURSE_SLUG}`;

export const routes = {
  home: "/",
  courses: "/courses",
  course,
  courseLessons: `${course}/lessons`,
  courseReviews: `${course}/reviews`,
  creator: `/creators/${CREATOR_SLUG}`,
  login: "/login",
  register: "/register",
} as const;
