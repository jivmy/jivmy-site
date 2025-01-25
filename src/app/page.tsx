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
    id: '004',
    number: '004',
    date: '01/25/25',
    location: 'New York City',
    content: [
      "I love that I'm writing again. Something about saying what's going on helps to disambiguate it. Before I get into what I have in store for us today, I'd like to preface this yap with some facts. Fact: I never know what I'm going to write or say more than a single word in advance. Fact: 50 Cent definitely hits harder in New York than in Metro Van. Fact: It's actually impossible that I fail. I know what success feels like. I'm surrounded by it, and I was raised by it. One of my best traits is my ability to adapt and evolve. Unlike many others, I don't really care what happens to me. It doesn't matter, because I know what I want: in my head, the picture is really clear. It has nothing to do with making anything happen with any particular person or situation. I see infinite possibilities where I'm thriving and happy. It has nothing to do with a scenario, and everything to do with self perception.",
      "Like the best way for me to describe it is—and I have done this innumerable times in the past—I can see an image in my head of my new evolution. And once the mold sets, I can cut out every single distraction and move towards the target with an acute degree of precision. It's among my superpowers. And tonight, I saw it. It's an odd path, and I appreciate that about it. And honestly, no diss to anybody but when I see people seeking attention, trying to be cool, I cringe. And I feel like that's what separates the dance studio from the boxing gym. I always got the feeling that people at dance were peacocking, just a little bit. Like, \"Oh look at me, I'm so cool, I'm so sexy.\" And it's like one of the main intentions for participating in the hobby. Nobody boxing cares about perception. Fighters care about winning. And I've learned that to win, you need to throw more punches, at higher velocities and with greater precision. You could produce a long diffuse force over time, say... consistent effort, in this metaphor, but it wouldn't be enough to produce the knockout. Similarly, you could pack as much power into a shot as you can, and whiff if your timing is off. Timing, power, and precision. Some things in life are meant to be slapped hard, but only at the right time.",
      "Honestly now that I'm talking my shit, the older I get the less I fuck with people. And I mean this with no hard feelings, but I feel like most people are kind of the same person over and over again. And there's nothing wrong with that, honestly, it's fine.  But how many people do you think go on TikTok for fun, and like to watch the Office, go shopping, go clubbing, and grab boba? I'm not saying these hobbies suck, although they totally do, but it's like... it's hard to get an insightful perspective out of people who consume the same set of content. You need to aggregate and synthesize diverse perspectives to have an opinion. Otherwise it's not an opinion, it's just something you fell into doing or believing because it was convenient. So when I say \"I don't fuck with people,\" I don't mean I dislike people.  But I just have such interesting people around me that I can't help but get bored of hearing the same ideas. I need stem.",
      "On a positive note, I love hating on people. It's so fun. I'm kidding. But no, I'm not kidding at all. I hate people. Anyways, yeah back to that idea about a year of creativity. In a way it's a blessing that I'm not tied to any place or person. I'm standing at this ledge right now where I can jump into any of four continents to base the next years of my life. And I'm aware, that's an amazing feeling that not many people get to have. Not only that, I don't have any pressure of having to make money. And ironically, that alleviation brings me closer to success, because it gives me the space to polish my craft with long-term strategic planning. I don't need to feel like I have to do this or that by when and what time. I can break down my goals into separate pillars and cycle primary emphasis through each as a function of its contextual life situation. So right now, I don't have a job, which could be a disadvantage if I needed money. But because I don't have to worry about that, I actually can do whatever I want. It's funny because I don't want anything, but I'm going to take everything now just to show that I can. I think it'll be fun. I'll start with the physical."
    ]
  },
  {
    id: '003',
    number: '003',
    date: '01/24/25',
    location: 'New York City',
    content: [
      "All of you know me very well. We've grown up next door to each other. Our parents are friends. We went to college together, interned together, explored the world together. And so all of you know that I got laid off in the winter after Spatial invented a VR Monkey Horror game in July, becoming the biggest thing in the world and blowing up our design team while becoming a game company. Some of you think that I'm stressed, and so you don't know me as well as you think you do. Yeah, I care that I was in the same room as the guy who invented Snapchat memories and said \"My cat ate my mom\" in a 9th round interview, yes it makes me cringe. But I don't care that I lost the opportunity. And that's something that I have a hard time telling people. Outcomes don't matter to me. I only care about intention and behavior. I do things to become someone, not to get something. I want be the kind of person who can fail into no negative affect, not the kind of person who can't face adversity head-on.",
      "I wouldn't be in New York if I didn't love and crave the struggle, jobless after dark, not at your \"Rumble Boxing,\" no, but at Woodside Boxing Academy, a professional fighting camp. Some guy there just told me that he once visited the country of Maryland, and you can tell me what that means, please. Give me the hardest story possible. Take away all my luck. Strip me of my status. Lay me bare for the man that I am, and bear withness to what happens next.",
      "During training tonight, I had a second thought branch out of my head. Yes, I could book it to Spain, and that's Path A, maybe still default. Now let's run sims on Path B, which is what should have happened already: I go back to a cushy life in Vancouver where I have everything in the world handed to me... but yet, right after Christian hit me with his jab, Path C materialized as an eligible bachelor in front of me. I'm in the best shape of my life. You know how there is all this AI talk about how computers are going to wipe out every job in the world? If that is even a 50% probable outcome, and which it seems at this point that it's higher, why would I not entertain the idea of approaching physical perfection? Screw all that tech shit. In this time of peace, I could just... chill a little bit. It's like that book \"Thinking Fast and Slow.\" It seems natural that I should be moving faster into the next chapter, and yet although counterintuitive, it might be true that I should slow down and chase something else for a little bit—something out of a painting."
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
