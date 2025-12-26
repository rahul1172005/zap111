import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import AdminNav from "@/components/AdminNav";
import { getBlogPosts } from "@/lib/blogService";
import { getContactSubmissions } from "@/lib/contactService";
import { blogPosts as staticBlogPosts } from "@/data/blogPosts";
import { Eye, Edit, Trash2, Users, MessageSquare, Calendar, Mail, Database } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contactSearchQuery, setContactSearchQuery] = useState("");

  const { data: firebaseBlogPosts = [], isLoading: blogLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: getBlogPosts,
  });

  const { data: contactSubmissions = [], isLoading: contactLoading } = useQuery({
    queryKey: ['contactSubmissions'],
    queryFn: getContactSubmissions,
  });

  // Use static data if Firebase is empty (investigating older data)
  const isUsingStaticData = firebaseBlogPosts.length === 0;
  const displayBlogPosts = isUsingStaticData ? staticBlogPosts : firebaseBlogPosts;

  const filteredPosts = displayBlogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredContacts = contactSubmissions.filter(contact =>
    contact.fullName.toLowerCase().includes(contactSearchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(contactSearchQuery.toLowerCase()) ||
    (contact.projectType && contact.projectType.toLowerCase().includes(contactSearchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <DarkVeil
        hueShift={200}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={800.0}
        warpAmount={10}
        resolutionScale={1}
      />

      <AdminNav />

      <section className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">Admin <span className="neon-text">Dashboard</span></h1>
                <p className="text-muted-foreground">Manage your content, inquiries, and data.</p>
              </div>
              {isUsingStaticData && (
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs">
                  <Database className="w-4 h-4" />
                  <span>Viewing Legacy/Static Data (Firebase Empty)</span>
                </div>
              )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="glass-panel p-6 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{displayBlogPosts.length}</p>
                    <p className="text-sm text-muted-foreground">Blog Posts</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{contactSubmissions.length}</p>
                    <p className="text-sm text-muted-foreground">Contact Forms</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{contactSubmissions.filter(c => c.newsletter).length}</p>
                    <p className="text-sm text-muted-foreground">Newsletter Subs</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {contactSubmissions.filter(c =>
                        c.submittedAt && new Date(c.submittedAt).toDateString() === new Date().toDateString()
                      ).length}
                    </p>
                    <p className="text-sm text-muted-foreground">Today's Forms</p>
                  </div>
                </div>
              </Card>
            </div>

            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="grid w-full grid-cols-2 glass-panel p-1">
                <TabsTrigger value="blog" className="data-[state=active]:bg-primary/20">Blog Posts</TabsTrigger>
                <TabsTrigger value="contacts" className="data-[state=active]:bg-accent/20">Contact Submissions</TabsTrigger>
              </TabsList>

              <TabsContent value="blog" className="mt-6 animate-fade-in-up">
                <Card className="glass-panel p-6 border-accent/10">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Blog Posts Management
                    </h2>
                    <Input
                      type="text"
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="max-w-md glass-panel border-white/10"
                    />
                  </div>

                  {blogLoading ? (
                    <div className="text-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading posts...</p>
                    </div>
                  ) : (
                    <div className="rounded-xl overflow-hidden border border-white/5">
                      <Table>
                        <TableHeader className="bg-white/5">
                          <TableRow className="border-white/10 hover:bg-transparent">
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Published</TableHead>
                            <TableHead>Data Source</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredPosts.map((post, idx) => (
                            <TableRow key={post.id || idx} className="border-white/10 hover:bg-white/5 transition-colors">
                              <TableCell className="font-medium max-w-[200px] truncate" title={post.title}>{post.title}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-primary/10 border-primary/20">{post.category}</Badge>
                              </TableCell>
                              <TableCell>{post.author.name}</TableCell>
                              <TableCell>
                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
                              </TableCell>
                              <TableCell>
                                {isUsingStaticData ? (
                                  <Badge variant="secondary" className="text-xs">Static File</Badge>
                                ) : (
                                  <Badge variant="default" className="bg-green-500/20 text-green-500 hover:bg-green-500/30 text-xs">Firebase</Badge>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-blue-400">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-yellow-400">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-red-400">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="contacts" className="mt-6 animate-fade-in-up">
                <Card className="glass-panel p-6 border-accent/10">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <Mail className="w-5 h-5 text-accent" />
                      Contact Form Submissions
                    </h2>
                    <Input
                      type="text"
                      placeholder="Search submissions..."
                      value={contactSearchQuery}
                      onChange={(e) => setContactSearchQuery(e.target.value)}
                      className="max-w-md glass-panel border-white/10"
                    />
                  </div>

                  {contactLoading ? (
                    <div className="text-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading submissions...</p>
                    </div>
                  ) : filteredContacts.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-white/10 rounded-xl">
                      <p className="text-muted-foreground">No submissions found.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto rounded-xl border border-white/5">
                      <Table>
                        <TableHeader className="bg-white/5">
                          <TableRow className="border-white/10 hover:bg-transparent">
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Project Type</TableHead>
                            <TableHead>Budget</TableHead>
                            <TableHead>Timeline</TableHead>
                            <TableHead>Submitted</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredContacts.map((contact) => (
                            <TableRow key={contact.id} className="border-white/10 hover:bg-white/5 transition-colors">
                              <TableCell className="font-medium">{contact.fullName}</TableCell>
                              <TableCell>{contact.email}</TableCell>
                              <TableCell>
                                {contact.projectType && <Badge variant="outline" className="border-accent/30 text-accent/80">{contact.projectType}</Badge>}
                              </TableCell>
                              <TableCell>{contact.budget}</TableCell>
                              <TableCell>{contact.timeline}</TableCell>
                              <TableCell>
                                {contact.submittedAt && new Date(contact.submittedAt).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-blue-400" title="View Details">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-green-400" title="Reply">
                                    <Mail className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;