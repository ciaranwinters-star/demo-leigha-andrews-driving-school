import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Leigha Andrews Driving School | Wicklow Driving Instructor",
  description: "Professional driving lessons in Wicklow. Pass first time with Peter. Learner lessons, test prep & trailer training. 5-star rated instructor.",
  openGraph: { title: "Leigha Andrews Driving school", description: "Professional driving lessons in Wicklow. Pass first time with Peter. Learner lessons, test prep & trailer training. 5-star rated instructor.", type: "website" },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#003566" }} className="text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">Leigha Andrews Driving school</a>
            <nav className="hidden md:flex gap-8">
          <a href="/" className="hover:text-[#FFC300] transition-colors font-medium text-sm">Home</a>
          <a href="/about" className="hover:text-[#FFC300] transition-colors font-medium text-sm">About</a>
          <a href="/services" className="hover:text-[#FFC300] transition-colors font-medium text-sm">Services</a>
          <a href="/contact" className="hover:text-[#FFC300] transition-colors font-medium text-sm">Contact</a>
            </nav>
            <a href="tel:045851867" style={{ background: "#FFC300" }} className="text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition">
              (045) 851 867
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ background: "#003566" }} className="text-white py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm opacity-80">
            <p className="font-bold text-base mb-1">Leigha Andrews Driving school</p>
            <p>Wicklow &bull; (045) 851 867</p>
            <p className="mt-4 opacity-50">&copy; {new Date().getFullYear()} Leigha Andrews Driving school. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
