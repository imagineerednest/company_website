'use client';
import React, { useEffect, useState } from 'react';
import Owners from '@/app/components/Owners';
import Link from 'next/link';
import { ArrowRight, Zap, Target, Eye, Code, Users, Lightbulb, Sparkles, Rocket, ChevronDown, Smile, RefreshCw, Headset, Wallet } from 'lucide-react';
import Counter from '@/app/components/Counter';
import Loading from '../loading';
import Image from 'next/image';

export default function About() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({ duration: 800, once: true, offset: 100 });
    }
  }, []);

  return (
    <>
    
    <AboutUS/>
    {/* --- VALUES GRID --- */}
        <section className="py-10 px-1  md:px-5 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Our Core Principles</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-2  lg:grid-cols-4 gap-16">
              {[
                {
                  title: 'New Ideas',
                  icon: Lightbulb,
                  color: 'text-blue-500',
                  desc: 'We use modern technology and creative thinking to build smart solutions for the future.'
                },
                {
                  title: 'Accuracy',
                  icon: Target,
                  color: 'text-purple-500',
                  desc: 'We focus on clean code, strong architecture, and well designed interfaces in every project.'
                },
                {
                  title: 'Honesty',
                  icon: Users,
                  color: 'text-pink-500',
                  desc: 'We build trust through clear communication, transparency, and ethical work.'
                },
                {
                  title: 'Productivity',
                  icon: Code,
                  color: 'text-emerald-500',
                  desc: 'We create fast, scalable software that runs smoothly and supports business growth.'
                },
              ].map((val, i) => (
                <div key={i} className="flex flex-col items-center group text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className={`mb-8 p-6 rounded-3xl bg-background border border-border shadow-xl group-hover:-translate-y-3 transition-all duration-500 ${val.color}`}>
                    <val.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl  font-black mb-3">{val.title}</h3>
                  <p className="text-sm md:flex hidden text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    <div className="min-h-screen mt-10 w-full overflow-hidden bg-background text-foreground selection:bg-blue-500/30">
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .light .glass-card {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

        {/* --- NEW HERO SECTION: DUAL IMAGE BOX LAYOUT --- */}
     {/* --- STATS BAR --- */}
        <div className="py-12 border-y border-border bg-card/30 backdrop-blur-sm">
          <Counter />
        </div>
        
      

       

    
        



     
    </div>
    </>
  );
}







const features = [
  { icon: Smile, title: '100% Client Satisfaction', desc: 'Unlimited revisions until you are completely satisfied.' },
  { icon: RefreshCw, title: 'Agile Development Process', desc: 'Streamlined work, timely updates, clear communication.' },
  { icon: Headset, title: 'Post-Launch Support', desc: 'Dedicated maintenance and support for continued performance.' },
  { icon: Wallet, title: 'Competitive Pricing', desc: 'Enterprise‑level quality at startup‑friendly rates.' },
];

const AboutUS = () => {
  
  return (
    <section className="py-0 md:py-20 px-5 relative  mt-20 md:mt-5 md:bg-muted/5">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-10 md:pt-0">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            About Us
          </h2>

          <p className="mt-6 text-lg text-foreground/70 leading-relaxed text-justify">
            We are a team of passionate developers and designers who love building innovative software solutions. Started by two brothers with a passion for code and design, we've transformed into a specialized software house that treats every line of code like a piece of art.
          </p>

          <p className="mt-4 text-foreground/70 text-justify">
            We help businesses grow by providing digital tools that solve real problems and create measurable success through precision engineering.
          </p>

          {/* SERVICES LIST */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.icon className="text-primary w-5 h-5" />
                <span className="text-foreground font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-[250px] md:h-[500px] bg-blue-900 rounded-2xl">
          <Image
            src="/images/whitelogo.png" // 👉 put your image in public/images
            alt="Why Choose Us"
            fill
            className="object-contain w-full h-full rounded-3xl shadow-lg"
          />
        </div>

      </div>

    </section>

  );
};

