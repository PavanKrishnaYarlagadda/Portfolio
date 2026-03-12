import { useEffect, useRef } from 'react';
import { Atom, Network, Cpu, GitMerge, ExternalLink } from 'lucide-react';

interface ResearchProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: 'Quantum Spectral Graph Analysis',
    description:
      'Estimating graph Laplacian eigenvalues using Quantum Phase Estimation (QPE) for small graph instances. This work explores how quantum computing can support spectral graph analysis and graph-structured problems through eigenvalue-based methods.',
    tags: ['Quantum Computing', 'QPE', 'Spectral Graph Theory'],
    icon: <Atom className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Graphs on Quantum Computers',
    description:
      'Studying how graph problems can be represented and analyzed on quantum computers. Focus areas include graph encoding, Laplacian-based representations, and the use of quantum algorithms for structural and spectral graph analysis.',
    tags: ['Graph Theory', 'Quantum Algorithms', 'Graph Encoding'],
    icon: <Network className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Quantum Algorithms for Combinatorial Problems',
    description:
      'Exploring quantum approaches for hard graph optimization problems such as Minimum Vertex Cover. This includes using Grover’s Algorithm and related techniques to investigate possible quantum speedups for combinatorial search problems.',
    tags: ['Grovers Algorithm', 'Minimum Vertex Cover', 'Optimization'],
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'Dynamic Graph Analytics and Core Maintenance',
    description:
      'Researching scalable graph algorithms for dynamic networks, including hierarchical core maintenance and related graph decomposition methods. The goal is to understand how large evolving graphs can be updated and analyzed efficiently.',
    tags: ['Dynamic Graphs', 'k-Core', 'Scalable Algorithms'],
    icon: <GitMerge className="w-6 h-6" />,
  },
];

const Research = () => {
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
      id="research"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-medium text-black tracking-tight mb-4">
            Research
          </h2>
          <p className="scroll-animate delay-100 text-lg text-[#5f6980] max-w-2xl mx-auto">
            Exploring the frontiers of computational science through quantum
            computing, graph theory, and high-performance computing.
          </p>
        </div>

        {/* Research Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {researchProjects.map((project, index) => (
            <div
              key={project.id}
              className={`scroll-animate delay-${(index + 1) * 100} group`}
            >
              <div className="h-full p-6 sm:p-8 bg-[#f6f7f8] rounded-2xl hover:bg-white hover:shadow-lg border border-transparent hover:border-[#e0e0e0] transition-all duration-300 hover-lift">
                {/* Icon */}
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-medium text-black mb-3 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>

                {/* Description */}
                <p className="text-[#5f6980] text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-[#282828] text-sm rounded-full border border-[#e0e0e0] group-hover:border-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Statement */}
        <div className="scroll-animate delay-500 mt-16 p-8 sm:p-10 bg-black rounded-2xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-medium mb-4">
              Research Philosophy
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              My research is driven by the belief that the next breakthroughs in
              computational science will come from the convergence of quantum
              computing, advanced graph algorithms, and high-performance
              computing. I strive to develop practical solutions that bridge
              theoretical advances with real-world applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
