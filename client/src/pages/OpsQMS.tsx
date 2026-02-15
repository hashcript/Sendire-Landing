import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const SECTION_IDS = [
  "why-exists",
  "what-it-does",
  "key-capabilities",
  "regulated-environments",
  "who-its-for",
  "vs-email-paper",
  "deployment",
  "faq",
  "why-choose",
  "take-control",
] as const;

export default function OpsQMS() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    window.location.assign("/#contact");
  };

  const SectionDivider = () => (
    <hr className="my-12 border-t border-border/60" aria-hidden />
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Link>

          {/* Hero: H1 + H2 (document structure) */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-3">
              Operations Queue Management System (OpsQMS)
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-secondary/90">
              Secure Operational Control for Regulated Institutions
            </h2>
          </motion.header>

          {/* Intro paragraphs (with bold as in doc) */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              <strong className="text-secondary">OpsQMS</strong> is a secure,
              enterprise-level platform designed to transform manual and email-driven
              operational processes into structured, controlled, and fully traceable
              workflows. By enforcing approval hierarchies, SLA monitoring, and
              real-time visibility, it minimizes fraud risk, improves accountability,
              and ensures audit readiness.
            </p>

            <p>
              Built by a software development company with deep understanding of
              governance, risk, and compliance, <strong className="text-secondary">OpsQMS</strong>{" "}
              transforms fragmented, manual workflows into a{" "}
              <strong className="text-secondary">
                centralized, secure, and fully auditable operational platform
              </strong>
              .
            </p>
            <p>
              <strong className="text-secondary">OpsQMS</strong> is not just
              automation — it is <strong className="text-secondary">governance by design</strong>.
            </p>
          </motion.section>

          <SectionDivider />

          {/* Why OpsQMS Exists */}
          <motion.section
            id="why-exists"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Why OpsQMS Exists
            </h2>
            <p className="text-muted-foreground mb-3">
              Most organizations still manage critical operational instructions
              using:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Emails and shared folders</li>
              <li>Paper-based approvals</li>
              <li>Manual follow-ups and trackers</li>
            </ul>
            <p className="text-muted-foreground mb-3">These methods create:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>High operational and fraud risk</li>
              <li>Weak audit evidence</li>
              <li>Delays and SLA breaches</li>
              <li>Limited management visibility</li>
              <li>Regulatory exposure</li>
            </ul>
            <p className="text-muted-foreground">
              <strong className="text-secondary">OpsQMS</strong>{" "}
              <strong className="text-secondary">eliminates these risks</strong> by
              embedding controls directly into daily operations.
            </p>
          </motion.section>

          <SectionDivider />

          {/* What OpsQMS Does */}
          <motion.section
            id="what-it-does"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-4">
              What OpsQMS Does
            </h2>
            <p className="text-muted-foreground mb-3">
              <strong className="text-secondary">OpsQMS</strong> provides a{" "}
              <strong className="text-secondary">
                single, controlled operational environment
              </strong>{" "}
              where all instructions:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Are securely received and registered</li>
              <li>Routed through predefined approval workflows</li>
              <li>Processed with enforced segregation of duties</li>
              <li>Tracked against SLAs in real time</li>
              <li>Permanently archived with full audit trails</li>
            </ul>
            <p className="text-muted-foreground">
              Every instruction is{" "}
              <strong className="text-secondary">
                visible, accountable, and traceable
              </strong>{" "}
              from start to finish.
            </p>
          </motion.section>

          <SectionDivider />

          {/* Key Capabilities (H2 + H3 subsections) */}
          <motion.section
            id="key-capabilities"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-8">
              Key Capabilities
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Controlled Workflow Management
                </h3>
                <p className="text-muted-foreground">
                  Enforced <strong className="text-secondary">Maker–Checker–Approver</strong>{" "}
                  workflows ensure instructions cannot be processed without
                  proper authorization.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Centralized Instruction & Document Management
                </h3>
                <p className="text-muted-foreground">
                  All operational instructions, documents, and supporting
                  evidence are stored securely in a centralized repository.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Complete Audit Trails
                </h3>
                <p className="text-muted-foreground mb-2">
                  Every action is automatically logged with:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-2">
                  <li>User identity</li>
                  <li>Timestamp</li>
                  <li>Action performed</li>
                </ul>
                <p className="text-muted-foreground">
                  This ensures{" "}
                  <strong className="text-secondary">
                    audit and inspection readiness at all times
                  </strong>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  SLA & Exception Monitoring
                </h3>
                <p className="text-muted-foreground">
                  Real-time tracking of turnaround times, delays, and exceptions
                  enables proactive management oversight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Management Dashboards
                </h3>
                <p className="text-muted-foreground mb-2">
                  High-level dashboards provide visibility into:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Volumes and workloads</li>
                  <li>Bottlenecks</li>
                  <li>Performance trends</li>
                  <li>Risk exposure</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Secure Access & Data Protection
                </h3>
                <p className="text-muted-foreground">
                  Role-based access controls, encryption, and secure
                  authentication protect sensitive operational and customer
                  data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Integration-Ready Architecture
                </h3>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-secondary">OpsQMS</strong> can integrate
                  with:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Core Banking Systems</li>
                  <li>AML & sanctions screening tools</li>
                  <li>ERP and enterprise platforms</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <SectionDivider />

          {/* Built for Regulated Environments */}
          <motion.section
            id="regulated-environments"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Built for Regulated Environments
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-secondary">OpsQMS</strong> is purpose-built
              for{" "}
              <strong className="text-secondary">
                regulated and risk-sensitive organizations
              </strong>
              , supporting:
            </p>
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Category
                    </th>
                    <th className="px-4 py-3 font-semibold text-secondary">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    { category: "OpsQMS supports", detail: "Strong operational risk management" },
                    { category: "OpsQMS supports", detail: "Governance and segregation of duties" },
                    { category: "OpsQMS supports", detail: "Audit and inspection readiness" },
                    { category: "OpsQMS supports", detail: "Data protection and confidentiality" },
                    { category: "OpsQMS supports", detail: "Business continuity and resilience" },
                    { category: "System aligns with", detail: "Central Banks and regulatory bodies expectations", strong: true },
                    { category: "System aligns with", detail: "Regional regulatory standards" },
                    { category: "System aligns with", detail: "International best practices for operational risk management" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/60 last:border-0 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-muted-foreground/90 whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className={`px-4 py-3 ${row.strong ? "font-semibold text-secondary" : ""}`}>
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          <SectionDivider />

          {/* Who OpsQMS Is For */}
          <motion.section
            id="who-its-for"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Who OpsQMS Is For
            </h2>
            <p className="text-muted-foreground mb-3">
              <strong className="text-secondary">OpsQMS</strong> is ideal for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Banks and Microfinance Institutions</li>
              <li>SACCOs and Financial Cooperatives</li>
              <li>Insurance Companies</li>
              <li>Payment Service Providers</li>
              <li>Investment and Asset Management Firms</li>
              <li>Regulated enterprises with high operational risk</li>
            </ul>
          </motion.section>

          <SectionDivider />

          {/* OpsQMS vs Email & Paper - comparison table */}
          <motion.section
            id="vs-email-paper"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">
              OpsQMS vs Email & Paper
            </h2>
            <div className="overflow-hidden border border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/70">
                    <th className="px-4 py-3 font-bold text-secondary border border-border">
                      Traditional Methods
                    </th>
                    <th className="px-4 py-3 font-bold text-secondary border border-border">
                      OpsQMS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Email-based approvals", "Enforced system workflows"],
                    ["Manual follow-ups", "Automated SLA tracking"],
                    ["Weak audit evidence", "Immutable audit trails"],
                    ["High fraud risk", "Segregation of duties"],
                    ["Limited visibility", "Real-time dashboards"],
                    ["Regulatory exposure", "Inspection-ready controls"],
                  ].map(([traditional, opsqms], i) => (
                    <tr key={i} className="bg-muted/50">
                      <td className="px-4 py-3 text-secondary border border-border">
                        {traditional}
                      </td>
                      <td className="px-4 py-3 text-secondary border border-border">
                        {opsqms}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          <SectionDivider />

          {/* Deployment Options */}
          <motion.section
            id="deployment"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Deployment Options
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "On-Premise Deployment",
                  desc: "Full control with data hosted within your environment",
                },
                {
                  title: "Secure Hosted Deployment",
                  desc: "Subject to regulatory and policy requirements",
                },
                {
                  title: "Scalable Architecture",
                  desc: "Supports phased implementation and future expansion",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <strong className="text-secondary">{item.title}</strong>
                  <span className="text-muted-foreground text-sm sm:ml-0">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          <SectionDivider />

          {/* FAQ - interactive accordion */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Frequently Asked Questions (FAQ)
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "Is OpsQMS a Core Banking replacement?",
                  a: "No. OpsQMS complements Core Banking Systems by managing operational instructions, approvals, and supporting documents outside transaction posting systems.",
                },
                {
                  q: "Can OpsQMS support audits and inspections?",
                  a: "Yes. OpsQMS provides complete, time-stamped audit trails and permanent record retention suitable for internal and external audits.",
                },
                {
                  q: "Where is data stored?",
                  a: "OpsQMS supports on-premise deployment and regulator-approved hosted environments, ensuring data residency compliance.",
                },
                {
                  q: "Can workflows be customized?",
                  a: "Yes. Workflows, roles, SLAs, and document types can be configured to match institutional policies.",
                },
                {
                  q: "Is OpsQMS scalable?",
                  a: "Yes. The system is designed to scale across branches, departments, and user volumes.",
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border/60 rounded-lg px-4 bg-white data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          <SectionDivider />

          {/* Why Choose OpsQMS from Us */}
          <motion.section
            id="why-choose"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28"
          >
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Why Choose OpsQMS from Us
            </h2>
            <p className="text-muted-foreground mb-4">
              As a{" "}
              <strong className="text-secondary">software development company</strong>
              , we do not deliver off-the-shelf tools.
              <br />
              We design{" "}
              <strong className="text-secondary">
                solutions aligned to your operational, regulatory, and governance
                realities
              </strong>
              .
            </p>
            <p className="text-muted-foreground mb-3">
              With <strong className="text-secondary">OpsQMS</strong>, you gain:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>A control framework embedded in software</li>
              <li>A system designed for auditors and regulators</li>
              <li>A scalable foundation for digital transformation</li>
            </ul>
          </motion.section>

          <SectionDivider />

          {/* Take Control of Your Operations - CTA */}
          <motion.section
            id="take-control"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-secondary mb-3">
              Take Control of Your Operations
            </h2>
            <p className="text-muted-foreground mb-2">
              Move beyond emails, spreadsheets, and manual approvals.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong className="text-secondary">OpsQMS</strong> gives management
              visibility, control, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="rounded-full px-6 border-primary/40 text-primary hover:bg-primary/10"
              >
                Talk to Our Solutions Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button> */}
            </div>
          </motion.section>
        </div>

        {/* Sticky table of contents - desktop */}
        <nav
          aria-label="On this page"
          className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-30 w-44"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            On this page
          </p>
          <ul className="space-y-1.5 text-sm">
            {[
              { id: "why-exists", label: "Why OpsQMS Exists" },
              { id: "what-it-does", label: "What It Does" },
              { id: "key-capabilities", label: "Key Capabilities" },
              { id: "regulated-environments", label: "Regulated Environments" },
              { id: "who-its-for", label: "Who It's For" },
              { id: "vs-email-paper", label: "OpsQMS vs Email & Paper" },
              { id: "deployment", label: "Deployment" },
              { id: "faq", label: "FAQ" },
              { id: "why-choose", label: "Why Choose Us" },
              { id: "take-control", label: "Take Control" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block py-1 rounded px-2 transition-colors ${
                    activeSection === id
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display text-secondary tracking-tight">
              Sendire
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sendire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
