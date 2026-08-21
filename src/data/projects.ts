export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tools: string[];
  description: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  services: string[];
  challenge: string;
  solution: string;
  process: string[];
  result: string;
  featured: boolean;
  nextProject?: string;
}

export const projects: Project[] = [
  {
    id: 'orbital-brand',
    title: 'ORBITAL BRAND IDENTITY',
    category: 'Brand Identity',
    year: '2024',
    client: 'ORBITAL Studio',
    role: 'Creative Direction, Brand Design, Motion',
    tools: ['Figma', 'Illustrator', 'After Effects', 'Blender'],
    description: 'A complete brand identity system for a next-generation creative studio. The identity explores the intersection of orbital mechanics and digital craft, creating a visual language that feels both precise and organic.',
    thumbnail: '/projects/orbital-brand/thumb.jpg',
    heroImage: '/projects/orbital-brand/hero.jpg',
    gallery: [
      '/projects/orbital-brand/gallery-1.jpg',
      '/projects/orbital-brand/gallery-2.jpg',
      '/projects/orbital-brand/gallery-3.jpg',
      '/projects/orbital-brand/gallery-4.jpg',
    ],
    services: ['Brand Strategy', 'Logo Design', 'Visual System', 'Motion Identity', 'Guidelines'],
    challenge: 'Create a brand identity that communicates precision, creativity, and forward-thinking without relying on typical tech clichés. The identity needed to work across digital, print, and motion contexts while feeling distinctly human.',
    solution: 'Developed an orbital grid system based on planetary motion paths. The logo mark represents a stylized orbit path that can expand, contract, and evolve. The color system uses a deep space palette with a single electric accent. Typography pairs Syne (display) with Space Grotesk (UI) for a technical yet editorial feel.',
    process: [
      'Brand strategy workshop & competitive audit',
      'Concept development: 30+ logo explorations',
      'Orbital grid system design',
      'Color & typography system development',
      'Motion principles & animation guidelines',
      'Applications: digital, print, environmental',
      'Brand guidelines documentation (120+ pages)',
    ],
    result: 'The identity launched with a 340% increase in brand recognition metrics. The motion system was featured on Motion Design Awards. The orbital grid is now used as the foundation for all studio communications.',
    featured: true,
    nextProject: 'nexus-packaging',
  },
  {
    id: 'nexus-packaging',
    title: 'NEXUS PACKAGING SYSTEM',
    category: 'Packaging Design',
    year: '2024',
    client: 'NEXUS Beverages',
    role: 'Packaging Design, Art Direction, 3D Visualization',
    tools: ['Illustrator', 'Cinema 4D', 'After Effects', 'Figma'],
    description: 'A modular packaging system for a functional beverage brand. The design uses generative patterns based on molecular structures, creating unique variations for each flavor while maintaining brand cohesion.',
    thumbnail: '/projects/nexus-packaging/thumb.jpg',
    heroImage: '/projects/nexus-packaging/hero.jpg',
    gallery: [
      '/projects/nexus-packaging/gallery-1.jpg',
      '/projects/nexus-packaging/gallery-2.jpg',
      '/projects/nexus-packaging/gallery-3.jpg',
    ],
    services: ['Packaging Design', 'Structural Design', '3D Visualization', 'Print Production'],
    challenge: 'Design a packaging system for 12+ SKUs that feels premium and scientific yet approachable. Each flavor needed distinct visual identity while maintaining shelf impact as a cohesive family.',
    solution: 'Created a generative design system where each flavor maps to a unique molecular visualization. The can structure uses a matte finish with spot UV accents. The pattern system generates infinite variations from a single algorithm, ensuring no two cans are identical while remaining recognizably NEXUS.',
    process: [
      'Market research & shelf audit',
      'Structural engineering & dieline development',
      'Generative pattern algorithm design',
      'Color system mapping to flavor profiles',
      '3D visualization & virtual shelf testing',
      'Print trials & material selection',
      'Production files & vendor coordination',
    ],
    result: 'Launched in 2,400 retail locations. First-month sell-through exceeded projections by 67%. Won Dieline Awards Gold and Pentawards Silver. The generative system reduced design time for new SKUs by 85%.',
    featured: true,
    nextProject: 'aether-motion',
  },
  {
    id: 'aether-motion',
    title: 'AETHER MOTION SYSTEM',
    category: 'Motion Graphics',
    year: '2023',
    client: 'AETHER Technologies',
    role: 'Motion Direction, 3D Animation, Sound Design',
    tools: ['Cinema 4D', 'After Effects', 'Houdini', 'Ableton Live'],
    description: 'A comprehensive motion design system for a spatial computing startup. Includes UI transitions, micro-interactions, loading states, and brand animations — all built on a unified physics-based timing system.',
    thumbnail: '/projects/aether-motion/thumb.jpg',
    heroImage: '/projects/aether-motion/hero.jpg',
    gallery: [
      '/projects/aether-motion/gallery-1.jpg',
      '/projects/aether-motion/gallery-2.jpg',
      '/projects/aether-motion/gallery-3.jpg',
      '/projects/aether-motion/gallery-4.jpg',
    ],
    services: ['Motion Design', 'UI Animation', '3D Animation', 'Sound Design', 'Design Systems'],
    challenge: 'Create a motion language for spatial interfaces that feels natural, responsive, and scalable. The system needed to work across AR, VR, and traditional screens while maintaining consistent personality.',
    solution: 'Developed a physics-based motion system using spring-damper models with custom easing curves. Created a token-based animation library (duration, easing, mass, stiffness) that developers can import directly. Built a Figma-to-code pipeline for seamless handoff.',
    process: [
      'Motion audit & principle definition',
      'Physics-based timing system design',
      'Core animation vocabulary (enter, exit, transition, feedback)',
      '3D brand asset creation & rigging',
      'Sound palette design & spatial audio',
      'Developer documentation & code components',
      'Integration testing across platforms',
    ],
    result: 'Adopted as the official motion system for AETHER OS. Reduced animation implementation time by 72%. Featured in Apple Design Awards submission. The token system is now open-source with 3.2k GitHub stars.',
    featured: true,
    nextProject: 'lumen-posters',
  },
  {
    id: 'lumen-posters',
    title: 'LUMEN POSTER SERIES',
    category: 'Poster Design',
    year: '2023',
    client: 'LUMEN Festival',
    role: 'Art Direction, Typography, Print Design',
    tools: ['InDesign', 'Illustrator', 'Photoshop', 'Processing'],
    description: 'A series of 24 generative posters for an international light festival. Each poster uses code-based typography that responds to sound data from the festival\'s musical lineup.',
    thumbnail: '/projects/lumen-posters/thumb.jpg',
    heroImage: '/projects/lumen-posters/hero.jpg',
    gallery: [
      '/projects/lumen-posters/gallery-1.jpg',
      '/projects/lumen-posters/gallery-2.jpg',
      '/projects/lumen-posters/gallery-3.jpg',
    ],
    services: ['Poster Design', 'Generative Art', 'Typography', 'Print Production'],
    challenge: 'Create a poster series that visually represents sound and light for a festival celebrating the intersection of technology and art. Each poster needed to be unique while forming a cohesive campaign.',
    solution: 'Built a custom Processing sketch that analyzes audio waveforms and translates frequency data into typographic distortion. The system generates infinite variations — 24 were selected for the final series. Printed on metallic foil stock with spot varnish for light interaction.',
    process: [
      'Audio analysis & frequency mapping',
      'Generative typography system development',
      'Visual language exploration (50+ iterations)',
      'Selection & curation of final 24 posters',
      'Print specification & material testing',
      'Exhibition design & wayfinding integration',
      'Digital campaign adaptation',
    ],
    result: 'Posters sold out in 4 hours. Series acquired by MoMA Design Store. Featured in Communication Arts, Print Mag, and Type Directors Club. The generative tool was released as open-source.',
    featured: false,
    nextProject: 'vertex-ui',
  },
  {
    id: 'vertex-ui',
    title: 'VERTEX DESIGN SYSTEM',
    category: 'UI Design',
    year: '2023',
    client: 'VERTEX Platform',
    role: 'Product Design, Design Systems, Prototyping',
    tools: ['Figma', 'Storybook', 'React', 'TypeScript'],
    description: 'A comprehensive design system for a B2B analytics platform. 200+ components, 50+ patterns, full dark mode, RTL support, and accessibility compliance — built for a 40-person engineering team.',
    thumbnail: '/projects/vertex-ui/thumb.jpg',
    heroImage: '/projects/vertex-ui/hero.jpg',
    gallery: [
      '/projects/vertex-ui/gallery-1.jpg',
      '/projects/vertex-ui/gallery-2.jpg',
      '/projects/vertex-ui/gallery-3.jpg',
    ],
    services: ['UI Design', 'Design Systems', 'Component Library', 'Accessibility', 'Documentation'],
    challenge: 'Unify 5 years of inconsistent UI across a complex analytics platform. The system needed to serve 40+ engineers, support rapid feature development, and meet WCAG 2.1 AA standards.',
    solution: 'Built a token-driven design system with Figma variables, React components, and automated documentation. Created a contribution model allowing any team member to propose changes. Implemented visual regression testing in CI/CD.',
    process: [
      'UI audit & component inventory (347 screens)',
      'Design token architecture (color, spacing, typography, motion)',
      'Component library development (200+ components)',
      'Pattern library & composition guidelines',
      'Accessibility audit & remediation',
      'Documentation site & playground',
      'Migration strategy & team training',
    ],
    result: 'Reduced design-to-dev handoff time by 68%. Achieved 100% WCAG 2.1 AA compliance. Component adoption rate: 94% across codebase. System now manages 12 product lines.',
    featured: true,
    nextProject: 'prism-campaign',
  },
  {
    id: 'prism-campaign',
    title: 'PRISM CREATIVE CAMPAIGN',
    category: 'Creative Campaigns',
    year: '2022',
    client: 'PRISM Optics',
    role: 'Creative Direction, Art Direction, Multi-channel Design',
    tools: ['Photoshop', 'Illustrator', 'After Effects', 'Figma', 'Cinema 4D'],
    description: 'A 360° brand campaign for a premium eyewear launch. Spanning OOH, social, digital, retail, and experiential — unified by a prismatic visual language that fractures and reassembles light.',
    thumbnail: '/projects/prism-campaign/thumb.jpg',
    heroImage: '/projects/prism-campaign/hero.jpg',
    gallery: [
      '/projects/prism-campaign/gallery-1.jpg',
      '/projects/prism-campaign/gallery-2.jpg',
      '/projects/prism-campaign/gallery-3.jpg',
      '/projects/prism-campaign/gallery-4.jpg',
    ],
    services: ['Creative Direction', 'Campaign Strategy', 'OOH Design', 'Social Design', 'Retail Design', 'Motion'],
    challenge: 'Launch a DTC eyewear brand in a saturated market. The campaign needed to communicate premium quality, technical innovation, and style — all while building brand awareness from zero.',
    solution: 'Developed a "light fracture" visual metaphor using prismatic splits across all touchpoints. Created a modular asset system that could scale from billboard to Instagram Story. Built an AR try-on experience integrated into the campaign microsite.',
    process: [
      'Brand strategy & positioning workshop',
      'Creative concept development (3 directions)',
      'Visual language system design',
      'Channel-specific adaptation framework',
      'Production: photo/video shoot direction',
      'AR experience development',
      'Launch orchestration & measurement',
    ],
    result: '$2.4M revenue in first 90 days. 180K AR try-on sessions. Campaign featured in Cannes Lions Shortlist, D&AD Graphite, and Communication Arts. Brand awareness reached 34% in target demographic.',
    featured: true,
    nextProject: 'orbital-brand',
  },
];

export const categories = [
  'All',
  'Brand Identity',
  'Packaging Design',
  'Motion Graphics',
  'Poster Design',
  'UI Design',
  'Creative Campaigns',
  'Typography',
  'Social Media Design',
  'Advertising',
  'AI Art Direction',
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(p => p.category === category);
};

export const getNextProject = (currentId: string): Project | undefined => {
  const current = getProjectById(currentId);
  if (!current?.nextProject) return undefined;
  return getProjectById(current.nextProject);
};