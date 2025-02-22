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
  id: string;
  number: string;
  date: string;
  location: string;
  content: (string | (string | JSX.Element)[] | { type: 'audio', src: string })[];
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

function AudioPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setIsExpanded(false);
      });
      return () => {
        audio.removeEventListener('ended', () => {
          setIsPlaying(false);
          setIsExpanded(false);
        });
      };
    }
  }, []);

  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      <div 
        className={`absolute w-64 h-64 rounded-full bg-black/[0.02] transition-all duration-500 ease-out ${
          isExpanded ? 'scale-[2]' : 'scale-100'
        }`}
      />
      <div className="relative cursor-pointer z-10" onClick={togglePlay}>
        <div className="flex items-center justify-center">
          {isPlaying ? (
            <svg className="w-16 h-16 text-black/40" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-16 h-16 text-black/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
      <audio ref={audioRef} src={src} />
    </div>
  );
}

const notes: NoteData[] = [
  {
    id: '008',
    number: '008',
    date: '02/24/25',
    location: 'New York City',
    content: [
      "When I joined Spatial, I thought I'd never land a role as surreal again. How many people get to start their careers as metaverse designers straight out of college? Our meetings weren't in boardrooms—they were in virtual spaces. Engineers rolled around as dolphins in hamster balls. Our CEO gave speeches in a gorilla suit. And after a few years, everything I saw on the screen was shaped by my own eye. Still I believe the metaverse has potential, offering connection in ways FaceTime never could. In its embarace, I carved out my career mission: to encourage people to have fun dreaming of better lives for themselves and the world.",
      "I'd call myself a realist but an optimist. Life is fantasy, but only the kind rooted in real possibility. Dreams need action, and action fuels momentum that feeds into the dream. Imagination is the key to manifesting anything. Everything that exists—the Metro, fried chicken (I'm starving right now)—arose from imagination. Yet the problem is that reality tends to slow that momentum. You think of something cool to make but don't have the skills to build it. So you find a tutorial, follow it for a while, and then give up because the gap between your ambition and execution feels too wide to cross. I've been there over and over.",
      "Ira Glass once talked about this gap—the one between taste and skill—that every creative person faces. You get into a craft because you have great taste, but at the start, your work isn't good enough to match that standard. It takes years of producing mediocre work just to get to the level you envisioned. A lot of people quit during that phase. The only way through is volume—putting in the reps until one day your skill finally catches up.",
      "It took me years to fully understand the difference between art and design. Art is about expression. It doesn't need an audience, and its purpose is to evoke emotion—or nothing at all. Design, on the other hand, is about intention. It serves a function and has real-world implications. Designers at Tesla consider every possible situation you might encounter on the road, mapping those moments to visual cues that guide you safely to your destination. Mess up the visual hierarchy, an auditory cue, or forget an edge case, and that could mean a car crash—or worse.",
      "Not every design decision is life-or-death. Sometimes you're just tweaking Walmart's checkout flow. But the core principle remains the same: design exists to facilitate action through intentional aesthetics. And in a company, that action is deeply tied to business goals. Instagram designers work to keep you scrolling so they can serve you more ads. Netflix designers craft a premium experience so you'll keep paying for it.",
      "For a while, jamming a metaverse was cool. But at some point, it felt hollow. I fell out of touch with the craft. I chose design for a reason, and when that reason started slipping away, I knew I had to move, and reached a point where I would've rather been designing for Home Depot because at least there, I'd know my work would be useful to someone. Now, it feels surreal. There's something about working on the tools themselves, something about shaping what others will use to create, to dream. How it all connects feels too natural to ignore.",
      "Design has always evolved. Print, static visual communication, graphic and digital design, interactive UX. Now, we're ushering in an era of adaptive design—personalized, dynamic, and fluid. How things look and feel will no longer be fixed. The same app—Spotify, for example—could be a completely different experience depending on the person using it. I'm excited to help define that future.",
      ["And yet, despite everything, the Mountain View role at Microsoft lingers in my mind. Where Figma is about creation, Copilot is about something else entirely. Connection. Not just any connection, but the first real bridge between human and AIL: the first time technology speaks not just to us, but with us. I've been talking to computers my whole life through my annual time capsules, so in a weird way, this feels like fate. Charlie sold  it to me like this: ChatGPT is for utility, Perplexity is for search, and Copilot is for emotion. Not an assistant, not a tool—something more (", <a href="https://www.youtube.com/watch?v=KKNCiRWd_j0" target="_blank" rel="noopener noreferrer">here's a cool TED talk on the team</a>, "). With only six designers on Microsoft AI right now, I'm drawn to the scale in front of me. The weight of it, the reach. The chance to be there at the start, shaping something that billions of people will one day rely on."],
      "New York still has its draw. So does Mountain View. It's funny how much of life is shaped by where you decide to stay. At this crossroads, I can't make a wrong decision anymore. It's not about what I want to do—it's about where I want to be, who I want to become. I feel like the luckiest person on the planet.",
      "Back when I studied Cognitive Science, AI felt so far away. Now it's an amplifier for everything interesting, a catalyst for making things even better. I can't believe this is my life. It's genuinely insane. I'm not talented—not yet—but I do have one superpower. Everybody seems to love me. I'm so stoked I'm about to pee."
    ]
  },
  {
    id: '007',
    number: '007',
    date: '02/23/25',
    location: 'New York City',
    content: [
      "Like a frog along lily pads, the path to realizing an outcome follows an arc from point to point, easing in and out of each step. You should then try not to upset the natural flow of things. Frogs are not meant to struggle to swim. So your efforts should feel natural. And so if you fall in the water and the current carries you backwards, I would try not to resist it. Just let the waves carry you back to shore until you can jump again.",
      "You have a shore; so you should jump. Either you reach your target, or the current carries you forward onto the next lily pad, or you missed! Backwards, onto land you go. But you should remember that you are a frog, and that frogs don't drown. You can always try again, and the more you jump, I guess the better you get at jumping. Frogs weren't born jumping, but they are born for it... it's what frogs do. And so you should not be afraid of the water."
    ],
  },
  {
    id: '006',
    number: '006',
    date: '02/21/25',
    location: 'New York City',
    content: [
      "In the past months, I've grown apart from people that have been with me for decades, and part of me feels their envy cutting into each step I take. I'm not used to it. Is this what it means to be suffering from success? I've given nothing but my best to those I cherish—large sums of money, time, and energy. I don't expect the same back, but this is... isolating. I can only confide in those that have more than me, those that have done more and have become more, of which there are many around me. Still it's crazy how relationships I thought would last a lifetime have disintegrated in the face of this transition. I have nothing but love for my friends, and would do anything for them, even yet still.",
      "If I land next Tuesday it's going to be hard to turn it down. I would be stupid to refuse that amount of money and a lifetime of stability, even for Figma. I'm drawn to what New York could become and grow into, and now more recently afraid of what more bridges will burn with continued ascent. Yet I can't complain. Many would die for my position now, and I'm grateful. I still remember nights in SoMa, having to choose between groceries and an Uber."
    ]
  },
  {
    id: '005',
    number: '005',
    date: '02/20/25',
    location: 'New York City',
    content: [
      "Across patterned sheets, slender bodies pass through as usual, slurring with gin and false promises. Edges, some tattoos, and names that blur. I'm slipping into old habits, and respect is yet again not a prerequisite. What discipline I had in San Francisco could be seen as progress, but in another way it was a form of restraint. It's not like I don't believe in love... and it's not like I'm averse to sobriety. But this place has a way of pulling you. Maybe this works, although it's not ideal. Clean lines of powder, pills, touch without any real discourse. Broken people that are enough for the moment: that's the beauty of the fringes.",
      "I was just talking to Alex about this. We both know what's good for us, and yet at times we reject it because it feels too easy. Not for something better, but what's damaged is alluring, and there's more of that in the world than not. So many clashing images of me exist in just as many people; what's real and loyal remains elusive."
    ]
  },
  {
    id: '004',
    number: '004',
    date: '02/18/25',
    location: 'New York City',
    content: [
      "Growing up, my mom would tell me, \"Save the core of a watermelon for those you love; it's the sweetest part.\" Then, she would feed me a scoop.",
      "At the start of Covid, I visited the home that she grew up in. Under slabs of mud walls, half a roof, and no bathroom, her and her cousins were raised in a space that would make even the smallest New York kitchen-bath apartments seem like Carnegie Hall. When it rained, water seeped through cracks in the ceiling and onto her cotton blanket, which she shared with my aunt. Money was tight; everything and more was taken from our family during the Cultural Revolution when my grandfather, branded a counter revolutionary by the government, was pilloried into a concentration camp and beaten for years, returning a broken man. His days were spent in and out of dumpsters, rolling around on the street like a crazy person, not unlike those under my window in SoMa.",
      "In school, kids would make fun of her for being poor, for having a crazy father. She never let that deter her. Always the top of her class, president, high achiever, her goal was to save 1,000 RMB to build a safety net, so my grandmother would no longer have to trade toothpaste for food when funds ran low. Studying to become an accountant, she worked her way up at the Bank of Jiangsu and eventually assumed the role of president. At that time in China, a banking job was seen as the pinnacle of stability. For a woman like her, growing up like that, it was a ticket to a lifetime of peace.",
      "At the height of her banking career, she quit and started her own venture. It was inconceivable that a woman would do that at the time. When I asked her why, she laughed, and fed me a scoop.",
      "She ran a slow start, and there were times when after paying her employees, there was left no more than 500 RMB in her pocket for the New Year. She rode a motorcycle, and wore a black leather jacket. In times of stress, she would seat herself by the waterfall at her favorite restaurant and think through her plans under live music in the foreground. She never had anybody to rely on, never any man that was strong enough to not hurt her, and never any safety net that she didn't weave herself. When steam picked up, she bought my grandparents an apartment. And then her cousins, and then the same for her aunts and uncles. Twelve homes, one family. Living twenty hour days, nibbling on ginseng to stay awake.",
      "When she had me in her forties, she sat as one of the most successful businesswomen in the province, serving as the founder and chairman of a real estate development company with hundreds of employees. She held dozens of buildings across the mainland, and I lived a childhood marked by private drivers, home chefs, an elevator in two houses, four saunas, six nannies, and an incessant sickness that landed me in the hospital for months out of each year. When I turned three, my left lung collapsed and my heart stopped. Asked, the doctors explained that my body could not handle the air pollution that marred the Chino-industrial metropolis I was born in. When I turned four and at the at the height of her success, she shuttered the operation and moved our family to the bright and airy Canada. When I asked her why, she smiled, and fed me a scoop. Four years after moving to Vancouver, a eight figure investment that would have sustained our family through interest crumbled into dust. In the following decades, we sold asset after asset to sustain living expenses, and when I earned acceptance into UCLA, she gave me a choice. I could either attend college for free in Canada, or she would pay my out of state tuition with no condition. But even then, I knew the gravity what that choice meant.",
      "Sometimes I have a hard time explaining my decisions to people. Why would I go to school in Los Angeles for 100k a year when I could attend college for free on scholarship in Canada? Why would I live in the kind of place I lived in San Francisco, coming from my background? Why would I stay at a startup running out of money only out of loyalty to my mentor, risking deportation? And when the worst happened, why would I move to New York after being laid off, when I could return home and ride out the storm? Why more would I cut off thousands that I like, and that love me, just for focus? And why would I choose design over something stable, like finance, medicine, law, or engineering?",
      "Today, four days before being forced to leave the land I have called home for a decade, I signed a letter to lead a team of dozens across history's most contentious design project. What should it mean for a computer to create subjective experiences? I've said no to so many things that I've wanted for this moment… people, places, and faces… it's hard not to get emotional, and  easy to feel the weight of this responsiblity. Many now depend on the choices I make.",
      "Growing up, my mom would tell me, \"Of all the buildings under my wing, it seems that you may grow into the tallest one.\" Once, I set out to become the best in the world at what I do, giving my heart to create a future where technology is no longer plagued by mindless consumption. Here I arrive at the gate of my American dream. I will always sacrifice what I want and shoulder any weight to provide its equivalent and opposite to those I love, to my family and our world. It's just how I was raised: my sweetest part."
    ]
  },
  {
    id: '003',
    number: '003',
    date: '01/26/25',
    location: 'New York City',
    content: [
      { type: 'audio', src: '/real.m4a' }
    ]
  },
  {
    id: '002',
    number: '002',
    date: '01/23/25',
    location: 'New York City',
    content: [
      "Hello and welcome to my comprehensive list of the top five vegetables on planet earth. Number five we have Garlic. It's such an important vegetable because it pairs well with so many other non-vegetables. It's like that friend who fits in all of your friend groups (me). But it's too general to take the spot of any of the other heavy hitters.",
      "At number four, we have Enoki Mushrooms. I know they're technically a fungi (me) but you sauté these silly little critters in some butter with pepper, pistachios, and white fish—your heart will melt. Next we have Squash. Imagine you're lost in some dark forest everywhere and you finally get out after being stranded for three weeks. Someone comes up to you and gives you two plates of food—you can pick one. In one bowl, you have squash stew. In the other bowl, you have an American spring mix salad...",
      ["Coming up as the runner up to this challenge, we have Morning Glory, or ", <SeriffText key="chinese">空心菜</SeriffText>, ". I have so many memories with this one—childhood dinners, birthdays, anniversaries—it's a killer. I bring it to the boba shop and use it as a straw. At any moment, I have it in my left pants pocket. It makes up 47% of my large intestine. Finally we have the winner of this challenge—Fiddleheads. I have no idea what this vegetable is, but one quick Google search reveals that it's not something to be messed around with. When you eat it your nose gets bigger and and bigger until you become a witch."]
    ]
  },
  {
    id: '001',
    number: '001',
    date: '01/22/25',
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Jivmy",
    "description": "Personal journal and thoughts on design, life, and the intersection of both.",
    "blogPost": notes.map(note => ({
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
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <NotoSerifSC />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      {sortedNotes.map((note) => (
        <Note key={note.id} number={note.number} date={note.date} location={note.location}>
          {note.content.map((paragraph, index) => {
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
            } else if (paragraph.type === 'audio') {
              return <AudioPlayer key={index} src={paragraph.src} />;
            }
          })}
        </Note>
      ))}
    </main>
  );
}
