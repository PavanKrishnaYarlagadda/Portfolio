import { useEffect, useRef, useState } from 'react';
import { Briefcase, ChevronDown, MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'University of North Texas',
    role: 'Teaching Assistant',
    duration: 'August 2025 - Present',
    location: 'Denton, Texas',
    type: 'work',
    description: [
      'Handling labs on core cybersecurity principles including CIA, privacy, authentication, encryption, and digital forensics',
      'Guiding students through hands-on labs on buffer overflow, metadata analysis, certificate validation, cryptography and network security',
      'Reinforcing theoretical concepts through practical demonstrations, lab evaluations, and one-on-one mentoring',
    ],
  },
  {
    id: 2,
    company: 'University of North Texas',
    role: 'Graduate Instructional Assistant',
    duration: 'August 2024 - December 2024',
    location: 'Denton, Texas',
    type: 'work',
    description: [
      'Assisted Professor Bahareh Dorri for Graduate course with 80 students',
      'Supported graduate-level instruction in regular expressions, finite automata, context-free grammars, Turing machines, complexity and computational theory',
      'Assisted with grading, clarifying complex theoretical concepts, and guiding students through problem-solving',
    ],
  },
  {
    id: 3,
    company: 'University of North Texas',
    role: 'Instructional Assistant - Algorithms',
    duration: 'January 2024 - July 2024',
    location: 'Denton, Texas',
    type: 'work',
    description: [
      'Served as Instructional Assistant for Professor Bahareh Dorri for Undergraduate course with 80 students',
      'Assisted in teaching core concepts of algorithm design and analysis: divide-and-conquer, greedy algorithms, dynamic programming, and graph algorithms',
      'Provided academic support through office hours, grading assignments, and mentoring students',
    ],
  },
  {
    id: 4,
    company: 'Amazon',
    role: 'Risk Analyst - IT Solutions (L3)',
    duration: 'October 2020 - September 2022',
    location: 'Hyderabad, India',
    type: 'work',
    description: [
      'Developed internal dashboards using Python, SQL, and JavaScript to automate fraud detection reports and optimize workflows',
      'Created internal tools using React.js and Node.js to visualize fraud trends, improving investigation efficiency',
      'Automated repetitive tasks by writing scripts in Python and SQL, reducing manual workload by 30%',
      'Collaborated with data science and engineering teams to refine fraud detection models using APIs and automation tools',
    ],
  },
  {
    id: 5,
    company: 'Tata Consultancy Services',
    role: 'Assistant System Engineer - Trainee',
    duration: 'January 2020 - September 2020',
    location: 'Kochi, India',
    type: 'work',
    description: [
      'Assisted senior engineers in system analysis, design, and development tasks',
      'Collaborated with the development team to implement software solutions and ensure their functionality and reliability',
      'Conducted system testing and debugging to identify and resolve issues',
    ],
  },
];

const education = [
  {
    id: 1,
    school: 'University of North Texas',
    degree: 'Ph.D. in Computer Science and Engineering',
    duration: 'August 2025 - May 2028 (Expected)',
    location: 'Denton, Texas',
  },
  {
    id: 2,
    school: 'University of North Texas',
    degree: 'Master of Science in Computer Science',
    duration: 'January 2023 - December 2024',
    location: 'Denton, Texas',
    award: 'Outstanding Master\'s Student in Computer Science',
  },
  {
    id: 3,
    school: 'Jawaharlal Nehru Technological University',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    duration: '2016 - 2020',
    location: 'Hyderabad, India',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1);

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

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-medium text-black tracking-tight mb-4">
            Experience
          </h2>
          <p className="scroll-animate delay-100 text-lg text-[#5f6980]">
            Professional journey in academia and industry
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="scroll-animate delay-100 text-xl font-medium text-black mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Work Experience
          </h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`scroll-animate delay-${(index + 1) * 100}`}
              >
                <div className="bg-[#f6f7f8] rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full p-5 sm:p-6 flex items-start justify-between text-left hover:bg-[#eef0f2] transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-black mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-[#5f6980] mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#5f6980]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5f6980] flex-shrink-0 ml-4 transition-transform duration-300 ${
                        expandedId === exp.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedId === exp.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-[#5f6980] text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="scroll-animate delay-200 text-xl font-medium text-black mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`scroll-animate delay-${(index + 3) * 100}`}
              >
                <div className="h-full p-5 bg-[#f6f7f8] rounded-xl hover:bg-white hover:border-black border border-transparent transition-all duration-300">
                  <h4 className="font-medium text-black mb-2">{edu.school}</h4>
                  <p className="text-sm text-[#282828] mb-2">{edu.degree}</p>
                  <div className="space-y-1 text-sm text-[#5f6980]">
                    <p className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </p>
                    <p className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </p>
                  </div>
                  {'award' in edu && (
                    <div className="mt-3 pt-3 border-t border-[#e0e0e0]">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-black text-white text-xs rounded-full">
                        <Briefcase className="w-3 h-3" />
                        {edu.award}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
