"use client"

import { useState } from "react"

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isPolicyOpen, setIsPolicyOpen] = useState(false)

  return (
    <footer className="bg-black border-t border-white/10 py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Левая колонка - Бренд */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <div 
                className="flex items-center justify-center mb-4"
                style={{ 
                  width: "120px", 
                  height: "60px", 
                  backgroundColor: "#DDCCAF" 
                }}
              >
                <span 
                  className="font-black text-black uppercase" 
                  style={{ 
                    fontSize: "20px",
                    letterSpacing: "0.1em"
                  }}
                >
                  BLCK
                </span>
              </div>
            </div>
            <p className="text-xs" style={{ color: "rgba(221, 204, 175, 0.6)" }}>
              © BLCK, 2025
            </p>
          </div>

          {/* Средняя колонка - Навигация */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <ul className="space-y-4 text-xs">
              <li
                onMouseEnter={() => setHoveredLink("delivery")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href="#"
                  className="transition-elegant inline-block cursor-pointer"
                  style={{
                    color: hoveredLink === "delivery" ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)",
                    letterSpacing: "0.05em"
                  }}
                >
                  ДОСТАВКА
                </a>
              </li>
              <li
                onMouseEnter={() => setHoveredLink("requisites")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href="#"
                  className="transition-elegant inline-block cursor-pointer"
                  style={{
                    color: hoveredLink === "requisites" ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)",
                    letterSpacing: "0.05em"
                  }}
                >
                  РЕКВИЗИТЫ
                </a>
              </li>
              <li
                onMouseEnter={() => setHoveredLink("policy")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <button
                  onClick={() => setIsPolicyOpen(true)}
                  className="transition-elegant inline-block cursor-pointer text-left"
                  style={{
                    color: hoveredLink === "policy" ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)",
                    letterSpacing: "0.05em"
                  }}
                >
                  ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
                </button>
              </li>
            </ul>
          </div>

          {/* Правая колонка - Соцсети */}
          <div className="animate-fade-in-up flex md:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="#"
                onMouseEnter={() => setHoveredLink("instagram")}
                onMouseLeave={() => setHoveredLink(null)}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-elegant"
                style={{
                  borderColor: hoveredLink === "instagram" ? "#DDCCAF" : "rgba(221, 204, 175, 0.3)",
                  backgroundColor: hoveredLink === "instagram" ? "rgba(221, 204, 175, 0.1)" : "transparent",
                  color: hoveredLink === "instagram" ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:blck.store.ltd@gmail.com"
                onMouseEnter={() => setHoveredLink("email")}
                onMouseLeave={() => setHoveredLink(null)}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-elegant"
                style={{
                  borderColor: hoveredLink === "email" ? "#DDCCAF" : "rgba(221, 204, 175, 0.3)",
                  backgroundColor: hoveredLink === "email" ? "rgba(221, 204, 175, 0.1)" : "transparent",
                  color: hoveredLink === "email" ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/blck_store"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink("telegram")}
                onMouseLeave={() => setHoveredLink(null)}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-elegant"
                style={{
                  borderColor: hoveredLink === "telegram" ? "#DDCCAF" : "rgba(221, 204, 175, 0.3)",
                  backgroundColor: hoveredLink === "telegram" ? "rgba(221, 204, 175, 0.1)" : "transparent",
                  color: hoveredLink === "telegram" ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@blck_store"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink("youtube")}
                onMouseLeave={() => setHoveredLink(null)}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-elegant"
                style={{
                  borderColor: hoveredLink === "youtube" ? "#DDCCAF" : "rgba(221, 204, 175, 0.3)",
                  backgroundColor: hoveredLink === "youtube" ? "rgba(221, 204, 175, 0.1)" : "transparent",
                  color: hoveredLink === "youtube" ? "#DDCCAF" : "rgba(221, 204, 175, 0.7)"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно политики */}
      {isPolicyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsPolicyOpen(false)}
        >
          <div
            className="bg-black border max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            style={{ borderColor: "rgba(221, 204, 175, 0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-2xl md:text-3xl font-black uppercase" style={{ color: "#DDCCAF", letterSpacing: "0.1em" }}>
                  ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
                </h2>
                <button
                  onClick={() => setIsPolicyOpen(false)}
                  className="text-2xl font-light transition-elegant hover:opacity-60"
                  style={{ color: "#DDCCAF" }}
                >
                  ×
                </button>
              </div>

              <div className="space-y-6 text-sm leading-relaxed" style={{ color: "rgba(221, 204, 175, 0.7)" }}>
                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#DDCCAF" }}>
                    1. ОБЩИЕ ПОЛОЖЕНИЯ
                  </h3>
                  <p>
                    Настоящая Политика в отношении обработки персональных данных (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сайта BLCK (далее — «Сайт»). Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#DDCCAF" }}>
                    2. СОБИРАЕМЫЕ ДАННЫЕ
                  </h3>
                  <p>
                    Мы собираем следующие категории персональных данных:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Имя и контактная информация (адрес электронной почты, телефон)</li>
                    <li>Адрес доставки</li>
                    <li>Информация о заказах и покупках</li>
                    <li>Технические данные (IP-адрес, тип браузера, данные об устройстве)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#DDCCAF" }}>
                    3. ЦЕЛИ ОБРАБОТКИ
                  </h3>
                  <p>
                    Персональные данные обрабатываются в следующих целях:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Обработка и выполнение заказов</li>
                    <li>Связь с клиентами по вопросам заказов</li>
                    <li>Улучшение качества обслуживания</li>
                    <li>Информирование о новых товарах и акциях (с согласия пользователя)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#DDCCAF" }}>
                    4. ЗАЩИТА ДАННЫХ
                  </h3>
                  <p>
                    Мы применяем необходимые технические и организационные меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#DDCCAF" }}>
                    5. ПРАВА ПОЛЬЗОВАТЕЛЕЙ
                  </h3>
                  <p>
                    Пользователь имеет право на получение информации, касающейся обработки его персональных данных, а также право требовать исправления, удаления или ограничения обработки персональных данных. Для реализации этих прав необходимо направить запрос на адрес электронной почты: <a href="mailto:blck.store.ltd@gmail.com" className="underline" style={{ color: "#DDCCAF" }}>blck.store.ltd@gmail.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#DDCCAF" }}>
                    6. КОНТАКТЫ
                  </h3>
                  <p>
                    По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться по адресу электронной почты: <a href="mailto:blck.store.ltd@gmail.com" className="underline" style={{ color: "#DDCCAF" }}>blck.store.ltd@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
