"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Target, Rocket, Sparkles, Quote, Star } from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GradientButton } from "@/components/ui/gradient-button";
import DarkVeil from "@/components/DarkVeil";
import PixelCard from "@/components/PixelCard"; // PixelCard added
import { useIsMobile } from "@/hooks/use-mobile";

const teamMembers = [
  { name: "Sabari Raja M", role: "Founder & CEO", tag: "Vision, Strategy" },
  { name: "Rahul R", role: "Co-Founder & CTO ", tag: "Technical Lead" },
  { name: "Praveen S", role: "Co-Founder & CFO ", tag: "Finance and Sales" },
  { name: "Balakumaran", role: "Cybersecurity Lead", tag: "Red Team" },
  { name: "Praveen N", role: "3D & Motion Designer", tag: "3D & VFX" },
  { name: "Raghunandhan T", role: "Developer", tag: "FSD" },
  { name: "Sanjay Akash", role: "Developer", tag: "FSD" },
  { name: "Rithik Balaji G K", role: "UI/UX Designer", tag: "Creative" },
  { name: "Vishal R", role: "3D Designer", tag: "3D & VFX" },
];

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO with DarkVeil */}
      <section className="relative min-h-[80vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
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
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3">
              About Zapsters
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Built to <span className="neon-text">Lead</span>, Driven to{" "}
              <span className="neon-text">Create</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Zapsters is an education & IT solutions company on a mission to
              connect, upskill, and empower the next generation of builders — from{" "}
              <span className="text-accent">web engineering</span> and{" "}
              <span className="text-accent">UI/UX</span> to{" "}
              <span className="text-accent">cybersecurity</span>,{" "}
              <span className="text-accent">3D</span>, and{" "}
              <span className="text-accent">hardware projects</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <GradientButton className="rounded-full">
                  Join Our Community
                </GradientButton>
              </Link>

               <Link to="/services">
                 <Button variant="glass" size="lg" className="rounded-full">
                   Explore Our Services
                 </Button>
               </Link>
            </div>

            {/* Stats Row */}
            {!isMobile && (
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto text-center">
                <div className="glass-panel p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">17+</div>
                  <div className="text-xs text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">200+</div>
                  <div className="text-xs text-muted-foreground">
                    Students Trained
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">12</div>
                  <div className="text-xs text-muted-foreground">
                    Core Service Verticals
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MISSION & VISION – PixelCard */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PixelCard variant="pink" className="animate-fade-in-up h-full">
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  To reach every person on the internet and help them turn their
                  ideas into reality — whether it’s a startup, a portfolio, a
                  product, or a career transition.
                </p>
                <p className="text-sm text-muted-foreground">
                  We combine engineering, design, security, and storytelling
                  into end-to-end experiences that feel premium, futuristic, and
                  accessible.
                </p>
              </div>
            </PixelCard>

            <PixelCard variant="pink" className="animate-fade-in-up h-full">
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold">“Built to Lead.”</span> Zapsters
                  aims to be a global hub where ambitious minds learn, build,
                  launch, and collaborate — across tech, design, hardware, and
                  biotech.
                </p>
                <p className="text-sm text-muted-foreground">
                  We see a world where students, founders, and creators don’t just
                  consume technology — they architect it.
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION – 3 CARDS */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">
            Meet the <span className="neon-text">Founders</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ⭐ Sabari Raja M */}
            <Card className="glass-panel border-accent/20 p-6 md:p-8 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16 border border-accent/40 glass-panel">
                  <AvatarFallback className="text-xl bg-primary/20 text-foreground">
                    SR
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Sabari Raja M</h3>
                  <p className="text-sm text-accent">Founder & CEO</p>
                </div>
              </div>

               <p className="text-muted-foreground mb-4">
                 Sabari founded Zapsters to create a high-performance ecosystem
                 where students & creators get to build real, meaningful products —
                 not just theory. His work merges{" "}
                 <span className="text-accent">web engineering</span> and{" "}
                 <span className="text-accent">product strategy</span>.
               </p>

              <div className="flex flex-wrap gap-2 mb-4">
                 <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                   Full-Stack
                 </span>
                <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                  Product & UI/UX
                </span>
                <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                  Mentorship
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Quote className="w-4 h-4 mt-1 text-accent" />
                <p>“Zapsters is where ideas grow legs and start walking.”</p>
              </div>
            </Card>

            {/* ⭐ Rahul R — Co-Founder & CTO */}
            <Card className="glass-panel border-accent/20 p-6 md:p-8 animate-fade-in-up lg:delay-100">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16 border border-accent/40 glass-panel">
                  <AvatarFallback className="text-xl bg-primary/20 text-foreground">
                    RR
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Rahul R</h3>
                  <p className="text-sm text-accent">Co-Founder & CTO</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Rahul architects the core engineering foundation of Zapsters — from{" "}
                <span className="text-accent">full-stack systems</span> and{" "}
                <span className="text-accent">3D interfaces</span> to{" "}
                <span className="text-accent">AI & hardware-integrated products</span>.
                His work defines the technical direction and culture of the company.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                  Tech Architecture
                </span>
                <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                  React / Next.js
                </span>
                <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                  AI & IoT Systems
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Quote className="w-4 h-4 mt-1 text-accent" />
                <p>“Technology is a language — we use it to tell bold stories.”</p>
              </div>
            </Card>

            {/* ⭐ Praveen S — Co-Founder & MD */}
            <Card className="glass-panel border-accent/20 p-6 md:p-8 animate-fade-in-up lg:delay-200">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16 border border-accent/40 glass-panel">
                  <AvatarFallback className="text-xl bg-primary/20 text-foreground">
                    PS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Praveen S</h3>
                   <p className="text-sm text-accent">
                     Co-Founder & CFO
                   </p>
                </div>
              </div>

               <p className="text-muted-foreground mb-4">
                 Praveen leads the financial and sales engine of Zapsters —
                 ensuring stability, scalability, and smooth execution across all
                 service verticals. He bridges{" "}
                 <span className="text-accent">finance</span>,{" "}
                 <span className="text-accent">business</span>, and{" "}
                 <span className="text-accent">sales</span>.
               </p>

              <div className="flex flex-wrap gap-2 mb-4">
                 <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                   Finance & Sales
                 </span>
                <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                  Business Strategy
                </span>
                <span className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30">
                  Team Management
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Quote className="w-4 h-4 mt-1 text-accent" />
                <p>“Great ideas need great systems — and that’s what I build.”</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* “Why Zapsters” / Culture – PixelCards */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1.3fr] gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Why <span className="neon-text">Zapsters</span> Exists
              </h2>
              <p className="text-muted-foreground">
                We sit at the intersection of{" "}
                <span className="text-accent">education</span> and{" "}
                <span className="text-accent">execution</span>. Our ecosystem
                blends internships, services, workshops, and R&D-style projects so
                you can learn while building things that actually matter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <PixelCard variant="pink" className="p-0">
                  <div className="p-4 flex gap-3 items-start">
                    <Sparkles className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Real Projects, Not Dummy Labs
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Work on client-facing apps, security audits, hardware
                        prototypes, and more.
                      </p>
                    </div>
                  </div>
                </PixelCard>

                <PixelCard variant="pink" className="p-0">
                  <div className="p-4 flex gap-3 items-start">
                    <Users className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Community-Driven Growth
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Learn in squads, ship in teams, and build your portfolio
                        together.
                      </p>
                    </div>
                  </div>
                </PixelCard>

                <PixelCard variant="pink" className="p-0">
                  <div className="p-4 flex gap-3 items-start">
                    <Star className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Futuristic Aesthetic
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Bold, animated, neuromorphic UI with production-level
                        engineering underneath.
                      </p>
                    </div>
                  </div>
                </PixelCard>

                <PixelCard variant="pink" className="p-0">
                  <div className="p-4 flex gap-3 items-start">
                    <Rocket className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        Global-Ready Skillset
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Tech stack and workflows aligned with modern startups and
                        studios worldwide.
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MARQUEE */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                The <span className="neon-text">Core Team</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                A small, obsessed crew of makers, mentors, and problem-solvers.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="glass"
                size="icon"
                className="rounded-full h-8 w-8 text-xs"
                onClick={() => setDirection("left")}
                title="Scroll Left"
              >
                ◀
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="rounded-full h-8 w-8 text-xs"
                onClick={() => setIsPaused((p) => !p)}
                title={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? "▶" : "II"}
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="rounded-full h-8 w-8 text-xs"
                onClick={() => setDirection("right")}
                title="Scroll Right"
              >
                ▶
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden glass-panel border border-accent/20 rounded-2xl py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/60 to-transparent" />

            <div
              className="marquee flex gap-6"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
                animationDirection: direction === "left" ? "normal" : "reverse",
              }}
            >
              {[...Array(2)].map((_, loopIndex) => (
                <div className="flex gap-6" key={loopIndex}>
                  {teamMembers.map((member) => (
                    <Card
                      key={`${member.name}-${loopIndex}`}
                      className="glass-panel border-accent/30 px-4 py-3 min-w-[230px] flex items-center gap-3"
                    >
                      <Avatar className="w-9 h-9 glass-panel border border-accent/40">
                        <AvatarFallback className="text-xs bg-primary/20 text-foreground">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="truncate">
                        <div className="text-sm font-semibold truncate">
                          {member.name}
                        </div>
                        <div className="text-[11px] text-accent truncate">
                          {member.role}
                        </div>
                        <div className="text-[10px] text-muted-foreground truncate">
                          {member.tag}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Beyond the core team, Zapsters collaborates with mentors, alumni, and
            specialists across design, AI, cybersecurity, and biotech.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
