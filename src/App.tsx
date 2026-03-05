/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// Google Drive Image IDs provided by the user
const IMAGE_IDS = [
  '1OT8BEuz5ZhTFT64m-T_RtPtvX7Dh0-n_',
  '1ekhUWtmR4i4QsaDW3FwmolE05dAE5EA0',
  '1Ip9LeUwwI4PFvraYfO-ZXOBtz7WzuNwy',
  '1Dcik_guASt5jyoTmuBcr7WYFmOSaabRe',
  '1hc8z33L_FXsuvu5_iHcYrXKLbkofxD9R',
  '1rL-Oe4UBmgi_l2EG4_tgtnKCS5b7wyNv',
  '1j25QQj3pxZlgoihrkJe3-TJQlemhZ7Ta',
  '1xONmPhvg7H5FV1JBz5_2uNhL095wNx-W',
  '1zwbPIEYFh5zROuKAmwesC4j_UqcnnPIe',
  '1GxD6y0hEVEZpTYxMKbvXG_EM7OrrYlv_',
  '1wRmzAJoUs4UjlwI2io7ErrpgDmLQcTWk',
  '18_2Dl-ixGzJQX8MYyGCNM1Cu4nFgySW8',
  '1RgkpDXlenL4rTFAjHOSSug0y_Uo0VeDd'
];

const getImageUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const PROJECTS = IMAGE_IDS.map((id, index) => ({
  id,
  title: `Project ${String(index + 1).padStart(2, '0')}`,
  category: ['Branding', 'Editorial', 'Typography', 'Digital'][index % 4],
  year: 2023 + (index % 3),
  url: getImageUrl(id)
}));

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full" />
            VANGUARD
          </motion.div>
          
          <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase opacity-70">
            {['Work', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                {item}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-4xl font-bold"
          >
            {['Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-emerald-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-6 text-emerald-500">
              Graphic Designer & Visual Artist
            </span>
            <h1 className="text-6xl md:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase mb-8">
              Crafting <br />
              <span className="text-transparent border-text">Digital</span> <br />
              Visions
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              Specializing in bold brand identities and high-impact editorial design for the modern era.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="#work" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-emerald-500 transition-all duration-300">
                View Catalogue
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-colors">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50" />
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        </motion.div>
      </section>

      {/* Work Gallery */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Catalogue</h2>
          </div>
          <p className="max-w-md text-zinc-400 text-lg">
            A curated selection of projects focusing on visual storytelling and brand architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-none relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900"
            >
              <img 
                src={project.url} 
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-70">
                  View Project <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/designer/800/800" 
              alt="Designer" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 border-[20px] border-emerald-500/20 m-8 rounded-2xl" />
          </div>
          
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-6 block">The Visionary</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
              Pushing the <br />
              Boundaries of <br />
              Visual Art
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                With over a decade of experience in the creative industry, I've collaborated with global brands to redefine their visual presence. My approach combines technical precision with artistic intuition.
              </p>
              <p>
                I believe that great design isn't just about aesthetics; it's about creating a language that resonates with the audience on a visceral level.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-white font-bold mb-2">Services</h4>
                <ul className="text-sm space-y-1 opacity-60">
                  <li>Brand Identity</li>
                  <li>Editorial Design</li>
                  <li>Typography</li>
                  <li>Digital Strategy</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Recognition</h4>
                <ul className="text-sm space-y-1 opacity-60">
                  <li>AIGA Design Award</li>
                  <li>Behance Featured</li>
                  <li>Adobe Creative Jam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-12">
            Let's <span className="text-emerald-500 italic">Create</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-16">
            Have a project in mind? Let's collaborate and build something extraordinary.
          </p>
          
          <a 
            href="mailto:hello@vanguard.design" 
            className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold hover:text-emerald-500 transition-colors border-b-4 border-white/10 pb-4"
          >
            hello@vanguard.design
            <ArrowRight size={40} />
          </a>

          <div className="flex justify-center gap-8 mt-24">
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase opacity-40">
          <p>© 2024 VANGUARD DESIGN STUDIO</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <p>Built with Passion</p>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                layoutId={selectedProject.id}
                className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900"
              >
                <img 
                  src={selectedProject.url} 
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="space-y-8">
                <div>
                  <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">{selectedProject.category} — {selectedProject.year}</span>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mt-4">{selectedProject.title}</h2>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  This project explores the intersection of minimalist aesthetics and functional design. Each element was meticulously crafted to ensure a cohesive brand experience across all touchpoints.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Branding', 'Layout', 'Color Theory', 'Art Direction'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-3 bg-emerald-500 text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
                  View Case Study <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          cursor: crosshair;
        }
      `}</style>
    </div>
  );
}
