import ContactForm from "@/components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Only the banner remains */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;