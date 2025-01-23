    'use client';

    import { useState } from 'react';

    export default function Home() {
      const [settings] = useState({
        lineHeight: 1.5
      });

      return (
        <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
          <div className="fixed inset-0 grain opacity-[0.15]"></div>
          
          <div className="relative mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-full max-w-[85ch] px-4 sm:px-12 py-8 sm:py-12 border border-black/[0.03]">
            <div 
              className="absolute -top-12 -right-4 sm:-top-24 sm:-left-24 text-[12rem] sm:text-[20rem] font-black text-black/[0.04] select-none pointer-events-none"
            >
              001
            </div>
                    
            <div className="relative flex gap-16">
              <div className="hidden lg:block sticky top-8 h-fit space-y-20">
                <span className="vertical-text text-sm tracking-[0.2em] text-black/40 uppercase -rotate-180">Woodside</span>
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
                style={{ lineHeight: settings.lineHeight }}
              >
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">Woodside - 01/22/25</span>
                </div>
                <p className="!mt-0 first-letter">Most nights, I'm at the boxing gym. The sound of gloves hitting bags, the shuffle of feet on the floor, someone calling out, "Keep your hands up." You learn quickly—it's not about avoiding the punches. It's about how you take them.</p>
                <p>If nothing lands, I'll go to Wuxi to visit my mom, then Cambodia, Vietnam, Laos. After that, Barcelona for two years, moving through Europe.</p>
                <p className="!mb-0">Gloves tight, feet moving, the ache settling into your arms. In the city, it's the sound of steam rising from manholes, light bending across fire escapes, and small things that remind you of what you don't quite forget.</p>
              </article>
            </div>

            {/* Decorative Corners */}
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>        
            <div className="corner corner-br"></div>
          </div>
        </main>
      );
    }
