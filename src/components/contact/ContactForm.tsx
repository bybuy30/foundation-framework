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
      <div className="flex flex-col items-center justify-center min-h-[400px] text-white bg-[#4A613D] rounded-[2rem] p-12 text-center">
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
    <div className="w-full">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');`}
      </style>

      <div 
        className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center p-8 md:p-20 bg-cover bg-center rounded-[2rem] overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text */}
          <div className="text-white">
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Michroma', sans-serif" }}
            >
              Write us an E-mail for your Queries
            </h2>
          </div>

          {/* Right Side: Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg ml-auto">
            <input
              type="email"
              name="email"
              placeholder="Your E-mail..."
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/20 border border-white/10 rounded-full py-4 px-8 text-white placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md"
            />

            <textarea
              name="message"
              placeholder="Description..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-white/20 border border-white/10 rounded-[2.5rem] p-8 text-white placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md resize-none"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#838E74]/90 hover:bg-[#838E74] text-white px-12 py-3 rounded-full text-xl font-medium transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;