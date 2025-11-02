import { Card } from "./ui/card"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Cybersecurity Engineer",
      company: "SecureCloud Technologies",
      period: "2022 - Present",
      description:
        "Leading red team operations and security assessments for Fortune 500 clients. Developed automated vulnerability scanning tools that reduced assessment time by 60%.",
      achievements: [
        "Led 50+ penetration testing engagements",
        "Discovered critical vulnerabilities in major cloud platforms",
        "Trained junior security analysts in offensive security techniques",
      ],
    },
    {
      title: "AI Security Researcher",
      company: "AI Defense Labs",
      period: "2020 - 2022",
      description:
        "Specialized in identifying and mitigating security risks in machine learning systems and LLM applications. Published research on prompt injection attacks.",
      achievements: [
        "Published 5 research papers on AI security",
        "Developed novel prompt injection detection methods",
        "Collaborated with OpenAI on security improvements",
      ],
    },
    {
      title: "Security Analyst",
      company: "CyberShield Inc.",
      period: "2018 - 2020",
      description:
        "Monitored security events, conducted incident response, and performed vulnerability assessments for enterprise clients.",
      achievements: [
        "Responded to 200+ security incidents",
        "Implemented SIEM solutions for 30+ clients",
        "Achieved 99.9% threat detection accuracy",
      ],
    },
    {
      title: "Junior Penetration Tester",
      company: "NetSec Solutions",
      period: "2017 - 2018",
      description:
        "Conducted web application security testing and network vulnerability assessments. Gained hands-on experience with industry-standard tools.",
      achievements: [
        "Completed 100+ vulnerability assessments",
        "Earned OSCP and CEH certifications",
        "Developed custom exploitation scripts",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of protecting organizations and advancing cybersecurity practices
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-6 w-px h-full bg-border hidden md:block" />
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <Card className="md:ml-20 p-6 bg-card border-border hover:border-primary transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 md:hidden">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        <ul className="space-y-2 pt-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">▹</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}