import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jivmy",
  description: "Personal journal and thoughts on design, life, and the intersection of both.",
  keywords: ['design', 'personal blog', 'journal', 'creative writing'],
  openGraph: {
    title: 'Jivmy',
    description: 'Personal journal and thoughts on design, life, and the intersection of both.',
    url: 'https://jivmy.com',
    siteName: 'Jivmy',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Jivmy - Personal Journal'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jivmy',
    description: 'Personal journal and thoughts on design, life, and the intersection of both.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
