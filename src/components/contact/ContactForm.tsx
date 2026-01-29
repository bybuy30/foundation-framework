import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import contactBg from "@/assets/images/contact.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-[#4A613D] p-12 text-center">
        <CheckCircle className="w-16 h-16 mb-4 text-white" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="opacity-80 mb-6">Your query has been sent.</p>
        <button onClick={() => setIsSubmitted(false)} className="underline hover:opacity-80">
          Send another
        </button>
      </div>
    );
  }

  return (
    <section className="w-full">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');`}
      </style>

      {/* Main Background Container*/}
      <div
        className="relative w-full h-[450px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Dark Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Wrapper: Contains the padding so text doesn't touch the screen edge */}
        <div className="relative z-10 w-full px-8 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Headline */}
          <div className="text-white">
            <h2
              className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-2xl"
              style={{ fontFamily: "'Michroma', sans-serif" }}
            >
              Write us an E-mail for your Queries
            </h2>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg lg:ml-auto">
            <input
              type="email"
              name="email"
              placeholder="Your E-mail..."
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-8 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md transition-all"
            />

            <textarea
              name="message"
              placeholder="Description..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white/10 border border-white/20 rounded-[2rem] p-8 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md resize-none transition-all"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#838E74] hover:bg-[#94a182] text-white px-14 py-4 rounded-full text-xl font-medium transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center min-w-[160px]"
              >
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;