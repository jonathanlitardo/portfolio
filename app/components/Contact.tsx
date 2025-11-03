"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:litardochambajonathan@gmail.com",
      value: "litardochambajonathan@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jonathan-litardo-4a46a4288/",
      value: "/in/jonathan-litardo-4a46a4288",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/jonathanlitardo",
      value: "@jonathanlitardo",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="container mx-auto max-w-5xl w-full">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating or have a security project in mind? Let's connect and discuss how I can help
              secure your systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <Card className="p-6 sm:p-8 bg-card border-border space-y-6 w-full min-w-0">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-muted-foreground">{link.label}</div>
                      <div className="font-medium break-all">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-card border-border w-full min-w-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
