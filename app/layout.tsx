import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ParticleBackground from '../components/ParticleBackground'
import CursorFollower from '../components/CursorFollower'
import Header from '../components/Header'
import MobileMenuWrapper from '../components/MobileMenuWrapper'
import MobileThemeToggle from '../components/mobile/MobileThemeToggle'
import MobileScrollProgress from '../components/mobile/MobileScrollProgress'
import EnableBodyHorizontalScroll from '../components/EnableBodyHorizontalScroll'
import ThemeToggleBar from '../components/ThemeToggleBar'
import { ThemeProvider } from '../context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio Óscar Ramos',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-900 text-white overflow-x-hidden safe-area-padding mobile-no-overscroll`}>
        <ThemeProvider>
          {}
          
          <EnableBodyHorizontalScroll />
          <ParticleBackground />
          {/* Desktop ThemeToggleBar */}
          <div className="fixed top-0 left-0 w-screen z-50 show-on-desktop-950">
            <ThemeToggleBar />
          </div>
          {/* Mobile ThemeToggle */}
          <MobileThemeToggle />
          {/* Mobile Scroll Progress */}
          <MobileScrollProgress />
          <main>{children}</main>
          <Header />
          <MobileMenuWrapper />
          <CursorFollower />
        </ThemeProvider>
      </body>
    </html>
  );
}