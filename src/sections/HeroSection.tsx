/**
 * HeroSection Component
 * Sticky Video + Typing Animation Heading
 */

import { useEffect, useState } from "react";
import hydronestVideo from "@/assets/Video/Hydronest.mp4";
import { heroButtons } from "@/data/navigation";

const features = [
  {
    title: "Eat Fresh",
    description:
      "From harvest to your doorstep in under 24 hours. No long storage, no stale stock.",
  },
  {
    title: "Premium Packaging",
    description:
      "Thoughtfully designed packaging that protects freshness and elevates the experience.",
  },
  {
    title: "Quality First",
    description:
      "We don't cut corners, we perfect them. Quality isn't a feature; it's our standard.",
  },
];

// Typing animation config
const WORDS = ["Eat Healthy", "Hydroponics"];
const TYPING_SPEED = 90;     // ms per character
const BACKSPACE_SPEED = 60;  // ms per character
const HOLD_DURATION = 5000;  // 5 seconds

const HeroSection = () => {
  const [text, setText] = useState(WORDS[0]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timeout;
    let interval;

    const currentWord = WORDS[wordIndex];
    const nextWord = WORDS[(wordIndex + 1) % WORDS.length];

    // Hold current word
    timeout = setTimeout(() => {
      let i = currentWord.length;

      // Backspace
      interval = setInterval(() => {
        if (i > 0) {
          setText(currentWord.slice(0, i - 1));
          i--;
        } else {
          clearInterval(interval);
          let j = 0;

          // Type next word
          interval = setInterval(() => {
            if (j < nextWord.length) {
              setText(nextWord.slice(0, j + 1));
              j++;
            } else {
              clearInterval(interval);
              setWordIndex((prev) => (prev + 1) % WORDS.length);
            }
          }, TYPING_SPEED);
        }
      }, BACKSPACE_SPEED);
    }, HOLD_DURATION);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [wordIndex]);

  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ height: "140vh" }}
    >
      {/* Sticky Video Layer */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={hydronestVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Scrolling Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center -mt-[100vh]">
        {/* Heading */}
        <div className="h-[85vh] w-full flex flex-col justify-end items-center px-4">
          <h1
            className="w-screen text-[12vw] font-[700] tracking-tighter leading-[0.7] text-center uppercase whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {text}
          </h1>
          <div className="w-[60%] h-[1px] bg-white/30 mt-14" />
        </div>

        {/* Features */}
        <div className="w-full flex flex-col items-center pt-24 pb-26">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl text-center px-6 mb-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`px-10 py-4 flex flex-col items-center relative ${
                  index !== 0 ? "md:border-l md:border-white/20" : ""
                }`}
              >
                <h3 className="text-xl md:text-2xl font-urbanist font-bold mb-4 uppercase tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base font-urbanist font-light leading-relaxed opacity-80 text-white max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-8">
            {heroButtons.map((button) => (
              <a
                key={button.id}
                href={button.href}
                className="px-12 py-3.5 border border-white/40 rounded-full text-xs uppercase tracking-[0.4em] text-white hover:bg-white hover:text-black transition-all duration-700 backdrop-blur-md"
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
