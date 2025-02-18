import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category?: "residential" | "commercial" | "maintenance";
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  category = "residential",
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const categoryStyles = {
    residential: {
      accentColor: "#0039A6",
      gradientStart: "#EEF5FF",
      gradientEnd: "#D6E8FF",
      iconBg: "bg-blue-50",
    },
    commercial: {
      accentColor: "#0039A6",
      gradientStart: "#EEF5FF",
      gradientEnd: "#D6E8FF",
      iconBg: "bg-blue-50",
    },
    maintenance: {
      accentColor: "#0039A6",
      gradientStart: "#EEF5FF",
      gradientEnd: "#D6E8FF",
      iconBg: "bg-blue-50",
    },
  };

  const style = categoryStyles[category];

  const handleLearnMore = () => {
    toast({
      title: "Coming Soon",
      description: "This feature will be available soon. Please check back later.",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all relative">
        <div 
          className="absolute left-0 top-0 w-1 h-full" 
          style={{ backgroundColor: style.accentColor }}
        />

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div 
              className={`w-14 h-14 rounded-lg ${style.iconBg} flex items-center justify-center mb-4`}
              style={{
                background: `linear-gradient(135deg, ${style.gradientStart}, ${style.gradientEnd})`,
                boxShadow: `0 4px 8px rgba(0, 57, 166, 0.1)`
              }}
            >
              <Icon 
                className="h-7 w-7" 
                style={{ color: style.accentColor }}
              />
            </div>
          </div>

          <CardTitle 
            className="text-xl font-bold relative"
            style={{ color: style.accentColor }}
          >
            {title}
            <div 
              className="h-0.5 w-12 mt-2 mb-1 transition-all duration-300"
              style={{ 
                backgroundColor: style.accentColor,
                width: isHovered ? '40px' : '20px'
              }}
            />
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </CardContent>

        <CardFooter className="pt-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center py-2.5 px-4 rounded-md text-sm font-medium transition-colors"
            style={{ 
              backgroundColor: isHovered ? style.accentColor : 'transparent',
              color: isHovered ? 'white' : style.accentColor,
              border: `1px solid ${style.accentColor}`
            }}
            onClick={handleLearnMore}
          >
            Learn More
            <ChevronRight className="ml-1.5 h-4 w-4" />
          </motion.button>
        </CardFooter>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{ 
                background: `radial-gradient(circle at 50% 50%, ${style.gradientStart}00, ${style.gradientEnd}20)`,
              }}
            />
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
