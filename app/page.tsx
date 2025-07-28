import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard 
          id='1'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color='#E5D0FF'
        />
        <CompanionCard 
          id='2'
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          subject='Maths'
          duration={30}
          color='#FFDA6E'
        />
        <CompanionCard 
          id='1'
          name='Verba the Vocabulary Builder'
          topic='English Literature '
          subject='Language'
          duration={30}
          color='#BDE7FF'
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title='Recently completed sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page