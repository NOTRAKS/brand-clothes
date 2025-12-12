import Header from "@/components/header"
import Welcome from "@/components/welcome"
import Hero from "@/components/hero"
import Philosophy from "@/components/philosophy"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Welcome />
      <Hero />
      <Philosophy />
      <Footer />
    </main>
  )
}
