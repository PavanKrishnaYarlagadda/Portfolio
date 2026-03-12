import { useEffect, useRef } from 'react';
import { ArrowDown, Atom, Network, Cpu } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 pb-16 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Name */}
        <h1 className="scroll-animate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight leading-tight mb-6">
          Pavan Krishna
          <br />
          Yarlagadda
        </h1>

        {/* Title */}
        <p className="scroll-animate delay-100 text-lg sm:text-xl md:text-2xl text-[#5f6980] font-normal mb-8">
          Ph.D Student at{' '}
          <span className="text-black font-medium">University of North Texas</span>
        </p>

        {/* Research Areas */}
        <div className="scroll-animate delay-200 flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f6f7f8] rounded-full">
            <Atom className="w-5 h-5 text-black" />
            <span className="text-sm sm:text-base text-[#282828] font-medium">
              Quantum Computing
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f6f7f8] rounded-full">
            <Network className="w-5 h-5 text-black" />
            <span className="text-sm sm:text-base text-[#282828] font-medium">
              Graph Theory
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f6f7f8] rounded-full">
            <Cpu className="w-5 h-5 text-black" />
            <span className="text-sm sm:text-base text-[#282828] font-medium">
              High-Performance Computing
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="scroll-animate delay-300 flex flex-wrap justify-center gap-4">
          <a
            href="#research"
            className="btn-primary inline-flex items-center gap-2"
          >
            View My Research
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg font-medium border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="scroll-animate delay-400 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5f6980] hover:text-black transition-colors duration-300 cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span className="text-sm">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
