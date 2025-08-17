import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  category: string;
}

const CourseCard = ({
  title,
  instructor,
  image,
  price,
  originalPrice,
  rating,
  students,
  duration,
  level,
  category
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-0 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
          {category}
        </Badge>
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3"
        >
          {level}
        </Badge>
      </div>

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">by {instructor}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-warning fill-warning" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({students.toLocaleString()})</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {students.toLocaleString()} students
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
        <Button className="bg-hero-gradient hover:opacity-90 transition-opacity">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;