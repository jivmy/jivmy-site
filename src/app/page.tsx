'use client';

import { useState } from 'react';

function Note({ number, date, children }: { number: string, date: string, children: React.ReactNode }) {
  return (
    <div className="relative mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-full max-w-[85ch] px-4 sm:px-12 py-8 sm:py-12 border border-black/[0.03] mb-12">
      <div 
        className="absolute -top-12 -right-4 sm:-top-24 sm:-left-24 text-[12rem] sm:text-[20rem] font-black text-black/[0.025] select-none pointer-events-none"
      >
        {number}
      </div>
              
      <div className="relative flex gap-16">
        <div className="hidden lg:block sticky top-8 h-fit space-y-20">
          <span className="vertical-text text-sm tracking-[0.2em] text-black/40 uppercase -rotate-180">New York City</span>
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-light text-black/30">01</span>
            <div className="w-px h-10 bg-black/10"></div>
            <span className="text-sm font-light text-black/30">22</span>
            <div className="w-px h-10 bg-black/10"></div>
            <span className="text-sm font-light text-black/30">25</span>
          </div>
        </div>
        <article 
          className="prose prose-xl flex-1 flex flex-col gap-0 p-0"
          style={{ lineHeight: 1.5 }}
        >
          <div className="flex flex-col gap-1 mb-3">
            <span className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">New York City - {date}</span>
          </div>
          {children}
        </article>
      </div>

      <div className="corner corner-tl"></div>
      <div className="corner corner-tr"></div>
      <div className="corner corner-bl"></div>
      <div className="corner corner-br"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      <Note number="002" date="01/23/25">
        <p className="!mt-0 first-letter">Hauling boxes into the neighbor's house today. One street west, another south. It began with scratching. Then scurrying. Then the sound of thousands—an army moving through the walls, making the bedframe shake at 3 AM. You lie there frozen, listening to their tiny claws on wood and plaster, wondering if this is what madness sounds like.</p>
        <p>We laughed about the absurdity—roaches, rodents, and the police in your living room at  5am. What a trifecta. Behind us, our old apartment stands empty except for the scratching, screeching, and a percussion of small feet marking time in the walls.</p>
        <p className="!mb-0">Our new place has high ceilings, morning light, my kind of mise en scène. No mice, they promise. Best friends since third grade who live in the unit below. I think it'll be fun, and I like how this is evolving into something worth staying for.</p>
      </Note>

      <Note number="001" date="01/22/25">
        <p className="!mt-0 first-letter">Most nights, I'm at the boxing gym. The sound of gloves hitting bags, the shuffle of feet on the floor, someone calling out, "Keep your hands up." You learn quickly—it's not about avoiding the punches. It's about how you take them. The gym smells like leather and sweat, like determination gone sour. Like dreams getting beaten into shape.</p>
        <p>If nothing lands, I'll go to Wuxi to visit family, then Cambodia, Vietnam, Laos. After that, Barcelona for two years, moving through Europe. Each place a new ring to step into, a new rhythm to learn. The world opens up when you've got nothing left to lose but your balance.</p>
        <p className="!mb-0">It's gloves tight, feet moving, the ache settling into your arms. In the city, it's the sound of steam rising from manholes, light bending across fire escapes, and small things that remind you of what you don't quite forget. The gym's getting emptier as the night gets deeper. Just the sound of my own breathing now, and the bag swinging like a pendulum, marking time until the next round, the next city, the next life.</p>
      </Note>
    </main>
  );
}
