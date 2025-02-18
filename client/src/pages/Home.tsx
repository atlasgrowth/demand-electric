import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Zap, Home, Building2, Shield, Clock, Wrench, CircuitBoard, Power } from "lucide-react";
import logo from "../assets/o.png";
import heroImage from "../assets/64FD380B-7484-433E-8AAA-9A71E8C8BAA6.jpeg";
import serviceImage from "../assets/C8C161C8-D99B-4131-9E02-0F29C92902D7.jpeg";

export default function HomePage() {
  const services = [
    {
      icon: CircuitBoard,
      title: "Electrical Panels",
      description: "Expert panel upgrades, repairs, and installations for your safety",
    },
    {
      icon: Home,
      title: "Residential Wiring",
      description: "Complete home electrical services including new construction and remodels",
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description: "Comprehensive electrical solutions for businesses of all sizes",
    },
    {
      icon: Power,
      title: "Power Solutions",
      description: "Reliable power distribution and electrical system maintenance",
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
      <section className="relative bg-gradient-to-r from-[#0039A6] to-[#004dc9] text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <img src={logo} alt="Demand Electric" className="w-64 mb-8" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Trusted Electrical Partner
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                With 25+ years of excellence serving Mountain Pine, AR and surrounding areas,
                we deliver professional electrical solutions you can count on.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button
                  size="lg"
                  className="bg-[#FF9E1B] hover:bg-[#ff8c00] text-white transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a href="tel:+15016936229">Contact Us: (501) 693-6229</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white transform hover:scale-105 transition-all"
                  asChild
                >
                  <a href="/services">View Our Services</a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <img
                src={serviceImage}
                alt="Professional Electrical Services"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Electrical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential wiring to commercial installations, we provide comprehensive
              electrical solutions with a focus on safety and reliability.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Demand Electric
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <feature.icon className="h-12 w-12 mb-4 text-[#FF9E1B]" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0039A6]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team handle all your electrical needs with the highest
            standards of quality and safety.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#0039A6] hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
            asChild
          >
            <a href="/contact">Schedule Service Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
}