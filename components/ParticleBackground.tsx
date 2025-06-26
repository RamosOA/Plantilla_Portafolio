'use client'
import { useEffect, useRef, useState } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme')
            setIsDarkMode(theme !== 'light')
        }

        
        checkTheme()

        
        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return

        canvas.width = isMobile ? window.innerWidth : window.innerWidth * 3
        canvas.height = window.innerHeight

        const particles: { x: number; y: number; length: number; speed: number }[] = []
        // Reduce particles on mobile for better performance
        const numParticles = isMobile ? 30 : 88

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: Math.random() * 200 + 50,
                speed: Math.random() * 1.5 + 0.5,
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(p => {
                ctx.beginPath()
                const grad = ctx.createLinearGradient(p.x, p.y, p.x + p.length, p.y)
                
                if (isDarkMode) {
                    
                    grad.addColorStop(0, 'rgba(255,255,255,0.8)')
                    grad.addColorStop(1, 'rgba(255,255,255,0)')
                } else {
                    
                    grad.addColorStop(0, 'rgba(72, 72, 74, 0.8)')  
                    grad.addColorStop(1, 'rgba(109, 109, 112, 0)')  
                }
                
                ctx.strokeStyle = grad
                ctx.moveTo(p.x, p.y)
                ctx.lineTo(p.x + p.length, p.y)
                ctx.stroke()

                p.x += p.speed
                if (p.x > canvas.width) {
                    p.x = -p.length
                    p.y = Math.random() * canvas.height
                }
            })

            requestAnimationFrame(animate)
        }

        animate()
    }, [isDarkMode, isMobile]) 

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen md:w-[300vw] h-screen z-0 opacity-30 md:opacity-100"
        />
    )
}