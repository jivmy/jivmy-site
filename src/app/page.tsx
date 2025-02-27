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
    date: '02/27/25',
    location: 'New York City',
    content: [
      "Oh my god... since my time here is nearing its end, I know what I'm going to do. Stuffing shit into my backpack, I've just decided to go on a super foodie tour. I'm not friends with regret, but I could definitely see myself meeting with him after leaving this place and seeing some video on YouTube of some dude eating a rare item that I can't find elsewhere. I'm playing through a video right now called New York's Best Restaurants 2024: Where Chefs Eat. Of course you would go where chefs eat. Duhhhh. That's like, all they do. When I was at Debeck, I wanted to be a comedian, detective, and also a chef. In a way that you may not imagine, those things are all related. Each is able to surprise people, by revealing or creating something that  is non-evident. Even now I still want to be a bit of a chef. I love cooking for people, and if life leads me home, I'm gonna spend a lot of time cataloging and documenting my family's traditional Wuxianese recipes on social media.",
      "I'm creating a new account, untethered to people who can find me. In New York I've been posting reels to test the waters. I'd like to lay off the vibe explorations now and use my natural charisma and design chops to connect with a real audience. Not sure about what yet, but I have a couple of cool ideas. I think 20k is a good number to start for this year, and then 120k the year after. Andrew can help me, of course. Reducing headcount on Instagram was always more about defining a public brand from scratch than social disconnection. It's going to be nice to untether from these visa restriction chains and start a side business as well. And jazz piano! So stoked for real.",
      "Honestly, you know all those posts on TikTok that's like... I'm on my winter arc shit, look at this glow-up. I feel like this winter arc has been about getting beat and thrown around in rat-and-crow-roach infested buildings with no heating. And yet at the tail end of it now, I feel this warmth. Not even about that things will be okay no matter what happens, but now I know that sometimes, the universe holds a bigger plan for you than you do for yourself. What seems good may turn out to be bad, and what seems bad at first glance may turn out amazing beyond rational imagination. Kind of like moving to San Francisco, into that neighborhood. I never imagined being able to meet such a quirky and amazing group of friends by pure chance.", 
      "Nowadays I try to see the silver lining and grace in everything that happens, and with my options converging from infinite to two paths forward, possibilities brimming the future are forming on the horizon. But oh my god, I am so hungry right now. I'm going to wrap up that video and get my munch on. Woooooo!"
    ]
  },
  {
    date: '02/26/25',
    location: 'New York City',
    content: [
      "I spent the 23rd year of my life chasing adventure, and near its end I followed through with my promise to move to New York. Now that everything has been solidified, I'm happy to spill my beans. I'll start by saying that I think it's rare to cross paths with someone that you click with immediately, and even more rare for them to exert such an influence on you that drives you to think about a life beyond your own, even if just for a moment. I had been living in a stable and well designed chapter: each element of my life was curated for advancement. Confident and settled, I met someone that affirmed my core belief at the time: a man like me could have everything that he wants, and more. And so I was inspired to move to New York despite the known risks associated, because I believed that everything could, and would fall into place. I knew that we had six months of runway, and in that time I planned to pivot to my next thing and upstart my life in New York, the last remaining curiosity I carried about a future in America.",
      "Yet in July, our company split into two. Half of us concieved of  a horror game in virtual reality for monkeys. I observed as it climbed into the top 100 games in the world, then the top 10, then the top 5, before growing into the most profitable and downloaded game on Meta Quest to ever exist. Our design team got laid off in the fall and we began to sunset the main product. In a way, it was the first time I suffered an adult setback, and yet I had faith that the cards would fall my way. Nearing eight hundred rejections later and with time running thin on my visa, I met doubt for the first time. Was I here chasing a dream, or was I chasing an idea? I began to grapple with questions I hadn't for a half a decade. And so I did what I had been taught to do when the stars misalign: fight. I pushed forward, and I moved to the Big Apple. I dedicated myself to a professional U.S.A. boxing gym, taking punches to feel the true gravity of all that was being thrown my way. And so I planned all the way through the end. Six contingency plans, nets, that fell into each other, with the last landing on dedicating the next years to Muay Thai in Thailand. Still yet, the first remained to stay here, and find a path forward.",
      "So I signed up for two events each week to immerse myself in the city, as I had done in San Francisco. Over that time, I concluded that this place is not for me. New York City is about status and envy where California is about peace and connection. I'm much more for the latter, yet I don't enjoy making promises that I can't keep. I had to bite the bullet, learn and mature in a space more inflicted by this environment than self-prescription. Here, I've come to understand that I can't have everything I want, but also that I can have some of it. Having some things means saying a soft no to others, and having others means saying a hard no to the some. Despite it seeming so, living in a state of adventure was never a core pursuit. I'm a builder, and I enjoy progress. In the past months, I've had to make difficult decisions to distance relationships that I've held for decades. More, I've curtained storylines that could bloom into something tangible. And I've turned away from what brought me to this city.",
      "I've chosen my defined purpose: to encourage people to have fun dreaming. In both my career and personal life, I'm motivated to raise others up into the best versions of themselves. At times, that means closing paths. I see how this life in New York could blossom, and yet I choose to walk away. Not for something better, but because I've gained clarity on what I'm moving towards: an open atrium, soft linens, arcs of light cutting across glass onto raw oak slabs. Garden fruit with sweet wind carrying citrus, honey, and tulips. Bees gliding through a window, over a table with small mustard fingerprints, and out the garage while hurried by one of those fluffy fat dogs and a cat with short trimmed whiskers. Scents of rain, ube, mint, and sawdust. Slow vinyls and Riesling enjoyed under skies specked by blankets of stars. Grapes, tender fish, pea shoots, and all the time in the world to read, share, laugh, and build towards a life worth staying for.",
      "What does that image look like? Do you see it? Hear it? In this next chapter, I've made the decision to trade what is gratifying and divergent, fun and sweet, for what is right and stable. It's a turning point in my maturity, to surrender what I want in the moment for what I know is best for the future. I don't ever leave things behind, I leave things away. I think that our positions in life are relative and a-directional. I don't know if this is the right path, but as a designer I carry conviction in my decisions by considering its associated and conclusive array of weighted subjective probabilities. I've made sure to arrive here myself, without any influence that I know would have swayed my thinking. Here in this moment, I sit in a period of calm. After visiting California earlier this week, I understood that it was never necessary to live a life marked by the next coolest thing. It's always been more important to be real and honest, and I've learned that hardship is not always the most productive path. In my life I've taken a set of risks that have not paid off, but also many that have. In each one, I've chosen to believe in possiblility all the way through to the end. I'm an emotional person, but I don't allow the weight of my feelings dictate my choices. We are all on our own paths, and we all make the decisions that are best for us. You should understand that I respect that, and even more, I admire that trait in people: knowing when to walk away, especially when it's the hard decision."
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
