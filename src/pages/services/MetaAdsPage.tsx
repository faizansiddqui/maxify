import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Target, Users, TrendingUp, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  { icon: Facebook, title: "Facebook Ads", description: "Reach billions of users with targeted Facebook advertising campaigns." },
  { icon: Instagram, title: "Instagram Ads", description: "Engage audiences with visually stunning Instagram ad campaigns." },
  { icon: Target, title: "Audience Targeting", description: "Precise targeting based on demographics, interests, and behaviors." },
  { icon: Users, title: "Lookalike Audiences", description: "Find new customers similar to your best existing customers." },
  { icon: TrendingUp, title: "Retargeting", description: "Re-engage visitors who've shown interest in your products." },
  { icon: BarChart3, title: "Performance Analytics", description: "Real-time insights and optimization for maximum ROI." },
];

const results = [
  { metric: "5X", label: "Average ROAS" },
  { metric: "60%", label: "Lower CPA" },
  { metric: "200%", label: "Traffic Increase" },
  { metric: "150%", label: "Conversion Boost" },
];

const MetaAdsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(209_90%_50%_/_0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Meta Ads</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
                Facebook & Instagram <span className="gradient-text">Advertising</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Harness the power of Meta's advertising platform to reach your ideal 
                customers on Facebook and Instagram.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="gradient-bg hover:opacity-90">
                    Get Free Strategy <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline">View Results</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
                alt="Meta Ads"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.label} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text">{result.metric}</div>
                <div className="text-muted-foreground mt-2">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
              Complete Meta <span className="gradient-text">Ads Management</span>
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

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Scale Your <span className="gradient-text">Social Ads?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our Meta Ads experts create campaigns that drive real results for your business.
          </p>
          <Link to="/contact">
            <Button className="gradient-bg hover:opacity-90" size="lg">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetaAdsPage;
