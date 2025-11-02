import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Threat Detection Dashboard",
      description:
        "Real-time security monitoring dashboard with ML-powered anomaly detection and automated threat response capabilities.",
      image: "/cybersecurity-dashboard-dark-theme.jpg",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Prompt Injection Lab",
      description:
        "Interactive testing environment for identifying and exploiting prompt injection vulnerabilities in LLM applications.",
      image: "/ai-security-testing-interface.jpg",
      tech: ["Python", "OpenAI API", "FastAPI", "Next.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cloud Vulnerability Scanner",
      description:
        "Automated security assessment tool for AWS, Azure, and GCP infrastructure with compliance reporting.",
      image: "/cloud-security-scanner-interface.jpg",
      tech: ["Go", "AWS SDK", "Docker", "Terraform"],
      github: "#",
      demo: "#",
    },
    {
      title: "Network Traffic Analyzer",
      description:
        "Deep packet inspection tool with protocol analysis and suspicious activity detection using machine learning.",
      image: "/network-analysis-visualization.jpg",
      tech: ["Python", "Scapy", "Wireshark", "Elasticsearch"],
      github: "#",
      demo: "#",
    },
    {
      title: "Penetration Testing Framework",
      description:
        "Comprehensive toolkit for automated vulnerability scanning, exploitation, and reporting for web applications.",
      image: "/penetration-testing-tool-interface.jpg",
      tech: ["Python", "Metasploit", "Burp Suite", "SQLMap"],
      github: "#",
      demo: "#",
    },
    {
      title: "Security Awareness Platform",
      description:
        "Gamified training platform for teaching employees about phishing, social engineering, and security best practices.",
      image: "/security-training-platform.jpg",
      tech: ["React", "Node.js", "MongoDB", "WebSockets"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of security tools and research projects demonstrating practical applications of cybersecurity
              principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={project.github}>
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
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