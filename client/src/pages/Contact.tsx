import { ContactForm } from "@/components/ContactForm";
import { ReviewCard } from "@/components/ReviewCard";
import { useQuery } from "@tanstack/react-query";
import type { Review } from "@shared/schema";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function ContactPage() {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  return (
    <div>
      <section className="bg-[#0039A6] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              Get in touch for all your electrical needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#FF9E1B] mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+15016936229" className="text-[#0039A6] hover:underline">
                      (501) 693-6229
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#FF9E1B] mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>Mountain Pine, AR</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#FF9E1B] mt-1" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p>Monday - Friday: 8am - 5pm</p>
                    <p>24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h2>
          {isLoading ? (
            <div className="text-center">Loading reviews...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews?.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
