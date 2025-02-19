'use client';

import { useState, useRef, useEffect } from 'react';

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
    id: '006',
    number: '006',
    date: '02/18/25',
    location: 'New York City',
    content: [
      "Growing up, my mom would tell me, \"Save the core of a watermelon for those you love; it's the sweetest part.\" Then, she would feed me a scoop.",
      "At the start of Covid, I visited the home that she grew up in. Under slabs of mud walls, half a roof, and no bathroom, her and her cousins were raised in a space that would make even the smallest New York kitchen-bath apartments seem like Carnegie Hall. When it rained, water seeped through cracks in the ceiling and onto her cotton blanket, which she shared with my aunt. Money was tight; everything and more was taken from our family during the Cultural Revolution, when my grandfather was marked a counter revolutionary by the government. He was brought into a concentration camp and beaten for years, returning a broken man. His days were spent in and out of dumpsters, rolling around on the street like a crazy person, not unlike those under my window in San Francisco.",
      "In school, kids would make fun of her for being poor, for having a crazy father. She never let that deter her. Always the top of her class, president, high achiever, her goal was to save 1,000 RMB to build a safety net, so my grandmother would no longer have to trade toothpaste for food when funds ran low. Studying to become an accountant, she worked her way up at the Bank of Jiangsu and eventually assumed the role of president. At that time in China, a banking job was seen as the pinnacle of stability. For a woman like her, growing up like that, it was a ticket to a lifetime of peace.",
      "At the height of her banking career, she quit and started her own venture. It was inconceivable that a woman would do that at the time. When I asked her why, she laughed, and fed me a scoop.",
      "She ran a slow start, and there were times when after paying her employees, there was left no more than 500 RMB in her pocket during the New Year. She rode a motorcycle, and wore a black leather jacket. In times of stress, she would seat herself by the waterfall at her favorite restaurant and think through her plans under live music in the foreground. She never had anybody to rely on, never any man that was strong enough to not hurt her, and never any safety net that she didn't weave herself. When steam picked up, she bought my grandparents their first apartment. And then her cousins, and then the same for her aunts and uncles. Twelve homes for one family. Living twenty hour days, nibbling on ginseng to stay awake.",
      "When she had me in her forties, she sat as one of the most successful businesswomen in the province, serving as the founder and chairman of a real estate development company with hundreds of employees. She carried dozens of buildings across the mainland, and I lived a childhood marked by private drivers, home chefs, an elevator in two houses, four saunas, six nannies, and an incessant sickness that landed me in the hospital for months out of each year. When I turned three, my left lung collapsed and my heart stopped. Asked, the doctors explained that my body could not handle the air pollution marred the Chino-industrial metropolis I was born in. When I turned four and at the at the height of her success, she shuttered the operation and moved our family to the bright and airy Canada. When I asked her why, she smiled, and fed me a scoop. Four years after moving to Vancouver, a eight figure investment that would have sustained our family through interest crumbled into dust. In the following decades, we sold asset after asset to sustain living expenses, and when I earned acceptance into UCLA, she gave me a choice. I could either attend college for free in Canada, or she would pay my out of state tuition with no condition. But even then, I knew the gravity what that choice meant.",
      "…",
      "Sometimes I have a hard time explaining my decisions to people. Why would I go to school in Los Angeles for 100k a year when I could attend college for free on scholarship in Canada? Why would I live in the kind of place I lived in San Francisco, coming from my background? Why would I stay at a startup running out of money only out of loyalty to my mentor, risking deportation? And when the worst happened, why would I move to New York after being laid off, when I could return home and ride out the storm? Why more would I cut off thousands that I like, and that love me, just for focus? And why would I choose design over something stable, like finance, medicine, law, or engineering?",
      "Days before being forced to leave the place I have called home for a decade—today, I signed a letter to lead a team of dozens across the most ambitious design project in human history. It carries the gravity to redefine the entire concept of visual communication. What does it mean to be a designer? It means to think through emotion to drive perception and guide action. It's the redline through desire and output. It's what gets you onto the Metro, off the J line, into the classroom. It's what keeps you scrolling and scrolling through your loneliest moments, wondering about things that shouldn't even be on your mind. It's what helps you pay your credit card, and invest in your future. It's what helps you find songs to listen to when you score a goal so unlikely it doesn't seem like it's real.",
      "I've said no to so many things that I've wanted for this moment… people, places, and faces… it's hard not to get emotional. And it's hard not to be amazed that I've been blessed with one of the five slots in history to redesign design itself. I chose this craft because I loved it, but also because I saw the slim chance that this moment would happen, that I would catch a sliver in time to take a golden risk, and that I would be blessed with the courage to jump into the dark without a harness. From here, things will move fast, and I recognize that. Growing up, my mom would tell me, \"Save the core of a watermelon for those you love; it's the sweetest part.\" Design is my core. It's my channel for giving back to my family, and it's my way of making myself proud. I've long ago set to become the best in the world at what I do. Today, I arrive at the gate of my American dream. I will always sacrifice what I want and shoulder a world of pain to give its equivalent and opposite to those I love. It's just how I was raised. And though it means remaining apart from those I love, it's now my turn to share the core of who I have become—my sweetest part."
    ]
  },
  {
    id: '005',
    number: '005',
    date: '01/26/25',
    location: 'New York City',
    content: [
      { type: 'audio', src: '/real.m4a' }
    ]
  },
  {
    id: '004',
    number: '004',
    date: '01/25/25',
    location: 'New York City',
    content: [
      "I love that I'm writing again. Something about saying what's going on helps to disambiguate it. Before I get into what I have in store for us today, I'd like to preface this yap with some facts. Fact: I never know what I'm going to write or say more than a single word in advance. Fact: 50 Cent definitely hits harder in New York than in Metro Van. Fact: It's actually impossible that I fail. I know what success feels like. I'm surrounded by it, and I was raised by it. One of my leading traits is my ability to adapt and evolve. Unlike many others, I don't really care what happens to me. It doesn't matter, because I know what I want: in my head, the picture is really clear. It has nothing to do with making anything happen with any particular person or situation. I see infinite possibilities where I'm thriving and happy. It has nothing to do with a scenario, and everything to do with self perception.",
      "Like the best way for me to describe it is—and I have done this innumerable times in the past—I can see an image in my head of a new evolution. And once the mold sets, I can cut out every single distraction and move towards the target with an acute degree of precision. It's among my superpowers. And tonight, I saw it. It's an odd path, and I appreciate that about it. And honestly, no diss to anybody but when I see people seeking attention, trying to be cool, I cringe. And I feel like that's what separates the dance studio from the boxing gym. I always got the feeling that people at dance were peacocking, just a little bit. Like, \"Oh look at me, I'm so cool, I'm so sexy.\" And it's like, one of the main intentions for participating in the hobby. Fighters don't care about perception, only winning. I've learned that to win, you need to punch more, at higher velocities and with greater precision. You could produce a long diffuse force over time, say... consistent effort, in this metaphor, but it wouldn't be enough to produce the knockout. Similarly, you could pack as much power into a shot as you can, and whiff if your timing is off. Timing, power, and precision—some things in life are meant to be slapped, at the right time.",
      "Honestly, now that I'm talking my shit, the older I get the less I fuck with people. And I mean this with no hard feelings, but I feel like most people are kind of the same person copy and pasted. And there's nothing wrong with that, honestly, it's fine.  But how many people go on TikTok for fun, like to watch KDramas, go shopping, go clubbing, grab boba? Not saying these hobbies suck, although they totally do, it's just hard to get an insightful perspective out of people who consume the same overlapping sets of inputs. Opinions arise from a synthesized set of diverse perspectives. Otherwise it's not an opinion, it's just something you fell into doing or believing because it was convenient. So when I say \"I don't fuck with people,\" I don't mean I dislike people. I just know such interesting folks that I get bored of hearing the same ideas from these broheads.",
      "On a positive note, I love hating on people... it's so fun. Haha I'm kidding. But no, I'm not kidding at all. Whatever, back to the year of creativity. It's a blessing that I'm not tied to any place or person. I'm standing at this ledge right now where I can jump into any of four continents to base the following years. It's an amazing feeling that not many people get to have. Not only that, I don't have the pressure of having to make money. Alleviation brings me closer to the target, because it offers space to polish craft by setting strategic long-term initiatives—think in years, instead of weeks or months. Next up is to rotate emphasis through core vectors, starting with the physical."
    ]
  },
  {
    id: '003',
    number: '003',
    date: '01/24/25',
    location: 'New York City',
    content: [
      "All of you know me very well. We've grown up next door to each other. Our parents are friends. We went to college together, interned together, explored the world together. And so all of you know that I got laid off in the winter after Spatial invented a VR Monkey Horror game in July, becoming the biggest thing in the world and blowing up our design team while becoming a game company. Some of you think that I'm stressed, and so you don't know me as well as you think you do. Yeah, I care that I was in the same room as the guy who invented Snapchat memories and said \"My cat ate my mom\" in a 9th round interview, yes it makes me cringe. But I don't care that I lost the opportunity. And that's something that I have a hard time telling people. Outcomes don't matter to me. I only care about intention and behavior. I do things to become someone, not to get something. I set to be the kind of person who can fail into no negative affect, not the kind of person who can't face adversity head-on.",
      "I wouldn't be in New York if I didn't love and crave the struggle, jobless after dark, not at your \"Rumble Boxing,\" no, but at Woodside Boxing Academy, a professional fighting camp. Some guy there just told me that he once visited the country of Maryland, and you can tell me what that means, please. Give me the hardest story possible. Take away all my luck. Strip me of my status. Lay me bare for the man that I am, and bear witness to what happens next.",
      "During training tonight, I had a second thought branch out of my head. Yes, I could book it to Spain, and that's Path A, maybe still default. Now let's run sims on Path B, which is what should have happened already: I go back to a cushy life in Vancouver where I have everything in the world handed to me... but right after Christian hit me with his jab, Path C materialized as an eligible bachelor. I'm in the best shape of my life. You know how there is all this AI talk about how computers are going to wipe out every job in the world? If that is even a 50% probable outcome, and which it seems at this point that it's higher, why would I not entertain the idea of approaching physical perfection? Screw all that tech shit. In this time of peace, I could just... chill a little bit. It's like that book \"Thinking Fast and Slow.\" It seems natural that I should be moving faster into the next chapter, and yet although counterintuitive, it might be true that I should slow down and chase something else for a little bit—something out of a painting."
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

  return (
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <NotoSerifSC />
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
