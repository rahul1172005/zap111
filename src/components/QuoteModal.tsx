"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "quote-requests"), {
        name: name.trim(),
        phone: phone.trim(),
        timestamp: new Date(),
        status: "pending"
      });

      setIsSubmitted(true);
      setName("");
      setPhone("");

      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error saving quote request:", error);
      alert("Error submitting request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    setIsSubmitted(false);
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <Card className="relative z-10 glass-panel border-accent/20 p-6 w-full max-w-md mx-4 animate-fade-in-up">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          onClick={handleClose}
          disabled={isSubmitting}
        >
          <X className="w-4 h-4" />
        </Button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Get a Free Quote</h2>
              <p className="text-sm text-muted-foreground">
                Share your details and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                  className="glass-panel border-accent/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  disabled={isSubmitting}
                  className="glass-panel border-accent/20"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !name.trim() || !phone.trim()}
                className="w-full glass-panel border-accent/20 hover:bg-accent/10"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </>
        ) : (
          // Success State
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Request Submitted!</h3>
            <p className="text-muted-foreground">
              We'll contact you soon with a personalized quote.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default QuoteModal;