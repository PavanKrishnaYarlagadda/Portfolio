import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#f6f7f8]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-medium text-black tracking-tight mb-8">
              About Me
            </h2>

            <div className="scroll-animate delay-100 space-y-6 text-[#5f6980] text-base sm:text-lg leading-relaxed">
              <p>
                I am a Ph.D. student in{' '}
                <span className="text-black font-medium">
                  Computer Science and Engineering
                </span>{' '}
                at the{' '}
                <span className="text-black font-medium">
                  University of North Texas
                </span>
                , specializing in Quantum Computing, High-Performance Computing,
                and Graph Theory under the guidance of{' '}
                <span className="text-black font-medium">Dr. Sanjukta Bhowmick</span>.
              </p>

              <p>
                My research interests lie at the intersection of theory and
                computation—particularly in exploring how quantum algorithms can
                solve complex graph problems more efficiently. I am passionate
                about advancing computational science through interdisciplinary
                research.
              </p>

              <p>
                Prior to my Ph.D., I completed my Master's in Computer Science
                at UNT, where I received the{' '}
                <span className="text-black font-medium">
                  Outstanding Master's Student in Computer Science
                </span>{' '}
                award. I also have professional experience as a Full Stack
                Developer and Software Engineer at companies like{' '}
                <span className="text-black font-medium">Amazon</span> and{' '}
                <span className="text-black font-medium">TCS</span>, where I
                worked with modern technologies including AWS, React, Node.js,
                Docker, and Kubernetes.
              </p>
            </div>

            {/* Key Interests */}
            <div className="scroll-animate delay-200 mt-10">
              <h3 className="text-lg font-medium text-black mb-4">
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Quantum Algorithms',
                  'Computational Complexity',
                  'Graph Theory',
                  'Parallel Computing',
                  'Network Optimization',
                  'Scientific Computing',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-white text-[#282828] text-sm font-medium rounded-lg border border-[#e0e0e0] hover:border-black transition-colors duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="scroll-animate delay-100 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm">
                <img
                  src="/research-illustration.jpg"
                  alt="Research illustration showing quantum computing and graph theory concepts"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black rounded-xl -z-10" />
            </div>

            {/* Quick Stats */}
            <div className="scroll-animate delay-300 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-xl">
                <GraduationCap className="w-6 h-6 text-black mb-2" />
                <span className="text-xl font-medium text-black">Ph.D.</span>
                <span className="text-sm text-[#5f6980]">In Progress</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl">
                <Award className="w-6 h-6 text-black mb-2" />
                <span className="text-xl font-medium text-black">Award</span>
                <span className="text-sm text-[#5f6980]">Outstanding MS</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl">
                <BookOpen className="w-6 h-6 text-black mb-2" />
                <span className="text-xl font-medium text-black">MS</span>
                <span className="text-sm text-[#5f6980]">Completed 2024</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl">
                <Users className="w-6 h-6 text-black mb-2" />
                <span className="text-xl font-medium text-black">Advisor</span>
                <span className="text-sm text-[#5f6980]">Dr. S. Bhowmick</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
