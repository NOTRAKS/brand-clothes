"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className="fixed w-full top-0 z-50 bg-black/98 backdrop-blur-sm border-b border-white/5 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder-logo.png"
                alt="BLCK Logo"
                width={60}
                height={60}
                className="transition-elegant group-hover:scale-110"
                priority
              />
              <div
                className="flex items-center justify-center transition-elegant group-hover:scale-110"
                style={{
                  width: "clamp(180px, 40vw, 300px)",
                  height: "clamp(46px, 10vw, 77px)",
                  backgroundColor: "#DDCCAF",
                }}
              >
                <span
                  className="font-black"
                  style={{
                    color: "#000000",
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: "clamp(28px, 6vw, 55px)",
                    fontWeight: 800,
                    letterSpacing: "0.10px",
                  }}
                >
                  BLCK
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-16">
            <Link
              href="/collections"
              className="text-xs uppercase font-medium transition-smooth relative group"
              style={{ letterSpacing: "0.12em", color: "#DDCCAF" }}
            >
              Коллекции
              <span
                className="absolute bottom-0 left-0 w-0 h-px transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: "#DDCCAF" }}
              />
            </Link>
            <Link
              href="#about"
              className="text-xs uppercase font-medium transition-smooth relative group"
              style={{ letterSpacing: "0.12em", color: "#DDCCAF" }}
              scroll={true}
            >
              О нас
              <span
                className="absolute bottom-0 left-0 w-0 h-px transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: "#DDCCAF" }}
              />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-lg transition-elegant hover:rotate-90"
              style={{ color: "#DDCCAF" }}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-8 pb-6 flex flex-col gap-6 border-t border-white/10 pt-6 animate-fade-in-up">
            <Link
              href="/collections"
              className="text-xs uppercase font-medium"
              style={{ letterSpacing: "0.12em", color: "#DDCCAF" }}
              onClick={handleLinkClick}
            >
              Коллекции
            </Link>
            <Link
              href="#about"
              className="text-xs uppercase font-medium"
              style={{ letterSpacing: "0.12em", color: "#DDCCAF" }}
              onClick={handleLinkClick}
            >
              О нас
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
