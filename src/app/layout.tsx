import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';
import { Sora } from 'next/font/google';
import React from 'react';
const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  fallback: ['sans-serif'],
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: 'Peter Khalil | Software Engineer',
  description: `I’m a passionate frontend developer with a love for creating
            seamless, responsive, and user-friendly designs. Crafting intuitive
            user experiences and breathing life into pixels through code is what
            excites me every day.`,
  keywords: [
    'Peter Khalil Frontend',
    'Peter Khalil Developer',
    'Peter Khalil Software Engineer',
    'Peter Khalil Engineer',
    'Peter Khalil Frontend developer',
    'Peter Nextjs Developer',
    'Peter React Developer',
    'Peter Javascript Developer',
    'Peter Portfolio',
    'Peter Khalil Portfolio',
    'Peter Khalil Personal Website',
    'Frontend engineer',
    'Nextjs Developer',
    'React Developer',
    'Typescript developer',
    'Javascript Developer',
    'Web developer',
  ],
  authors: [
    {
      name: 'Peter Khalil',
      url: 'https://www.linkedin.com/in/peter-khalil-frontend-developer',
    },
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'Peter Khalil | Software Engineer',
    title: 'Peter Khalil | Software Engineer',
    description: `I’m a passionate frontend developer with a love for creating
            seamless, responsive, and user-friendly designs. Crafting intuitive
            user experiences and breathing life into pixels through code is what
            excites me every day.`,
    countryName: 'Egypt',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground antialiased ${sora.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
