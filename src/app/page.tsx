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
    id: '007',
    number: '007',
    date: '02/22/25',
    location: 'New York City',
    content: [
      "I feel like the luckiest person on the planet. When I joined Spatial, I recognized that under all odds, my next role would not be as gratifying. How many people are blessed with a job as a metaverse designer right out of college? We had our meetings in virtual spaces. Engineers rolled around as dolphins in hamster balls, the CEO gave speeches in a gorilla suit, and after a few years, everything that I saw on the screen was a product of my own aesthetic taste. I still think the metaverse as a medium has potential to connect us in ways that something like FaceTime can't. In those years, I formed a career mission: to encourage people to have fun dreaming.",
      "I would describe myself as a realist, but an optimist. I think the best part of life is fantasy, but only ones rooted in real possibility. Dreams require action, and action produces momentum that feeds back into the dream. In this way, imagination is the key to manifesting anything into reality. In fact, everything that exists in the world, from the Metro to fried chicken (I'm really hungry right now), is a product of imagination. I think the problem is that usually, the troubles of reality slow down the momentum of a imagination. You have an idea for something cool that you would like to make, but lack the skills to make it. And so you search up a tutorial somewhere on the internet, follow it for a while, and then give up because the gap between your skills and execution seems too wide to cross.",
      "In my own work, I've experienced such a multitude of times. I once heard a quote by Ira Glass: \"Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it's just not that good. It's trying to be good, it has potential, but it's not. But your taste, the thing that got you into the game, is still killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn't have this special thing that we want it to have. We all go through this. And if you are just starting out or you are still in this phase, you gotta know its normal and the most important thing you can do is do a lot of work. Put yourself on a deadline so that every week you will finish one story. It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions.\"",
      "Art and design are different, and I'm embarrassed to say that I didn't really understand the nuance until years into my career. Art is about expression. It doesn't need an audience, and its purpose is to evoke an emotion, or none at all. Design on the other hand, is about intention. It serves to provoke an action, and it has implications in the real world. Designers at Tesla consider every situation you may encounter on the road, and map those considerations to visual symbols and aesthetics that guide you to your target destination safely. Messing up the visual hierarchy, or an auditory cue, or forgetting a key edge case could cause a car crash, or even death. Design has real world implications, and allows you to work on problems across a variety of domains.",
      "Not everything in design is as high stakes as Tesla (you could be designing a checkout flow for Walmart), though the primary value of design is always in facilitating a desired set of actions and outcomes through intention and aesthetics. In a company, those actions are entwined with profits and business goals. Designers at Instagram work to keep you scrolling so they can feed you more advertisements, while designers at Netflix work more on a visceral and interaction design level to make the experience premium enough that you would pay for it. Jamming on what should be a metaverse has been cool, but at a certain point, I felt like it was all a bit meaningless. I fell out of touch with the craft, because I chose design for a purpose: to help people. At a certain point, I would rather have been designing for Home Depot, because I could at least understand that people were getting some benefit out of my work.",
      "So this role at Figma gratifies me in a way that I can't fully express. Designers make tools, and I have the privilege of being one of the half dozen people on the planet to redefine the very meaning of what it means to design. I think it's so cool. And I imagine a world where designers are free from tedious layout and design systems execution work. With that time back, applications and tools will reach a new visual standard. If you look at history, design has always moved to higher levels, from print and static visual communication, to graphic and responsive digital mediums, to the web and interactive content, and now holistic user experience and product design systems thinking.",
      "Design has become more fluid over time, and the new wave we're going to usher in is something I'll term adaptive design. It's a wave of personalization. Supercharged designers, the best of the best, will automate tedious work and be siloed into one of two slots that provide the new product ecosystem competitive advantage. I think there will be designers that operate at the highest levels of human beauty through visual storytelling and interaction design craft, making products that move you emotionally and spur desire to act in the real world. Gone will be the days of tapping on buttons, waiting for things to refresh, and in will be dynamic and fluid interfaces, personalized for each user. In such a system, a single app like Spotify could look and feel wildly different between you and I. And on the other side, I think there will be design strategy architects not dissimilar to pure user experience designers today, that consider not only the interface but also retail experiences tied to the physical world or even the metaverse or whatever.",
      "I think that's also why despite it being for a boring enterprise company, this Mountain View role at Microsoft intrigues me as well. I think everyone on the team is super intentional and passionate. Where Figma would help me encourage people to have fun dreaming by raising the visual bar for all digital applications,  the Inflection AI squad at Microsoft wants me to leverage craft and own voice interfaces for Copilot, and it's cool because I've been talking to computers my whole life through annual time capsules. It seems like a fit. I guess the way that Charlie sold it to me was, where ChatGPT is for utilitarian purposes, and Perplexity is for search, Copilot is for emotion. Its differentiator is to become the first AI that feels not only helpful, but human, like a true companion. It's also cool because there are only 6 designers on Microsoft AI right now, so my impact would be outsized. I guess the choice is to work on embedding personality into the world's first AI human, or to help define the world's first AI designer.",
      "Going with Figma would keep me in New York and serve as a springboard leverage to redeem Suno and become the world's first AI rapper. There I could even ask Timbaland to produce for me. It was embarrassing that I lost that in the 9th round, but also gratifying that the guy who invented Snapchat memories called me the most thoughtful person he ever interviewed. I think it's so cool what they're doing, and though I couldn't redesign music in the 30 minutes I got, I'm confident that if any team could do it it's that one. Defining a world where anybody is a musician is crazy, because a song is really just a story told through a catchy melody. As a rapper myself, I understand that it lets us capture the emotion of a moment in its totality. And when you listen to a song you made a while back, it brings you back to that moment too. Even if you didn't make the song yourself. It's kind of like what I was talking about with the bridge between execution and taste. Suno is bridging that gap, and it's evident in that they remain the fastest growing AI startup in the world. It's still the role that gives me the best vibes, and I love everyone there, and it aligns with the mission too. Yet going back to Mountain View means true stability and OS level work, which I can leverage with Niko to talk with Apple's Human Interface.",
      "Really, I can't make a wrong decision here anymore. Every option seems exciting and fills me with energy. It's more of a choice of where I want to live now, and less of what I want to do. When I studied Cognitive Science, indeed the study of intelligent systems, all of this artificial stuff seemed so far away. And now it's really just like an amplifier for everything that's super cool, which lends more potential to make more things even cooler. I can't believe this is my life, it's genuinely insane. So much is going on. I'm not talented, at least not yet, but I do have a superpower: everybody loves me. I'm so stoked I'm about to pee. Still can't get over how I thought I was going to get replaced by AI and now I'm the bad guy."
    ]
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
