import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import leaf from "../assets/images/leafbg.png";

const AmbientParticles: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadAll(engine);
  }, []);

  const options = {
    fullScreen: { enable: false, zIndex: 1 },
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },

      shape: {
        type: "image",
        options: {
          image: [
            {
              src: leaf,
              width: 32,
              height: 32,
            },
          ],
        },
      },

      size: {
        value: { min: 12, max: 24 },
      },

      opacity: {
        value: { min: 0.4, max: 0.8 },
      },

      rotate: {
        value: { min: 0, max: 360 },
        direction: "random",
        animation: {
          enable: true,
          speed: 1.5,
        },
      },

      move: {
        enable: true,
        speed: { min: 0.5, max: 1.5 },
        direction: "bottom",
        straight: false,
        outModes: { default: "out" },
      },

      links: { enable: false },
      collisions: { enable: false },
    },

    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true,
      },
    },

    detectRetina: true,
  } as const;

  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Particles 
        id={`ambient-particles-${Math.random()}`}
        particlesInit={particlesInit} 
        options={options} 
      />
    </div>
  );
};

export default AmbientParticles;

