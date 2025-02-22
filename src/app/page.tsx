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
  content: (string | (string | JSX.Element)[])[];
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
    id: '010',
    number: '010',
    date: '02/23/25',
    location: 'New York City',
    content: [
      "I'm starting to pick up steam; In that time at the café, I've found clarity, and it's been gratifying. Really I just needed to go touch grass—being stuck in the crib hasn't been good for the vibes. Because Charlie and I click on the future of Microsoft AI being deeply human and interfaced through voice reflection, I've been feeding these entries into Copilot to see what my negative blinds spots are so I can grow. I'll address them here:",
      "Pushing people away – You frame it as a necessity for success and stability rather than an emotional response to fear or uncertainty.",
      "I see this. It's definitely an emotional response, yet it's one that protects me from harm and allows me to move forward. Yeah I didn't have to delete thousands of followers, but now I don't have to watch thousands of stories and get a thousand doses of FOMO. I still I have two dozen in my life at all times that have my back to the highest degree. It's all I need: quality over quantity, and it's more of both than most.",
      "Moving between muses – You justify detachment by saying muses are meant to be temporary, not something to hold onto.",
      "I think this is more a product of those two circumstances than a fear of attachment. I'm not anxious or avoidant, and would have given a real effort if it made sense. More than that, I'm reminded of the Thich Nhat Hanh quote: you must love in a way where the person you love feels free. It's not apt to cling to what isn't meant to be. I learned from Erin that if you really admire someone and care for them, it's important to admit with grace when you should not  be together. Instead, you should root for their success even with another, as they are with another. For if you are both good people who deserve a chance to achieve their dreams, I think it would be really bad to stand in the way of that.",
      "Constant motion and ambition – You tell yourself you don't fear attachment, yet much of your life is structured to avoid staying still.",
      "Also true, I admit it. But if I wanted everything handed to me, if I wanted an easy life and to drive an Aston Martin/G-wagon, I would have stayed in Elgin Chantrell. I've structured my life this way with intention. I'm on a mission to see how much pressure I can shoulder, because I know the outcome will make me stronger. I never wanted an easy life, but a meaningful one. In all cases that I fail here, I return to a world that most could not even imagine. But until then, I choose to run, to stay in movement, to suffer failure, setbacks, in states of near poverty. I'm not designing the world—I'm designing a man.",
      "Your relationship with struggle – You acknowledge that you might romanticize struggle but also frame it as an inevitable, even necessary, part of success.",
      "Is success material wealth? I don't see it that way. Success is tracing the line between where you started and where you end, and it's all the moments in between. When you're born on the final level of the map, there's nothing left. Most people wouldn't leave a golden plate and a lifetime of abundance to take the hard road. But most people also wouldn't be in my position. Luck isn't free; it comes at a cost."
    ]
  },
  {
    id: '009',
    number: '009',
    date: '02/22/25',
    location: 'New York City',
    content: [
      "In the Hugo Hotel, I'm sat at a café with backlit ivy vines that traverse an open atrium. Oil paintings cling onto floral wallpaper, separated by laminated oak slabs forming a gradient that shimmers against orb-like lamps strung from the ceiling. If anything, one positive from this layoff is that I've been writing again, collecting and synthesizing my thoughts.",
      "I'm here to prepare for the most critical interview of my career: Microsoft AI. Success is a lonely road, embedded in opposite to my extroverted nature. I'm afraid of what is fleeting, and so I let go of it before it has a chance to hurt me. I recognize that on the surface to many, I may appear detached, romanticize struggle, am reluctant to stay still, reaching for something with a sort of lone-wolf complex. But it's not true. I have good people around me, and enough of them that I've chosen put a stake in the ground and say that the rest, not that they don't matter, but that I can't let them matter. I push people away because I'm not good for them, not in the man I am, but in my stability in this country. At any moment, all  can be taken away from me. I'm not yet strong enough to raise a barrier to protect all those I love, and despite being at a career high, it seems i'm not as strong as I was when I was in a stable state, in San Francisco. New York City has been tough, and in the back of my mind I'm averse to its noise. Yet I'm an optimist, and see its potential. Staying in this foreign land is my statement that no matter what happens, I'll act with courage.",
      "Quite a while ago, I heard that some of us are optimizers, and others are satisfiers. With relationships and career, some people take what then can get with contentment, and others strive for the best that they can do, never satisfied. At heart, I'm a satisfier. Near everybody that enters my life holds a high opinion of me, not for my achievements, but for my warmth towards them. I understand that people are not perfect, and so I'm able to love a wide variety of people, despite their flaws. Yet in my career, I'm an optimizer. In the past months, I have applied to thousands of roles, facing dozens of inbox rejections each morning, before stumbling into the holy grail of all design projects. Luck plays a factor, and in this circumstance it seems to be the major one. As a man, you are hammered in that your value comes from material success, and as a designer, what you work on in part defines your identity in a way that's unfamiliar to those in more traditional industries. I've felt lost and drifting, in a sea of new faces and around the arms of strangers I have nothing in common with, in substances that have no business being in my body. And yet I keep moving. I choose to stay, even if I know I could be giving more of myself to the mission. I'm imperfect, and I allow myself grace to be so, in a time where everything is uncertain. In time I will return stronger, and I'll find my footing. Without any ego, I am flawed.",
      "Once ago I told Erin that my greatest fear was growing old, and when we broke up, I told her that I finally understood it. I'm afraid not of aging, but of stagnation. But now I see that stagnation isn't real. Like an escalator, you're either moving forward or backwards. Even more, I've become aware that the best attitude is ambivalence towards either direction, yet I'm short on the maturity to feel that way when the world collapses under my feet into dead ocean.",
      "Sometimes, emotions don't need to be diced, introspected as is natural to me: they just need to be felt, to be sat with until you move forward. When expectations run high, there's no room for organic and imperfect beauty. I'm aware that life's best things take time to grow, and so my avoidance of staying still stems from my inability to hold onto it in this phase of life. I'm not afraid of attachment to any place, person, or career, nor am I always chasing something new. It's only that my situation doesn't allow me to take a breath. If design is all about optimizing within constraints, motion is mine. If can't have what I want, so I've chosen the next best thing: variety.",
      "Star patterns line the rim of my matcha cup; I pick it up, and take a sip. Spencer sits across from me, reading Dostoevsky. In some ways, the contrast that surrounds my life has allure. I'm aware of my own negative behavior, pushing others away. Through my way with words, I'm able to rationalize it, recognize that it's not healthy, but also that it's not forever. Only a cost I've chosen to pay to maximize my chance of success. Although it's difficult, I see a future where I have it: an open house, fresh linens, arcs of light cutting through glass onto a raw oak and birch palette. Garden fruit with sweet wind carrying hints of citrus, honey, and flowers. Bees gliding through a jarred window, over a table with small ketchup fingerprints, and out the garage, hurried out by one of those fluffy dogs and a puffy cat with short whiskers. Scents of rain, ube, mint, and sawdust. Burned vinyls and Riesling enjoyed under nights specked with thousands of stars. Tender fish, chicken. All the time in the world to laugh, share, and build towards a better future."
    ]
  },
  {
    id: '008',
    number: '008',
    date: '02/21/25',
    location: 'New York City',
    content: [
      "Last winter, I had a muse, and last summer, I found another. Maybe that's just how it goes—phases of intensity, followed by detachment. Nothing ever starts with the intention of being temporary, but you can feel it in the undertones. The way time moves too fast when you're with someone, how words slip out easier, how your mind sharpens in their presence. You start writing more, thinking more, feeling more. It's intoxicating. But the thing about muses is that they aren't meant to stay, but rather meant to show a lesson, to shine a better way forward.",
      "Each time, attachment forms too quickly. I saw it happening in real time, like watching myself make a mistake I couldn't stop. That's when I realized I was slipping into old habits, mistaking inspiration for permanence. That's not what I want right now—not in this season of my life, not while everything is still in motion. Now I keep things casual. Moving in and out of people's lives, and letting them do the same with mine. No expectations, and no illusions of forever. Just presence, growth, and understanding.",
      "Love is what you build for yourself and share with others. I used to think it was attachment—used to mistake longing for meaning, but that was a reflection of what I hadn't yet learned to give myself. Self-love isn't indulgence. It's discipline. It's choosing what's right over what's easy. Waking up early, even when you're not required to. Going to the gym despite exhaustion. Protecting your energy, and being selective about who gets access to your space.",
      "And through all of this, I've figured out the image of what I want. Someone calm, composed, unbothered in the face of chaos, and with perspectives that shape my own. Stylish, sharp, and self-assured without a need for validation, because they already know who they are, who they want to be, and how to get there. I remain thankful, and wouldn't have known that without having been with many of the opposite. Experience refines you. Teaches you where your boundaries should be. Makes it easier to walk away when it doesn't align, no matter how good it feels in the moment, or how sweet the other person is. I'm sure that I've played the same role in the lives of many, and I wish them all the best.",
      "For now, I need to disappear. I have a hunch that Spencer's ex is stalking my socials, and I have no interest in losing my privacy. But even that, I get how it feels to move forward after your first love."
    ]
  },
  {
    id: '007',
    number: '007',
    date: '02/20/25',
    location: 'New York City',
    content: [
      "When I joined Spatial, I thought I'd never land a role as surreal again. How many people get to start their careers as metaverse designers straight out of college? Our meetings weren't in boardrooms—they were in virtual spaces. Engineers rolled around as dolphins in hamster balls. Our CEO gave speeches in a gorilla suit. And after a few years, everything I saw on the screen was shaped by my own eye. Still I believe the metaverse has potential, offering connection in ways FaceTime never could. In its embarace, I carved out my career mission: to encourage people to have fun dreaming of better lives for themselves.",
      "I'd call myself a realist but an optimist. Life is fantasy, but only the kind rooted in real possibility. Dreams need action, and action fuels momentum that feeds into the dream. Imagination is the key to manifesting anything. Everything that exists—the Metro, fried chicken (I'm starving right now)—arose from imagination. Yet the problem is that reality tends to slow that momentum. You think of something cool to make but don't have the skills to build it. So you find a tutorial, follow it for a while, and then give up because the gap between your ambition and execution feels too wide to cross. I've been there over and over, and even still feel like a beginner.",
      "Ira Glass once talked about this gap—the one between taste and skill—that every creative person faces. You get into a craft because you have great taste, but at the start, your work isn't good enough to match that standard. It takes years of producing mediocre work just to get to the level you envisioned. A lot of people quit during that phase. One path remains forward—putting in the reps until one day your skill finally catches up. It's the only way to become great.",
      "It took me years to fully understand the difference between art and design. Art is about expression: it doesn't need audience, and its purpose is to evoke emotion—or nothing at all. Yet design on the other hand, is about intention. It serves a function and has tangible implications. Designers at Tesla consider every possible situation you might encounter on the road, mapping moments to visual cues that guide you safely to your destination. If you mess up the visual hierarchy, an auditory cue, or forget an edge case, and that could mean a car crash—or worse.",
      "Not every design decision is life-or-death. Sometimes you're just tweaking Walmart's checkout flow. But the core principle remains the same: design exists to facilitate action through intentional aesthetics. And in a company, that action is deeply tied to business goals. Instagram designers work to keep you scrolling so they can serve you more ads. Netflix designers craft a premium experience so you'll keep paying for it.",
      "For a while, jamming a metaverse was cool. But at some point, it felt hollow. I fell out of touch with the craft. I chose design for a reason, and when that reason started slipping away, I knew I had to move, and reached a point where I would've rather been designing for Home Depot because at least there, I'd know my work would be useful to someone. Now, it feels surreal. There's something about working on the tools themselves, something about shaping what others will use to create, to dream of a better world.",
      "Design has always evolved. Print, static visual communication, graphic and digital design, interactive UX. Now, we're ushering in an era of adaptive design—personalized, dynamic, and fluid. How things look and feel will no longer be fixed. The same app—Spotify, for example—could be a completely different experience depending on the person using it. I'm excited to help define that future.",
      ["And yet, despite everything, the Mountain View role at Microsoft lingers in my mind. Where Figma is about creation, Copilot is about something else entirely. Connection. Not just any connection, but the first real bridge between human and AIL: the first time technology speaks not just to us, but with us. I've been talking to computers my whole life through my annual time capsules, so in a weird way, this feels like fate. Charlie sold  it to me like this: ChatGPT is for utility, Perplexity is for search, and Copilot is for emotion. Not an assistant, not a tool—something more (", <a key="ted-link" href="https://www.youtube.com/watch?v=KKNCiRWd_j0" target="_blank" rel="noopener noreferrer">here's a cool TED talk on the team</a>, "). With only six designers on Microsoft AI right now, I'm drawn to the scale in front of me. The weight of it, the reach. The chance to be there at the start, shaping something that billions of people will one day rely on."],
      "New York still has its draw. So does Mountain View. It's funny how much of life is shaped by where you stay. At this crossroads, I can't make a wrong decision anymore. It's not about what I want to do—it's about who I'm becoming. I feel like the luckiest person on the planet, in a way that I never felt before.",
      "Back when I studied Cognitive Science, AI felt so far away. Now it's an amplifier for everything interesting, a catalyst for things even better. I can't believe this is my life. It's insane beyond words. I'm not talented—not yet—but I do have one superpower: everybody seems to love me. I'm so stoked I'm about to pee."
    ]
  },
  {
    id: '006',
    number: '006',
    date: '02/19/25',
    location: 'New York City',
    content: [
      "Like a frog along lily pads, the path to realizing an outcome follows an arc from point to point, easing in and out of each step. You should then try not to upset the natural flow of things. Frogs are not meant to struggle to swim. So your efforts should feel natural. And so if you fall in the water and the current carries you backwards, I would try not to resist it. Just let the waves carry you back to shore until you can jump again.",
      "You have a shore; so you should jump. Either you reach your target, or the current carries you forward onto the next lily pad, or you missed! Backwards, onto land you go. But you should remember that you are a frog, and that frogs don't drown. You can always try again, and the more you jump, I guess the better you get at jumping. Frogs weren't born jumping, but they are born for it... it's what frogs do. And so you should not be afraid of the water."
    ],
  },
  {
    id: '005',
    number: '005',
    date: '02/18/25',
    location: 'New York City',
    content: [
      "In the past months, I've grown apart from people that have been with me for decades, and part of me feels their envy cutting into each step I take. I'm not used to it. Is this what it means to be suffering from success? I've given nothing but my best to those I cherish—large sums of money, time, and energy. I don't expect the same back, but this is... isolating. I can only confide in those that have more than me, those that have done more and have become more, of which there are many around me. Still it's crazy how relationships I thought would last a lifetime have disintegrated in the face of this transition. I have nothing but love for my friends, and would do anything for them, even yet still.",
      "If I land next Tuesday it's going to be hard to turn it down. I would be stupid to refuse that amount of money and a lifetime of stability, even for Figma. I'm drawn to what New York could become and grow into, and now more recently afraid of what more bridges will burn with continued ascent. Yet I can't complain. Many would die for my position now, and I'm grateful. I still remember nights in SoMa, having to choose between groceries and an Uber."
    ]
  },
  {
    id: '004',
    number: '004',
    date: '02/17/25',
    location: 'New York City',
    content: [
      "Across patterned sheets, slender bodies pass through as usual, slurring with gin and false promises. Edges, some tattoos, and names that blur. I'm slipping into old habits, and respect is yet again not a prerequisite. What discipline I had in San Francisco could be seen as progress, but in another way it was a form of restraint. It's not like I don't believe in love... and it's not like I'm averse to sobriety. But this place has a way of pulling you. Maybe this works, although it's not ideal. Clean lines of powder, pills, touch without any real discourse. Broken people that are enough for the moment: that's the beauty of the fringes.",
      "I was just talking to Alex about this. We both know what's good for us, and yet at times we reject it because it feels too easy. Not for something better, but what's damaged is alluring, and there's more of that in the world than not. So many clashing images of me exist in just as many people; what's real and loyal remains elusive."
    ]
  },
  {
    id: '003',
    number: '003',
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

export const dynamic = 'force-dynamic'
export const revalidate = 0

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
    <main key={notes.length} className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
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
            }
          })}
        </Note>
      ))}
    </main>
  );
}
