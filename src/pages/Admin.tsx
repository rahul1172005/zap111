"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AdminNav from "@/components/AdminNav";
import DarkVeil from "@/components/DarkVeil";
import { Phone, User, Calendar, CheckCircle, Clock, X, MessageSquare, Shield } from "lucide-react";

interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  timestamp: any;
  status: "pending" | "contacted" | "completed" | "cancelled";
}

const Admin = () => {
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  const fetchQuoteRequests = async () => {
    try {
      const q = query(
        collection(db, "quote-requests"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const requests: QuoteRequest[] = [];

      querySnapshot.forEach((doc) => {
        requests.push({
          id: doc.id,
          ...doc.data()
        } as QuoteRequest);
      });

      setQuoteRequests(requests);
    } catch (error) {
      console.error("Error fetching quote requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateRequestStatus = async (id: string, newStatus: QuoteRequest["status"]) => {
    setUpdatingStatus(id);
    try {
      await updateDoc(doc(db, "quote-requests", id), {
        status: newStatus
      });

      // Update local state
      setQuoteRequests(prev =>
        prev.map(request =>
          request.id === id ? { ...request, status: newStatus } : request
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status");
    } finally {
      setUpdatingStatus(null);
    }
  };

  useEffect(() => {
    fetchQuoteRequests();
  }, []);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Unknown";

    let date: Date;
    if (timestamp.toDate) {
      date = timestamp.toDate();
    } else {
      date = new Date(timestamp);
    }

    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const getStatusColor = (status: QuoteRequest["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "contacted":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "cancelled":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getStatusIcon = (status: QuoteRequest["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="w-3 h-3" />;
      case "contacted":
        return <Phone className="w-3 h-3" />;
      case "completed":
        return <CheckCircle className="w-3 h-3" />;
      case "cancelled":
        return <X className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
        <DarkVeil
          hueShift={260}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
        />
        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading quote requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <DarkVeil
        hueShift={260}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={800.0}
        warpAmount={10}
        resolutionScale={1}
      />

      <AdminNav />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
                <Shield className="w-8 h-8 text-accent" />
                Quote <span className="neon-text">Control</span>
              </h1>
              <p className="text-muted-foreground">
                Manage quote requests from your website ({quoteRequests.length} total)
              </p>
            </div>

            <div className="glass-panel px-4 py-2 rounded-full border border-accent/20 flex items-center gap-2 text-sm text-accent">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Live Connection
            </div>
          </div>

          <div className="grid gap-6">
            {quoteRequests.length === 0 ? (
              <Card className="glass-panel border-accent/20 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Quote Requests Yet</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  When potential clients submit a quote request, they will appear here instantly.
                </p>
              </Card>
            ) : (
              quoteRequests.map((request) => (
                <Card key={request.id} className="glass-panel border-accent/10 hover:border-accent/30 transition-all p-6 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <User className="w-4 h-4 text-accent" />
                          </div>
                          <h3 className="font-semibold text-lg">{request.name}</h3>
                        </div>
                        <Badge variant="outline" className={`${getStatusColor(request.status)}`}>
                          <div className="flex items-center gap-1.5">
                            {getStatusIcon(request.status)}
                            <span className="uppercase tracking-wider text-[10px]">{request.status}</span>
                          </div>
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground/80 font-mono">{request.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {formatDate(request.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                      {request.status === "pending" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateRequestStatus(request.id, "contacted")}
                          disabled={updatingStatus === request.id}
                          className="glass-panel border-blue-500/20 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                        >
                          Mark Contacted
                        </Button>
                      )}

                      {(request.status === "pending" || request.status === "contacted") && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateRequestStatus(request.id, "completed")}
                          disabled={updatingStatus === request.id}
                          className="glass-panel border-green-500/20 text-green-500 hover:bg-green-500/10 hover:text-green-400"
                        >
                          Mark Completed
                        </Button>
                      )}

                      {request.status !== "cancelled" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateRequestStatus(request.id, "cancelled")}
                          disabled={updatingStatus === request.id}
                          className="glass-panel border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-400"
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;