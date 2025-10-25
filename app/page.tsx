import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <div className="pt-12 flex flex-col items-center">
      <div>
      <h1 className="text-3xl mb-4 pl-3">Dashboard</h1>

        <section className='home-section'>
          {companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {... companion}
              color={getSubjectColor(companion.subject)}
          />
          ))}
        </section>


        <section className='home-section'>
          <CompanionsList 
            title="Recently completed sessions"
            companions={recentSessionsCompanions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </div>
    </div>
  )
}

export default Page
