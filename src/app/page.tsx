"use client"
export default function Home() {
  return (
    <>
      <section style={{ backgroundImage: "url(/images/photo_1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} className="text-white py-28 px-4 relative">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Pass Your Driving Test First Time in Wicklow</h1>
          <p className="text-xl mb-10 opacity-90">Professional instruction that builds confidence from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:045851867" style={{ background: "#FFC300" }} className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
              📞 Call (045) 851 867
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition">
              Get a Free Quote
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm">
            <span className="text-yellow-300">★</span>
            <span className="font-bold">5</span>
            <span className="opacity-80">(62 Google reviews)</span>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: "#F9F9F9" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#003566" }}>What We Offer</h2>
          <p className="text-center text-gray-500 mb-12">Everything you need, right here in Wicklow</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Learner Lessons</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Structured driving tuition tailored to your pace and experience level.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Test Preparation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Intensive coaching to get you test-ready and confident on the road.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Jeep & Trailer Training</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Specialist instruction for larger vehicle and trailer handling.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 hover:shadow-lg transition" style={{ borderColor: "#FFC300" }}>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#003566" }}>Pass Plus Courses</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Advanced driving skills development after you've passed your test.</p>
        </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#003566" }}>What Our Customers Say</h2>
          <p className="text-center text-gray-500 mb-12">Don't just take our word for it</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
          <p className="text-gray-700 italic mb-4">"Never driven before my first lesson, passed first time. Peter was chill and brilliant."</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>Caoimhe, Wicklow</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
          <p className="text-gray-700 italic mb-4">"Peter was professional, patient, and made everything easy to understand. Highly recommend."</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>Stephen, Wicklow</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
          <p className="text-gray-700 italic mb-4">"Went the extra mile to help me prepare. Calm, clear instruction throughout. Brilliant."</p>
          <p className="font-semibold text-sm" style={{ color: "#FFC300" }}>JR, Wicklow</p>
        </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#FFC300" }} className="py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Book your first lesson with Leigha Andrews today.</h2>
          <p className="text-lg mb-8 opacity-90">Call us today or send a message and we'll get back to you fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:045851867" className="bg-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition" style={{ color: "#FFC300" }}>
              📞 (045) 851 867
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition">
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
