import dynamic from 'next/dynamic'
import { Metadata } from 'next'

// Dynamic imports for sections below the fold - loads on demand
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
})

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
})

const Services = dynamic(() => import('@/components/sections/Services'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
})

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton />,
  ssr: true,
})

// Hero is kept as static import for LCP optimization (above the fold)
import Hero from '@/components/sections/Hero'

// Loading skeleton component
function SectionSkeleton() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Muhammad Noman Riaz | Full Stack Web Developer',
  description: 'Professional Full Stack Web Developer specializing in Laravel, MERN Stack, Next.js, and modern web technologies.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}
