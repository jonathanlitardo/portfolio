"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Download, ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const specializations = ["Red Team Operations", "AI Security Specialist", "AI Cloud Security", "Threat Detection", "LLM Red Teaming"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const text = specializations[currentIndex]
    let charIndex = 0

    const typingInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % specializations.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentIndex])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Jonathan Litardo</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">Cybersecurity Engineer | AI Security Specialist</p>
          </div>

          <div className="h-16 flex items-center justify-center">
            <p className="text-lg sm:text-xl text-primary font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 group" asChild>
              <a href="/resume.pdf" download="Jonathan_Litardo_Resume.pdf">
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 group bg-transparent" asChild>
              <a href="#projects">
                View Projects
                <ChevronDown className="w-5 h-5" />
                {/* <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <div className="inline-block animate-bounce">
              <svg
                className="w-6 h-6 text-muted-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}