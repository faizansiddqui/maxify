import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Maxify Global transformed our digital presence completely. Our organic traffic increased by 400% in just 6 months. Their team is incredibly professional and results-driven.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, RetailPro",
    content: "The ROI we've seen from their performance marketing campaigns has been exceptional. They truly understand data-driven marketing and deliver consistent results.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GreenLife Co.",
    content: "Working with Maxify has been a game-changer for our brand. Their creative strategies and attention to detail helped us stand out in a crowded market.",
    rating: 5,
    initials: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(263_70%_50%_/_0.05),_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our partners have to say 
            about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift"
            >
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 gradient-bg">
                    <AvatarFallback className="text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold font-heading">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
