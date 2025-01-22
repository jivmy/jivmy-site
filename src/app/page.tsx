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
            className="prose prose-xl flex-1 flex flex-col gap-0 p-0"
            style={{ lineHeight: settings.lineHeight }}
          >
            <div className="flex flex-col gap-1 mb-3">
              <span className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">Woodside - 01/22/25</span>
            </div>
            <p className="!mt-0 first-letter">In school, I liked making people laugh. More than learning. More than grades. Actually, I really didn't enjoy learning at all, and until my sophomore year in high school sat at a healthy C- grade point average. Some part of me felt like it was expected that I would get good grades, so I didn't out of spite. Like a mouse finding gaps in the walls, I found ways around the system. I never liked absorbing things that didn't really matter, seeing a clear line between actionable information and brain fluff. Making people laugh—that's actionable. You can build on that. Not "Hey, remember when this ancient railroad was built." Learning fluff distracts from what matters: a life worth living.</p>
            <p>It's not about what you do, or even who you become. It's about who you are becoming. Right now. In this moment. Unemployed in New York, training at a professional boxing gym in the winter cold, fresh off an autumn layoff and bombing a 9th round interview for your dream job. Classic slip-up. But I'm here for the plot, carrying this quote in my pocket: "When you are as small and obscure as David was, you must find Goliath to attack." Maybe that's why Barcelona calls. Two years in Europe might blow the lid off this whole thing. Like that mouse in my apartment—the one I caught today—sometimes you need to know when to leave. I guess there was never actually a reason for me to be in America. It's all been in my head. This thing they call "The American Dream."</p>
            <p>My dream started with success. I thought if I could crack design like I could crack a joke, I could create things that catch people by surprise. And just like that mouse scratching outside (bro, I'm trying to write here), there's this constant noise in my head about making something meaningful. People want both fantasy and truth—the unexpected way of saying what we all feel. There's something deeply human about design, something ordered that blends truth with fantasy. When it clicks, it just makes sense. Makes you feel good about yourself. Like dentists, who honestly still scare me, we're all fighting entropy in our own way.</p>
            <p>Good design does more than inspire—it transforms. Makes the mundane magical. Makes the boring burst with life. I wanted success because it felt spiritually necessary, not just financially smart. Never wanted it handed to me. Wanted to fight for it, like that mouse fought for survival. Something that if I got really good at it, I could make people light up like a perfect punchline. So even though I understand why I've lost what I've lost these past few months, it fits. I'm not there yet, and that's fine. Success isn't the dream anymore. Becoming is.</p>
            <p>The mouse and I, we're both running out of time here. Two months and a week before deportation. Final verdict on New York: the weather sucks, but there's beauty in the collective struggle. Everyone here looks mad as hell. Like that red-faced emoji with furrowed brows. Maybe it's the cold. Maybe it's because we're all searching for something bigger than ourselves. I told too many people I was coming to not show up. And I'm talking directly to you. I'm getting deported. Spatial invented this horror monkey game in July, it blew up into the biggest VR game globally, and our design team got nuked. Animal Company on Meta Quest. Life has its own punchlines.</p>
            <p>So here's the plan: travel the world, country to country, few weeks at a time. First Asia—Wuxi, Cambodia, Laos, Tibet, Vietnam. Then Barcelona, leading design at Kalipso. Paris, Rome, Milan again. Maybe Czech for Spencer. If stability won't find me, I'll chase its opposite. No need for shelter when you can dance in the rain. I stayed at Spatial out of loyalty to Peter. Let him lead AI at Figma. I'm writing my own story now.</p>
            <p>That mouse I caught? A metaphor in the flesh. Sometimes you win, sometimes you're the one trapped. I'm spending these days reading, documenting, living. Quiet moments mixed with chaos. Underground wrestling brawls. Moving apartments. <a href="https://thewintershow.org" className="text-black hover:text-black/60 transition-colors duration-200">Winter Show</a> soon. Here liess a public travel journal, while Instagram holds aesthetic explorations. Still, trading what I want for who I'd like to become is not easy. But, here's how I see it.</p>
            <p>Picture your mind as still water. Bad news hits—maybe rejection, maybe loss—and most people either try to block the ripples or let them crash wild. But there's another way. Let the stone fall, but control its descent. Like that mouse, learning to move quietly through chaos. Let the impact spread wide instead of deep. The pain doesn't lessen, but you learn to carry it better. You learn to become through it.</p>
            <p className="!mb-0">Honestly, I'm not sure about New York anymore. Living with Spencer is great, having friends around is better, and Woodside Boxing Academy gives this struggle context. But something here drains you differently than California. New York's got this gloomy spirit, like a wild horse I haven't tamed. Looking at it now, I don't want to. It's ugly in its own way, but it's got character. Like that mouse—persistent, scrappy, always finding a way. Things are changing fast. This is exactly what I asked for. I wanted a story, and now I'm living one. The best punchlines take time to land.</p>
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
