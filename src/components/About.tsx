import { CheckCircle2, Target, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Data-driven approach to every campaign",
  "Transparent reporting and communication",
  "Dedicated team of industry experts",
  "Custom strategies tailored to your goals",
];

const values = [
  { icon: Target, title: "Results-Focused", description: "We measure success by your growth" },
  { icon: Lightbulb, title: "Innovation", description: "Staying ahead with latest trends" },
  { icon: Users, title: "Partnership", description: "Your success is our success" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_hsl(263_70%_50%_/_0.08),_transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
              Your Partner in{" "}
              <span className="gradient-text">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Maxify Global, we're more than just a digital marketing agency. 
              We're a team of passionate strategists, creative minds, and data enthusiasts 
              committed to transforming your digital presence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Since our inception, we've helped hundreds of businesses across industries 
              achieve their marketing goals through innovative strategies and measurable results.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="gradient-bg hover:opacity-90">Learn More About Us</Button>
          </div>

          {/* Right Content - Values */}
          <div className="relative">
            <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border/50 rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-heading font-bold">Our Core Values</h3>
              
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}

              {/* Achievement Badge */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-heading font-bold gradient-text">10+</div>
                  <div>
                    <div className="font-semibold">Years of Excellence</div>
                    <div className="text-sm text-muted-foreground">Delivering digital success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
