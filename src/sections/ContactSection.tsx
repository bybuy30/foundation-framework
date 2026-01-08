/**
 * ContactSection Component
 * 
 * Section wrapper for the contact form with additional info.
 */

import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@hydronest.com",
      href: "mailto:info@hydronest.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Green Street, Farm City",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 8am - 6pm",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or interested in B2B partnerships? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Map placeholder - integrate Google Maps or similar
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
