import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const svbg = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%235cab0f' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E\")";

const InteractiveContentSection = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const typeTarget = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Typewriter
      tl.fromTo(
        typeTarget.current,
        { text: "", opacity: 0 },
        {
          text: "How HydroNest Works...",
          opacity: 1,
          duration: 1.5,
          ease: "none",
        }
      );

      // apply style 
      gsap.set(typeTarget.current, {
        fontFamily: "Source Sans 3, sans-serif",
        textAlign: "center",
        fontWeight: 700,
        fontSize: "3rem",
        color: "#10b981",
      });

      // Cards animation
      cards.forEach((card: any, i: number) => {
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: -15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: i % 2 === 0 ? -8 : 8,
            duration: 2,
            ease: "power2.out",
          },
          i * 1.5 + 0.5
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden text-slate-100"
      style={{
        backgroundImage: svbg,
        backgroundSize: "150px",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto pt-20 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-color-white">90%</h2>
            <p className="text-sm text-muted-foreground">Less Water Usage</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-color-white">365</h2>
            <p className="text-sm text-muted-foreground">Days Production</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-color-white">10x</h2>
            <p className="text-sm text-muted-foreground">Higher Yield</p>
          </div>
        </div>
      </div>

      
      <div ref={container} className="relative w-full h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">

          <div className="mb-16">
            <h2
              ref={typeTarget}
              className="text-3xl md:text-5xl font-bold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="card p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r from-black via-emerald-600 to-teal-700">
              <h3 className="text-2xl text-center font-semibold mb-2">Mission</h3>
              <p className="text-sm text-muted-foreground">
                We aim to revolutionize agriculture through advanced vertical farming,
                making sustainable food production efficient, scalable, and accessible
                to modern urban environments.
              </p>
            </div>

            <div className="card p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r from-black via-emerald-600 to-teal-700">
              <h3 className="text-2xl text-center font-semibold mb-2">Vision</h3>
              <p className="text-sm text-muted-foreground">
                Our vision is to create a future where fresh, nutritious food is
                available year-round, grown with minimal environmental impact
                using smart and sustainable systems.
              </p>
            </div>

            <div className="card p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r from-black via-emerald-600 to-teal-700">
              <h3 className="text-2xl text-center font-semibold mb-2">Scalability</h3>
              <p className="text-sm text-muted-foreground">
                Our vertically integrated systems allow efficient land usage,
                enabling farms to grow upwards while serving dense urban
                populations with fresh produce.
              </p>
            </div>

            <div className="card p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r from-black via-emerald-600 to-teal-700">
              <h3 className="text-2xl text-center font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                By combining nature with technology, we reduce water usage,
                eliminate harmful chemicals, and deliver cleaner, healthier
                food to communities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="title-boundary bottom-bar">
      </div>
    </section>
    
  );
};

export default InteractiveContentSection;
