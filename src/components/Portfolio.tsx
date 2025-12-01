import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Growth",
    category: "Performance Marketing",
    result: "+340% Revenue",
    description: "Scaled an online retail brand through strategic PPC and social campaigns.",
    color: "from-primary to-accent",
  },
  {
    title: "SaaS Lead Generation",
    category: "SEO & Content",
    result: "+500% Organic Traffic",
    description: "Built authority and visibility for a B2B SaaS platform.",
    color: "from-accent to-primary",
  },
  {
    title: "Brand Launch",
    category: "Brand Strategy",
    result: "1M+ Impressions",
    description: "Launched a new lifestyle brand with comprehensive digital strategy.",
    color: "from-primary to-purple-600",
  },
  {
    title: "Local Business",
    category: "Local SEO",
    result: "+200% Footfall",
    description: "Dominated local search for a multi-location restaurant chain.",
    color: "from-pink-500 to-accent",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-muted-foreground">
            Real results from real partnerships. See how we've helped businesses 
            achieve extraordinary growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-lift cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_white_0%,_transparent_50%)] opacity-20" />
                  <Badge variant="secondary" className="w-fit bg-background/20 text-primary-foreground border-none backdrop-blur-sm">
                    {project.category}
                  </Badge>
                  <div className="text-4xl font-heading font-bold text-primary-foreground">
                    {project.result}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
