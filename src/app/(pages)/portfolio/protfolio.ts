import React from 'react';
import {Star, Zap, Globe, ShoppingBag, Palette, Code2, Layers, BarChart3} from 'lucide-react';

export const imagesRow1 = [
  {
    id: 'web-dev',
    title: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    icon:  React.createElement(Code2, { className: "w-5 h-5" }),
    description: 'Fast, scalable websites built with Next.js & React.',
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80',
    icon: React.createElement(Star, { className: "w-5 h-5" }),
    description: 'Logos, color systems, and brand kits that stick.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    icon: React.createElement(ShoppingBag, { className: "w-5 h-5" }),
    description: 'Conversion-focused storefronts and product pages.',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    icon: React.createElement(Layers, { className: "w-5 h-5" }),
    description: 'Interfaces that delight users and drive results.',
  },
];

export const imagesRow2 = [
  {
    id: 'landing',
    title: 'Landing Pages',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    icon: React.createElement(Globe, { className: "w-5 h-5" }),
    description: 'High-converting pages designed to impress at first scroll.',
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80',
    icon: React.createElement(Palette, { className: "w-5 h-5" }),
    description: 'Scalable component libraries for growing products.',
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    icon: React.createElement(BarChart3, { className: "w-5 h-5" }),
    description: 'Data-rich UIs that make complex info readable.',
  },
  {
    id: 'saas',
    title: 'SaaS Products',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&q=80',
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    description: 'Full-stack SaaS MVPs from wireframe to deployment.',
  },
];


/* ─────────────────────────────────────────────
   STATS
───────────────────────────────────────────── */
export const stats = [
  { value: '12+', label: 'Projects Completed' },
  { value: '5',   label: 'Core Technologies' },
  { value: '100%', label: 'Built from Scratch' },
  { value: '∞',   label: 'Ready for Your Idea' },
];

/* ─────────────────────────────────────────────
   TRUST BADGES
───────────────────────────────────────────── */
export const badges = [
  { text: 'Made in Pakistan 🇵🇰' },
  { text: 'Next.js + Tailwind' },
  { text: 'Open to New Clients' },
];


