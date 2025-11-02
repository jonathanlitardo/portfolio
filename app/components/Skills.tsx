"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

type SkillCategory = "offensive" | "defensive" | "ai-security"

export function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("offensive")

  const skills = {
    offensive: [
      { name: "Python", level: 95 },
      { name: "Metasploit", level: 90 },
      { name: "Burp Suite", level: 92 },
      { name: "Kali Linux", level: 88 },
      { name: "SQL Injection", level: 85 },
      { name: "Social Engineering", level: 80 },
    ],
    defensive: [
      { name: "SIEM (Splunk)", level: 88 },
      { name: "Wireshark", level: 90 },
      { name: "IDS/IPS", level: 85 },
      { name: "Firewall Management", level: 87 },
      { name: "Incident Response", level: 92 },
      { name: "Forensics", level: 83 },
    ],
    "ai-security": [
      { name: "Prompt Injection", level: 93 },
      { name: "Model Poisoning", level: 85 },
      { name: "AI Red Teaming", level: 90 },
      { name: "LLM Security", level: 88 },
      { name: "ML Adversarial Attacks", level: 82 },
      { name: "AI Governance", level: 80 },
    ],
  }

  const tabs = [
    { id: "offensive" as SkillCategory, label: "Offensive Security" },
    { id: "defensive" as SkillCategory, label: "Defensive Security" },
    { id: "ai-security" as SkillCategory, label: "AI Security" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for identifying, analyzing, and mitigating security threats
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className="min-w-40"
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="grid md:grid-cols-2 gap-8">
              {skills[activeTab].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AWS",
              "Azure",
              "GCP",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Git",
              "Linux",
              "Windows",
              "macOS",
              "Bash",
              "PowerShell",
            ].map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-mono hover:border-primary transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
