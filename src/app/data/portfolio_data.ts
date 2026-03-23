import { 
  Lightbulb, ClipboardList, PencilRuler, Code, 
  Smartphone, AppWindow, Palette, PenTool, 
  Sparkles, Box, Zap, MapPin, Globe, Share2, 
  BarChart, Users, Heart, Layout, Clipboard
} from "lucide-react";

export interface Project {
  id: number;
  serviceType: 'web' | 'mobile' | 'desktop' | 'design' | 'branding' | 'marketing' | 'graphic' |'real-estate';
  category: string;
  title: string;
  tag: string;
  image: string;
  extraImages: string[];
  alt?: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Dev' },
  { id: 'mobile', label: 'App Dev' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'design', label: 'UI/UX Design' },
  { id: 'graphic', label: 'Graphic Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'real-estate', label: 'Real Estate' },
];

export const ALL_PROJECTS: Project[] = [
  // Web Development
  // Real estate
  { id: 0, serviceType: 'web', category: 'real-estate', title: 'Real Estate App', tag: 'Web · Real Estate', image: '/images/sample/web-development/real_estate/designe6.png', extraImages: ['/images/sample/web-development/real_estate/designe6.1.png','/images/sample/web-development/real_estate/designe6.2.png','/images/sample/web-development/real_estate/designe6.3.png','/images/sample/web-development/real_estate/designe6.4.png','/images/sample/web-development/real_estate/deisnge6.5.png','/images/sample/web-development/real_estate/designe6.6.png','/images/sample/web-development/real_estate/designe6.7.png','/images/sample/web-development/real_estate/designe6.8.png'], alt: 'Real Estate App' },
  { id: 1, serviceType: 'web', category: 'real-estate', title: 'Real Estate App', tag: 'Web · Real Estate', image: '/images/sample/web-development/real_estate/designe7.png', extraImages: ['/images/sample/web-development/real_estate/designe7.1.png','/images/sample/web-development/real_estate/designe7.3.png','/images/sample/web-development/real_estate/designe7.4.png','/images/sample/web-development/real_estate/deisnge6.5.png','/images/sample/web-development/real_estate/designe7.6.png','/images/sample/web-development/real_estate/designe7.7.png','/images/sample/web-development/real_estate/designe7.8.png','/images/sample/web-development/real_estate/designe7.9.png','/images/sample/web-development/real_estate/designe7.10.png','/images/sample/web-development/real_estate/designe7.11.png'], alt: 'Real Estate App' },
  // E-commerce
  { id: 2, serviceType: 'web', category: 'ecommerce', title: 'E-commerce', tag: 'Web · E-commerce', image: '/images/sample/web-development/e-commerce/designe1.png', extraImages: ['/images/sample/web-development/e-commerce/designe1.1.png','/images/sample/web-development/e-commerce/designe1.2.png','/images/sample/web-development/e-commerce/designe1.3.png','/images/sample/web-development/e-commerce/designe1.4.png','/images/sample/web-development/e-commerce/designe1.5.png','/images/sample/web-development/e-commerce/designe1.6.png','/images/sample/web-development/e-commerce/designe1.7.png','/images/sample/web-development/e-commerce/designe1.8.png'], alt: 'E-commerce' },
  // Food
  { id: 3, serviceType: 'web', category: 'food', title: 'Food App', tag: 'Web · Food', image: '/images/sample/web-development/food/designe1.png', extraImages: ['/images/sample/web-development/food/designe1.1.png','/images/sample/web-development/food/designe1.2.png','/images/sample/web-development/food/designe1.3.png','/images/sample/web-development/food/designe1.4.png','/images/sample/web-development/food/designe1.5.png','/images/sample/web-development/food/designe1.6.png'], alt: 'Food App' },
  // Agriculture
  { id: 4, serviceType: 'web', category: 'agriculture', title: 'Agriculture', tag: 'Web · Agriculture', image: '/images/sample/web-development/agricultural/designe6.png', extraImages: ['/images/sample/web-development/agricultural/designe6.1.png', '/images/sample/web-development/agricultural/designe6.2.png', '/images/sample/web-development/agricultural/designe6.3.png','/images/sample/web-development/agricultural/designe6.4.png','/images/sample/web-development/agricultural/designe6.5.png','/images/sample/web-development/agricultural/designe6.6.png','/images/sample/web-development/agricultural/designe6.7.png','/images/sample/web-development/agricultural/designe6.8.png'], alt: 'Agriculture' },
  // Health
  { id: 5, serviceType: 'web', category: 'health', title: 'Health', tag: 'Web · Health', image: '/images/sample/web-development/health/designe1.png', extraImages: ['/images/sample/web-development/health/designe1.1.png','/images/sample/web-development/health/designe1.2.png','/images/sample/web-development/health/designe1.3.png','/images/sample/web-development/health/designe1.4.png','/images/sample/web-development/health/designe1.5.png','/images/sample/web-development/health/designe1.6.png'], alt: 'Health' },
  // Education
  { id: 6, serviceType: 'web', category: 'education', title: 'Education', tag: 'Web · Education', image: '/images/sample/web-development/education/designe1.png', extraImages: ['/images/sample/web-development/education/designe1.1.png','/images/sample/web-development/education/designe1.2.png','/images/sample/web-development/education/designe1.3.png','/images/sample/web-development/education/designe1.4.png','/images/sample/web-development/education/designe1.5.png','/images/sample/web-development/education/designe1.6.png','/images/sample/web-development/education/designe1.7.png','/images/sample/web-development/education/designe1.8.png','/images/sample/web-development/education/designe1.9.png','/images/sample/web-development/education/designe1.10.png','/images/sample/web-development/education/designe1.11.png','/images/sample/web-development/education/designe1.12.png','/images/sample/web-development/education/designe1.13.png','/images/sample/web-development/education/designe1.14.png','/images/sample/web-development/education/designe1.15.png','/images/sample/web-development/education/designe1.16.png','/images/sample/web-development/education/designe1.17.png'], alt: 'Education' },
  // { id: 2, serviceType: 'web', category: 'food', title: 'Food App', tag: 'Web · Food', image: '/images/sample/web-development/food/designe1.jpg', extraImages: ['/images/sample/web1.2.jpg'], alt: 'Food App' },
  // { id: 3, serviceType: 'web', category: 'food', title: 'Restaurant Website', tag: 'Web · Food', image: '/images/sample/web-development/food/designe2.jpg', extraImages: ['/images/sample/web2.2.jfif'], alt: 'Restaurant Website' },
  // { id: 4, serviceType: 'web', category: 'food', title: 'Gourmet Site', tag: 'Web · Food', image: '/images/sample/web-development/food/designe3.jpg', extraImages: ['/images/sample/web2.2.jfif'], alt: 'Gourmet Site' },
  // { id: 5, serviceType: 'web', category: 'food', title: 'Food Delivery', tag: 'Web · Food', image: '/images/sample/web-development/food/designe4.jpg', extraImages: ['/images/sample/web2.2.jfif'], alt: 'Food Delivery' },
  // { id: 6, serviceType: 'web', category: 'food', title: 'Chef Portfolio', tag: 'Web · Food', image: '/images/sample/web-development/food/designe5.jpg', extraImages: ['/images/sample/web2.2.jfif'], alt: 'Chef Portfolio' },
  
  // { id: 71, serviceType: 'web', category: 'ecommerce', title: 'Online Shop', tag: 'Web · E-commerce', image: '/images/sample/web-development/e-commerce/designe1.jpg', extraImages: ['/images/sample/web1.2.jpg'], alt: 'Online Shop' },
  // { id: 7, serviceType: 'web', category: 'ecommerce', title: 'E-commerce Store', tag: 'Web · E-commerce', image: '/images/sample/web-development/e-commerce/designe2.jpg', extraImages: ['/images/portfolio/ecom1-2.jpg', '/images/portfolio/ecom1-3.jpg', '/images/portfolio/ecom1-4.jpg'], alt: 'E-commerce Store' },
  // { id: 8, serviceType: 'web', category: 'ecommerce', title: 'Digital Marketplace', tag: 'Web · E-commerce', image: '/images/sample/web-development/e-commerce/designe3.jpg', extraImages: ['/images/sample/web1.2.jpg'], alt: 'Digital Marketplace' },
  // { id: 9, serviceType: 'web', category: 'ecommerce', title: 'Fashion Store', tag: 'Web · E-commerce', image: '/images/sample/web-development/e-commerce/designe4.jpg', extraImages: ['/images/sample/web1.2.jpg'], alt: 'Fashion Store' },
  // { id: 10, serviceType: 'web', category: 'ecommerce', title: 'Tech Gadgets Site', tag: 'Web · E-commerce', image: '/images/sample/web-development/e-commerce/designe5.jpg', extraImages: ['/images/sample/web1.2.jpg'], alt: 'Tech Gadgets Site' },

  // { id: 11, serviceType: 'web', category: 'agriculture', title: 'Farm Management', tag: 'Web · Agriculture', image: '/images/sample/web-development/agricultural/designe1.jpg', extraImages: ['/images/portfolio/agri1-2.jpg', '/images/portfolio/agri1-3.jpg'], alt: 'Farm Management' },
  // { id: 12, serviceType: 'web', category: 'agriculture', title: 'Crop Monitoring', tag: 'Web · Agriculture', image: '/images/sample/web-development/agricultural/designe2.jpg', extraImages: ['/images/portfolio/agri2-2.jpg', '/images/portfolio/agri2-3.jpg', '/images/portfolio/agri2-4.jpg'], alt: 'Crop Monitoring' },
  // { id: 13, serviceType: 'web', category: 'agriculture', title: 'Agri Business', tag: 'Web · Agriculture', image: '/images/sample/web-development/agricultural/designe3.jpg', extraImages: ['/images/portfolio/agri2-2.jpg', '/images/portfolio/agri2-3.jpg', '/images/portfolio/agri2-4.jpg'], alt: 'Agri Business' },
  // { id: 14, serviceType: 'web', category: 'agriculture', title: 'Smart Farming', tag: 'Web · Agriculture', image: '/images/sample/web-development/agricultural/designe4.jpg', extraImages: ['/images/portfolio/agri2-2.jpg', '/images/portfolio/agri2-3.jpg', '/images/portfolio/agri2-4.jpg'], alt: 'Smart Farming' },
  // { id: 15, serviceType: 'web', category: 'agriculture', title: 'Farm Supply', tag: 'Web · Agriculture', image: '/images/sample/web-development/agricultural/designe5.jpg', extraImages: ['/images/portfolio/agri2-2.jpg', '/images/portfolio/agri2-3.jpg', '/images/portfolio/agri2-4.jpg'], alt: 'Farm Supply' },

  // { id: 17, serviceType: 'web', category: 'health', title: 'Telemedicine App', tag: 'Web · Health', image: '/images/sample/web-development/health/designe1.jpg', extraImages: ['/images/portfolio/health1-2.jpg', '/images/portfolio/health1-3.jpg'], alt: 'Telemedicine App' },
  // { id: 18, serviceType: 'web', category: 'health', title: 'Fitness Tracker', tag: 'Web · Health', image: '/images/sample/web-development/health/designe2.jpg', extraImages: ['/images/portfolio/health2-2.jpg', '/images/portfolio/health2-3.jpg', '/images/portfolio/health2-4.jpg'], alt: 'Fitness Tracker' },
  // { id: 19, serviceType: 'web', category: 'health', title: 'Hospital CRM', tag: 'Web · Health', image: '/images/sample/web-development/health/designe3.jpg', extraImages: ['/images/portfolio/health2-2.jpg', '/images/portfolio/health2-3.jpg', '/images/portfolio/health2-4.jpg'], alt: 'Hospital CRM' },
  // { id: 20, serviceType: 'web', category: 'health', title: 'Health Portal', tag: 'Web · Health', image: '/images/sample/web-development/health/designe4.jpg', extraImages: ['/images/portfolio/health2-2.jpg', '/images/portfolio/health2-3.jpg', '/images/portfolio/health2-4.jpg'], alt: 'Health Portal' },
  // { id: 21, serviceType: 'web', category: 'health', title: 'Patient Records', tag: 'Web · Health', image: '/images/sample/web-development/health/designe5.jpg', extraImages: ['/images/portfolio/health2-2.jpg', '/images/portfolio/health2-3.jpg', '/images/portfolio/health2-4.jpg'], alt: 'Patient Records' },

  // // Mobile App Development
  // { id: 101, serviceType: 'mobile', category: 'ios', title: 'Lifestyle App', tag: 'iOS · Flutter', image: '/images/sample/app-development/app1.jpg', extraImages: ['/images/sample/app-development/app2.jpg'], alt: 'Lifestyle App' },
  // { id: 102, serviceType: 'mobile', category: 'android', title: 'Fintech Solution', tag: 'Android · Kotlin', image: '/images/sample/app-development/app3.jpg', extraImages: ['/images/sample/app-development/app4.jpg'], alt: 'Fintech Solution' },
  // { id: 103, serviceType: 'mobile', category: 'cross', title: 'Social Network', tag: 'Cross · React Native', image: '/images/sample/app-development/app5.jpg', extraImages: ['/images/sample/app-development/app6.jpg'], alt: 'Social Network' },
  // { id: 104, serviceType: 'mobile', category: 'ios', title: 'Fitness Coach', tag: 'iOS · Swift', image: '/images/sample/app-development/app1.jpg', extraImages: ['/images/sample/app-development/app3.jpg'], alt: 'Fitness Coach' },
  // { id: 105, serviceType: 'mobile', category: 'android', title: 'Education App', tag: 'Android · Java', image: '/images/sample/app-development/app2.jpg', extraImages: ['/images/sample/app-development/app4.jpg'], alt: 'Education App' },

  // // Desktop Development
  // { id: 201, serviceType: 'desktop', category: 'windows', title: 'ERP Suite', tag: 'Windows · C#', image: '/images/sample/desktop-development/dt1.jpg', extraImages: ['/images/sample/desktop-development/dt2.jpg'], alt: 'ERP Suite' },
  // { id: 202, serviceType: 'desktop', category: 'mac', title: 'Design Suite', tag: 'macOS · Swift UI', image: '/images/sample/desktop-development/dt3.jpg', extraImages: ['/images/sample/desktop-development/dt4.jpg'], alt: 'Design Suite' },
  // { id: 203, serviceType: 'desktop', category: 'cross', title: 'Analytics Tool', tag: 'Cross · Electron', image: '/images/sample/desktop-development/dt5.jpg', extraImages: ['/images/sample/desktop-development/dt6.jpg'], alt: 'Analytics Tool' },

  // UI/UX Design
  { id: 301, serviceType: 'design', category: 'web', title: 'SaaS Dashboard', tag: 'UI/UX · Figma', image: '/images/sample/design/ux1.jpg', extraImages: ['/images/sample/design/ux2.jpg'], alt: 'SaaS Dashboard' },
  { id: 302, serviceType: 'design', category: 'mobile', title: 'Mobile Banking UX', tag: 'UI/UX · Mobile', image: '/images/sample/design/ux3.jpg', extraImages: ['/images/sample/design/ux4.jpg'], alt: 'Mobile Banking UX' },
  { id: 303, serviceType: 'design', category: 'system', title: 'Component Library', tag: 'UI/UX · Systems', image: '/images/sample/design/ux5.jpg', extraImages: ['/images/sample/design/ux6.jpg'], alt: 'Component Library' },

  // Graphic Design------------------------------------------------------------------------------
  { id: 401, serviceType: 'graphic', category: 'branding', title: 'Brand Identity', tag: 'Graphic · Branding', image: '/images/sample/graphic-design/gd1.jpg', extraImages: ['/images/sample/graphic-design/gd2.jpg'], alt: 'Brand Identity' },
  { id: 402, serviceType: 'graphic', category: 'social', title: 'Social Media Kit', tag: 'Graphic · Social', image: '/images/sample/graphic-design/gd3.jpg', extraImages: ['/images/sample/graphic-design/gd4.jpg'], alt: 'Social Media Kit' },
  { id: 403, serviceType: 'graphic', category: 'print', title: 'Packaging Design', tag: 'Graphic · Print', image: '/images/sample/graphic-design/gd5.jpg', extraImages: ['/images/sample/graphic-design/gd6.jpg'], alt: 'Packaging Design' },
  // Logo Designe 
  { id: 404, serviceType: 'graphic', category: 'logo_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/logo_designe/logo1.jpg', extraImages: ['/images/sample/graphic-design/logo_designe/logo1.jpg'], alt: 'Modern Logo Design' },
  { id: 405, serviceType: 'graphic', category: 'logo_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/logo_designe/logo2.jpg', extraImages: ['/images/sample/graphic-design/logo_designe/logo2.jpg'], alt: 'Modern Logo Design' },
  { id: 406, serviceType: 'graphic', category: 'logo_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/logo_designe/logo3.jpg', extraImages: ['/images/sample/graphic-design/logo_designe/logo3.jpg'], alt: 'Modern Logo Design' },
  { id: 407, serviceType: 'graphic', category: 'logo_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/logo_designe/logo4.jpg', extraImages: ['/images/sample/graphic-design/logo_designe/logo4.jpg'], alt: 'Modern Logo Design' },
  { id: 408, serviceType: 'graphic', category: 'logo_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/logo_designe/logo5.jpg', extraImages: ['/images/sample/graphic-design/logo_designe/logo5.jpg'], alt: 'Modern Logo Design' },
  { id: 409, serviceType: 'graphic', category: 'logo_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/logo_designe/logo6.jpg', extraImages: ['/images/sample/graphic-design/logo_designe/logo6.jpg'], alt: 'Modern Logo Design' },
  // Poster Designe 
  { id: 410, serviceType: 'graphic', category: 'poster_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/poster_designe/poster1.jpg', extraImages: ['/images/sample/graphic-design/poster_designe/poster1.jpg'], alt: 'Modern Logo Design' },
  { id: 411, serviceType: 'graphic', category: 'poster_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/poster_designe/poster2.jpg', extraImages: ['/images/sample/graphic-design/poster_designe/poster2.jpg'], alt: 'Modern Logo Design' },
  { id: 412, serviceType: 'graphic', category: 'poster_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/poster_designe/poster3.jpg', extraImages: ['/images/sample/graphic-design/poster_designe/poster3.jpg'], alt: 'Modern Logo Design' },
  { id: 413, serviceType: 'graphic', category: 'poster_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/poster_designe/poster4.jpg', extraImages: ['/images/sample/graphic-design/poster_designe/poster4.jpg'], alt: 'Modern Logo Design' },
  { id: 414, serviceType: 'graphic', category: 'poster_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/poster_designe/poster5.jpg', extraImages: ['/images/sample/graphic-design/poster_designe/poster5.jpg'], alt: 'Modern Logo Design' },

  // Banner Designe 
  { id: 415, serviceType: 'graphic', category: 'banner_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/banner_designe/banner1.jpg', extraImages: ['/images/sample/graphic-design/banner_designe/banner1.jpg'], alt: 'Modern Logo Design' },
  { id: 416, serviceType: 'graphic', category: 'banner_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/banner_designe/banner2.jpg', extraImages: ['/images/sample/graphic-design/banner_designe/banner2.jpg'], alt: 'Modern Logo Design' },
  { id: 417, serviceType: 'graphic', category: 'banner_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/banner_designe/banner3.jpg', extraImages: ['/images/sample/graphic-design/banner_designe/banner3.jpg'], alt: 'Modern Logo Design' },
  { id: 418, serviceType: 'graphic', category: 'banner_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/banner_designe/banner4.jpg', extraImages: ['/images/sample/graphic-design/banner_designe/banner4.jpg'], alt: 'Modern Logo Design' },
  { id: 419, serviceType: 'graphic', category: 'banner_design', title: 'Modern Logo Design', tag: 'Graphic · Logo', image: '/images/sample/graphic-design/banner_designe/banner5.jpg', extraImages: ['/images/sample/graphic-design/banner_designe/banner5.jpg'], alt: 'Modern Logo Design' },

];
