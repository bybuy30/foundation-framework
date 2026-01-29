import blobImage from "../assets/images/blob.png";

const InteractiveContentSection = () => {
  return (
    /* overflow-hidden prevents horizontal scrollbars from the offset image */
    <section className="relative w-full min-h-screen px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      
      {/* Top Content Section */}
      <div className="max-w-6xl mx-auto w-full pt-20 md:pt-32 flex justify-end">
        <div className="max-w-xl space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At HydroNest, we believe the future of food lies in clean, controlled,
            and conscious farming. By combining technology with nature, we grow
            fresh produce that’s healthier for people and kinder to the planet.
          </p>

          <div className="w-20 h-[2px] bg-primary"></div>

          <div className="flex gap-60">
            <div>
              <p className="text-3xl font-bold text-primary">90%</p>
              <p className="text-sm text-muted-foreground">Less water usage</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">365</p>
              <p className="text-sm text-muted-foreground">
                Days of fresh produce
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Visual Section */}
      <div className="relative w-full flex flex-row justify-between items-end">
        {/* Left: Blob Image */}
        <img
          src={blobImage}
          alt="HydroNest visual"
          className="w-[90%] md:w-[75%] max-w-none -ml-24 md:-ml-35 -mb-20 object-contain transform translate-y-5 z-0"
        />

        {/* Right: Three styled list items beside the image */}
        <div className="hidden md:flex flex-col gap-10 transform -translate-y-[8rem] mr-10 lg:mr-32 max-w-[280px] z-10">
          
          {/* Item 1: Monitoring */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Mission
            </h3>
            <p className="text-xs justify-content text-muted-foreground leading-5">
              Mission to revolutionize agriculture through innovative vertical farming solutions that promote sustainability and accessibility. 
            </p>
          </div>

          {/* Item 2: Sustainability */}
          <div className="flex flex-col items-start gap-3">
             {/* Icon: Droplet/Recycle */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Vision
            </h3>
            <p className="text-xs text-muted-foreground leading-5">
              Vision to create a world where fresh, nutritious food is Vision to create a world where fresh, nutritious food is accessible to all, grown sustainably with minimal environmental impact.
            </p>
          </div>

          {/* Item 3: Scalability */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Scalability
            </h3>
            <p className="text-xs text-muted-foreground leading-5">
              Vertical integration allows us to grow upwards, saving land
              space while bringing fresh produce closer to urban communities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveContentSection;