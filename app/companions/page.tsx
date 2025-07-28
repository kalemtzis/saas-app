import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>

        <div className='flex gap-4'>
          <SearchInput />

          <SubjectFilter />

          <Link href='/companions/new'>
            <button className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit cursor-pointer bg-primary text-white'>
              Companion
              <PlusIcon size={15} />
            </button>
          </Link>
        </div>
      </section>   

      <section className='companions-grid'>
          {companions.map(companion => (
            <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />
          ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary
