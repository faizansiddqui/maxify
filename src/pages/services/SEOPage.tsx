import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, TrendingUp, BarChart3, Target, FileText, Link2, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  { icon: Search, title: "Keyword Research", description: "In-depth analysis to find high-value keywords your audience is searching for." },
  { icon: FileText, title: "Content Optimization", description: "Strategic content improvements to boost relevance and engagement." },
  { icon: Link2, title: "Link Building", description: "Quality backlink strategies to increase domain authority." },
  { icon: BarChart3, title: "Technical SEO", description: "Site speed, mobile optimization, and crawlability improvements." },
  { icon: Target, title: "Local SEO", description: "Dominate local search results and Google Maps rankings." },
  { icon: TrendingUp, title: "Analytics & Reporting", description: "Detailed performance tracking and actionable insights." },
];

const benefits = [
  "Increase organic traffic by up to 300%",
  "Higher search engine rankings",
  "Better user experience and site performance",
  "Long-term sustainable results",
  "Competitive advantage in your industry",
  "Improved brand visibility and credibility",
];

const SEOPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(209_90%_50%_/_0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">SEO Services</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
                Dominate <span className="gradient-text">Search Rankings</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our proven SEO strategies help businesses climb to the top of search results, 
                driving organic traffic and generating quality leads.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="gradient-bg hover:opacity-90">
                    Get Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline">View Case Studies</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="SEO Analytics"
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
            <span className="text-primary font-medium">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
              Comprehensive <span className="gradient-text">SEO Solutions</span>
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
            <div>
              <span className="text-primary font-medium">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
                SEO That <span className="gradient-text">Delivers Results</span>
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
                  Start Your SEO Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="SEO Results"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOPage;
