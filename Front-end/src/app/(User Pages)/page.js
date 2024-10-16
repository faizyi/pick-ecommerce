import Footer from '@/components/HomeComponents/Footer/Footer'
import FeaturedProductsSection from '@/components/HomeComponents/heroSections/FeaturedProductsSection'
import HeroSection1 from '@/components/HomeComponents/heroSections/heroSection1'
import WhyChoose from '@/components/HomeComponents/heroSections/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <main>
        <HeroSection1/>
        <FeaturedProductsSection/>
        <WhyChoose/>
        <Footer/>
    </main>
  )
}
