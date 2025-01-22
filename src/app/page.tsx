'use client';

import { useState } from 'react';

export default function Home() {
  const [settings, setSettings] = useState({
    lineHeight: 1.5,
    paragraphSpacing: 2
  });

  return (
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      {/* Settings Panel */}
      <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-black/[0.03] shadow-lg z-10">
        <div className="flex items-center gap-4">
          <label className="text-sm text-black/40">Spacing</label>
          <input 
            type="range" 
            min="0" 
            max="8" 
            value={settings.paragraphSpacing} 
            onChange={(e) => setSettings(prev => ({ ...prev, paragraphSpacing: parseInt(e.target.value) }))}
            className="w-24"
          />
        </div>
      </div>
      
      <div className="relative mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-full max-w-[85ch] px-4 sm:px-12 py-8 border border-black/[0.03]">
        <div 
          className="absolute -top-12 -right-4 sm:-top-24 sm:-left-24 text-[12rem] sm:text-[20rem] font-black text-black/[0.02] select-none pointer-events-none"
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
            className="prose prose-lg flex-1 flex flex-col gap-0 p-0 [&>p:last-child]:!mb-0"
            style={{ 
              lineHeight: settings.lineHeight,
              '--p-spacing': `${settings.paragraphSpacing * 0.25}rem`,
              '--p-spacing-desktop': `${settings.paragraphSpacing * 0.5}rem`
            } as React.CSSProperties}
          >
            <style jsx>{`
              article :global(p) {
                margin-bottom: var(--p-spacing);
              }
              @media (min-width: 640px) {
                article :global(p) {
                  margin-bottom: var(--p-spacing-desktop);
                }
              }
            `}</style>
            <div className="flex flex-col gap-1 mb-3">
              <span className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">Woodside - 01/22/25</span>
            </div>
            <p className="!mt-0">In school, I liked making people laugh more than absorbing information. Actually, I really didn't enjoy learning, and until my sophomore year in high school sat at a healthy C- grade point average. Some part of me felt like it was expected that I would  get good grades, so I didn't out of spite. I never liked the idea of absorbing things that I felt like didn't really matter much, and often felt there was a big difference between actionable information and brain fluff. You know what's actionable information? People thinking you're funny and liking you. You can act on that. But not "hey, remember when this ancient railroad was built." Learning fluff distracts from the main issue: what makes a life that's worth living?</p>
            <p>I felt that it's not about what you do, and not even about who you become, but rather about who you are becoming. In the very moment. Moving to New York unemployed, to train at a professional boxing gym in the winter cold, after getting laid off in the fall and failing the biggest interview of your life. Oops, that's a slip up. But I'm just here for the plot, playing with this quote: "When you are as small and obscure as David was, you must find a Goliath to attack." So, at this point I might actually move to Barcelona. Two years in Europe sounds like a good way to blow the top off this whole thing. I guess there was never actually a reason for me to be in America. It's all been in my head. Whatever you call it. "The American Dream."</p>
            <p>At some point in the past, my dream was rooted in success. I thought that if I could crack design like I could crack a joke, I could materialize things that catch people by surprise. And on God, the mouse outside needs to shut up right now. Like bro, I'm trying to write. People want to believe in a fantasy, but also the truth stated in a unexpected way that captures how we all feel. I feel like there's something human about design, ordered, and in that way that blends truth with fantasy. When it's good, it just makes sense. And it makes you feel good about yourself. I mean, I really respect dentists, even though they scare me, because I feel like in a way they're doing the same thing: fighting entropy.</p>
            <p>Good design inspires. It makes the boring stuff into something magical. I like making things fun. I like making boring things fun. I wanted to succeed because I felt like it mattered for me—not financially but almost spiritually. I never wanted a silver platter. I wanted to fight for something. Something that if I were somehow really good at it, I could make people sparkle like a comedian could. And so even though I totally get why I've lost what I've lost in these past few months, it makes sense. I'm not there yet and that doesn't bother me. I don't actually need to succeed. My dream is not to succeed. My dream is to become.</p>
            <p>I caught one of the mice in the apartment today. But still, now we're moving down the street, and still I'm running out of time here.  I have about two months and a week before I get deported. So I guess final verdict is yeah, New York weather kind of sucks, but there's a certain beauty to the suffering that people go through here. It seems like everybody is so mad. Like the emoji that's red, with the furrowed eyebrows. Or maybe they're red because it's so cold. But yes, I mean it was good perspective and I told too many people I was coming to not come. And if you're reading this and thinking—oh is he talking to me? Yes. I'm talking to you Sherlock Holmes. I'm getting deported. Spatial invented this horror monkey game in July and it became the biggest VR game in the world. We became a game and our design team got nuked. Animal Company on Meta Quest.</p>
            <p>Unless things click here soon, I'm going to travel the world and go country to country for the next year or so, somewhere new every few weeks. I'll hit Asia first. Starting with Wuxi, then Cambodia, Laos, Tibet, Vietnam. After, I'll move to Barcelona and lead design at Kalipso. In Europe, I'll hit Paris, Rome, Milan again. Maybe Czech for Spencer.  If I can't find the stability I want, I'll run into the opposite. Who cares about a little bit of rain? I don't need this country, and I'll never need a job. I stayed at Spatial so long out of pure loyalty to Peter. Let him go lead AI at Figma. I'm gonna do my own thing.</p>
            <p>I think the mouse outside is having a spaz attack because I smoked his friend. Yeah buddy, eat ice. I'm spending my time reading and documenting. Quiet moments, fun and unique events. We packed these months pretty full. Underground wrestling brawl on Saturday. Moving that morning. Winter show soon. I think I'll have this page be somewhat of a public travel journal. And keep my Instagram still for more private aesthetic explorations. I'm still deep in the process. Giving up what I want, in exchange for who I want to become. It's not easy but I'll describe it like this.</p>
            <p>Imagine your mind is a quiet and still body of water, and bad news hits in the moment: maybe you're sad about something, or maybe hurt about a particular outcome not going your way. Some people try to prevent the boulder from hitting the surface and causing a ripple. That's a big no-no. You have to let the rock pass, and most just do that—they let it pass—and it causes a big splash. What I find helpful is decelerating the velocity of the boulder across a long time horizon. Let it hit you, but don't let it cut too deep. Instead, learn to take the cut wide. It won't hurt any less, but you'll process it better.</p>
            <p className="!mb-0">Honestly, I'm not sure if I even want to stay in New York. I like living with Spencer, and have enjoyed having so many friends around. I appreciate the Woodside Boxing Academy the struggle it provides to my current context. But there's something a bit draining about this place that's not as acute in California. New York is a bit gloomy in spirit. It feels like a horse that I haven't quite tamed yet. And when I look at it, I'm not sure that I want to tame this horse. It's a little bit ugly, but it has personality. Anyways, I just know things are changing, and fast. In a way, this is what I asked for. I asked for a story and I'm getting a story.</p>
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
