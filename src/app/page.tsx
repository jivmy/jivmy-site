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
              <span className="text-sm font-light text-black/30">24</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg flex-1 flex flex-col gap-0 p-0">
            <div className="flex flex-col gap-1">
              <span className="text-sm tracking-widest text-black/40 uppercase lg:hidden">SoMa - 11/18/24</span>
            </div>
            <p className="!mt-0">Now that I'm home, I'll say my piece. SoMa was never in the script—let alone for the first three years of my twenties. The irony of choosing to live in San Francisco's roughest patch wasn't lost on me; it felt like stepping into someone else's story. But maybe that was the point. I stationed myself there to learn what it means to push forward while the world crumbles, to discover how beauty emerges from chaos. Now, as this chapter closes, I see why that mattered: sometimes you have to break the pattern to find your own.</p>
            <p>America was never my dream—it was my canvas. In 2017, I traded the cushioned life in Richmond—the Atmosphere, the V12, the certainty—for a one-way ticket to Los Angeles. A bold bet with slim odds, but calculated risks run in our blood. We'd moved past 2004's forced hands; this time, the choice was mine. My last ticket west came with no safety net, and though its weight threatened to break me, that gravity became my compass.</p>
            <p>Westwood unfolded like a movie set, with UCLA playing director—making you believe nothing bad could touch you within its frames. Saxon, Hitch, Bruin Plate became more than places; they were chapters in a story I never thought I'd write, woven through nights in Midvale, Kelton, Joshua Tree, and Huntington. The details blur into memory now, but what emerged was crystal clear: a version of myself I hadn't met yet, but desperately needed to become. Design found me there, not through passion initially, but through the necessity of reinvention.</p>
            <p>When COVID hit, I saw my chance. Trading comfort for chaos, I dove into Silicon Valley—not just to design another ambiguous product, but to redesign myself. The American dream morphed into something darker, more personal: a self-imposed crucible. Like an elastic band pulled to its limit, I believed that tension would either break me or launch me forward. Now, standing at the edge of something bigger than I imagined, I hear the horizon's applause mixed with warning bells.</p>
            <p>The simple path tempts me daily—double the pay, a few rescue cats, a life free from the weight of ambition. It's a seductive thought I entertain but can't embrace. For someone who usually chases change like a storm chaser pursues tornados, my hesitation here feels foreign. This isn't just another step up the ladder; it's an unlikely gift wrapped in thorns. The spotlight isn't what scares me—it's the cost of keeping it burning, a toll paid in perpetuity.</p>
            <p>I catch myself daydreaming: grinding through the work, leaving everything on the table, then escaping with Spencer for Coronas in Kelowna. But that's not how this story goes. Each victory demands more sacrifice, each achievement raises the stakes. Human Interface or Suno wouldn't just fulfill the dream—they'd consume it whole, demanding everything in exchange for the chance to matter. Happiness comes too easily to me; that's precisely why it couldn't be the goal. Instead, I chose the harder path: learning to distinguish between what fills time and what fills purpose, between who matters and who just happens to be there.</p>
            <p>Last Saturday crystallized everything. Racing down an airport escalator, stomach in revolt, making an emergency pit stop—it was chaos in miniature. That night, a car bomb shattered both an SUV and the Mission Street silence. The symphony of fights and broken souls outside my window became a strange lullaby. The rawness of SoMa, its unfiltered reality, somehow anchored me when everything else felt uncertain. But I'm no chaos tourist—I'm grateful to be back in Elgin now, plotting the next move from a place of clarity.</p>
            <p className="!mb-0">To reach higher, I first need to find stillness. I'll keep saying no to good things, holding out for the extraordinary. This quiet grove is temporary; soon I'll cut against the grain again. The timing isn't mine to control, but the choice is: trading the known for the possible, the safe for the meaningful. It's the same force that first pulled me from home, now drawing me toward a different kind of belonging. I'm betting on the wild card again, knowing it might cost me everything—relationships, comfort, certainty. But that's my version of the American dream: not the pursuit of happiness, but the pursuit of becoming.</p>
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
