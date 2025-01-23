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
      
      <Note number="003" date="01/23/25">
        <p className="!mt-0 first-letter">I've been in such a chaotic state. Every step I take crumbles into sawdust, revealing the next, and yet I happen to be in a situation where standing still and falling would bring me to an ideal state. Letting go, my life would markedly improve. And yet I find it hard to make that decision, for reasons I don't understand.</p>
        <p>Nothing wrong with a little bit of rain and cold. Growing up in Vancouver there was a bucket of it. Pebbles of water dripping off Douglas Firs onto black nylon coats. Hot cocoa and dim lighting, warm fuzzy blankets and board games. Now I find myself in this foreign land, fighting for something that, once tangible, now rests an abstract idea.</p>
        <p className="!mb-0">It's not about money or family. Is it about ego, then? Am I averse to the idea that my life could be uprooted and thrown away like a rag doll? No, I don't think so. I'm pretty chill. I guess I just like having stories to tell. Life can be so boring, so route and predictable. What's wrong with a little bit of fun, a little bit of bite back? I don't think there's beauty without struggle.</p>
      </Note>

      <Note number="002" date="01/22/25">
        <p className="!mt-0 first-letter">Hauling boxes into the neighbor's house today. One street west, another south. It began with scratching, then scurrying., followed by the sound of thousands—an army moving through the walls, making the bed frame shake at 3 AM. I sat there frozen, listening to their tiny claws on wood and plaster, wondering if this is what madness sounds like.</p>
        <p>We laughed about the absurdity—roaches, rodents, and the police in our living room at 5am. What a trifecta. Behind us, the old apartment stands empty except for the creeking, screeching, and a percussion of small feet marking time in the walls.</p>
        <p>Our new place has high ceilings, morning light, my kind of mise en scène. No mice, they promise. Best friends since childhood live in the unit below, two girls. I think it'll be fun, and I have a feeling that this could evolve into a place worth fighting for.</p>
      </Note>

      <Note number="001" date="01/21/25">
        <p className="!mt-0 first-letter">Most nights, I'm in the basement. Gloves hitting bags, the shuffle of feet on the floor, someone calling out, "Keep your hands up." You learn it's not about avoiding every punch. It's about choosing how to take them. So much leather and sweat, like determination and sour. Dreams getting beaten into shape.</p>
        <p>If no shots land here, I'll go to Wuxi to visit family, then Cambodia, Vietnam, Laos, Tibet. And then Barcelona for a couple years, moving through Europe. Stability won't be my friend, so I'll find gratitude in adventure. I'll make the  open up. Nothing left to lose but my balance.</p>
        <p className="!mb-0">Gloves tight, feet moving, steady rhythm, an ache settling into your arms. In the city, steam rises from manholes, light bends across fire escapes, and glimpses on the subway reminds of what I can't quite forget. Men shuffle out as the night deepens. Now only the sound of my own breathing, and the bag swinging like a pendulum, marking my time here.</p>
      </Note>
    </main>
  );
}
