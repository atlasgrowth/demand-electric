import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Review } from "@shared/schema";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-2">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 mb-2">{review.comment}</p>
        <p className="font-semibold">{review.name}</p>
      </CardContent>
    </Card>
  );
}
