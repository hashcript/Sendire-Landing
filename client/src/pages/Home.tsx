import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { 
  Code2, 
  Wallet, 
  Building2, 
  Globe2, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built to match your specific financial workflows and business requirements."
    },
    {
      icon: Wallet,
      title: "Fintech Platform Development",
      description: "End-to-end development of modern fintech applications, from digital wallets to lending platforms."
    },
    {
      icon: Building2,
      title: "Core System Integrations",
      description: "Seamless integration with legacy banking cores and modern third-party financial services."
    },
    {
      icon: Globe2,
      title: "API Development",
      description: "Robust, secure API architectures facilitating open banking and partner ecosystem connectivity."
    },
    {
      icon: Server,
      title: "Cloud Architecture",
      description: "Scalable, resilient microservices infrastructure designed for high-volume financial transactions."
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description: "Engineering with a security-first mindset, ensuring compliance with PCI-DSS, GDPR, and financial regulations."
    }
  ];

  const industries = [
    "Fintech Startups",
    "Digital Banks & Neobanks",
    "Traditional Financial Institutions",
    "Payment Service Providers",
    "Lending & Credit Platforms",
    "Wealth & Investment Firms"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary bg-primary/10 rounded-full"
            >
              Innovate. Scale. Comply.
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary tracking-tight mb-8"
            >
              Building Secure, Scalable Software for <span className="text-primary">Financial Institutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We design and develop high-performance software solutions for fintechs, banks, and financial service providers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20">
                Talk to Our Experts
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact} className="w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white">
                Request Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Using Unsplash image for generic 'team/tech' vibe since no specific image provided */}
              {/* Modern office technology meeting */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Team collaborating on financial software"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white max-w-sm">
                <p className="font-bold text-2xl">Excellence in every line of code.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Trusted Technology Partner for Financial Services
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are a software development company specializing in building secure, reliable, and scalable solutions for fintech startups, banks, and enterprise financial institutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team combines deep technical expertise with a strong understanding of financial systems, regulatory requirements, and modern digital architecture. From core banking integrations to fintech platforms and custom enterprise systems, we help our clients transform ideas into production-ready solutions.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Security-First Development",
                  "Fintech & Banking Expertise",
                  "Scalable Architecture",
                  "Agile Delivery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              We build systems that are designed for performance, security, and long-term scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-secondary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
              Tailored solutions for every sector of the financial ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-medium text-lg">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Let’s Build the Future of Financial Technology
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you’re launching a new fintech product or modernizing existing banking systems, we’re ready to help you navigate the complexity of financial software development.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-secondary">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold text-lg">Consultation with Technical Experts</span>
                </div>
                <div className="flex items-center gap-4 text-secondary">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold text-lg">Detailed Project Estimation</span>
                </div>
                <div className="flex items-center gap-4 text-secondary">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold text-lg">Long-term Strategic Partnership</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl -z-10" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <span className="text-2xl font-bold font-display text-secondary tracking-tight">Sendire</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sendire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
