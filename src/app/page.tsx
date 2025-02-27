'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script'

// Import Noto Serif SC font
const NotoSerifSC = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap');
  `}</style>
);

interface NoteData {
  date: string;
  location: string;
  content: (string | (string | JSX.Element)[])[];
}

interface NoteWithId extends NoteData {
  id: string;
  number: string;
}

function SeriffText({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: "'Ming Imperial', 'Kaiti SC', 'Kaiti TC', 'DFKai-SB', 'BiauKai', STKaiti, KaiTi, serif" }}>{children}</span>;
} 

function Note({ number, date, location, children }: { number: string, date: string, location: string, children: React.ReactNode }) {
  const [month, day, year] = date.split('/');
  const isoDate = `20${year}-${month}-${day}`; // Assuming years are in YY format

  return (
    <article className="relative mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-full max-w-[85ch] px-4 sm:px-12 py-8 sm:py-12 border border-black/[0.03] mb-12">
      <div className="absolute -top-12 -right-6 text-[12rem] font-bold text-black/[0.02] select-none">
        {number.padStart(3, '0')}
      </div>
              
      <header>
        <time dateTime={isoDate} className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">
          {location} - {date}
        </time>
      </header>
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
          {children}
        </article>
      </div>

      <div className="corner corner-tl"></div>
      <div className="corner corner-tr"></div>
      <div className="corner corner-bl"></div>
      <div className="corner corner-br"></div>
    </article>
  );
}

const notes: NoteData[] = [
  {
    date: '03/03/25',
    location: 'New York City',
    content: [
      "Stillness, huh? Well let's talk about it. Six designers shape Copilot, the pinnacle of Microsoft AI, which now rests at the apex of the entire organization. Roughly two hundred designers work at that apex, and six thousand fight underneath for the chance at an internal transfer. Tens of thousands more gather at the door, knocking at its gates. Hmm? Sorry, it seems that I made a mistake. I heard they hired a seventh, the youngest on the team by a decade. I don't know that man, but I see him behind the mirror.",
      "From a $25 million dollar play project to the most defining role in the history of technology. It's not true product design. We are set to define the personality of the world's first digital species. It's calm now. Stillness exists under pressure. Few measure that in absence of table stakes, stillness carries no meaning, and without movement, there exists no table stakes. I came to New York to see if I would like it, and that I can't answer the question is enough signal to counter the tradeoffs. Now that I could stay, it seems that I wont. Although it's true that there was never a final destination, I have arrived."
    ]
  },
  {
    date: '02/25/25',
    location: 'San Francisco',
    content: [
      "Quite weird that I almost moved to Barcelona to work for Pierre. In that life, there would have been a total vibe switch. But all my life these days has been a vibe switch. It's been feeling surreal, yet I'm kind of like Han is what I was telling Brandon. I'm content with fishing, earning my way as a pastry chef, driving a Prius and smoking cigarettes between prep periods. I don't even feel like I have main character syndrome, and I don't feel better than anyone. Still, I keep going because it would be more than silly to turn down chances like this when they fall into your lap. Once in a few weeks though, I'll remember my adolescence in White Rock, how quiet it was, how it felt like time stood still against the decades. Going back, it still feels like nothing has changed from 2013. And yet I've been living this Pitbull kind of life, state to state, country to country, continent to continent, failure to failure and opportunity to opportunity. I think there's a lot of depth to a life like this, but on the other hand, it's counter to my simple nature."
    ]
  },
  {
    date: '02/24/25',
    location: 'Stanford University',
    content: [
      "I just met this guy at Stanford named SeoulFly. Well, really his name is Jonathan. Computer Science co-term, product at Coinbase, and fellow rapper. Dude has aura for sure, I fucks with him heavy. Not because of his accolades. He legit has immense aura. He also runs an influencer marketing company that ships product. Yeah he was saying some shit like, Instagram is your social currency. Still, I have zero followers, and so if you're reading this, you're one of my dozen or so stalkers. I'm 100% certain someone like me could blow up on Instagram within a couple months. But in my current position, I just find that a little bit cringe. Yet even still, it's something that's worth thinking about. It would be nice to have an extra creative outlet that could connect me to more relevant people, especially if I take Figma in Vancouver. But for now, I don't want to be known, and I don't want to be accessed except by all those that I  allow. You're either in my life or you're not. I don't do in-betweens, but I'm also aware that my feelings about people change with time."
    ]
  },
  {
    date: '02/19/25',
    location: 'New York City',
    content: [
      "Like a frog along lily pads, the path to realizing an outcome follows an arc from point to point, easing in and out of each step. You should then try not to upset the natural flow of things. Frogs are not meant to struggle to swim. So your efforts should feel natural. And so if you fall in the water and the current carries you backwards, I would try not to resist it. Just let the waves carry you back to shore until you can jump again.",
      "You have a shore; so you should jump. Either you reach your target, or the current carries you forward onto the next lily pad, or you missed! Backwards, onto land you go. But you should remember that you are a frog, and that frogs don't drown. You can always try again, and the more you jump, I guess the better you get at jumping. Frogs weren't born jumping, but they are born for it... it's what frogs do. And so you should not be afraid of the water."
    ]
  },
  {
    date: '02/16/25',
    location: 'New York City',
    content: [
      "Growing up, my mom would tell me, \"Save the core of a watermelon for those you love; it's the sweetest part.\" Then, she would feed me a scoop.",
      "At the start of Covid, I visited the home that she grew up in. Under slabs of mud walls, half a roof, and no bathroom, her and her cousins were raised in a space that would make even the smallest New York kitchen-bath apartments seem like Carnegie Hall. When it rained, water seeped through cracks in the ceiling and onto her cotton blanket, which she shared with my aunt. Money was tight; everything and more was taken from our family during the Cultural Revolution when my grandfather, branded a counter revolutionary by the government, was pilloried into a concentration camp and beaten for years, returning a broken man. His days were spent in and out of dumpsters, rolling around on the street like a crazy person, not unlike those under my window in SoMa.",
      "In school, kids would make fun of her for being poor, for having a crazy father. She never let that deter her. Always the top of her class, president, high achiever, her goal was to save 1,000 RMB to build a safety net, so my grandmother would no longer have to trade toothpaste for food when funds ran low. Studying to become an accountant, she worked her way up at the Bank of Jiangsu and eventually assumed the role of president. At that time in China, a banking job was seen as the pinnacle of stability. For a woman like her, growing up like that, it was a ticket to a lifetime of peace.",
      "At the height of her banking career, she quit and started her own venture. It was inconceivable that a woman would do that at the time. When I asked her why, she laughed, and fed me a scoop.",
      "She ran a slow start, and there were times when after paying her employees, there was left no more than 500 RMB in her pocket for the New Year. She rode a motorcycle, and wore a black leather jacket. In times of stress, she would seat herself by the waterfall at her favorite restaurant and think through her plans under live music in the foreground. She never had anybody to rely on, never any man that was strong enough to not hurt her, and never any safety net that she didn't weave herself. When steam picked up, she bought my grandparents an apartment. And then her cousins, and then the same for her aunts and uncles. Twelve homes, one family. Living twenty hour days, nibbling on ginseng to stay awake.",
      "When she had me in her forties, she sat as one of the most successful businesswomen in the province, serving as the founder and chairman of a real estate development company with hundreds of employees. She held dozens of buildings across the mainland, and I lived a childhood marked by private drivers, home chefs, an elevator in two houses, four saunas, six nannies, and an incessant sickness that landed me in the hospital for months out of each year. When I turned three, my left lung collapsed and my heart stopped. Asked, the doctors explained that my body could not handle the air pollution that marred the Chino-industrial metropolis I was born in. When I turned four and at the at the height of her success, she shuttered the operation and moved our family to the bright and airy Canada. When I asked her why, she smiled, and fed me a scoop. Four years after moving to Vancouver, an eight figure investment that would have sustained our family through interest crumbled into dust. In the following decades, we sold asset after asset to sustain living expenses, and when I earned acceptance into UCLA, she gave me a choice. I could either attend college for free in Canada, or she would pay my out of state tuition with no condition. But even then, I knew the gravity what that choice meant.",
      "Sometimes I have a hard time explaining my decisions to people. Why would I go to school in Los Angeles for 100k a year when I could attend college for free on scholarship in Canada? Why would I live in the kind of place I lived in San Francisco, coming from my background? Why would I stay at a startup running out of money only out of loyalty to my mentor, risking deportation? And when the worst happened, why would I move to New York after being laid off, when I could return home and ride out the storm? Why more would I cut off thousands that I like, and that love me, just for focus? And why would I choose design over something stable, like finance, medicine, law, or engineering?",
      "Today, four days before being forced to leave the land I have called home for a decade, I signed a letter to lead a team of dozens across history's most contentious design project. What should it mean for a computer to create subjective experiences? I've said no to so many things that I've wanted for this moment… people, places, and faces… it's hard not to get emotional, and  easy to feel the weight of this responsiblity. Many now depend on the choices I make.",
      "Growing up, my mom would tell me, \"Of all the buildings under my wing, it seems that you may grow into the tallest one.\" Once, I set out to become the best in the world at what I do, giving my heart to create a future where technology is no longer plagued by mindless consumption. Here I arrive at the gate of my American dream. I will always sacrifice what I want and shoulder any weight to provide its equivalent and opposite to those I love, to my family and our world. It's just how I was raised: my sweetest part."
    ]
  },
  {
    date: '01/23/25',
    location: 'New York City',
    content: [
      "Hello and welcome to my comprehensive list of the top five vegetables on planet earth. Number five we have Garlic. It's such an important vegetable because it pairs well with so many other non-vegetables. It's like that friend who fits in all of your friend groups (me). But it's too general to take the spot of any of the other heavy hitters.",
      "At number four, we have Enoki Mushrooms. I know they're technically a fungi (me) but you sauté these silly little critters in some butter with pepper, pistachios, and white fish—your heart will melt. Next we have Squash. Imagine you're lost in some dark forest everywhere and you finally get out after being stranded for three weeks. Someone comes up to you and gives you two plates of food—you can pick one. In one bowl, you have squash stew. In the other bowl, you have an American spring mix salad...",
      ["Coming up as the runner up to this challenge, we have Morning Glory, or ", <SeriffText key="chinese">空心菜</SeriffText>, ". I have so many memories with this one—childhood dinners, birthdays, anniversaries—it's a killer. I bring it to the boba shop and use it as a straw. At any moment, I have it in my left pants pocket. It makes up 47% of my large intestine. Finally we have the winner of this challenge—Fiddleheads. I have no idea what this vegetable is, but one quick Google search reveals that it's not something to be messed around with. When you eat it your nose gets bigger and and bigger until you become a witch."]
    ]
  },
  {
    date: '01/22/25',
    location: 'New York City',
    content: [
      "Most nights, I'm in their basement—hands on the heavy bag, a shuffle of feet on the floor, Charlie calling out, \"Keep your hands up!\" You soon learn it's not about avoiding every punch: it's about seeing when to take them, how to absorb the impact.",
      "If no shots land here, I'll travel to Wuxi and visit family, then Cambodia, Vietnam, Laos, Tibet. And then Barcelona for a couple years, cutting across Europe. Guard tight, feet light, steady pace, an ache that burns. In the city, steam rises from manholes, light bends across fire escapes, and cats shuffle out of the winter cold. I hear my own breathing, and the bag swinging like a pendulum.",
      "Life can be so boring, so stale, so rote and predictable. What's wrong with a little bit of fun, a little bit of bite back? It's difficult to imagine beauty without struggle. It's like that E.L. Doctorow quote: \"You can only see as far as your headlights, but you can make the whole trip that way.\" And that's what I plan to do."
    ]
  }
];

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  // First sort the notes
  const sortedByDate = [...notes].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Then add IDs in a separate step
  const sortedNotes: NoteWithId[] = sortedByDate.map((note, index) => ({
    ...note,
    id: String(sortedByDate.length - index).padStart(3, '0'),
    number: String(sortedByDate.length - index).padStart(3, '0')
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Jivmy",
    "description": "Personal journal and thoughts on design, life, and the intersection of both.",
    "blogPost": sortedNotes.map(note => ({
      "@type": "BlogPosting",
      "headline": `Note ${note.number}`,
      "datePublished": new Date(note.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": "Your Name"
      },
      "location": note.location
    }))
  }

  return (
    <main key={sortedNotes.length} className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <NotoSerifSC />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      {sortedNotes.map((note: NoteWithId) => (
        <Note key={note.id} number={note.number} date={note.date} location={note.location}>
          {note.content.map((paragraph: string | (string | JSX.Element)[], index: number) => {
            if (typeof paragraph === 'string') {
              return (
                <p key={index} className={`${index === 0 ? '!mt-0 first-letter' : ''} ${index === note.content.length - 1 ? '!mb-0' : ''}`}>
                  {paragraph}
                </p>
              );
            } else if (Array.isArray(paragraph)) {
              return (
                <p key={index} className={`${index === 0 ? '!mt-0 first-letter' : ''} ${index === note.content.length - 1 ? '!mb-0' : ''}`}>
                  {paragraph}
                </p>
              );
            }
          })}
        </Note>
      ))}
    </main>
  );
}
