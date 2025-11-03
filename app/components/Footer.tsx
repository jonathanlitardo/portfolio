import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: Github, href: "https://github.com/jonathanlitardo", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jonathan-litardo-4a46a4288/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:litardochambajonathan@gmail.com", label: "Email" },
]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">© {currentYear} Jonathan Litardo. All rights reserved.</p>
            <p className="text-xs text-muted-foreground font-mono">Built with Next.js, React, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}