"use client";
import React from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-[#C2410C]">THEERAPAT.</span>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#experience" className="hover:text-[#C2410C] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#C2410C] transition-colors">Skills</a>
            <a href="mailto:theerapat.traikaew@gmail.com" className="hover:text-[#C2410C]">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full">
              <span className="text-orange-700 text-sm font-bold tracking-wide uppercase">Front End Developer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Crafting <span className="text-[#C2410C]">Modern</span> Web Experiences
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto md:mx-0">
              Front-end developer with expertise in WordPress, React, and TypeScript. 
              Based in Bangkok, focused on building responsive and performant interfaces.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
               <a href="mailto:theerapat.traikaew@gmail.com" className="flex items-center gap-2 bg-[#C2410C] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#9A3412] transition-all shadow-lg shadow-orange-200">
                <Mail size={18} /> Let's Talk
              </a>
              <div className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium">
                <MapPin size={18} className="text-orange-600" /> Bangkok, TH
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-orange-100 rounded-2xl">
              <Briefcase className="text-[#C2410C]" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Work History</h2>
          </div>

          <div className="space-y-12">
            {/* Job 1 */}
            <div className="group relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-slate-100">
              <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full bg-orange-600 border-4 border-white ring-1 ring-orange-200" />
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Front End Web Developer</h3>
                  <p className="text-orange-700 font-semibold">Neighbors and Friends Ltd.</p>
                </div>
                <span className="text-sm font-medium text-slate-400 mt-1">Sep 2023 — Present</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 text-[15px]">
                <li className="flex gap-2"><span>•</span> Custom WordPress & WooCommerce Development</li>
                <li className="flex gap-2"><span>•</span> React & TypeScript implementation</li>
                <li className="flex gap-2"><span>•</span> Performance & SEO Optimization</li>
                <li className="flex gap-2"><span>•</span> CSV Bulk Product Management Systems</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="group relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-slate-100">
              <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full bg-slate-300 border-4 border-white" />
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-medium opacity-80">Front End Web Developer (Intern)</h3>
                  <p className="text-slate-500 font-semibold">G-TECH & APPLICATION CO,LTD.</p>
                </div>
                <span className="text-sm font-medium text-slate-400 mt-1">Nov 2022 — Mar 2023</span>
              </div>
              <p className="text-slate-500">Developed seminar and event websites using Astro.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Code2 size={200} />
            </div>
            
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Code2 className="text-orange-500" /> Technical Arsenal
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div className="space-y-4">
                <h4 className="text-orange-500 font-bold uppercase tracking-wider text-xs">Core Tech</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  {['React', 'Next.js', 'TypeScript', 'JavaScript'].map(s => (
                    <span key={s} className="px-3 py-1 bg-white/10 rounded-lg border border-white/5">{s}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-orange-500 font-bold uppercase tracking-wider text-xs">E-Commerce</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  {['WordPress', 'WooCommerce', 'PHP'].map(s => (
                    <span key={s} className="px-3 py-1 bg-white/10 rounded-lg border border-white/5">{s}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-orange-500 font-bold uppercase tracking-wider text-xs">Design & Tools</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  {['Tailwind CSS', 'Figma', 'Adobe Illustrator', 'REST API'].map(s => (
                    <span key={s} className="px-3 py-1 bg-white/10 rounded-lg border border-white/5">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Theerapat Traikaew. Built with Next.js & Tailwind</p>
      </footer>
    </div>
  );
}