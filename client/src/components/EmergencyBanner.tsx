import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function EmergencyBanner() {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg 
      bg-orange-500 text-white py-2 px-4 flex justify-center items-center gap-4"
    >
      <Phone className="h-5 w-5 animate-pulse" />
      <span className="font-bold">24/7 Emergency Service:</span>
      <a href="tel:+15016936229" className="hover:underline">
        (501) 693-6229
      </a>
    </motion.div>
  );
}
