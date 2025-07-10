"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-royal-plum">
            Assumpta Nehemiah Foundation
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-deep-pink transition-colors">
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-royal-plum text-royal-plum hover:bg-royal-plum hover:text-white bg-transparent"
              >
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild size="sm" className="bg-deep-pink hover:bg-deep-pink/90">
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-deep-pink transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-royal-plum text-royal-plum hover:bg-royal-plum hover:text-white bg-transparent"
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild size="sm" className="bg-deep-pink hover:bg-deep-pink/90">
                  <Link href="/donate">Donate</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
