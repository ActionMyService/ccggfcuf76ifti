export interface Project {
  id: string;
  slug: string;
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
  challenge: string;
  solution: string;
  process: string[];
  result: string;
  featured: boolean;
  nextProject?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'design' | 'motion' | '3d' | 'code' | 'strategy';
  level: number;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nova-identity',
    title: 'NOVA',
    category: 'Brand Identity',
    year: '2024',
    client: 'Nova Systems',
    role: 'Creative Direction, Brand Design',
    tools: ['Figma', 'Illustrator', 'After Effects', 'Blender'],
    description: 'A complete brand identity system for a next-gen climate tech startup. The visual language draws from atmospheric data visualization — translating CO₂ metrics into living gradients and kinetic typography.',
    thumbnail: '/work/nova/thumb.jpg',
    heroImage: '/work/nova/hero.jpg',
    gallery: [
      '/work/nova/gallery-1.jpg',
      '/work/nova/gallery-2.jpg',
      '/work/nova/gallery-3.jpg',
      '/work/nova/gallery-4.jpg'
    ],
    challenge: 'Nova needed to communicate complex climate science to enterprise buyers without diluting technical credibility. The existing brand felt clinical and disconnected from the urgency of their mission.',
    solution: 'We built a dynamic identity system where the logo mark breathes with real-time atmospheric data. Color shifts from cool blues (healthy) to warm ambers (critical) based on live CO₂ ppm. Typography system uses variable fonts that respond to scroll velocity — faster scroll = tighter tracking = urgency.',
    process: [
      'Stakeholder workshops & climate data audit',
      'Concept exploration: 12 directions → 3 refined',
      'Variable font development with parametric axes',
      'Design system: color, motion, iconography, 3D assets',
      'Developer handoff with React component library'
    ],
    result: 'Brand launch coincided with Series A ($12M). 340% increase in demo requests. Identity system adopted across product UI, investor decks, and physical installations at COP28.',
    featured: true,
    nextProject: 'aether-packaging'
  },
  {
    id: '2',
    slug: 'aether-packaging',
    title: 'AETHER',
    category: 'Packaging Design',
    year: '2024',
    client: 'Aether Spirits',
    role: 'Packaging Design, Art Direction',
    tools: ['Illustrator', 'Cinema 4D', 'Photoshop', 'After Effects'],
    description: 'Ultra-premium spirits packaging inspired by atmospheric optics. Each bottle captures a different optical phenomenon — glory, halo, corona, iridescence — through multi-layer foil stamping and holographic substrates.',
    thumbnail: '/work/aether/thumb.jpg',
    heroImage: '/work/aether/hero.jpg',
    gallery: [
      '/work/aether/gallery-1.jpg',
      '/work/aether/gallery-2.jpg',
      '/work/aether/gallery-3.jpg',
      '/work/aether/gallery-4.jpg'
    ],
    challenge: 'Aether Spirits entered a saturated ultra-premium market. They needed packaging that justified a $300+ price point and created an unboxing ritual worthy of social amplification.',
    solution: 'Four limited editions, each visualizing a distinct atmospheric optical phenomenon. Custom holographic foil with 7-layer registration. Magnetic closure box with embossed star-field interior. QR-activated AR experience showing the phenomenon in motion.',
    process: [
      'Optical physics research & phenomenon selection',
      'Substrate testing: 40+ foil/paper combinations',
      'Structural engineering for magnetic closure',
      'AR experience development (WebGL + Three.js)',
      'Production run coordination across 3 continents'
    ],
    result: 'Sold out in 72 hours. 12x ROI on packaging cost. Featured in Packaging of the World, Dieline, and 40+ unboxing videos organically. Waiting list of 3,000+ for next release.',
    featured: true,
    nextProject: 'kinetic-type'
  },
  {
    id: '3',
    slug: 'kinetic-type',
    title: 'KINETIC TYPE',
    category: 'Typography / Motion',
    year: '2023',
    client: 'Self-Initiated',
    role: 'Type Design, Motion Direction, Creative Coding',
    tools: ['Glyphs', 'After Effects', 'TouchDesigner', 'p5.js'],
    description: 'An experimental variable font family where each axis controls a kinetic behavior — not just weight/width, but vibration, dispersion, gravity, and entropy. Released as open-source with interactive specimen.',
    thumbnail: '/work/kinetic/thumb.jpg',
    heroImage: '/work/kinetic/hero.jpg',
    gallery: [
      '/work/kinetic/gallery-1.jpg',
      '/work/kinetic/gallery-2.jpg',
      '/work/kinetic/gallery-3.jpg'
    ],
    challenge: 'Variable fonts are typically used for static interpolation. We wanted to explore time as a design axis — fonts that behave, not just appear.',
    solution: 'Five parametric axes: Weight, Width, Vibration (jitter amplitude), Dispersion (letter spacing chaos), Entropy (form degradation). Interactive specimen site lets users "play" the font like an instrument. Open-source release with full .glyphs source.',
    process: [
      'Axis concept definition & mathematical modeling',
      'Glyphs master design: 6 masters × 200+ glyphs',
      'TouchDesigner prototyping for real-time behavior',
      'Specimen site: React + Three.js + GSAP',
      'Documentation & open-source release (OFL)'
    ],
    result: '15K+ GitHub stars. Featured in Typewolf, It\'s Nice That, Communication Arts. Adopted by 3 design agencies for client work. Led to speaking engagements at TypeCon & ATypI.',
    featured: true,
    nextProject: 'orbital-brand'
  },
  {
    id: '4',
    slug: 'orbital-brand',
    title: 'ORBITAL',
    category: 'Brand Identity',
    year: '2023',
    client: 'Orbital Studio (Self)',
    role: 'Creative Direction, Brand Design, Web Development',
    tools: ['Figma', 'Illustrator', 'Blender', 'Next.js', 'Three.js'],
    description: 'Our own studio identity — a living brand system built on orbital mechanics. The logo mark is a real-time n-body simulation. Color palette shifts with time of day. The website is the brand guideline.',
    thumbnail: '/work/orbital/thumb.jpg',
    heroImage: '/work/orbital/hero.jpg',
    gallery: [
      '/work/orbital/gallery-1.jpg',
      '/work/orbital/gallery-2.jpg',
      '/work/orbital/gallery-3.jpg'
    ],
    challenge: 'Create a studio identity that demonstrates our 3D/interactive capabilities while remaining functional across all touchpoints — from business cards to building signage.',
    solution: 'Core mark: Three bodies in stable figure-8 orbit (choreography by Moore). Implemented as a WebGL simulation — never the same frame twice. Brand guidelines live as an interactive Notion/Next.js hybrid. Print applications use "frozen orbit" snapshots.',
    process: [
      'Orbital mechanics research & simulation prototyping',
      'Logo mark: 50+ orbit configurations tested',
      'Color system: circadian rhythm palette (dawn→dusk)',
      'Interactive guideline platform development',
      'Print/digital application system design'
    ],
    result: 'Studio launch attracted 3 major retainer clients in 60 days. Website featured on Awwwards, CSS Design Awards, Three.js Journey. Brand system scales from favicon to 40ft mural.',
    featured: true,
    nextProject: 'solaris-campaign'
  },
  {
    id: '5',
    slug: 'solaris-campaign',
    title: 'SOLARIS',
    category: 'Creative Campaign',
    year: '2023',
    client: 'Solaris Energy',
    role: 'Creative Direction, Art Direction, Motion Design',
    tools: ['After Effects', 'Cinema 4D', 'Figma', 'Premiere Pro'],
    description: 'Global brand campaign for residential solar — "Power That Moves With You". Cinematic films, OOH, social, and an interactive solar potential calculator. Unified by a "light ribbon" visual motif.',
    thumbnail: '/work/solaris/thumb.jpg',
    heroImage: '/work/solaris/hero.jpg',
    gallery: [
      '/work/solaris/gallery-1.jpg',
      '/work/solaris/gallery-2.jpg',
      '/work/solaris/gallery-3.jpg',
      '/work/solaris/gallery-4.jpg'
    ],
    challenge: 'Solar marketing typically focuses on savings/ROI. Solaris wanted to lead with emotion — the feeling of energy independence — while retaining technical credibility.',
    solution: '"Light ribbon" — a continuous 3D light path that weaves through every touchpoint: films, billboards, web, app. Interactive calculator uses LiDAR + satellite data to visualize panel placement on user\'s actual roof in AR. Campaign tagline in 12 languages.',
    process: [
      'Brand strategy workshops & positioning',
      'Light ribbon concept development (200+ sketches)',
      'Production: 3 hero films + 15 cutdowns + OOH + social',
      'AR calculator: Three.js + WebXR + satellite API',
      'Global rollout across 8 markets'
    ],
    result: 'Campaign drove 45% increase in qualified leads. "Light ribbon" became recognizable brand asset — 68% unaided recall. AR calculator used by 120K+ homeowners. Cannes Lions Shortlist (Digital Craft).',
    featured: true,
    nextProject: 'meridian-ui'
  },
  {
    id: '6',
    slug: 'meridian-ui',
    title: 'MERIDIAN',
    category: 'UI/UX Design',
    year: '2022',
    client: 'Meridian Health',
    role: 'Product Design, Design Systems, Prototyping',
    tools: ['Figma', 'Storybook', 'React', 'TypeScript'],
    description: 'Design system and patient portal redesign for a telehealth platform. 40+ components, dark/light, RTL support, WCAG AAA. Reduced task completion time by 52%.',
    thumbnail: '/work/meridian/thumb.jpg',
    heroImage: '/work/meridian/hero.jpg',
    gallery: [
      '/work/meridian/gallery-1.jpg',
      '/work/meridian/gallery-2.jpg',
      '/work/meridian/gallery-3.jpg'
    ],
    challenge: 'Legacy portal had 3.2/5 patient satisfaction. Fragmented component library. No dark mode. Accessibility gaps. Clinician and patient needs conflicted.',
    solution: 'Atomic design system: 40 components, 120 variants, design tokens (Figma → JSON → Storybook). Dual-density modes (patient/clinician). Motion system with reduced-motion respect. RTL for Arabic/Hebrew markets. Comprehensive documentation.',
    process: [
      'Audit: 200+ screens, 40 user interviews, analytics review',
      'Token architecture: color, spacing, type, motion, elevation',
      'Component library build + Storybook documentation',
      'Portal redesign: 12 core flows, usability testing (n=24)',
      'Engineering handoff + QA checklist'
    ],
    result: 'Patient satisfaction: 3.2 → 4.7/5. Task time -52%. Support tickets -38%. System adopted across 3 product lines. Zero accessibility violations (axe-core).',
    featured: false,
    nextProject: 'nova-identity'
  }
];

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'Graphic Design',
    description: 'Visual communication across print and digital. Posters, editorial layouts, signage, exhibition graphics, marketing collateral. Concept-first, craft-obsessed.',
    deliverables: ['Print-ready artwork', 'Source files', 'Style guide', 'Mockups'],
    tools: ['InDesign', 'Illustrator', 'Photoshop', 'Figma'],
    icon: 'pen-tool',
    featured: true
  },
  {
    id: '2',
    number: '02',
    title: 'Brand Identity',
    description: 'Complete identity systems — strategy, naming, logo, color, typography, iconography, motion, voice, guidelines. Built to scale from favicon to building wrap.',
    deliverables: ['Logo system', 'Design system', 'Brand guidelines', 'Asset library', 'Motion principles'],
    tools: ['Figma', 'Illustrator', 'After Effects', 'Glyphs'],
    icon: 'sparkles',
    featured: true
  },
  {
    id: '3',
    number: '03',
    title: 'Logo Design',
    description: 'Distinctive marks with strategic rationale. From wordmarks to symbol systems. Includes usage guidelines, responsive variations, and animation-ready assets.',
    deliverables: ['Primary/secondary marks', 'Responsive variations', 'Usage guidelines', 'Animation specs'],
    tools: ['Illustrator', 'Glyphs', 'After Effects', 'Figma'],
    icon: 'square-pen',
    featured: true
  },
  {
    id: '4',
    number: '04',
    title: 'Social Media Design',
    description: 'Scroll-stopping content systems for Instagram, LinkedIn, TikTok, X. Template libraries, motion templates, content calendars, AR filters. Designed for algorithmic velocity.',
    deliverables: ['Template system', 'Motion templates', 'Content calendar', 'AR filters', 'Brand kit'],
    tools: ['Figma', 'After Effects', 'Photoshop', 'Spark AR'],
    icon: 'share-2',
    featured: false
  },
  {
    id: '5',
    number: '05',
    title: 'Poster Design',
    description: 'Large-format storytelling. Cultural, commercial, experimental. Offset, screen print, riso, digital. Typography as image. Collected by design archives.',
    deliverables: ['Print-ready files', 'Color separations', 'Mockups', 'Edition specs'],
    tools: ['InDesign', 'Illustrator', 'Photoshop', 'Procreate'],
    icon: 'image',
    featured: true
  },
  {
    id: '6',
    number: '06',
    title: 'Packaging Design',
    description: 'Structural + graphic design for physical products. Materials, finishes, unboxing choreography, shelf impact, sustainability. Prototyped in 3D, validated in hand.',
    deliverables: ['Dielines', '3D mockups', 'Finish specs', 'Production files', 'Prototype photos'],
    tools: ['Illustrator', 'Cinema 4D', 'Photoshop', 'Esko'],
    icon: 'box',
    featured: true
  },
  {
    id: '7',
    number: '07',
    title: 'UI/UX Design',
    description: 'Product design for web and mobile. Design systems, prototyping, usability testing, developer handoff. Accessibility-first. Design tokens → production code.',
    deliverables: ['Wireframes', 'High-fidelity prototypes', 'Design system', 'Specs', 'Usability report'],
    tools: ['Figma', 'Storybook', 'React', 'TypeScript'],
    icon: 'layout-grid',
    featured: true
  },
  {
    id: '8',
    number: '08',
    title: 'Motion Graphics',
    description: 'Kinetic identity, explainer films, UI animation, broadcast packages, micro-interactions. Principle: motion clarifies, never decorates. Lottie/Rive/WebGL delivery.',
    deliverables: ['Animation files', 'Lottie/Rive exports', 'Code snippets', 'Motion specs'],
    tools: ['After Effects', 'Cinema 4D', 'Rive', 'Lottie'],
    icon: 'film',
    featured: false
  },
  {
    id: '9',
    number: '09',
    title: 'AI Creative Design',
    description: 'Generative workflows integrated into professional pipelines. Custom LoRAs, ControlNet pipelines, ComfyUI workflows. Human-directed, AI-accelerated. Ethics-first.',
    deliverables: ['Custom models', 'Workflow files', 'Asset libraries', 'Prompt systems', 'Guidelines'],
    tools: ['ComfyUI', 'Stable Diffusion', 'Midjourney', 'Runway', 'Photoshop'],
    icon: 'cpu',
    featured: true
  },
  {
    id: '10',
    number: '10',
    title: 'Advertising Design',
    description: 'Campaign concepting and execution across OOH, print, digital, experiential. Big idea + craft. Award-track work that sells.',
    deliverables: ['Campaign concepts', 'Key visuals', 'Adaptations', 'Case study', 'Production assets'],
    tools: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'InDesign'],
    icon: 'megaphone',
    featured: false
  }
];

export const skills: Skill[] = [
  { id: '1', name: 'Adobe Photoshop', category: 'design', level: 98 },
  { id: '2', name: 'Adobe Illustrator', category: 'design', level: 97 },
  { id: '3', name: 'Adobe InDesign', category: 'design', level: 95 },
  { id: '4', name: 'Figma', category: 'design', level: 96 },
  { id: '5', name: 'Typography', category: 'design', level: 94 },
  { id: '6', name: 'Branding', category: 'strategy', level: 93 },
  { id: '7', name: 'Art Direction', category: 'strategy', level: 92 },
  { id: '8', name: 'After Effects', category: 'motion', level: 90 },
  { id: '9', name: 'Premiere Pro', category: 'motion', level: 85 },
  { id: '10', name: 'Cinema 4D', category: '3d', level: 88 },
  { id: '11', name: 'Blender', category: '3d', level: 86 },
  { id: '12', name: 'Three.js / R3F', category: 'code', level: 84 },
  { id: '13', name: 'GSAP / ScrollTrigger', category: 'code', level: 87 },
  { id: '14', name: 'React / Next.js', category: 'code', level: 82 },
  { id: '15', name: 'AI Creative Tools', category: 'design', level: 80 }
];

export const stats = [
  { value: '08+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '45+', label: 'Brands Shaped' },
  { value: '20+', label: 'Industries Served' }
];

export const processSteps = [
  { number: '01', title: 'DISCOVER', description: 'Deep dive into your world. Stakeholder interviews, competitive audit, brand archaeology, data analysis. We listen more than we talk.' },
  { number: '02', title: 'STRATEGY', description: 'Synthesize insights into a creative brief with teeth. Positioning, messaging architecture, design principles, success metrics. Alignment before aesthetics.' },
  { number: '03', title: 'CONCEPT', description: 'Divergent exploration. 10–15 directions pressure-tested against strategy. Client workshop to select 2–3 for refinement. No "safe" options.' },
  { number: '04', title: 'DESIGN', description: 'Systems, not assets. Identity systems, component libraries, motion languages, design tokens. Built for scale, documented for handoff.' },
  { number: '05', title: 'REFINE', description: 'Real-world testing. Usability studies, print proofs, device testing, accessibility audits, stakeholder reviews. Iterate until invisible.' },
  { number: '06', title: 'DELIVER', description: 'Production-ready files, documentation, training, launch support. We stay until you\'re self-sufficient. Long-term partnership, not handoff.' }
];

export const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/orbitalstudio', icon: 'instagram' },
  { name: 'Behance', href: 'https://behance.net/orbitalstudio', icon: 'behance' },
  { name: 'Dribbble', href: 'https://dribbble.com/orbitalstudio', icon: 'dribbble' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/orbitalstudio', icon: 'linkedin' },
  { name: 'Email', href: 'mailto:hello@orbital.studio', icon: 'mail' }
];

export const navLinks = [
  { href: '/work', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/services', label: 'SERVICES' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/contact', label: 'CONTACT' }
];