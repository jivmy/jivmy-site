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
            <p className="!mt-0 first-letter">In school, I liked making people laugh. More than learning. More than grades. Actually, I really didn't enjoy learning at all, and until my sophomore year in high school sat at a healthy C- grade point average. Some part of me felt like it was expected that I would get good grades, so I didn't out of spite. Like finding gaps in the walls, I found ways around the system. I never liked absorbing things that didn't really matter, seeing a clear line between actionable information and brain fluff. Making people laugh—that's actionable. You can build on that. Not "Hey, remember when this ancient railroad was built." Learning fluff distracts from what matters: a life worth living.</p>
            <p>It's not about what you do, or even who you become. It's about who you are becoming. Right now. In this moment. Unemployed in New York, training at a professional boxing gym in the winter cold, fresh off an autumn layoff and bombing a 9th round interview for a dream job. Classic slip-up. But I'm here for the plot, playing with a quote: "When you are as small and obscure as David was, you must find Goliath to attack." So I might just go to Barcelona. Two years in Europe could blow the lid off this whole thing. Sometimes you need to know when to leave. I guess there was never actually a reason for me to be in America. It's all been in my head. My "American Dream."</p>
            <p>At some point in the past, my dream was rooted in success. I thought that if I could crack design like I could crack a joke, I could materialize things that catch people by surprise. People want to believe in a fantasy, but also in truth, stated in unexpected ways that capture how we all feel. I feel like there's something human about design, ordered, and in that way that blends the real with fantasy. When it's good, it just makes sense. And it makes you feel good about yourself. I mean, I really respect dentists, even though they scare me, because I feel like in a way they're doing the same thing: fighting entropy.</p>
            <p>Good design inspires. It makes the boring stuff into something magical. I like making boring things fun. I felt like it mattered for me—not financially but spiritually. Screw a silver platter. I wanted to fight for something. Something that if I were somehow really good at it, I could make people shine like a comedian could. And I totally get why I've lost what I have in these past few months, it makes sense. I'm not quite there yet, and that doesn't bother me. I don't need success. My dream is not to succeed.</p>
            <p> My dream is to become. But time's running out here. Two months and a week before deportation. Final verdict on New York: the weather sucks, but there's beauty in the collective struggle. Everyone here looks mad as hell. Like that red-faced emoji with furrowed brows. Maybe it's the cold. Maybe it's because we're all searching for something bigger than ourselves. I told too many people I was coming to not show up. And I'm talking directly to you. I'm getting deported. Spatial invented this horror monkey game in July, it blew up into the biggest VR game globally, and our design team got nuked. <a href="https://www.meta.com/experiences/animal-company/7190422614401072/?srsltid=AfmBOopxoYPN8m9DkBXBM8ayrkCqAslZJjjO1H6h5vYNZB3lWTK-fXRj" className="text-black hover:text-black/60 transition-colors duration-200">Animal Company</a> on Meta Quest. Life has its own punchlines.</p>
            <p>So here's the plan: travel the world, country to country, few weeks at a time. First Asia—Wuxi, Cambodia, Laos, Tibet, Vietnam. Then Barcelona, leading design at Kalipso. Paris, Rome, Milan again. Maybe Czech for Spencer. If stability won't find me, I'll chase its opposite. I'll dance in the rain. I stayed at Spatial out of loyalty to Peter. Let him lead AI at Figma. I'm writing my own story now.</p>
            <p>Life's funny like that. Sometimes you win, sometimes you're the one caught off guard. I'm spending these days reading, documenting, living. Quiet moments mixed with chaos. Underground wrestling brawls. Moving apartments. <a href="https://thewintershow.org" className="text-black hover:text-black/60 transition-colors duration-200">Winter Show</a> soon. This page is becoming a public travel journal, while Instagram holds my private aesthetic explorations. Still deep in it, trading what I want for who I'm becoming. It's not easy, but here's how I see it.</p>
            <p>Picture your mind as still water. Bad news hits—maybe rejection, maybe loss—and most either attempt to block the ripples or let them crash out. But there's another way. Allow the stone to fall, but control its descent. Learn to move quietly through the chaos. Let the impact spread wide instead of deep. It doesn't hurt less, but you learn to carry it better. You learn to become something through it.</p>
            <p className="!mb-0">But honestly, I'm not sure about New York. Living with Spencer is great, having friends around is better, and Woodside Boxing Academy gives this chosen struggle a nice sheen. But something here drains you differently than in California. New York's got this gloomy spirit, like a wild horse. Looking now, I don't want to tame it. It's ugly, but it's got character for sure. Life is changing fast. This is exactly what I asked for. I wanted a story. Now I get a story and a fight. What more could I ask for?</p> 
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
