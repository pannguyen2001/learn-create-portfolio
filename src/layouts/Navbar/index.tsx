import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type hrefType = {
  href: string,
  label: string
}

const navLinks: Array<hrefType> = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
]



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, []
  )

  return (
    <header className={`fixed top-0 left-0 right-0 bg-transparent py-5 z-50 duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-serif italic tracking-tight hover:text-primary">
          -P.A.N-  <span className="font-normal text-white">Portfolio</span>
        </a>

        {/* Deskop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-md text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CTA button */}
        <div className="hidden md:block text-foreground hover:text-primary">
          <Button size="sm">
            <a href="#contact" className="text-md">Contact me</a>
          </Button>
        </div>
      </nav>



      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-lg text-muted-foreground hover:text-foreground py-2">
                {link.label}
              </a>
            ))}


            <Button onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;