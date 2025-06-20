// app/layout.tsx
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ParticleBackground from '../components/ParticleBackground'
import CursorFollower from '../components/CursorFollower'
import Header from '../components/Header'
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
      <body className={`${inter.className} bg-zinc-900 text-white overflow-x-hidden`}>
        <ThemeProvider>
          {/* ✅ NUEVO: Background fijo para toda la página */}
          <div className="fixed inset-0 -z-10">
            <div className="animated-bg-continuous" />
          </div>
          
          <EnableBodyHorizontalScroll />
          <ParticleBackground />
          {/* Barra de tema fija arriba a la derecha */}
          <div className="fixed top-0 left-0 w-screen z-50">
            <ThemeToggleBar />
          </div>
          <main>{children}</main>
          <Header />
          <CursorFollower />
        </ThemeProvider>
      </body>
    </html>
  );
}