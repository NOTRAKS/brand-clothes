"use client"

import { useState, useMemo } from "react"

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const products = useMemo(() => [
    {
      id: "milano-belt",
      image: "/luxury-leather-belt-monochrome.jpg",
    },
    {
      id: "minimalist-wallet",
      image: "/luxury-minimal-wallet-monochrome.jpg",
    },
    {
      id: "essence-no-7",
      image: "/luxury-perfume-bottle-monochrome.jpg",
    },
  ], [])

  return (
    <section id="products" className="py-24 md:py-40 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt=""
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "opacity-100 grayscale-0 scale-105" : "grayscale opacity-70"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-elegant">
                  <span
                    className="text-xs font-semibold uppercase transition-elegant"
                    style={{
                      letterSpacing: "0.2em",
                      color: hoveredIndex === index ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)",
                    }}
                  >
                    Скоро в продаже
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
