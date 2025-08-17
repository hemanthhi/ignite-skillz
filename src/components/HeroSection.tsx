import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Learn{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Without
                </span>{" "}
                Limits
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Unlock your potential with world-class courses from industry experts. 
                Start your learning journey today and transform your career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity">
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg">
                Browse Courses
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">50,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-warning fill-warning" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden bg-card-gradient border-0 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Students learning online" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Interactive Learning</p>
                      <p className="text-sm text-muted-foreground">Hands-on projects & real-world practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;