import '@/app/globals.css';
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
  // metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: 'Peter Khalil | Software Engineer',
  description: 'Nextjs Starter Template',
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
        {children}
      </body>
    </html>
  );
}
