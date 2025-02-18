import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Zap, Home, Building2, Shield, Clock, Wrench } from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Residential",
      description: "Complete home electrical services from repairs to installations",
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Professional electrical solutions for businesses",
    },
    {
      icon: Zap,
      title: "Emergency",
      description: "24/7 emergency electrical service when you need it most",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Trusted electrical expertise since 1998",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Full coverage for your peace of mind",
    },
    {
      icon: Wrench,
      title: "Quality Work",
      description: "Satisfaction guaranteed on every job",
    },
  ];

  return (
    <div>
      <section className="bg-[#0039A6] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Electrical Partner
            </h1>
            <p className="text-xl mb-8">
              25+ years of excellence serving Mountain Pine, AR and surrounding areas
            </p>
            <Button
              size="lg"
              className="bg-[#FF9E1B] hover:bg-[#e88c09] text-white"
              asChild
            >
              <a href="tel:+15016936229">Call Now: (501) 693-6229</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Demand Electric
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-[#FF9E1B]" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}