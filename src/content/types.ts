export type Course = {
  title: string;
  image: string;
  creator: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  learners: string;
  price: string;
  priceSuffix: string;
  rating: string;
  /** Detail page; defaults to the one designed course */
  href?: string;
};

export type Review = {
  name: string;
  role: string;
  avatar: string;
  when: string;
  rating: number;
  text: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};
