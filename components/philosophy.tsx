"use client"

export default function Philosophy() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-black border-t border-white/10 scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4" style={{ color: "#DDCCAF", letterSpacing: "0.05em" }}>
            BLCK - это отражение моей внутренней философии.
          </h2>

          <div
            className="w-16 sm:w-20 h-px mx-auto my-6 sm:my-8 md:my-12"
            style={{ backgroundColor: "rgba(221, 204, 175, 0.4)" }}
          />

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4" style={{ color: "rgba(221, 204, 175, 0.7)" }}>
            Минимализм, обернутый в чёрное. Уверенность в качестве и полный контроль над производством - наши главные приориеты.
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p
              className="font-bold uppercase text-xs sm:text-sm md:text-base px-2"
              style={{ 
                letterSpacing: "0.15em", 
                color: "#DDCCAF",
                textTransform: "uppercase",
                lineHeight: "1.5",
              }}
            >
              <span>ИВАНОВ ЯРОСЛАВ</span>
              <span style={{ margin: "0 0.3em" }}>|</span>
              <span>BLCK CEO</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
