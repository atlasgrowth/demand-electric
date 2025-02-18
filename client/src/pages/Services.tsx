import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import {
  Zap,
  Home,
  Building2,
  WrenchIcon,
  LightbulbIcon,
  PowerIcon,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Services",
      description: "Complete home electrical installations, repairs, and upgrades",
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description: "Professional electrical solutions for businesses of all sizes",
    },
    {
      icon: Zap,
      title: "Emergency Services",
      description: "24/7 emergency electrical service for urgent situations",
    },
    {
      icon: WrenchIcon,
      title: "Repairs & Maintenance",
      description: "Expert electrical repairs and preventive maintenance",
    },
    {
      icon: LightbulbIcon,
      title: "Lighting Installation",
      description: "Modern lighting solutions for homes and businesses",
    },
    {
      icon: PowerIcon,
      title: "Panel Upgrades",
      description: "Electrical panel upgrades and replacements",
    },
  ];

  const processSteps = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "We respond promptly to all service requests",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees",
    },
  ];

  return (
    <div>
      <section className="bg-[#0039A6] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional electrical services for residential and commercial needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step) => (
              <motion.div
                key={step.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <step.icon className="h-12 w-12 text-[#FF9E1B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
