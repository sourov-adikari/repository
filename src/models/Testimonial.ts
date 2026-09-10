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

const initialTestimonials: Testimonial[] = [
  { name: "Sarah Jenkins", role: "CTO at InnovateX", content: "Sourov transformed our outdated e-commerce system into a faster, scalable architecture. The new experience made the product much easier to use.", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150", rating: 5 },
  { name: "David Chen", role: "Founder, Peak Analytics", content: "A thoughtful engineer with strong attention to detail. The dashboard was polished, intuitive, and easy for non-technical users to understand.", image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150", rating: 5 },
  { name: "Maria Rodriguez", role: "Product Lead, Fintech Nexus", content: "Reliable delivery, clean implementation, and a strong focus on both UX and technical quality. A great partner for complex product work.", image: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=150", rating: 5 },
];

export const seedTestimonials = async () => {
  const collection = (await getDatabase()).collection<Testimonial>(collectionName);
  await collection.createIndex({ name: 1, role: 1 }, { unique: true, name: "testimonial_identity_unique" });
  await collection.bulkWrite(initialTestimonials.map((testimonial) => ({
    updateOne: { filter: { name: testimonial.name, role: testimonial.role }, update: { $setOnInsert: testimonial }, upsert: true },
  })));
};

export const getTestimonials = async () => {
  await seedTestimonials();
  const testimonials = await (await getDatabase()).collection<Partial<Testimonial> & Pick<Testimonial, "name" | "role" | "content" | "image">>(collectionName).find({}).sort({ name: 1 }).toArray();
  return testimonials.map((testimonial) => cleanDocument({ ...testimonial, rating: testimonial.rating ?? 5 }));
};
