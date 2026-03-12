import { useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, BookOpen, ExternalLink } from 'lucide-react';

const Contact = () => {
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

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ypavankrishna',
      label: 'Connect on LinkedIn',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/ypavankrishna',
      label: 'View GitHub Profile',
    },
    {
      name: 'Google Scholar',
      icon: <BookOpen className="w-5 h-5" />,
      url: '#',
      label: 'Google Scholar (Coming Soon)',
    },
    {
      name: 'Portfolio',
      icon: <ExternalLink className="w-5 h-5" />,
      url: 'https://pavankrishna441.wixsite.com/my-site',
      label: 'View Portfolio',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-medium text-black tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="scroll-animate delay-100 text-lg text-[#5f6980] mb-12 max-w-2xl mx-auto">
          Interested in collaborating, discussing research, or connecting? I'd
          love to hear from you.
        </p>

        {/* Contact Info Cards */}
        <div className="scroll-animate delay-200 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {/* Email */}
          <a
            href="mailto:PavanKrishnaYarlagadda@my.unt.edu"
            className="group p-6 bg-[#f6f7f8] rounded-xl hover:bg-black hover:text-white transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white group-hover:bg-white/10 rounded-xl flex items-center justify-center text-black group-hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#5f6980] group-hover:text-gray-300 mb-1">
                  Email
                </p>
                <p className="font-medium text-black group-hover:text-white">
                  PavanKrishnaYarlagadda@my.unt.edu
                </p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="p-6 bg-[#f6f7f8] rounded-xl text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#5f6980] mb-1">Location</p>
                <p className="font-medium text-black">
                  University of North Texas
                </p>
                <p className="text-sm text-[#5f6980]">Denton, Texas, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Interests */}
        <div className="scroll-animate delay-300 mb-12">
          <h3 className="text-lg font-medium text-black mb-4">
            Let's Connect If You're Interested In:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Research in theoretical or quantum computer science',
              'Full stack/cloud development',
              'Collaborations in high-performance or scientific computing',
              'Graph theory applications',
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-[#f6f7f8] text-[#282828] text-sm rounded-lg border border-[#e0e0e0]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="scroll-animate delay-400">
          <p className="text-sm text-[#5f6980] mb-4">Find me on</p>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-2 px-5 py-3 bg-[#f6f7f8] text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
