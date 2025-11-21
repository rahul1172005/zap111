import PixelCard from "@/components/PixelCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-featured online store with payment integration and admin dashboard.",
    metrics: "200% increase in sales",
  },
  {
    title: "Healthcare App",
    category: "Mobile & Web",
    description:
      "Patient management system with appointment scheduling and telemedicine.",
    metrics: "10,000+ active users",
  },
  {
    title: "Smart Home IoT",
    category: "IoT & Hardware",
    description:
      "Connected device ecosystem for home automation and energy monitoring.",
    metrics: "40% energy savings",
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description:
      "Analytics platform for financial data visualization and reporting.",
    metrics: "95% user satisfaction",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="neon-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses
            transform digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <PixelCard
              key={project.title}
              variant="pink"
              className="group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs rounded-full border border-accent/40 bg-background/60">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-accent/20">
                  <p className="text-sm text-accent font-semibold">
                    {project.metrics}
                  </p>
                </div>
              </div>
            </PixelCard>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
