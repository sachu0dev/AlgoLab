import GradualSpacing from '@/components/magicui/gradual-spacing'
import React from 'react'

import MeetingCard from "./meetings-card"

const Meetings = () => {
  return (
    <div className='px-1 py-4 flex flex-col'>
        <h1 className="text-2xl font-bold self-start">
        <GradualSpacing
            className="font-display tracking-[-4px] text-xl font-bold text-black dark:text-white md:text-2xl md:leading-[3rem]"
            text="Meetings"
          />
        </h1>

        <section className='px-2 py-3 flex flex-nowrap overflow-x-auto w-full space-x-2 scroll-smooth'>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
          <MeetingCard id='1' name='meetnigs' time={new Date(Date.now())}/>
        </section>
    </div>
  )
}

export default Meetings