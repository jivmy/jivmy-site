export default function Home() {
  return (
    <main className="min-h-screen bg-white relative my-24 sm:my-36">
      {/* Grain Texture */}
      <div className="fixed inset-0 grain"></div>
      
      <div className="relative w-full max-w-[85ch] mx-auto px-4 sm:px-6 py-12 sm:py-24">
        {/* Large decorative number */}
        <div className="absolute -left-24 -top-12 text-[20rem] font-black text-black/[0.02] select-none pointer-events-none">
          001
        </div>
                
        {/* Article with vertical location */}
        <div className="relative flex gap-12">
          {/* Location and Date */}
          <div className="hidden lg:block sticky top-6 h-fit space-y-24">
            <span className="vertical-text text-sm tracking-widest text-black/40 uppercase -rotate-180">SoMa</span>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-light text-black/30">11</span>
              <div className="w-px h-12 bg-black/10"></div>
              <span className="text-sm font-light text-black/30">18</span>
              <div className="w-px h-12 bg-black/10"></div>
              <span className="text-sm font-light text-black/30">2024</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg flex-1 flex flex-col gap-8 p-0">
            <div className="flex flex-col gap-1">
              <span className="text-sm tracking-widest text-black/40 uppercase lg:hidden">SoMa - 11/18/2024</span>
            </div>
            <p className="!mt-0">Now that I&apos;m home, I&apos;d like to say my piece. SoMa was never somewhere that I imagined to be, let alone spend the first three years of my twenties. I remember in college, it was a funny thought to end up somewhere like that, let alone in such a rough part of town. At the time I felt like I had to station myself there to discover the essence of what it means to push forward as the world crumbles. Visibility into the full story reveals the significance of that act, and as the curtains fall, I am prepared and apprehensive for the next chapter.</p>
            <p>America was never my dream. I only understood that someone who had everything material and essence handed to him would have all of it but the story. So in 2017 I traded Richmond Atmosphere and the V12 for a ticket to Los Angeles. It was a bold bet with a small chance of payout, yet we&apos;re nothing but a family that rolls the dice. We were no longer of circumstance as 2004. It was my last ticket, and I understood that there would be no more coming. And even though I wasn&apos;t ready to shoulder that burden yet, I was aware of its gravity.</p>
            <p>Westwood became something from out of a movie. I think UCLA does a really good job of making you feel like nothing bad could ever happen. Saxon, Hitch, and Bruin Plate inspire envy on description, among the many nights to in Midvale, Kelton, Joshua Tree, and Huntington. It wouldn&apos;t be cool to go into the details, so I&apos;ll say that coming out of that cycle, I was more in tune with not with who I was, but who I aspired to become, falling into design at first not out of passion, but out of love and necessity.</p>
            <p>Coming out of COVID, I sacrificed comfort and stability for an opportunity to design not so much one of the most ambiguous products in Silicon Valley, but rather myself. And so staying in America was a goal by proxy, not by intent. For me, the American dream was rooted in my will to suffer by choice. Like an elastic band, I guessed that building into that person would require a high level of tension. And so its release would reveal the trajectory. Now that I see the horizon and hear its awaiting applause, I&apos;m both excited, and painfully aware of the craft that it would bill.</p>
            <p>So much so, that a part of me wants to say no to this platter. I&apos;d love to take a simple role, double my compensation, grab a few cats off the street, and live for pleasure… a decision I&apos;m more capable of entertaining than executing. I guess for someone friendly with change, I feel averse to it here. I don&apos;t like how this doesn&apos;t feel like an incremental step. It feels like luck that I shouldn&apos;t have, on a stage with serious implications. It&apos;s not that I don&apos;t feel ready for the spotlight, it&apos;s more that its possibility reminds me of the required opportunity cost, once paid and asking to be paid again.</p>
            <p>I&apos;ve spent a lot of time thinking that hey, I&apos;ll work super hard here and leave everything on the table, and afterwards Spencer and I&apos;ll have our Coronas in Kewlona. It&apos;s only now that I understand that the reward for hard work is double the stakes, and double the work. Human Interface or Suno would reward my dream, demand full capacity, and require that I say no to a lot of things that would make me happy. Yet being happy is easy for someone like me, and so, I thought, should not be the goal. So outlined, the goal was grow into strength and capability, to get really clear on who is important, and what is not, to cut out who isn&apos;t and focus on what is.</p>
            <p>On Saturday I almost missed my flight again, by about 10 minutes. As I slid down the escalator towards the boarding gate, my tummy started hurting, so I ran to the bathroom to accomplish something serious. I spent the night awake as a car bomb blew out an SUV on Mission, listening to the sweet melody of people fighting, with pale shadows of hunchbacks passed out over needles creeping through the window. I think by intuition, it&apos;s the juxtaposition here that&apos;s attractive to me. With everything that happened the week prior, I was grounded by the chaos in my surroundings. But I&apos;m not a masochist. I&apos;m happy to be back in Elgin Chantrell to plan these next steps.</p>
            <p className="!mb-0">I need to turn things down to turn it back up. So I&apos;ll keep saying no to things that are good for me for a chance at something better. So soon, I&apos;ll leave this quiet grove to cut along the grain once more. It&apos;s important to set a stake in the ground here, and though timelines may be decided sooner than later, I&apos;m ready to give up any attachment to what has been for the possiblity what could be. It&apos;s what carried me from home before, and it&apos;s what will carry me towards home now. I&apos;d rather not make the responsible decision and bet on the crazy one, again, even if it brings me away from those who walked with me here, and even that its realization hurts, I guess it&apos;s my American dream.</p>
          </article>
        </div>

        {/* Decorative Corners */}
        <div className="corner corner-tl"></div>
        <div className="corner corner-tr"></div>
        <div className="corner corner-bl"></div>
        <div className="corner corner-br"></div>

        {/* Footer Navigation */}
        <div className="mt-24 flex justify-between items-center text-sm text-black/40">
          <button className="hover:text-black transition-colors duration-200">← Previous</button>
          <div className="w-4 h-4 rounded-full border border-black/10"></div>
          <button className="hover:text-black transition-colors duration-200">Next →</button>
        </div>
      </div>
    </main>
  );
}
