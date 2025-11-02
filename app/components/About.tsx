import { Card } from "./ui/card"
import { Shield, Brain, Cloud, Network } from "lucide-react"

export function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Certifications", value: "8" },
    { label: "Projects Completed", value: "50+" },
    { label: "Security Audits", value: "100+" },
  ]

  const areas = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security assessments and vulnerability analysis",
    },
    {
      icon: Brain,
      title: "AI Red Teaming",
      description: "Testing AI systems for security vulnerabilities and prompt injection",
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Securing cloud infrastructure across AWS, Azure, and GCP",
    },
    {
      icon: Network,
      title: "Network Analysis",
      description: "Deep packet inspection and network traffic analysis",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a cybersecurity engineer with a passion for protecting digital assets and identifying vulnerabilities
              before malicious actors can exploit them. With expertise spanning offensive security, AI systems, and
              cloud infrastructure, I help organizations build robust defense strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center bg-card border-border">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area) => (
              <Card key={area.title} className="p-6 bg-card border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}