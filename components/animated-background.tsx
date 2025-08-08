'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false)
  
  // Define consistent dot positions
  const dots = [
    { left: '10%', top: '20%' },
    { left: '30%', top: '50%' },
    { left: '70%', top: '30%' },
    { left: '50%', top: '70%' },
    { left: '80%', top: '80%' },
    { left: '20%', top: '80%' }
  ]

  // Only render on client-side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
          opacity: 1
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.9, 1],
          opacity: 1
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-teal-400/15 to-blue-400/15 rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: 1
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Particles */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-teal-400/40 rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 3) * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
