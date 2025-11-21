"use client";

import { useState } from "react";
import {
  Code2,
  Palette,
  Shield,
  Shapes,
  Cpu,
  Radio,
  FlaskConical,
  Briefcase,
  Sparkles,
  Rocket,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/gradient-button";
import DarkVeil from "@/components/DarkVeil";
import PixelCard from "@/components/PixelCard"; // PixelCard added

const serviceCategories = [
  "All",
  "Web & UI/UX",
  "Cybersecurity",
  "3D & Design",
  "Hardware / IoT / BioTech",
  "Growth & Marketing",
  "Training & Internships",
];

const services = [
  {
    title: "Custom Web Development",
    category: "Web & UI/UX",
    icon: Code2,
    badge: "Web Services",
    description:
      "High-performance websites, dashboards, and portals using modern stacks like React, Next.js, and Nest.js.",
    points: ["Responsive & fast", "API integrations", "SEO-ready architecture"],
  },
  {
    title: "UI/UX Design Systems",
    category: "Web & UI/UX",
    icon: Palette,
    badge: "UI/UX",
    description:
      "Neuromorphic, futuristic, and accessible product design — from wireframes to pixel-perfect screens.",
    points: ["Design systems", "Interactive prototypes", "Brand-aligned visuals"],
  },
  {
    title: "Security Assessment & Hardening",
    category: "Cybersecurity",
    icon: Shield,
    badge: "Cybersecurity",
    description:
      "Pen-testing, vulnerability assessment, hardening, and best-practice security guidelines for apps & infra.",
    points: ["VAPT reports", "Network & app security", "Compliance-focused"],
  },
  {
    title: "3D Animation & Motion",
    category: "3D & Design",
    icon: Shapes,
    badge: "3D Animation",
    description:
      "Cinematic 3D animations, product mockups, and motion graphics for websites, reels, and launch videos.",
    points: ["Product visualizations", "Brand intros", "Web 3D (Three.js)"],
  },
  {
    title: "Branding & Visual Design",
    category: "3D & Design",
    icon: Sparkles,
    badge: "Designing",
    description:
      "Logo, identity, social media kits, and presentation systems for startups and personal brands.",
    points: ["Logo & identity", "Social media kits", "Pitch decks"],
  },
  {
    title: "IoT & Hardware Projects",
    category: "Hardware / IoT / BioTech",
    icon: Cpu,
    badge: "Hardware & IoT",
    description:
      "End-to-end prototyping of IoT systems, embedded projects, and hardware-software integrations.",
    points: ["Sensor integration", "Microcontrollers", "Real-time dashboards"],
  },
  {
    title: "BioTech & Smart Health Prototypes",
    category: "Hardware / IoT / BioTech",
    icon: FlaskConical,
    badge: "Bio-Tech",
    description:
      "Concept-to-prototype solutions blending electronics, data, and healthcare/biotech workflows.",
    points: ["Telemedicine flows", "Smart monitoring", "Research assistance"],
  },
  {
    title: "Workshops & Campus Programs",
    category: "Training & Internships",
    icon: Radio,
    badge: "Workshops",
    description:
      "Hands-on workshops for colleges on full-stack dev, cybersecurity, AI, IoT, and portfolio building.",
    points: ["Custom syllabi", "Project-based learning", "Certificates"],
  },
  {
    title: "Internships & Mentorship Tracks",
    category: "Training & Internships",
    icon: Briefcase,
    badge: "Internships",
    description:
      "Intensive internship and mentoring journeys aligned with real client work and project delivery.",
    points: ["Guided sprints", "1:1 reviews", "Portfolio-first focus"],
  },
  {
    title: "Digital Marketing & SEO",
    category: "Growth & Marketing",
    icon: Rocket,
    badge: "Growth",
    description:
      "End-to-end digital growth: SEO, content strategy, campaigns, and analytics dashboards.",
    points: ["SEO & on-page", "Content strategy", "Performance tracking"],
  },
  {
    title: "Consulting & Tech Roadmapping",
    category: "Growth & Marketing",
    icon: Calendar,
    badge: "Consultancy",
    description:
      "Strategic consultation to decide tech stacks, timelines, MVP features, and hiring/training plans.",
    points: ["MVP scoping", "Architecture decisions", "Roadmap planning"],
  },
];

const faqItems = [
  {
    q: "Do you work with both students and startups?",
    a: "Yes. We design separate tracks — mentorship-first for students and delivery-focused engagements for founders and businesses.",
  },
  {
    q: "Can you help with final-year or R&D-style projects?",
    a: "Absolutely. We work on hardware + software, IoT, cybersecurity, and biotech-aligned proofs-of-concept with proper documentation.",
  },
  {
    q: "How does the project onboarding process work?",
    a: "You submit the form, we schedule a quick discovery call, share a rough roadmap & quote, and then move into design/dev sprints.",
  },
];

const serviceTags = [
  "Web App / Website",
  "UI/UX Design",
  "Cybersecurity",
  "3D / Motion",
  "Digital Marketing",
  "IoT / Hardware",
  "BioTech Prototype",
  "Workshops",
  "Internship Program",
  "Consultancy",
];

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredServices = services.filter((service) => {
    const categoryMatch =
      selectedCategory === "All" || service.category === selectedCategory;
    const tagMatch =
      !selectedTag ||
      service.badge.toLowerCase().includes(selectedTag.toLowerCase());
    return categoryMatch && tagMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO / INTRO with DarkVeil */}
      <section className="relative min-h-screen pt-32 pb-12 flex items-center justify-center overflow-hidden">
        <DarkVeil
          hueShift={246}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.5}
          scanlineFrequency={800.0}
          warpAmount={17.3}
          resolutionScale={1}
        />

        {/* Gradient overlay above DarkVeil */}
        <div className="absolute inset-0 z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Content on top */}
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1.1fr] gap-10 items-center">
            {/* Left: Copy */}
            <div className="animate-fade-in-up">
              <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
                Services · Zapsters
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                From <span className="neon-text">Idea</span> to{" "}
                <span className="neon-text">Execution</span>, end-to-end.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                We blend engineering, design, security, hardware, and storytelling
                into one studio. Whether you’re a{" "}
                <span className="text-accent">student</span>,{" "}
                <span className="text-accent">founder</span>, or{" "}
                <span className="text-accent">team lead</span>, we help you build
                things that look cinematic and work at scale.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="glass-panel rounded-full px-4 py-2 text-xs flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-accent" />
                  <span>Neuromorphic · Futuristic · Bold</span>
                </div>
                <div className="glass-panel rounded-full px-4 py-2 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-accent" />
                  <span>Production-grade projects</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton
                  className="flex items-center gap-2"
                  onClick={() => {
                    const el = document.getElementById("service-form");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start a Project
                  <ChevronRight className="w-4 h-4" />
                </GradientButton>

                <Button
                  variant="glass"
                  size="lg"
                  className="rounded-full"
                  onClick={() => {
                    const el = document.getElementById("service-list");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse Services
                </Button>
              </div>
            </div>

            {/* Right: Mini highlight / steps */}
            <div className="space-y-4 animate-fade-in-up">
              <Card className="glass-panel border-accent/30 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                  How we work
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-semibold">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Discover</p>
                      <p>We understand your idea, constraints, and timelines.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-semibold">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Design & Plan
                      </p>
                      <p>We draft flows, UI, tech stack, and execution sprints.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-semibold">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Build & Ship</p>
                      <p>We build, iterate with you, and move to deployment.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel border-accent/20 p-4 text-xs space-y-2">
                <p className="font-semibold text-foreground text-sm">
                  Perfect for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Final-year + capstone projects</li>
                  <li>Early-stage startup MVPs</li>
                  <li>Portfolio & brand experiences</li>
                  <li>Campus workshops & internship cohorts</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="service-list" className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                Our <span className="neon-text">Service Stack</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                Choose the lane that matches your need — or tell us your idea and
                we’ll architect the right mix for you.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "hero" : "glass"}
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Tag filter row */}
          <div className="flex flex-wrap gap-2 mb-6">
            {serviceTags.map((tag) => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(active ? null : tag)}
                  className={`px-3 py-1 rounded-full border text-[11px] transition-all ${
                    active
                      ? "border-accent bg-accent/20 text-accent"
                      : "border-accent/30 bg-background/40 text-muted-foreground hover:border-accent/60"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Services grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No services match this filter. Try changing category or tags.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <PixelCard
                    key={service.title}
                    variant="pink"
                    className="group animate-fade-in-up cursor-pointer h-full"
                    style={{ animationDelay: `${idx * 0.06}s` }}
                  >
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-2xl glass-panel border border-accent/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-accent" />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {service.title}
                            </h3>
                            <p className="text-[11px] uppercase tracking-wide text-accent">
                              {service.badge}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>

                      <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="glass"
                        size="sm"
                        className="mt-auto w-fit rounded-full text-xs flex items-center gap-1"
                        onClick={() => {
                          const el = document.getElementById("service-form");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Request this service
                        <ChevronRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </PixelCard>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* REGISTRATION / PROJECT BRIEF FORM */}
      <section id="service-form" className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1.1fr] gap-10 items-stretch">
            {/* Left: Form intro & highlights */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Tell us what you want to <span className="neon-text">build</span>.
              </h2>
              <p className="text-sm text-muted-foreground">
                This isn’t a boring contact form. Treat it like a mini project brief.
                The more context you share, the better we can align timelines, teams,
                and budget for you.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <Card className="glass-panel border-accent/20 p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent mb-1">
                    Engagement Modes
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-semibold">Done-for-you</span>{" "}
                    builds,{" "}
                    <span className="text-foreground font-semibold">
                      guided internships
                    </span>{" "}
                    &{" "}
                    <span className="text-foreground font-semibold">
                      co-building
                    </span>{" "}
                    with your team.
                  </p>
                </Card>
                <Card className="glass-panel border-accent/20 p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-accent mb-1">
                    Response Time
                  </p>
                  <p className="text-muted-foreground">
                    We usually respond within{" "}
                    <span className="text-foreground font-semibold">
                      24–48 working hours
                    </span>{" "}
                    with next steps.
                  </p>
                </Card>
              </div>

              <ul className="text-xs text-muted-foreground space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                  <span>We can sign NDAs for sensitive or startup ideas.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                  <span>Student-friendly terms for academic & capstone projects.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                  <span>Global collaborations welcome (remote-friendly).</span>
                </li>
              </ul>
            </div>

            {/* Right: Form card */}
            <Card className="relative glass-panel border-accent/30 p-6 md:p-8 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 border border-accent/30 rounded-2xl opacity-40" />
              <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(circle_at_top,_rgba(255,0,80,0.2),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_60%)]" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-1">
                      Project / Service Request
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Fill this once. We’ll handle the complexity for you.
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-[10px] text-muted-foreground">
                    <span className="font-mono text-accent">
                      • • • Journey: 01 → 03
                    </span>
                    <span>Form · Call · Build</span>
                  </div>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submitted! Plug in your backend logic here.");
                  }}
                >
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Full Name
                      </label>
                      <Input
                        required
                        placeholder="Your name"
                        className="glass-panel border-accent/30"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="glass-panel border-accent/30"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Role */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        WhatsApp / Phone
                      </label>
                      <Input
                        placeholder="+91 ..."
                        className="glass-panel border-accent/30"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        You are a...
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        {["Student", "Startup / Founder", "Business / Org", "Other"].map(
                          (role) => (
                            <label
                              key={role}
                              className="flex items-center gap-2 glass-panel border border-accent/30 rounded-full px-2 py-1 cursor-pointer hover:border-accent/60"
                            >
                              <input
                                type="radio"
                                name="profile-role"
                                value={role}
                                className="accent-accent"
                                defaultChecked={role === "Student"}
                              />
                              <span className="truncate">{role}</span>
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Service chips */}
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">
                      What do you need help with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceTags.map((tag) => (
                        <button
                          type="button"
                          key={tag}
                          onClick={() =>
                            setSelectedTag((prev) => (prev === tag ? null : tag))
                          }
                          className={`px-3 py-1 rounded-full border text-[11px] transition-all ${
                            selectedTag === tag
                              ? "border-accent bg-accent/20 text-accent"
                              : "border-accent/30 bg-background/40 text-muted-foreground hover:border-accent/60"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Budget + Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Approx. budget / range
                      </label>
                      <Input
                        placeholder="e.g., ₹10k – ₹30k, or 'Not sure yet'"
                        className="glass-panel border-accent/30 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Ideal timeline
                      </label>
                      <Input
                        placeholder="e.g., 2 weeks, 1 month, ASAP"
                        className="glass-panel border-accent/30 text-xs"
                      />
                    </div>
                  </div>

                  {/* Row 5: Project description */}
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">
                      Tell us about your project / requirement
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share links, references, goals, or any constraints you have..."
                      className="w-full text-sm glass-panel border border-accent/30 rounded-xl bg-background/60 px-3 py-2 outline-none focus:border-accent resize-none"
                    />
                  </div>

                  {/* Row 6: Extras */}
                  <div className="flex flex-col gap-2 text-[11px] text-muted-foreground">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-accent" />
                      <span>
                        I’d like to receive updates and internship openings from
                        Zapsters on WhatsApp / email.
                      </span>
                    </label>
                    <p>
                      By submitting, you agree to be contacted for this enquiry. No
                      spam, ever.
                    </p>
                  </div>

                  <div className="flex justify-end pt-2">
                    <GradientButton
                      type="submit"
                      className="flex items-center gap-2"
                    >
                      Submit Request
                      <Rocket className="w-4 h-4" />
                    </GradientButton>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ / EXTRA INFO */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Questions before you <span className="neon-text">start?</span>
              </h3>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <Card
                    key={item.q}
                    className="glass-panel border-accent/20 p-4 text-sm"
                  >
                    <p className="font-semibold text-foreground mb-1">
                      {item.q}
                    </p>
                    <p className="text-muted-foreground text-xs">{item.a}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <Card className="glass-panel border-accent/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-1">
                  Ideal for
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Students who want guided but real-world project builds.</li>
                  <li>Founders who need a design + dev + security squad.</li>
                  <li>Colleges planning multi-day workshops or hackathons.</li>
                  <li>Brands needing cinematic web presence and content.</li>
                </ul>
              </Card>
              <Card className="glass-panel border-accent/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-1">
                  Tech & Domains
                </p>
                <p>
                  Web, UI/UX, cybersecurity, 3D, IoT, hardware, biotech-aligned
                  projects, digital marketing, and more. If it’s at the edge of tech
                  and creativity —{" "}
                  <span className="text-foreground font-semibold">we’re in.</span>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
