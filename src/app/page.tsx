export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Grain Texture */}
      <div className="fixed inset-0 grain"></div>
      
      <div className="relative w-full max-w-[85ch] mx-auto px-4 sm:px-6 py-12 sm:py-24">
        {/* Large decorative number */}
        <div className="absolute -left-24 top-0 text-[20rem] font-black text-black/[0.02] select-none pointer-events-none">
          001
        </div>
                
        {/* Article with vertical location */}
        <div className="relative flex gap-12">
          {/* Location and Date */}
          <div className="hidden lg:block sticky top-6 h-fit space-y-24">
            <span className="vertical-text text-sm tracking-widest text-black/40 uppercase -rotate-180">NYC</span>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-light text-black/30">22</span>
              <div className="w-px h-12 bg-black/10"></div>
              <span className="text-sm font-light text-black/30">01</span>
              <div className="w-px h-12 bg-black/10"></div>
              <span className="text-sm font-light text-black/30">25</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg flex-1 flex flex-col gap-8 p-0">
            <div className="flex flex-col gap-1">
              <span className="text-sm tracking-widest text-black/40 uppercase lg:hidden">NYC - 01/22/2025</span>
            </div>
            <p className="!mt-0">I used to think being a detective and being funny were basically the same thing. Like, you know how when you notice something super obvious but no one else sees it? That was my whole thing. I'd spend hours in my room with evidence bags (okay, they were sandwich bags) collecting cat fur from Brian's sweater because Mittens went missing and I was the only one who remembered his red sweater had orange fur all over it that one time at his cottage. I'd practice what I'd say too: "Hey Brian, your sweater's got some interesting stories to tell." Then at the school talent show I'd be like "Caught the cat burglar today. Get it? Cat? Burglar?" and even the bad jokes felt good because people were actually listening to me for once.</p>
            <p>When I was fifteen, Stanford happened. It was wild—like someone had copy-pasted California right over Surrey. Half Moon Bay had these coconut stands everywhere and palm trees that made Earl Marriott look like it was stuck in grayscale. We were 27 kids stuffed into this dorm that smelled like burnt circuits and snacks. Our Mars rovers kept doing this weird left turn thing no matter what we tried, and we found these secret tunnels that were definitely not part of the orientation tour. At midnight we'd argue about which would be cooler: being the first person on Mars or solving cold fusion. The campus had these bells that played Bach (flex much, Stanford?) while back home we had this sad little buzzer that sounded like a microwave giving up.</p>
            <p>That summer's been living rent-free in my head for ten years. Then July hits and I get this email that might as well have been written in all caps: restructuring = you're done here. Everything I built, this whole career I thought I had figured out, just... poof. Like one of those mysteries where the solution makes you feel worse, not better. My keycard doesn't work anymore but my muscle memory hasn't gotten the memo—I still reach for it every morning.</p>
            <p>The old detective in me keeps picking at this like a scab. Ten years of fixing problems, making the right people laugh at the right times, building stuff I thought would last. If fifteen-year-old me saw this mess, she'd probably start taking notes in that ridiculous sparkly notebook she carried everywhere. And honestly? She'd be right. I'm still that same weirdo who collects random details and turns them into stories. Just with less sparkly notebooks.</p>
            <p className="!mb-0">So here I am, not in sunny California anymore but in my room at 2 AM, screen-light making my eyes hurt, trying to figure out what's next. Still solving mysteries, but now they're bugs in code. Still telling jokes, but now they're comments in my commits. Still that kid with the sandwich bags and big dreams, just with better tools and worse sleep schedule. Plot twist? Maybe. But at least I'm the one writing the next chapter.</p>
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
