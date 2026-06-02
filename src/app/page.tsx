export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "85vh", backgroundImage: "url(/images/photo_1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} className="text-white relative flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #003566f2 0%, #003566aa 60%, #00356666 100%)" }} />
        <div className="relative max-w-5xl mx-auto px-4 py-24 w-full animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.05] tracking-tight max-w-3xl [text-wrap:balance]">Pass Your Driving Test First Time in Wicklow</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl leading-relaxed [text-wrap:balance]">Expert instruction that builds confidence on every road.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/35345851867?text=Hi%2C%20I%27d%20like%20to%20book%20driving%20lessons" target="_blank" rel="noopener noreferrer" style={{ background: "#FFC300" }} className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-2xl inline-flex items-center justify-center gap-2">
              💬 WhatsApp Us
            </a>
            <a href="tel:045851867" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center gap-2">
              📞 (045) 851 867
            </a>
          </div>
          <a href="https://search.google.com/local/reviews?placeid=ChIJoTDFs4KdZ0gRwyGMI9dOxMs" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-white bg-opacity-15 backdrop-blur-sm rounded-full px-5 py-3 text-sm hover:bg-opacity-25 transition">
            <span className="text-yellow-300 text-lg">★</span>
            <span className="font-bold text-base">5</span>
            <span className="opacity-90">62 reviews on Google</span>
            <span className="opacity-70">→</span>
          </a>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">⭐ 5 (62 reviews)</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">📍 Wicklow</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">📞 (045) 851 867</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">🕐 Today: 8:00 AM – 5:30 PM</div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#003566" }}>What we offer</h2>
          <p className="text-center text-gray-500 mb-12">Built for Wicklow — clear, simple, dependable.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Learner Lessons</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Build confidence and master skills from your first lesson.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">⏱</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Test Preparation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Intensive coaching to prepare you for your driving test.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">💡</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Jeep & Trailer Training</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Specialist instruction for heavier vehicles and trailer handling.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ borderColor: "#FFC300" }}>
          <div className="text-3xl mb-4">🤝</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Refresher Lessons</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Get back on the road with a confidence boost.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Where to find us */}
      <section className="py-20 px-4" style={{ background: "#F9F9F9" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#003566" }}>Where to find us</h2>
          <p className="text-center text-gray-500 mb-10">Hempstown, Blessington, Co. Wicklow, W91 H6TV, Ireland</p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe src="https://maps.google.com/maps?q=Hempstown%2C%20Blessington%2C%20Co.%20Wicklow%2C%20W91%20H6TV%2C%20Ireland&z=15&output=embed" width="100%" height="420" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
          </div>
          <div className="text-center mt-6">
            <a href="https://www.google.com/maps/search/?api=1&query=Hempstown%2C%20Blessington%2C%20Co.%20Wicklow%2C%20W91%20H6TV%2C%20Ireland" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:underline" style={{ color: "#003566" }}>
              Get directions on Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Real Google reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#003566" }}>What our customers say</h2>
          <p className="text-center text-gray-500 mb-12">Real reviews, straight from Google.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Would recommend Leigha Andrews driving school for the jeep and trailer test. Peter was a pleasure to deal with. He was calm and provided clear instructions at all times. He even went out of his way to&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>— JR</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Such a great experience from start to finish. I’d never been behind the wheel before my first lesson and passed my test first time today! Massive thanks to Peter for teaching me and for being so chill&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>— Caoimhe Mahon</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Great experience from start to finish! Peter was very professional, patient, and made everything easy to understand. I felt fully prepared for the driving test and passed on my first try. Highly recom&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>— stephen callaghan</p>
        </div>
          </div>
        <div className="text-center mt-10">
          <a href="https://search.google.com/local/reviews?placeid=ChIJoTDFs4KdZ0gRwyGMI9dOxMs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:underline" style={{ color: "#003566" }}>
            Read all 62 reviews on Google
            <span aria-hidden>→</span>
          </a>
        </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#FFC300" }} className="py-20 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book your first lesson with Peter today.</h2>
          <p className="text-lg mb-10 opacity-95">Tap WhatsApp and we'll get straight back to you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/35345851867?text=Hi%2C%20I%27d%20like%20to%20book%20driving%20lessons" target="_blank" rel="noopener noreferrer" className="bg-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl inline-flex items-center justify-center gap-2" style={{ color: "#FFC300" }}>
              💬 WhatsApp Us
            </a>
            <a href="tel:045851867" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition">📞 (045) 851 867</a>
          </div>
        </div>
      </section>
    </>
  )
}
