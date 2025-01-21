'use client';

import { useState } from 'react';

export default function Home() {
  const [settings] = useState({
    lineHeight: 1.5
  });

  return (
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      <div className="relative mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-full max-w-[85ch] px-4 sm:px-12 py-8 sm:py-16 border border-black/[0.03]">
        <div 
          className="absolute -top-12 -right-4 sm:-top-24 sm:-left-24 text-[12rem] sm:text-[20rem] font-black text-black/[0.02] select-none pointer-events-none"
        >
          001
        </div>
                
        <div className="relative flex gap-16">
          <div className="hidden lg:block sticky top-8 h-fit space-y-20">
            <span className="vertical-text text-sm tracking-[0.2em] text-black/40 uppercase -rotate-180">SoMa</span>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-light text-black/30">11</span>
              <div className="w-px h-10 bg-black/10"></div>
              <span className="text-sm font-light text-black/30">18</span>
              <div className="w-px h-10 bg-black/10"></div>
              <span className="text-sm font-light text-black/30">24</span>
            </div>
          </div>

          <article 
            className="prose prose-lg flex-1 flex flex-col gap-0 p-0 [&>p]:mb-3 sm:[&>p]:mb-6 [&>p:last-child]:!mb-0"
            style={{ lineHeight: settings.lineHeight }}
          >
            <div className="flex flex-col gap-1 mb-8">
              <span className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">SoMa - 11/18/24</span>
            </div>
            <p className="!mt-0">SoMa was never in the script. That rough patch of San Francisco felt like stepping into someone else's story, yet I stationed myself there, drawn to discover what it means to push forward while the world crumbles around you. America wasn't my dream—it was my canvas. In 2017, I traded a cushioned life for a one-way ticket to Los Angeles. A bold bet with slim odds, but risk runs in the family. One last ticket west came with no safety net, and that gravity became my compass.</p>
            <p>When COVID hit, I saw my chance. Trading comfort for chaos, I dove into Silicon Valley—not just to design another product, but to redesign myself. The American dream morphed into something darker, more personal: a self-imposed crucible. Each victory demands more sacrifice, each achievement raises the stakes. What's now in front of me wouldn't just fulfill the dream—it'd consume it whole, demanding everything in exchange for the chance to matter. A simple path tempts me daily, but for someone who chases change, settling feels like surrender.</p>
            <p className="!mb-0">Last Saturday crystallized everything. A car bomb shattered an SUV and the silence on Mission Street, the symphony of broken souls outside my window becoming a strange lullaby. The rawness of SoMa, its unfiltered reality, somehow anchored me when everything else felt uncertain. I'll keep saying no to what I want for what I need. This timing isn't mine to control, but a choice is: trading the known for the possible, the safe for the meaningful. That's my version of the American dream: not the pursuit of happiness, but the pursuit of becoming.</p>
          </article>
        </div>

        {/* Decorative Corners */}
        <div className="corner corner-tl"></div>
        <div className="corner corner-tr"></div>
        <div className="corner corner-bl"></div>
        <div className="corner corner-br"></div>

        {/* Footer Navigation */}
        <div className="mt-8 sm:mt-12 flex justify-between items-center text-sm text-black/40">
          <button className="hover:text-black transition-colors duration-200">← Previous</button>
          <div className="w-3 h-3 rounded-full border border-black/10"></div>
          <button className="hover:text-black transition-colors duration-200">Next →</button>
        </div>
      </div>
    </main>
  );
}
