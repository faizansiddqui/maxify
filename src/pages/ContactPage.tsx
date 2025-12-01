import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const offices = [
  {
    city: "New York",
    address: "123 Business Ave, Suite 100",
    phone: "+1 (555) 123-4567",
    email: "ny@maxifyglobal.com",
  },
  {
    city: "London",
    address: "45 Marketing Street, Floor 5",
    phone: "+44 20 1234 5678",
    email: "uk@maxifyglobal.com",
  },
  {
    city: "Singapore",
    address: "78 Digital Tower, Level 12",
    phone: "+65 6789 0123",
    email: "sg@maxifyglobal.com",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(209_90%_50%_/_0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2 mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you. 
              Reach out and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Office Locations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium">Our Offices</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
              Global <span className="gradient-text">Presence</span>
            </h2>
            <p className="text-muted-foreground">
              With offices around the world, we're always close to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div 
                key={office.city}
                className="p-8 rounded-2xl bg-card border border-border/50 hover-lift"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">{office.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
              <Clock className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM (Local Time) | 
                Saturday: 10:00 AM - 2:00 PM | Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
