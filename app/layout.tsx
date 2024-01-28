import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/layout/Header';
import '../globals.css';
import Footer from './components/layout/Footer';
import Auth0 from './components/auth/Auth0';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'catharsis',
  description: '認知行動療法ACTを利用して、心の傷を癒そう',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth0>
          <Header />
          <main className="flex flex-col items-center p-24 bg-gradient-to-b from-red-50 to-red-200 w-screen h-screen overflow-y-auto">
            {children}
          </main>
          <Footer />
        </Auth0>
      </body>
    </html>
  );
}
