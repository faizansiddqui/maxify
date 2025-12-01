import { Search, TrendingUp, Share2, Megaphone, BarChart3, Globe, Code, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Maximize ROI with data-driven paid campaigns across Google, Meta, and more.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a strong social presence and engage your audience across all platforms.",
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description: "Craft a compelling brand identity that resonates with your target audience.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make informed decisions with comprehensive data analysis and reporting.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, high-converting websites optimized for performance.",
  },
  {
    icon: Code,
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with intelligent automation solutions.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with targeted email campaigns.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Solutions That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive digital marketing services tailored to help your business 
            thrive in the competitive online landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover-lift border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
