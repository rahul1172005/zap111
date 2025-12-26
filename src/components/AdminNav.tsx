import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminNav = () => {
  const navItems = [
    { label: "Dashboard", href: "/admin" },
    { label: "Blog", href: "/admin/blog" },
    { label: "Internships", href: "/admin/internships" },
    { label: "Quotes", href: "/admin/quotes" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/login";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 glass-panel bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/admin" className="text-lg font-bold tracking-tight">
              Zapsters <span className="text-accent">Admin</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="destructive" size="sm" onClick={handleLogout} className="glass-panel border-red-500/30 text-red-400 hover:bg-red-500/10">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
