import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsGrid } from "@/components/home/CollectionsGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStory } from "@/components/home/BrandStory";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Features } from "@/components/home/Features";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Bar */}
        <Features />
        
        {/* Collections Grid */}
        <CollectionsGrid />
        
        {/* New Arrivals */}
        <FeaturedProducts />
        
        {/* Brand Story */}
        <BrandStory />
        
        {/* Shop by Category */}
        <CategoryShowcase />
        
        {/* About Us Preview */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-caption text-primary mb-4">About Us</p>
              <h2 className="text-headline">Chandana's Boutique</h2>
              <p className="text-body-large text-muted-foreground mt-4">
                Where tradition meets contemporary elegance
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-serif text-xl mb-3">Artisanal Excellence</h3>
                <p className="text-muted-foreground">
                  We work directly with master craftsmen to preserve traditional techniques like zari work, chikankari, and block printing.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-3">Sustainable Fashion</h3>
                <p className="text-muted-foreground">
                  We believe in slow fashion—creating timeless pieces that transcend seasons and can be treasured for generations.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-3">Customer Commitment</h3>
                <p className="text-muted-foreground">
                  Every piece tells a story of heritage, craftsmanship, and contemporary design sensibilities.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/about" className="btn-luxury">Learn More About Us</a>
            </div>
          </div>
        </section>

        {/* Services/Products Preview */}
        <section className="section-padding bg-secondary/30">
          <div className="container-luxury">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-caption text-primary mb-4">Services & Products</p>
              <h2 className="text-headline">What We Offer</h2>
              <p className="text-body-large text-muted-foreground mt-4">
                Explore our curated collections and personalized fashion services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border p-6 text-center">
                <h3 className="font-serif text-xl mb-3">Women's Apparel</h3>
                <p className="text-muted-foreground mb-4">
                  Dresses, tops, skirts, and trousers for various occasions
                </p>
                <div className="text-sm">
                  <span className="text-muted-foreground">₹1,999 – ₹24,999</span>
                </div>
              </div>
              <div className="border border-border p-6 text-center">
                <h3 className="font-serif text-xl mb-3">Accessories</h3>
                <p className="text-muted-foreground mb-4">
                  Handbags, scarves, and statement jewelry
                </p>
                <div className="text-sm">
                  <span className="text-muted-foreground">₹499 – ₹9,999</span>
                </div>
              </div>
              <div className="border border-border p-6 text-center">
                <h3 className="font-serif text-xl mb-3">Custom Design</h3>
                <p className="text-muted-foreground mb-4">
                  Bespoke tailoring and personalized styling
                </p>
                <div className="text-sm">
                  <span className="text-muted-foreground">Starting from ₹2,999</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/services" className="btn-outline-luxury">View All Services</a>
            </div>
          </div>
        </section>

        {/* Shop Collections */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-caption text-primary mb-4">Shop Collections</p>
              <h2 className="text-headline">Curated Collections</h2>
              <p className="text-body-large text-muted-foreground mt-4">
                Discover our exclusive seasonal and timeless collections
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/collections/new-arrivals" className="group block">
                <div className="aspect-square bg-secondary rounded-lg mb-3 group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="font-serif text-lg">New Arrivals</h3>
                <p className="text-sm text-muted-foreground">Latest collection</p>
              </a>
              <a href="/collections/bridal" className="group block">
                <div className="aspect-square bg-secondary rounded-lg mb-3 group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="font-serif text-lg">Bridal</h3>
                <p className="text-sm text-muted-foreground">Wedding essentials</p>
              </a>
              <a href="/collections/festive" className="group block">
                <div className="aspect-square bg-secondary rounded-lg mb-3 group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="font-serif text-lg">Festive</h3>
                <p className="text-sm text-muted-foreground">Celebration wear</p>
              </a>
              <a href="/collections/casual" className="group block">
                <div className="aspect-square bg-secondary rounded-lg mb-3 group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="font-serif text-lg">Casual</h3>
                <p className="text-sm text-muted-foreground">Everyday elegance</p>
              </a>
            </div>
            <div className="text-center mt-8">
              <a href="/collections/new-arrivals" className="btn-luxury">Shop All Collections</a>
            </div>
          </div>
        </section>

        {/* Contact Preview */}
        <section className="section-padding bg-secondary/30">
          <div className="container-luxury">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-caption text-primary mb-4">Get In Touch</p>
              <h2 className="text-headline">Contact Us</h2>
              <p className="text-body-large text-muted-foreground mt-4">
                For general inquiries, appointments, and feedback
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div>
                <h3 className="font-serif text-xl mb-4">Visit Our Boutique</h3>
                <p className="text-muted-foreground mb-2">
                  123 Fashion Street, Indiranagar<br />
                  Bengaluru, Karnataka 560038
                </p>
                <p className="text-muted-foreground mb-2">
                  Phone: +91 98765 43210<br />
                  Email: hello@chandanasboutique.com
                </p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Hours:</p>
                  <p className="text-sm">Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-sm">Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-4">Send Us a Message</h3>
                <p className="text-muted-foreground mb-4">
                  Have questions about our collections or need personalized styling advice? We're here to help.
                </p>
                <a href="/contact" className="btn-outline-luxury">Contact Form</a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Overview Section */}
        <section className="pt-10 pb-2 md:pt-12 md:pb-4">
          <div className="container-luxury text-center">
            <p className="text-caption text-primary mb-2">Welcome to Chandana's Boutique</p>
            <h2 className="text-headline mb-3">Your destination for exclusive fashion</h2>
            <p className="text-body-large text-muted-foreground mb-6">"Style that speaks volumes."</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/about" className="btn-outline-luxury"><span>About Us</span></a>
              <a href="/services" className="btn-outline-luxury"><span>Services/Products</span></a>
              <a href="/collections/new-arrivals" className="btn-luxury"><span>Shop Collections</span></a>
              <a href="/contact" className="btn-outline-luxury"><span>Contact</span></a>
            </div>
          </div>
        </section>
        
        {/* Instagram Feed */}
        <InstagramFeed />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
