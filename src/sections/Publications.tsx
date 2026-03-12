import { useEffect, useRef } from 'react';
import { FileText, BookOpen, Calendar, Users } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: 'published' | 'in-review' | 'in-preparation';
  link?: string;
}

/*const publications: Publication[] = [
  // Placeholder for future publications
  {
    id: 1,
    title: 'Novel Quantum Algorithms for Graph Optimization Problems',
    authors: 'P. K. Yarlagadda, et al.',
    venue: 'Journal of Quantum Computing',
    year: '2025',
    status: 'in-preparation',
  },
  {
    id: 2,
    title: 'Parallel Graph Algorithms for Large-Scale Network Analysis',
    authors: 'P. K. Yarlagadda, et al.',
    venue: 'IEEE Transactions on Parallel and Distributed Systems',
    year: '2025',
    status: 'in-preparation',
  },
];*/

const Publications = () => {
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return (
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
            Published
          </span>
        );
      case 'in-review':
        return (
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full font-medium">
            In Review
          </span>
        );
      case 'in-preparation':
        return (
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
            In Preparation
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#f6f7f8]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-medium text-black tracking-tight mb-4">
            Publications
          </h2>
          <p className="scroll-animate delay-100 text-lg text-[#5f6980]">
            Academic papers and research contributions
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={pub.id}
              className={`scroll-animate delay-${(index + 1) * 100}`}
            >
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#e0e0e0] hover:border-black transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#f6f7f8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-black mb-2">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#5f6980]">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {pub.authors}
                        </span>
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(pub.status)}
                </div>

                <div className="flex flex-wrap items-center gap-4 ml-14 text-sm">
                  <span className="flex items-center gap-1 text-[#5f6980]">
                    <BookOpen className="w-4 h-4" />
                    {pub.venue}
                  </span>
                  <span className="flex items-center gap-1 text-[#5f6980]">
                    <Calendar className="w-4 h-4" />
                    {pub.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="scroll-animate delay-300 mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-[#e0e0e0]">
            <BookOpen className="w-5 h-5 text-[#5f6980]" />
            <span className="text-[#5f6980]">
              Publications coming soon — research in progress
            </span>
          </div>
        </div>

        {/* Research Areas */}
        <div className="scroll-animate delay-400 mt-16">
          <h3 className="text-xl font-medium text-black mb-6 text-center">
            Research Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Quantum Algorithms',
                description: 'Novel approaches to quantum optimization',
              },
              {
                title: 'Graph Theory',
                description: 'Network analysis and optimization',
              },
              {
                title: 'HPC Systems',
                description: 'Parallel and distributed computing',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="p-6 bg-white rounded-xl border border-[#e0e0e0] text-center"
              >
                <h4 className="font-medium text-black mb-2">{area.title}</h4>
                <p className="text-sm text-[#5f6980]">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
