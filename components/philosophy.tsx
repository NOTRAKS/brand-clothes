"use client"

export default function Philosophy() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-black border-t border-white/10 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-6 md:mb-8 px-4" style={{ color: "#DDCCAF", letterSpacing: "0.05em" }}>
            BLCK - это отражение моей внутренней философии.
          </h2>

          <div
            className="w-20 h-px mx-auto my-8 md:my-12"
            style={{ backgroundColor: "rgba(221, 204, 175, 0.4)" }}
          />

          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium mb-8 md:mb-12 px-4" style={{ color: "rgba(221, 204, 175, 0.7)" }}>
            Минимализм, обернутый в чёрное. Уверенность в качестве и полный контроль над производством - наши главные приориеты.
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p
              className="font-bold uppercase text-sm sm:text-base"
              style={{ 
                letterSpacing: "0.2em", 
                color: "#DDCCAF",
                textTransform: "uppercase",
                lineHeight: "1.5",
              }}
            >
              <span>ИВАНОВ ЯРОСЛАВ</span>
              <span style={{ margin: "0 0.5em" }}>|</span>
              <span>BLCK CEO</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
