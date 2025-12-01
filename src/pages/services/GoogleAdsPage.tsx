import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Youtube, ShoppingBag, Monitor, Target, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  { icon: Search, title: "Search Ads", description: "Appear at the top when customers search for your products or services." },
  { icon: Monitor, title: "Display Ads", description: "Visual ads across millions of websites in Google's Display Network." },
  { icon: Youtube, title: "YouTube Ads", description: "Video advertising to reach engaged audiences on YouTube." },
  { icon: ShoppingBag, title: "Shopping Ads", description: "Product listings that showcase your inventory directly in search." },
  { icon: Target, title: "Smart Bidding", description: "AI-powered bidding strategies for optimal campaign performance." },
  { icon: BarChart3, title: "Conversion Tracking", description: "Accurate tracking to measure and optimize your ROI." },
];

const benefits = [
  "Immediate visibility on Google search results",
  "Pay only when someone clicks your ad",
  "Highly targeted audience reach",
  "Measurable and trackable results",
  "Flexible budget control",
  "Access to Google's vast network",
];

const GoogleAdsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(209_90%_50%_/_0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Google Ads</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
                Maximize Your <span className="gradient-text">PPC Results</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Drive qualified traffic and conversions with expertly managed 
                Google Ads campaigns that deliver measurable ROI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="gradient-bg hover:opacity-90">
                    Free Account Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline">See Our Results</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Google Ads"
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
            <span className="text-primary font-medium">Ad Types</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
              Full Google Ads <span className="gradient-text">Coverage</span>
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

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Google Ads Results"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium">Why Google Ads</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
                Benefits of <span className="gradient-text">Google Advertising</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block mt-8">
                <Button className="gradient-bg hover:opacity-90">
                  Start Your Campaign <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleAdsPage;
