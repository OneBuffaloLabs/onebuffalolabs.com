import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center p-8 overflow-hidden bg-[var(--obl-dark-blue)] text-white"
      // The background gradient provides a subtle, dynamic visual element without complex animations.
      // This is styled directly as a `div` and blended for effect.
    >
      {/* Subtle, dynamic background element: Abstract gradient shapes */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at top left, var(--obl-blue) 0%, transparent 40%), radial-gradient(circle at bottom right, var(--obl-red) 0%, transparent 40%)",
          mixBlendMode: "lighten", // Ensures the colors blend attractively with the dark background
        }}
      ></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
        {/* Company Logo */}
        <div className="mb-4">
          {/* Replace src with your actual SVG path if `OneBuffaloLogo` is not a direct React component */}
          <Image
            src="/logos/one-buffalo-cartoon.svg" // Assuming the SVG is in your `public` folder
            alt="One Buffalo Labs Logo"
            width={150} // Adjust based on your SVG's intrinsic size and desired display size
            height={150}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" // Responsive sizing
          />
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          // For subtle fade-in and upward lift, you'd define keyframes in your `tailwind.config.js`
          // or `globals.css` and apply them here. Example class names are provided:
          // className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up-1"
        >
          Powering{" "}
          <span className="text-[var(--obl-blue)]">Buffalo&apos;s</span> Digital{" "}
          <span className="text-[var(--obl-red)]">Future.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90"
          // className="text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90 animate-fade-in-up-2"
        >
          We design, develop, and optimize websites and applications for
          businesses big and small, driving growth and efficiency with
          cutting-edge tech and AI.
        </p>

        {/* Call-to-Action Buttons */}
        <div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          // className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up-3"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-[var(--obl-red)] text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out
                       hover:bg-opacity-90 hover:scale-105" // Distinct hover effect
          >
            Get a Free Consultation
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-[var(--obl-blue)] text-[var(--obl-blue)] rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
                       hover:bg-[var(--obl-blue)] hover:text-white hover:scale-105" // Distinct hover effect
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
