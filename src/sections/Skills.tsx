import { useEffect, useRef } from 'react';
import {
  Code,
  Atom,
  Cpu,
  GitBranch,
  Cloud,
  Database,
  Award,
  CheckCircle,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: <Code className="w-5 h-5" />,
    skills: ['Python', 'C/C++', 'JavaScript', 'SQL', 'MATLAB'],
  },
  {
    title: 'Quantum Computing',
    icon: <Atom className="w-5 h-5" />,
    skills: ['Qiskit', 'Quantum Algorithms', 'QAOA', 'Quantum Circuits'],
  },
  {
    title: 'High-Performance Computing',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['MPI', 'OpenMP', 'Parallel Algorithms', 'Scientific Computing'],
  },
  {
    title: 'Web Development',
    icon: <GitBranch className="w-5 h-5" />,
    skills: ['React.js', 'Node.js', 'HTML/CSS', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5" />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Data & Tools',
    icon: <Database className="w-5 h-5" />,
    skills: ['Git', 'Linux', 'Tableau', 'LaTeX', 'Jupyter'],
  },
];

const certifications = [
  {
    name: 'IBM Full Stack Software Developer',
    issuer: 'IBM',
  },
  {
    name: 'Diploma in Quantum Computing & Programming',
    issuer: 'QWorld',
  },
  {
    name: 'Introduction to Quantum Computing',
    issuer: 'Coursera',
  },
  {
    name: 'CS202: Discrete Structures',
    issuer: 'Saylor Academy',
  },
];

const topSkills = [
  'Quantum Computing',
  'Graph Theory',
  'Theoretical Computer Science',
];

const languages = [
  { name: 'English', level: 'Full Professional' },
  { name: 'Telugu', level: 'Native' },
  { name: 'Hindi', level: 'Native' },
];

const Skills = () => {
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
      id="skills"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#f6f7f8]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-medium text-black tracking-tight mb-4">
            Skills & Certifications
          </h2>
          <p className="scroll-animate delay-100 text-lg text-[#5f6980]">
            Technical expertise and professional credentials
          </p>
        </div>

        {/* Top Skills */}
        <div className="scroll-animate delay-100 mb-12">
          <h3 className="text-lg font-medium text-black mb-4 text-center">
            Top Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`scroll-animate delay-${(index + 1) * 100}`}
            >
              <div className="h-full p-6 bg-white rounded-xl border border-[#e0e0e0] hover:border-black transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#f6f7f8] rounded-lg flex items-center justify-center text-black">
                    {category.icon}
                  </div>
                  <h4 className="font-medium text-black">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#f6f7f8] text-[#282828] text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="scroll-animate delay-400">
            <h3 className="text-lg font-medium text-black mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#e0e0e0]"
                >
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-black text-sm">{cert.name}</p>
                    <p className="text-sm text-[#5f6980]">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="scroll-animate delay-500">
            <h3 className="text-lg font-medium text-black mb-4">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#e0e0e0]"
                >
                  <span className="font-medium text-black">{lang.name}</span>
                  <span className="text-sm text-[#5f6980] px-3 py-1 bg-[#f6f7f8] rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Award Highlight */}
            <div className="mt-6 p-5 bg-black rounded-xl text-white">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5" />
                <span className="font-medium">Award</span>
              </div>
              <p className="text-gray-300">
                Outstanding Master's Student in Computer Science
              </p>
              <p className="text-sm text-gray-400 mt-1">
                University of North Texas, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
