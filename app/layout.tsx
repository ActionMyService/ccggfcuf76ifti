import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { PageTransition } from '@/components/ui/PageTransition';
import { CustomCursor } from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ORBITAL STUDIO — Graphic Design & Creative Direction',
    template: '%s | ORBITAL STUDIO',
  },
  description: 'Award-winning graphic design studio crafting brand identities, digital experiences, and visual systems that move culture forward. Based in Brooklyn, working globally.',
  keywords: ['graphic design', 'brand identity', 'creative direction', 'packaging design', 'UI/UX design', 'motion graphics', 'typography', 'creative studio'],
  authors: [{ name: 'Orbital Studio' }],
  creator: 'Orbital Studio',
  publisher: 'Orbital Studio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orbital.studio',
    siteName: 'ORBITAL STUDIO',
    title: 'ORBITAL STUDIO — Graphic Design & Creative Direction',
    description: 'Award-winning graphic design studio crafting brand identities, digital experiences, and visual systems that move culture forward.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orbital Studio — Graphic Design Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORBITAL STUDIO — Graphic Design & Creative Direction',
    description: 'Award-winning graphic design studio crafting brand identities, digital experiences, and visual systems that move culture forward.',
    images: ['/og-image.jpg'],
    creator: '@orbitalstudio',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased bg-[var(--bg)] text-[var(--text)]">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>
            <Navbar />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}