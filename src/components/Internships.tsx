"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Award } from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder";
import { GradientButton } from "@/components/ui/gradient-button"; // ⭐ IMPORT
import { useIsMobile } from "@/hooks/use-mobile";

const internshipPrograms = [
  {
    title: "Full-Stack Development",
    duration: "3 Months",
    mentors: "Industry Experts",
    seats: "20 Available",
    description:
      "Master React, Node.js, and databases while building real-world projects.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "UI/UX Design",
    duration: "2 Months",
    mentors: "Senior Designers",
    seats: "15 Available",
    description:
      "Learn design thinking, prototyping, and create stunning user experiences.",
    tags: ["Figma", "Design Systems", "User Research"],
  },
  {
    title: "AI & Machine Learning",
    duration: "4 Months",
    mentors: "ML Engineers",
    seats: "15 Available",
    description:
      "Train models, build using LLMs, and understand the math behind intelligence.",
    tags: ["Python", "TensorFlow", "Generative AI"],
  },
  {
    title: "Cybersecurity",
    duration: "4 Months",
    mentors: "Security Specialists",
    seats: "10 Available",
    description:
      "Dive deep into ethical hacking, penetration testing, and security protocols.",
    tags: ["Ethical Hacking", "Network Security", "OWASP"],
  },
  {
    title: "Power BI & Data Analytics",
    duration: "2 Months",
    mentors: "Data Analysts",
    seats: "15 Available",
    description:
      "Transform data into actionable insights using Power BI, SQL, and advanced visualization techniques.",
    tags: ["Power BI", "SQL", "DAX"],
  },
];

const Internships = () => {
  const isMobile = useIsMobile();

  return (
    <section id="internships" className="py-4 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="neon-text">Internship Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get hands-on experience, work on real projects, and launch your tech
            career. <span className="text-accent font-semibold">Paid & Unpaid Tracks Available.</span>
          </p>
        </div>

        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {internshipPrograms.map((program, index) => {
            const cardContent = (
              <Card className="glass-panel p-6 glass-hover border-accent/20 h-full">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>

                {/* DETAILS */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">
                      {program.mentors}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">
                      {program.seats}
                    </span>
                  </div>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full glass-panel border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ⭐ APPLY BUTTON (GRADIENT) */}
                <Link to="/contact">
                  <GradientButton className="w-full rounded-full">
                    Apply Now
                  </GradientButton>
                </Link>
              </Card>
            );

            if (isMobile) {
              return cardContent;
            }

            return (
              <ElectricBorder
                key={program.title}
                color="#fb5a5aff"
                speed={2}
                chaos={0.2}
                thickness={3}
                className="animate-fade-in-up"
                style={{
                  borderRadius: 20,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {cardContent}
              </ElectricBorder>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Internships;
