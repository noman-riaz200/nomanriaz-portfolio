import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

// Optimize fonts with Next.js - font-display: swap prevents FOIT
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nomanriaz.dev'),
  title: {
    default: 'Muhammad Noman Riaz | Full Stack Web Developer',
    template: '%s | Muhammad Noman Riaz',
  },
  description: 'Professional Full Stack Web Developer specializing in Laravel, MERN Stack, Next.js, and modern web technologies. Transform your digital presence with stunning, performant web applications.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'Laravel',
    'MERN Stack',
    'Next.js',
    'React Developer',
    'Node.js',
    'PHP Developer',
    'Muhammad Noman Riaz',
    'Freelance Developer',
    'Pakistan',
    'Multan',
  ],
  authors: [{ name: 'Muhammad Noman Riaz' }],
  creator: 'Muhammad Noman Riaz',
  publisher: 'Muhammad Noman Riaz',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nomanriaz.dev',
    siteName: 'Muhammad Noman Riaz',
    title: 'Muhammad Noman Riaz | Full Stack Web Developer',
    description: 'Professional Full Stack Web Developer specializing in Laravel, MERN Stack, Next.js, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Noman Riaz - Full Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Noman Riaz | Full Stack Web Developer',
    description: 'Professional Full Stack Web Developer specializing in Laravel, MERN Stack, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@nomanriaz',
  },
  alternates: {
    canonical: 'https://nomanriaz.dev',
    languages: {
      'en': 'https://nomanriaz.dev',
    },
  },
  category: 'technology',
  classification: 'Portfolio',
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
