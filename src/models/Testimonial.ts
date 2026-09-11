import { cleanDocument, getDatabase } from "@/lib/database";

export type Testimonial = {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
};

export const isValidTestimonialRating = (rating: number) => Number.isInteger(rating) && rating >= 1 && rating <= 5;

const collectionName = "testimonials";

export const getTestimonials = async () => {
  const testimonials = await (await getDatabase())
    .collection<Testimonial>(collectionName)
    .find({}, { projection: { _id: 0, name: 1, role: 1, content: 1, image: 1, rating: 1 } })
    .sort({ name: 1 })
    .toArray();

  return testimonials.map((testimonial) => cleanDocument(testimonial));
};
