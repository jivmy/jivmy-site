import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jivmy | Personal Journal",
  description: "Personal journal and thoughts on design, life, and the intersection of both.",
  keywords: ['design', 'personal blog', 'journal', 'creative writing', 'personal essays'],
  openGraph: {
    title: 'Jivmy | Personal Journal',
    description: 'Personal journal and thoughts on design, life, and the intersection of both.',
    url: 'https://jivmy.com',
    siteName: 'Jivmy',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://jivmy.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Jivmy - Personal Journal'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jivmy | Personal Journal',
    description: 'Personal journal and thoughts on design, life, and the intersection of both.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jivmy.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-wittgenstein">
        {children}
      </body>
    </html>
  );
}
