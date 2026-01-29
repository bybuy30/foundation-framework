import desImage from "../assets/images/des.png";

const OurStorySection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-row overflow-hidden bg-muted/50">
      
      {/* 1. Narrow Rectangle at the far left edge */}
      <div className="w-12 md:w-20 bg-[#4F8F7A] flex-shrink-0 z-20" />

      {/* 2. Main Content Area - flex-1 ensures it shares space with the image */}
      <div className="flex-1 flex flex-col justify-between py-10 px-10 md:px-20 z-10 min-w-0">
        
        {/* OUR STORY - Top Left */}
        <div className="mb-10">
          <h2 className="text-6xl md:text-8xl font-Orbitron tracking-tighter uppercase leading-none">
            Our <br /> Story
          </h2>
        </div>

        {/* 3. Paragraphs - max-w-4xl is the limit, but it will shrink if the image needs space */}
        <div className="flex flex-col gap-12 max-w-4xl w-full pb-10">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Planning</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our journey began with a vision to redefine urban agriculture through precise
              architectural planning and sustainable engineering. We focus on integrating 
              nature back into the city landscape by utilizing advanced hydroponic systems 
              that allow for year-round cultivation regardless of external environmental 
              constraints or seasonal changes. Every blueprint we create is a step toward 
              a more resilient urban ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Managing</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Every system is managed with data-driven accuracy, ensuring that the 
              resource cycle remains closed and efficient. We manage growth not just 
              for the plants, but for the community, providing local jobs and reducing 
              the carbon footprint associated with long-distance food transportation. 
              Our proprietary automation software monitors every nutrient drop in real-time, 
              ensuring peak harvest quality every single day of the year.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Marketing</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Transparency is our primary marketing tool. By showing exactly how and where 
              our food is grown, we build a trust-based relationship with every household 
              we serve. We believe that consumers deserve to know the story behind their 
              produce—from the initial seed to the final harvest—ensuring absolute 
              clarification in nutritional value and purity. Our brand is built on the 
              honesty of our harvest and the clarity of our process.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Full Image - Changed from absolute to a flex-basis width to prevent overlap */}
      <div className="hidden lg:flex flex-basis-1/3 xl:flex-basis-1/2 max-w-[40%] h-screen sticky top-0 items-center justify-end pr-4">
        <img
          src={desImage}
          alt="Our Story Visual"
          className="w-full h-auto max-h-[90vh] object-contain"
        />
      </div>
    </section>
  );
};

export default OurStorySection;