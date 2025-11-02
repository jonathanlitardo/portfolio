// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-green-400">
//       {/* Header */}
//       <header className="border-b border-green-500/30 p-6">
//         <nav className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Jonathan Litardo</h1>
//           <div className="space-x-6">
//             <a href="#about" className="hover:text-green-300">About</a>
//             <a href="#projects" className="hover:text-green-300">Projects</a>
//             <a href="#skills" className="hover:text-green-300">Skills</a>
//             <a href="#contact" className="hover:text-green-300">Contact</a>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="container mx-auto px-6 py-20">
//         <div className="max-w-3xl">
//           <h2 className="text-5xl font-bold mb-4">
//             Cybersecurity Professional
//           </h2>
//           <p className="text-xl text-green-300/80 mb-8">
//             Protecting digital assets and securing the future, one vulnerability at a time.
//           </p>
//           <button className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition">
//             View My Work
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Navigation } from "./components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}