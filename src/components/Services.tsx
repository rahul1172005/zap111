import {
  Code2,
  Palette,
  Shield,
  Box,
  Cpu,
  Megaphone,
  Radio,
  Microscope,
  Wrench,
  Lightbulb,
  Users,
} from "lucide-react";

import PixelCard from "@/components/PixelCard";
import ShinyText from "@/components/ShinyText";

const services = [
  { icon: Code2, title: "Web Development", description: "Full-stack applications built with modern frameworks and best practices." },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that users love to interact with." },
  { icon: Shield, title: "Cybersecurity", description: "Robust security solutions to protect your digital assets." },
  { icon: Box, title: "3D Animation", description: "Stunning 3D visuals and animations for immersive experiences." },
  { icon: Cpu, title: "Hardware & IoT", description: "Embedded systems and IoT solutions for connected devices." },
  { icon: Megaphone, title: "Digital Marketing", description: "SEO, content strategy, and digital campaigns that convert." },
  { icon: Radio, title: "IoT Solutions", description: "Smart device integration and automation systems." },
  { icon: Microscope, title: "Bio-tech", description: "Technology solutions for healthcare and life sciences." },
  { icon: Wrench, title: "Hardware Projects", description: "Custom hardware design and development services." },
  { icon: Lightbulb, title: "Workshops", description: "Hands-on training sessions on cutting-edge technologies." },
  { icon: Users, title: "Consultancy", description: "Expert guidance for your technical projects and strategy." },
];

const Services = () => {
  return (
    <section id="services" className="py-0 relative">
      <div className="container mx-auto px-2 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Our <span className="neon-text">Services</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <ShinyText
              text="From concept to deployment, we deliver comprehensive solutions across multiple domains"
              speed={3}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <PixelCard
                key={service.title}
                variant="pink"
                className="group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* ✅ Icon style matched with Internships track cards */}
                  <span className="w-10 h-10 rounded-2xl glass-panel border border-accent/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-accent" />
                  </span>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </PixelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
