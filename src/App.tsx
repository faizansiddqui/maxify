import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SEOPage from "./pages/services/SEOPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import MetaAdsPage from "./pages/services/MetaAdsPage";
import GoogleAdsPage from "./pages/services/GoogleAdsPage";
import SocialMediaManagementPage from "./pages/services/SocialMediaManagementPage";
import YouTubeAdsPage from "./pages/services/YouTubeAdsPage";
import GMBListingPage from "./pages/services/GMBListingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage key="home" />} />
          <Route path="/about" element={<AboutPage key="about" />} />
          <Route path="/contact" element={<ContactPage key="contact" />} />
          <Route path="/services/seo" element={<SEOPage key="seo" />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage key="web-development" />} />
          <Route path="/services/meta-ads" element={<MetaAdsPage key="meta-ads" />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage key="google-ads" />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagementPage key="social-media" />} />
          <Route path="/services/youtube-ads" element={<YouTubeAdsPage key="youtube-ads" />} />
          <Route path="/services/gmb-listing" element={<GMBListingPage key="gmb-listing" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage key="privacy-policy" />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage key="terms" />} />
          <Route path="*" element={<NotFound key="not-found" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;