import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";

const FeaturedCourses = () => {
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      price: "$89.99",
      originalPrice: "$199.99",
      rating: 4.8,
      students: 25420,
      duration: "40 hours",
      level: "Beginner",
      category: "Web Development"
    },
    {
      title: "Data Science & Machine Learning",
      instructor: "Dr. Michael Chen",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      price: "$129.99",
      originalPrice: "$249.99",
      rating: 4.9,
      students: 18750,
      duration: "55 hours",
      level: "Intermediate",
      category: "Data Science"
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      price: "$79.99",
      originalPrice: "$159.99",
      rating: 4.7,
      students: 12340,
      duration: "35 hours",
      level: "Beginner",
      category: "Design"
    },
    {
      title: "Digital Marketing Strategy",
      instructor: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      price: "$69.99",
      originalPrice: "$139.99",
      rating: 4.6,
      students: 9580,
      duration: "28 hours",
      level: "Beginner",
      category: "Marketing"
    },
    {
      title: "React & Node.js Full Stack",
      instructor: "James Wilson",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      price: "$99.99",
      originalPrice: "$199.99",
      rating: 4.8,
      students: 15670,
      duration: "45 hours",
      level: "Advanced",
      category: "Programming"
    },
    {
      title: "Cybersecurity Fundamentals",
      instructor: "Lisa Park",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      price: "$89.99",
      originalPrice: "$179.99",
      rating: 4.7,
      students: 8920,
      duration: "32 hours",
      level: "Intermediate",
      category: "Security"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses, carefully selected by industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;