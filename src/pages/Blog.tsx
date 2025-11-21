import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { categories } from "@/data/blogPosts";
import { getBlogPosts } from "@/lib/blogService";

const newsUpdates = [
  {
    id: 1,
    label: "Update",
    text: "New internship batch opening soon — Web, UI/UX, Cybersecurity & 3D.",
  },
  {
    id: 2,
    label: "Event",
    text: "Zapsters workshop slots available for 2025 college fests and tech clubs.",
  },
  {
    id: 3,
    label: "Blog",
    text: "Fresh post: How to turn your final-year project into a real product.",
  },
  {
    id: 4,
    label: "Community",
    text: "Join our Discord to get early access to resources & internship drops.",
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: getBlogPosts,
  });

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, blogPosts]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="neon-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 md:mb-8">
              Insights, tutorials, and stories from our team of experts
            </p>

            {/* News Marquee (infinite scroll) */}
            <div className="mb-6">
              <div className="relative glass-panel border border-accent/25 rounded-full px-4 py-2 overflow-hidden">
                {/* Gradient masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/70 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/70 to-transparent" />

                <div className="marquee flex gap-6 whitespace-nowrap">
                  {[...Array(2)].map((_, loopIndex) => (
                    <div className="flex gap-6" key={loopIndex}>
                      {newsUpdates.map((item) => (
                        <div
                          key={`${item.id}-${loopIndex}`}
                          className="flex items-center gap-2 text-[11px] text-muted-foreground"
                        >
                          <span className="px-2 py-0.5 rounded-full border border-accent/40 bg-background/70 text-accent text-[10px] uppercase tracking-[0.18em]">
                            {item.label}
                          </span>
                          <span className="text-foreground/80">
                            {item.text}
                          </span>
                          <span className="mx-2 opacity-40">•</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 glass-panel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "hero" : "glass"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="animate-scale-in rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Loading posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <Card
                    className="glass-panel glass-hover border-accent/20 h-full flex flex-col animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* Cover Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg" />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Category Tag */}
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full glass-panel border border-accent/30 w-fit mb-4">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 text-foreground line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8 glass-panel">
                            <AvatarFallback className="text-xs bg-primary/20 text-foreground">
                              {post.author.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">
                            {post.author.name}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
