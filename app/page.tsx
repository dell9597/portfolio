"use client";
import React from 'react';
import { 
  Code2, Monitor, Globe, Cpu, ArrowRight, 
  Mail, Github, ExternalLink, BookOpen, 
  Layers, MessageSquare, ChevronRight 
} from 'lucide-react';

export default function ProfessionalHub() {
  // ข้อมูลสมมติสำหรับผลงาน (คุณสามารถแก้เป็นงานจริงของคุณได้)
  const projects = [
    {
      title: "E-Commerce System",
      desc: "Custom WooCommerce with React integration for bulk management.",
      tags: ["React", "WooCommerce", "TypeScript"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      title: "Marketing Agency Site",
      desc: "High-performance WordPress site with custom GSAP animations.",
      tags: ["WordPress", "PHP", "GSAP"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100">
      
      {/* 1. Header Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-orange-200">
              T
            </div>
            <span className="text-xl font-bold tracking-tight">Theerapat.dev</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <a href="#work" className="hover:text-orange-600 transition-colors">Work</a>
            <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
            <a href="#blog" className="hover:text-orange-600 transition-colors">Insights</a>
            <a href="mailto:theerapat.traikaew@gmail.com" className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-all">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Agency Style */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Front-end <br />
              <span className="text-orange-600">Architect.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg italic border-l-4 border-orange-600 pl-6">
              "Building robust WordPress ecosystems and high-performance React applications for modern brands."
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-orange-100">
                View Projects <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-gradient-to-br from-orange-100 to-white rounded-[3rem] border border-orange-50 rotate-3 flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* ตกแต่งด้วย Code Snippet หรือภาพ Mockup */}
                <div className="absolute top-10 left-10 p-4 bg-white rounded-xl shadow-lg border border-slate-50 flex gap-2">
                    <Code2 className="text-orange-600" />
                    <span className="font-mono text-sm">npm run dev</span>
                </div>
                <div className="absolute bottom-10 right-10 p-4 bg-slate-900 text-white rounded-xl shadow-lg flex gap-2">
                    <Layers size={20} className="text-orange-400" />
                    <span className="text-sm font-semibold">React + TypeScript</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Services - What you actually do */}
      <section id="services" className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-black">Expertise.</h2>
              <p className="text-slate-500">How I can help your business grow.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Monitor />, title: "Custom WordPress", desc: "Performance-focused themes & plugins built from scratch." },
              { icon: <Code2 />, title: "React Applications", desc: "Scalable dashboards and complex interface systems." },
              { icon: <Globe />, title: "Responsive UI", desc: "Pixel-perfect conversion from Figma to clean, fast code." }
            ].map((s, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-orange-200 transition-all hover:shadow-2xl hover:shadow-orange-100">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Work - Showcase */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-black">Selected Work.</h2>
            <button className="text-orange-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
              All Projects <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/10] bg-slate-100 rounded-[2.5rem] overflow-hidden mb-6">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <div className="flex gap-3 mb-3">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Blog/Insights Section - The "Post" part */}
      <section id="blog" className="py-24 bg-orange-600 text-white px-6 rounded-[4rem] mx-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-black">Insights & Knowledge.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <span className="text-sm font-bold opacity-60">Mar 2026</span>
              <h4 className="text-xl font-bold mt-2 mb-4">How I optimized WooCommerce performance for a large agency.</h4>
              <div className="flex items-center gap-2 text-sm font-bold">
                Read Article <ArrowRight size={16} />
              </div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <span className="text-sm font-bold opacity-60">Feb 2026</span>
              <h4 className="text-xl font-bold mt-2 mb-4">30 Days of React Mastery: A progress report.</h4>
              <div className="flex items-center gap-2 text-sm font-bold">
                Read Article <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-2">Let's build something epic.</p>
            <p className="text-slate-500">Bangkok based, available worldwide.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-4 bg-slate-50 rounded-2xl hover:text-orange-600 transition-all"><Github /></a>
            <a href="#" className="p-4 bg-slate-50 rounded-2xl hover:text-orange-600 transition-all"><MessageSquare /></a>
            <a href="#" className="p-4 bg-slate-50 rounded-2xl hover:text-orange-600 transition-all"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}