import { Award, BookOpen, Clock, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Students",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      value: "1,200+",
      label: "Quality Courses",
      color: "text-accent"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      color: "text-success"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Learning Support",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;