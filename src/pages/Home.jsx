import React from 'react'
import Hero from '../components/Hero'
import ValueProposition from '../components/ValueProposition'
import Features from '../components/Features'
import Partners from '../components/Partners'
import Process from '../components/Process'
import Showcase from '../components/Showcase'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Features />
      <Partners />
      <Process />
      <Showcase />
      <Testimonials />
      <Contact />
    </main>
  )
}
