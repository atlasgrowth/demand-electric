import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full border-2 border-gray-100 hover:border-[#0039A6] transition-colors">
        <CardHeader>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-[#0039A6]" />
          </div>
          <CardTitle className="text-xl text-[#0039A6]">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}