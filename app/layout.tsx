// app/layout.tsx or layout.js
import './globals.css';

import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import Meta from '@/components/meta';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'Home - Bereej Technologies',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta title="Home - Bereej Technologies" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <div className="relative w-full bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
