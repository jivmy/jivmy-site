'use client';

import { useState } from 'react';

// Import Noto Serif SC font
const NotoSerifSC = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap');
  `}</style>
);

interface NoteData {
  id: string;
  number: string;
  date: string;
  location: string;
  content: (string | (string | JSX.Element)[])[];
}

function SeriffText({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: "'Ming Imperial', 'Kaiti SC', 'Kaiti TC', 'DFKai-SB', 'BiauKai', STKaiti, KaiTi, serif" }}>{children}</span>;
} 

function Note({ number, date, location, children }: { number: string, date: string, location: string, children: React.ReactNode }) {
  // Extract date parts (assuming date format is MM/DD/YY)
  const [month, day, year] = date.split('/');

  return (
    <div className="relative mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-full max-w-[85ch] px-4 sm:px-12 py-8 sm:py-12 border border-black/[0.03] mb-12">
      <div 
        className="absolute -top-12 -right-4 sm:-top-24 sm:-left-24 text-[12rem] sm:text-[20rem] font-black text-black/[0.025] select-none pointer-events-none"
      >
        {number}
      </div>
              
      <div className="relative flex gap-16">
        <div className="hidden lg:block sticky top-8 h-fit space-y-20">
          <span className="vertical-text text-sm tracking-[0.2em] text-black/40 uppercase -rotate-180">{location}</span>
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
            <span className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">{location} - {date}</span>
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

const notes: NoteData[] = [
  {
    id: '005',
    number: '005',
    date: '01/24/25',
    location: 'New York City',
    content: [
      "Some part of me feels like life is shorter than we feel it is. Look at how fast time flies. It's already January; I remember when this time felt so far away, and now it's here. We're kind of all just drifting through it, clinging on to any possibility of permanence or stability with dear life. It's easy to say \"oh now is not the right time for this,\" or \"if I do this now, in the future I'll be able to have this.\" But none of us know that. We ignore what we really want out of a degree of indecisiveness, or fear that if we were to ask for it, we'd be confronted by both our own and life's limitations.",
      "At the same time, there's a degree of truth rooted in our doubts about our dreams. I don't believe in ghosts, but it's almost always true. It's never really the right timing, and we can never have everything we want. In these days, it seems like we dedicate our lives to a craft and see it wiped away by a machine in a matter of months. Part of me wants to step away from it all—the call of adventure—buy a house, and just chill out for the rest of my life.",
      "In a way I feel like I'm addicted to the plot. I'm attached to living a life that has ups and down in different places. I grew up on the final level of the map, and I've started fresh to try to get back there, just to make the story interesting. I know that moving to Spain is in itself a huge decision that I'll have to sacrifice even more for. I am scared, and I will do it. Because I recognize that it opens up the possibility of my life even more, even though it closes any chance of many other things I also want.",
      "I don't really know how to describe this emotion as I close out a decade long chapter. It's a mix of anticipation, fear, longing, nostalgia, and determination. It feels human, in an adult world where we're all just trying to figure it out, balance what we think is right with what we want."
    ]
  },
  {
    id: '004',
    number: '004',
    date: '01/23/25',
    location: 'New York City',
    content: [
      "In the dark with the building's usual noises, but this is no usual noise. There's a crow in the boiler room. It's about the size of a raccoon. Not sure what it's doing there, or how it got there, and I don't exactly know how to get it out. So, we're leaving. Packing up and heading down the street.",
      "April isn't far off anymore—and as time passes here I'm learning that... I don't like New York. I'm not in love with it like I was with California. The people have been fun, but I don't like living here day-to-day. Glad to know. It's not like I could have predicted this outcome, but it seems that I'm headed to Spain for the next few years. I don't speak Spanish—I took French. My time in America comes to a close. At least for now.",
      "I'm so happy to have spent such quality time here and to have met such unique and soulful people. I'm grateful, and humbled by my friends, and for the opportunity to push myself a little bit here. And I am so, so excited for Barcelona coming. I'm not in love with the aesthetic of the rat-race here. Just not my thing."
    ]
  },
  {
    id: '003',
    number: '003',
    date: '01/22/25',
    location: 'New York City',
    content: [
      "Hello and welcome to my comprehensive list of the top five vegetables on planet earth. Number five we have Garlic. It's such an important vegetable because it pairs well with so many other non-vegetables. It's like that friend who fits in all of your friend groups (me). But it's too general to take the spot of any of the other heavy hitters.",
      "At number four, we have Enoki Mushrooms. I know they're technically a fungi (me) but you sauté these silly little critters in some butter with pepper, pistachios, and white fish—your heart will melt. Next we have Squash. Imagine you're lost in some dark forest everywhere and you finally get out after being stranded for three weeks. Someone comes up to you and gives you two plates of food—you can pick one. In one bowl, you have squash stew. In the other bowl, you have an American spring mix salad...",
      ["Coming up as the runner up to this challenge, we have Morning Glory, or ", <SeriffText key="chinese">空心菜</SeriffText>, ". I have so many memories with this one—childhood dinners, birthdays, anniversaries—it's a killer. I bring it to the boba shop and use it as a straw. At any moment, I have it in my left pants pocket. It makes up 47% of my large intestine. Finally we have the winner of this challenge—Fiddleheads. I have no idea what this vegetable is, but one quick Google search reveals that it's not something to be messed around with. When you eat it your nose gets bigger and and bigger until you become a witch."]
    ]
  },
  {
    id: '002',
    number: '002',
    date: '01/21/25',
    location: 'New York City',
    content: [
      "I didn't think I could top Suno or Apple Human Interface. When those fell through, although it made sense, a part of me felt like I was on a slippery path to nothing. But yet again, it seems I've come out on top with something better, but still, just a chance to shoot on goal. Yet with this bullet in the chamber, I'm bringing with me a big metal bat too, and even more dangerous, my signature positive attitude.",
      "In recognizing the silliness of \"success,\" what people think it is versus what it is in reality, I've found peace. We're always chasing something: love, career, a feeling. But living well is not like that at all, it's about forgetting what you're chasing and allowing yourself to run for the fun of it. You like running, don't you? Trick question. I know you don't. But, you like the feeling after. And that's what I've been doing, trying to maximize that feeling after. If you can live in that state, I think it's success.",
      "For me to put pressure on this touchpoint, it's been helpful to understand that I don't need to do anything at all. It's certain that I am happy in all realities that I don't let myself down, not by a certain outcome materialization, but by action and intention. So to answer your question, it's not that I'm not bothered by it. Being nonchalant is not about being emotionless. It's about diffusing negative affect over a long time horizon to focus on the mission. Conceding what you want doesn't imply you want it less."
    ]
  },
  {
    id: '001',
    number: '001',
    date: '01/20/25',
    location: 'New York City',
    content: [
      "Most nights, I'm in their basement—hands on the heavy bag, a shuffle of feet on the floor, Charlie calling out, \"Keep your hands up!\" You soon learn it's not about avoiding every punch: it's about seeing when to take them, how to absorb the impact.",
      "If no shots land here, I'll travel to Wuxi and visit family, then Cambodia, Vietnam, Laos, Tibet. And then Barcelona for a couple years, cutting across Europe. Guard tight, feet light, steady pace, an ache that burns. In the city, steam rises from manholes, light bends across fire escapes, and cats shuffle out of the winter cold. I hear my own breathing, and the bag swinging like a pendulum.",
      "Life can be so boring, so stale, so rote and predictable. What's wrong with a little bit of fun, a little bit of bite back? It's difficult to imagine beauty without struggle. It's like that E.L. Doctorow quote: \"You can only see as far as your headlights, but you can make the whole trip that way.\" And that's what I plan to do."
    ]
  }
];

export default function Home() {
  // Sort notes by date in ascending order
  const sortedNotes = [...notes].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <NotoSerifSC />
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      {sortedNotes.map((note) => (
        <Note key={note.id} number={note.number} date={note.date} location={note.location}>
          {note.content.map((paragraph, index) => (
            <p key={index} className={`${index === 0 ? '!mt-0 first-letter' : ''} ${index === note.content.length - 1 ? '!mb-0' : ''}`}>
              {Array.isArray(paragraph) ? paragraph : paragraph}
            </p>
          ))}
        </Note>
      ))}
    </main>
  );
}
