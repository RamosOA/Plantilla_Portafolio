// components/ParticleBackground.tsx
'use client'
import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return

        canvas.width = window.innerWidth * 3
        canvas.height = window.innerHeight

        const particles: { x: number; y: number; length: number; speed: number }[] = []
        const numParticles = 88

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: Math.random() * 200 + 50,
                speed: Math.random() * 2 + 0.5,
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(p => {
                ctx.beginPath()
                const grad = ctx.createLinearGradient(p.x, p.y, p.x + p.length, p.y)
                grad.addColorStop(0, 'rgba(255,255,255,0.8)')
                grad.addColorStop(1, 'rgba(255,255,255,0)')
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
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-[300vw] h-screen z-0"
        />
    )
}