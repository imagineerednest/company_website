"use client"
import { ArrowRight, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import React from 'react'
import { useState, useRef } from 'react';
import Lightbox from './Lightbox';

function Our_projects({projects, categories}: {projects: any[], categories: any[]}) {
  
      const [activeFilter, setActiveFilter] = useState('all');
      const [visibleCount, setVisibleCount] = useState(12);
      const [lb, setLb] = useState({ isOpen: false, images: [] as string[], index: 0, title: '' });
      const scrollContainerRef = useRef<HTMLDivElement>(null);
    
      const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
          const scrollAmount = 200;
          scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
          });
        }
      };
    
    const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.serviceType === activeFilter || p.category === activeFilter);

  const openLightbox = (image: string, extras: string[], alt: string) => {
    setLb({
      isOpen: true,
      images: [image, ...extras],
      index: 0,
      title: alt
    });
  };

  return (
    <>
     <section className="py-24">
          <div className="container mx-auto max-w-7xl ">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Projects</h2>
              <p className="text-muted">A showcase of our work across digital strategy, product engineering, and design systems.</p>
            </div>

            {/* Filters Slider for Mobile / Center Grid for Desktop */}
            <div className="relative mb-12  group/slider flex items-center w-full scrollbar-hide">
              {/* Desktop/Mobile Navigation Arrows (Visible only when needed/hovered) */}
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 z-20 p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg md:hidden flex items-center justify-center transition-all active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Scroll Container - Fixed clipping issue */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto w-full gap-3 scrollbar-hide snap-x scroll-smooth px-12 md:px-0 md:flex-wrap md:justify-center pb-4 md:pb-0"
              >
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id);
                      setVisibleCount(12);
                    }}
                    aria-label={`Filter by ${cat.label}`}
                    className={`shrink-0 snap-center px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${activeFilter === cat.id
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-card border-border hover:border-primary/50 text-muted hover:text-foreground'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 z-20 p-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg md:hidden flex items-center justify-center transition-all active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Subtle gradient to indicate scrollability on mobile - Adjusted width to match padding */}
              <div className="absolute right-0 top-0 bottom-4 w-12 bg-linear-to-l from-background via-background/60 to-transparent pointer-events-none md:hidden"></div>
              <div className="absolute left-0 top-0 bottom-4 w-12 bg-linear-to-r from-background via-background/60 to-transparent pointer-events-none md:hidden"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 animate-in fade-in px-3 duration-500">
              {filteredProjects.slice(0, visibleCount).map(proj => (
                <div
                  key={proj.id}
                  onClick={() => openLightbox(proj.image, proj.extraImages, proj.alt)}
                  className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm"
                >
                  <img src={proj.image} alt={proj.alt} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{proj.alt}</p>
                    <div className="mt-2 flex items-center text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {proj.tag || proj.category} <ArrowRight className="w-3 h-3 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="py-20 text-center border-2 border-dashed border-border rounded-3xl">
                <p className="text-muted text-lg">No projects found in this category yet.</p>
              </div>
            )}

            {visibleCount < filteredProjects.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + 16)}
                  className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  View More <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>
         <Lightbox 
        isOpen={lb.isOpen}
        onClose={() => setLb(prev => ({ ...prev, isOpen: false }))}
        images={lb.images}
        currentIndex={lb.index}
        setCurrentIndex={(index) => setLb(prev => ({ ...prev, index }))}
        title={lb.title}
      />
    </>
  )
}

export default Our_projects