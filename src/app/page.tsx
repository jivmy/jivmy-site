'use client';

import { useState } from 'react';

interface NoteData {
  id: string;
  number: string;
  date: string;
  content: string[];
}

const notes: NoteData[] = [
  {
    id: '002',
    number: '002',
    date: '01/22/25',
    content: [
      "I didn't think I could top Suno or Apple Human Interface. When those fell through, although it made sense, a part of me felt like I was on a slippery path to nothing. But yet again, it seems I've come out on top with something better, but still, just a chance to shoot on goal. Yet with this bullet in the chamber, I'm bringing with me a big metal bat too, and even more dangerous, my signature positive attitude.",
      "In recognizing the silliness of \"success,\" what people think it is versus what it is in reality, I've found peace. We're always chasing something: love, career, a feeling. But living well is not like that at all, it's about forgetting what you're chasing and allowing yourself to run for the fun of it. You like running, don't you? Trick question. I know you don't. But, you like the feeling after. And that's what I've been doing, trying to maximize that feeling after. If you can live in that state, I think it's success.",
      "For me to put pressure on this touchpoint, it's been helpful to understand that I don't need to do anything at all. It's certain that I am happy in all realities that I don't let myself down, not by a certain outcome materialization, but by action and intention. So to answer your question, it's not that I'm not bothered by it. Being nonchalant is not about being emotionless. It's about diffusing negative affect over a long time horizon to focus on the mission. Being okay with not getting what you want doesn't imply you want it less."
    ]
  },
  {
    id: '001',
    number: '001',
    date: '01/21/25',
    content: [
      "Most nights, I'm in their basement—gloves striking  bags, a shuffle of feet on the floor, Charlie calling out, \"Keep your hands up!\" You soon learn it's not about avoiding every punch. It's about choosing when to take them, moving to absorb the impact.",
      "If no shots land here, I'll travel to Wuxi and visit family, then Cambodia, Vietnam, Laos, Tibet. And then Barcelona for a couple years, cutting across Europe. Stability doesn't want to be my friend, so I'll find gratitude in adventure, and make the world open up for me. Pain is what makes life fun—it's what makes the story.",
      "Guard tight, feet light, steady pace, an ache that burns. In the city, steam rises from manholes, light bends across fire escapes, and cats shuffle out of the winter cold. I hear my own breathing, and the bag swinging like a pendulum."
    ]
  }
];

function Note({ number, date, children }: { number: string, date: string, children: React.ReactNode }) {
  // Extract date parts (assuming date format is MM/DD/YY)
  const [month, day, year] = date.split('/');
  console.log(`Note ${number} - Date: ${date}, Parts: month=${month}, day=${day}, year=${year}`);

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
            <span className="text-sm font-light text-black/30">{month}</span>
            <div className="w-px h-10 bg-black/10"></div>
            <span className="text-sm font-light text-black/30">{day}</span>
            <div className="w-px h-10 bg-black/10"></div>
            <span className="text-sm font-light text-black/30">{year}</span>
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
  // Sort notes by date in ascending order
  const sortedNotes = [...notes].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      {sortedNotes.map((note) => (
        <Note key={note.id} number={note.number} date={note.date}>
          {note.content.map((paragraph, index) => (
            <p key={index} className={`${index === 0 ? '!mt-0 first-letter' : ''} ${index === note.content.length - 1 ? '!mb-0' : ''}`}>
              {paragraph}
            </p>
          ))}
        </Note>
      ))}
    </main>
  );
}
