// All copy below is taken verbatim from the Figma "Home" frame.

import { routes } from "@/content/routes";
import type { Course, Testimonial } from "@/content/types";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: routes.courses },
  { label: "Creators", href: routes.creator },
] as const;

export const studentAvatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/avatar-${n}.png`);
export const learnerAvatars = [1, 2, 3, 4].map((n) => `/images/learner-${n}.png`);

export const partners = [
  { src: "/images/partner-1.svg", width: 167, height: 41 },
  { src: "/images/partner-2.svg", width: 168, height: 41 },
  { src: "/images/partner-3.svg", width: 170, height: 41 },
  { src: "/images/partner-4.svg", width: 170, height: 41 },
  { src: "/images/partner-5.svg", width: 169, height: 42 },
] as const;

export const categoryRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
] as const;


const courseDefaults = {
  creator: "purepearl studio",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  level: "Beginner",
  learners: "26+",
  price: "$25",
  priceSuffix: "/lifetime",
  rating: "4.5",
};

export const courses: Course[] = [
  { ...courseDefaults, title: "Learn Figma from Basic", image: "/images/course-1.jpg" },
  { ...courseDefaults, title: "Build Digital Asset", image: "/images/course-2.jpg" },
  { ...courseDefaults, title: "the Power of Big Data", image: "/images/course-3.jpg" },
  { ...courseDefaults, title: "Balancing Productivity and Self-Care", image: "/images/course-4.jpg" },
  { ...courseDefaults, title: "Mastering Money Management", image: "/images/course-5.jpg" },
  { ...courseDefaults, title: "From Idea to Startup Success", image: "/images/course-6.jpg" },
];

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
] as const;

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonial-sarah.png",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonial-james.png",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonial-alex.png",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

export const footerColumns = [
  {
    heading: "Browse",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    heading: null,
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    heading: "Platform",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
] as const;

export const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"] as const;
