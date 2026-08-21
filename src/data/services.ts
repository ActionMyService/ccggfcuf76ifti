export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
  featured: boolean;
  order: number;
}

export const services: Service[] = [
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    shortTitle: 'Graphic Design',
    description: 'Comprehensive visual communication design across all media. From editorial layouts to complex information systems, we create designs that communicate clearly and beautifully.',
    deliverables: [
      'Editorial & Publication Design',
      'Layout & Composition Systems',
      'Information & Data Visualization',
      'Print Design & Production',
      'Digital Asset Creation',
      'Design System Components',
    ],
    tools: ['InDesign', 'Illustrator', 'Photoshop', 'Figma', 'Principle'],
    icon: 'pen-tool',
    featured: true,
    order: 1,
  },
  {
    id: 'brand-identity',
    title: 'BRAND IDENTITY',
    shortTitle: 'Brand Identity',
    description: 'Strategic brand development that defines who you are, what you stand for, and how you show up in the world. Complete identity systems built on deep research and clear strategy.',
    deliverables: [
      'Brand Strategy & Positioning',
      'Logo Design & Mark Systems',
      'Visual Identity Systems',
      'Typography & Color Systems',
      'Brand Guidelines & Documentation',
      'Application Templates & Assets',
    ],
    tools: ['Figma', 'Illustrator', 'After Effects', 'Blender', 'Notion'],
    icon: 'sparkles',
    featured: true,
    order: 2,
  },
  {
    id: 'logo-design',
    title: 'LOGO DESIGN',
    shortTitle: 'Logo Design',
    description: 'Distinctive mark creation that captures essence in its simplest form. Logos designed for longevity, versatility, and immediate recognition across every touchpoint.',
    deliverables: [
      'Primary Logo & Variations',
      'Responsive Logo System',
      'Icon & Favicon Suite',
      'Animation-Ready Assets',
      'Usage Guidelines',
      'Trademark-Ready Files',
    ],
    tools: ['Illustrator', 'Figma', 'After Effects', 'Glyphs'],
    icon: 'square-pen',
    featured: true,
    order: 3,
  },
  {
    id: 'social-media-design',
    title: 'SOCIAL MEDIA DESIGN',
    shortTitle: 'Social Media',
    description: 'Scroll-stopping social content systems. Templates, campaigns, and visual strategies that build engagement and maintain brand consistency across every platform.',
    deliverables: [
      'Content Template Systems',
      'Campaign Visual Design',
      'Profile & Cover Optimization',
      'Story & Reel Templates',
      'Ad Creative Variations',
      'Content Calendar Frameworks',
    ],
    tools: ['Figma', 'Photoshop', 'After Effects', 'Illustrator', 'CapCut'],
    icon: 'share-2',
    featured: true,
    order: 4,
  },
  {
    id: 'poster-design',
    title: 'POSTER DESIGN',
    shortTitle: 'Poster Design',
    description: 'Large-format communication that commands attention. Exhibition posters, event campaigns, and artistic prints — designed for impact at any distance.',
    deliverables: [
      'Event & Campaign Posters',
      'Exhibition & Gallery Prints',
      'Typographic Poster Series',
      'Generative Poster Systems',
      'Print Production Files',
      'Large Format Optimization',
    ],
    tools: ['InDesign', 'Illustrator', 'Photoshop', 'Processing', 'After Effects'],
    icon: 'image',
    featured: true,
    order: 5,
  },
  {
    id: 'packaging-design',
    title: 'PACKAGING DESIGN',
    shortTitle: 'Packaging',
    description: 'Structural and visual packaging that protects, communicates, and sells. From concept to shelf-ready production files for physical and digital products.',
    deliverables: [
      'Structural Design & Dielines',
      'Visual Identity Application',
      'Material & Finish Specification',
      '3D Visualization & Mockups',
      'Print-Ready Production Files',
      'Vendor Coordination Support',
    ],
    tools: ['Illustrator', 'Cinema 4D', 'After Effects', 'Figma', 'Esko'],
    icon: 'box',
    featured: true,
    order: 6,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX DESIGN',
    shortTitle: 'UI/UX Design',
    description: 'Digital product design that balances beauty with usability. Interfaces for web, mobile, and emerging platforms — built on research, tested with users.',
    deliverables: [
      'User Research & Strategy',
      'Information Architecture',
      'Wireframes & Prototypes',
      'High-Fidelity UI Design',
      'Design System Creation',
      'Usability Testing & Iteration',
    ],
    tools: ['Figma', 'Principle', 'Framer', 'Storybook', 'Notion'],
    icon: 'layout',
    featured: true,
    order: 7,
  },
  {
    id: 'motion-graphics',
    title: 'MOTION GRAPHICS',
    shortTitle: 'Motion Graphics',
    description: 'Animation that brings static design to life. Brand motion systems, UI transitions, explainer videos, and kinetic typography — all choreographed with purpose.',
    deliverables: [
      'Brand Motion Systems',
      'UI/UX Animation Libraries',
      'Explainer & Promo Videos',
      'Kinetic Typography',
      'Micro-interaction Design',
      'Lottie & Web Animations',
    ],
    tools: ['After Effects', 'Cinema 4D', 'Houdini', 'Lottie', 'Rive'],
    icon: 'film',
    featured: true,
    order: 8,
  },
  {
    id: 'ai-creative-design',
    title: 'AI CREATIVE DESIGN',
    shortTitle: 'AI Creative',
    description: 'Generative design workflows that amplify human creativity. Custom AI pipelines for ideation, variation, and production — keeping creative direction firmly in human hands.',
    deliverables: [
      'Custom Model Fine-tuning',
      'Generative Asset Pipelines',
      'AI-Assisted Ideation Workshops',
      'Style Transfer Systems',
      'Automated Variation Generation',
      'Ethical AI Guidelines',
    ],
    tools: ['Midjourney', 'Stable Diffusion', 'Runway', 'ComfyUI', 'Python'],
    icon: 'cpu',
    featured: true,
    order: 9,
  },
  {
    id: 'advertising-design',
    title: 'ADVERTISING DESIGN',
    shortTitle: 'Advertising',
    description: 'Campaign design that cuts through noise. OOH, digital, print, and experiential advertising — concepted and crafted for measurable impact.',
    deliverables: [
      'Campaign Concept Development',
      'OOH & Billboard Design',
      'Digital Ad Creative Suites',
      'Print Advertising Layouts',
      'Experiential & Activation Design',
      'Performance Creative Variants',
    ],
    tools: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Figma'],
    icon: 'megaphone',
    featured: false,
    order: 10,
  },
  {
    id: 'typography',
    title: 'TYPOGRAPHY',
    shortTitle: 'Typography',
    description: 'Custom type design and typographic systems. From logotype refinement to complete font families — letters crafted with precision and personality.',
    deliverables: [
      'Custom Logotype Design',
      'Display Typeface Creation',
      'Typographic System Design',
      'Variable Font Development',
      'Font Engineering & QA',
      'Licensing & Distribution',
    ],
    tools: ['Glyphs', 'Illustrator', 'FontLab', 'After Effects', 'Processing'],
    icon: 'type',
    featured: false,
    order: 11,
  },
  {
    id: 'art-direction',
    title: 'ART DIRECTION',
    shortTitle: 'Art Direction',
    description: 'Visual leadership for complex creative projects. Photoshoot direction, film production design, and cross-disciplinary creative oversight.',
    deliverables: [
      'Creative Concept Leadership',
      'Photoshoot & Film Direction',
      'Production Design Oversight',
      'Cross-Channel Visual Consistency',
      'Creative Team Management',
      'Vendor & Talent Coordination',
    ],
    tools: ['Figma', 'Photoshop', 'Miro', 'Notion', 'Frame.io'],
    icon: 'palette',
    featured: false,
    order: 12,
  },
];

export const getFeaturedServices = (): Service[] => {
  return services.filter(s => s.featured).sort((a, b) => a.order - b.order);
};

export const getAllServices = (): Service[] => {
  return [...services].sort((a, b) => a.order - b.order);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(s => s.id === id);
};