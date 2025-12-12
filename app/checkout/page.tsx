"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const productId = searchParams.get("product")
  const productTitle = searchParams.get("title")
  const productPrice = searchParams.get("price") || "скоро"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  })

  const productImages: Record<string, string> = {
    wallets: "/luxury-minimal-wallet-monochrome.jpg",
    bags: "/luxury-leather-bag-monochrome.jpg",
    perfumes: "/luxury-perfume-bottle-monochrome.jpg",
    belts: "/luxury-leather-belt-monochrome.jpg"
  }

  const productPrices: Record<string, string> = {
    wallets: "7000 рублей",
    bags: "скоро",
    perfumes: "скоро",
    belts: "скоро"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Формируем сообщение для Telegram со всеми данными заказа
    const price = productPrice || productPrices[productId || ''] || 'Не указана'
    const telegramMessage = encodeURIComponent(
      `🛒 НОВЫЙ ЗАКАЗ\n\n` +
      `📦 Товар: ${productTitle || 'Не указан'}\n` +
      `💰 Цена: ${price}\n\n` +
      `👤 КЛИЕНТ:\n` +
      `Имя: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Телефон: ${formData.phone}\n\n` +
      `📍 ДОСТАВКА:\n` +
      `Адрес: ${formData.address}\n` +
      `Город: ${formData.city}\n` +
      `Индекс: ${formData.postalCode}`
    )
    
    // Открываем Telegram с предзаполненным сообщением
    window.open(`https://t.me/USAremyLife?text=${telegramMessage}`, '_blank')
  }

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <section className="py-16 sm:py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-8 sm:mb-12 text-center px-4" style={{ color: "#DDCCAF", letterSpacing: "0.1em" }}>
            Оформление заказа
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Информация о товаре */}
            <div>
              <div className="mb-8">
                <h2 className="text-xl font-black uppercase mb-6" style={{ color: "#DDCCAF", letterSpacing: "0.08em" }}>
                  Товар
                </h2>
                {productId && (
                  <div className="border" style={{ borderColor: "rgba(221, 204, 175, 0.2)" }}>
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={productImages[productId] || "/placeholder.jpg"}
                        alt={productTitle || "Товар"}
                        className="w-full h-full object-cover grayscale opacity-70"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-black uppercase mb-4" style={{ color: "#DDCCAF", letterSpacing: "0.08em" }}>
                        {productTitle || "Товар"}
                      </h3>
                      <p className="text-xl font-semibold" style={{ color: "rgba(221, 204, 175, 0.8)" }}>
                        {productPrice || productPrices[productId] || "Цена по запросу"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Форма оплаты */}
            <div>
              <h2 className="text-xl font-black uppercase mb-6" style={{ color: "#DDCCAF", letterSpacing: "0.08em" }}>
                Данные для доставки
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase mb-2" style={{ color: "rgba(221, 204, 175, 0.6)", letterSpacing: "0.1em" }}>
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border focus:outline-none focus:border-[#DDCCAF] transition-elegant"
                    style={{ borderColor: "rgba(221, 204, 175, 0.2)", color: "#DDCCAF" }}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase mb-2" style={{ color: "rgba(221, 204, 175, 0.6)", letterSpacing: "0.1em" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border focus:outline-none focus:border-[#DDCCAF] transition-elegant"
                    style={{ borderColor: "rgba(221, 204, 175, 0.2)", color: "#DDCCAF" }}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase mb-2" style={{ color: "rgba(221, 204, 175, 0.6)", letterSpacing: "0.1em" }}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border focus:outline-none focus:border-[#DDCCAF] transition-elegant"
                    style={{ borderColor: "rgba(221, 204, 175, 0.2)", color: "#DDCCAF" }}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase mb-2" style={{ color: "rgba(221, 204, 175, 0.6)", letterSpacing: "0.1em" }}>
                    Адрес
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border focus:outline-none focus:border-[#DDCCAF] transition-elegant"
                    style={{ borderColor: "rgba(221, 204, 175, 0.2)", color: "#DDCCAF" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase mb-2" style={{ color: "rgba(221, 204, 175, 0.6)", letterSpacing: "0.1em" }}>
                      Город
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border focus:outline-none focus:border-[#DDCCAF] transition-elegant"
                      style={{ borderColor: "rgba(221, 204, 175, 0.2)", color: "#DDCCAF" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase mb-2" style={{ color: "rgba(221, 204, 175, 0.6)", letterSpacing: "0.1em" }}>
                      Индекс
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border focus:outline-none focus:border-[#DDCCAF] transition-elegant"
                      style={{ borderColor: "rgba(221, 204, 175, 0.2)", color: "#DDCCAF" }}
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-4 border uppercase text-sm font-semibold transition-elegant hover:bg-[#DDCCAF] hover:text-black"
                    style={{
                      letterSpacing: "0.15em",
                      borderColor: "#DDCCAF",
                      color: "#DDCCAF"
                    }}
                  >
                    Перейти к оплате
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <main className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center" style={{ color: "#DDCCAF" }}>Загрузка...</div>
      </main>
    }>
      <CheckoutContent />
    </Suspense>
  )
}

