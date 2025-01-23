'use client';

import { useState } from 'react';

function Note({ number, date, children }: { number: string, date: string, children: React.ReactNode }) {
  return (
    <div className="relative mx-2 sm:mx-auto w-[calc(100%-1rem)] sm:w-full max-w-[85ch] px-4 sm:px-12 py-8 sm:py-12 border border-black/[0.03] mb-12">
      <div 
        className="absolute -top-12 -right-4 sm:-top-24 sm:-left-24 text-[12rem] sm:text-[20rem] font-black text-black/[0.025] select-none pointer-events-none"
      >
        {number}
      </div>
              
      <div className="relative flex gap-16">
        <div className="hidden lg:block sticky top-8 h-fit space-y-20">
          <span className="vertical-text text-sm tracking-[0.2em] text-black/40 uppercase -rotate-180">New York City</span>
          <div className="flex flex-col items-center gap-3">
            {[23, 22, 21].map((day) => (
              <>
                <span className="text-sm font-light text-black/30">{day}</span>
                {day > 21 && <div className="w-px h-10 bg-black/10"></div>}
              </>
            ))}
          </div>
        </div>
        <article 
          className="prose prose-xl flex-1 flex flex-col gap-0 p-0"
          style={{ lineHeight: 1.5 }}
        >
          <div className="flex flex-col gap-1 mb-3">
            <span className="text-sm tracking-[0.2em] text-black/40 uppercase lg:hidden">New York City - {date}</span>
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

export default function Home() {
  const entries = [
    { number: "003", date: "01/23/25", content: /* ... your content ... */ },
    { number: "002", date: "01/22/25", content: /* ... your content ... */ },
    { number: "001", date: "01/21/25", content: /* ... your content ... */ }
  ];

  return (
    <main className="min-h-screen bg-white relative my-2 sm:my-12 overflow-hidden">
      <div className="fixed inset-0 grain opacity-[0.15]"></div>
      
      {entries.map(({ number, date, content }) => (
        <Note key={number} number={number} date={date}>
          {content}
        </Note>
      ))}
    </main>
  );
}
