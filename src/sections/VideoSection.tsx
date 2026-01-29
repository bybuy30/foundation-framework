const VideoSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our team</h2>
        <p className="text-muted-foreground mb-8">
          {/* Brief description of what the video showcases */}
        </p>

        {/* Video Container */}
        <div className="relative">
          <div className="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
            {/* Video Element - Embedded video or iframe placeholder */}
            {/* Features: Auto-play capability, Muted by default, Performance optimized */}
            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
              {/* Video player or play button icon */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  {/* Play icon would go here */}
                </div>
                <p className="text-white text-sm">Click to play video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
