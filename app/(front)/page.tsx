'use client'



import Footer from '@/components/FrontEnd/Footer'
import Main from '@/components/FrontEnd/Main'
import TermsOfService from '@/components/FrontEnd/TermsOfService'
import TermsOfServiceModal from '@/components/FrontEnd/TermsOfServiceModal'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* Hero => Main */}
      <Main />
      <Footer />
      <TermsOfServiceModal isVisible={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } }/>
      
    </div>
  )
}