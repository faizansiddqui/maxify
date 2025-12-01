import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Smartphone, Zap, Shield, Palette, Settings, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  { icon: Code, title: "Custom Development", description: "Tailored websites built from scratch to match your unique requirements." },
  { icon: Smartphone, title: "Responsive Design", description: "Perfect experience across all devices - desktop, tablet, and mobile." },
  { icon: Zap, title: "Performance Optimization", description: "Lightning-fast loading speeds for better user experience and SEO." },
  { icon: Shield, title: "Security First", description: "Robust security measures to protect your website and user data." },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that engage and convert visitors." },
  { icon: Settings, title: "CMS Integration", description: "Easy-to-manage content systems for your team to update effortlessly." },
];

const technologies = [
  "React", "Next.js", "WordPress", "Shopify", "Node.js", "TypeScript", "Tailwind CSS", "AWS"
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(209_90%_50%_/_0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Web Development</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
                Stunning Websites That <span className="gradient-text">Convert</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We build high-performance websites that not only look amazing but also 
                drive results for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="gradient-bg hover:opacity-90">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline">View Portfolio</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Web Development"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
              Full-Stack <span className="gradient-text">Web Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Technologies</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
              Built With <span className="gradient-text">Modern Tech</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div 
                key={tech}
                className="px-6 py-3 rounded-full bg-card border border-border/50 font-medium hover:border-primary/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="gradient-bg hover:opacity-90">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
