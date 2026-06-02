export default function Services() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#003566" }}>Our Services</h1>
      <p className="text-gray-500 text-lg mb-12">Everything we offer at Leigha Andrews Driving school.</p>
      <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Manual Car Lessons</h2>
        <p className="text-gray-600 leading-relaxed">Comprehensive instruction for learner drivers preparing for the practical test.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>HGV & Trailer Training</h2>
        <p className="text-gray-600 leading-relaxed">Specialist coaching for heavier vehicle categories and trailer reversing skills.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Test Preparation</h2>
        <p className="text-gray-600 leading-relaxed">Focused lessons designed to build confidence and readiness for your driving test.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Refresher Lessons</h2>
        <p className="text-gray-600 leading-relaxed">Get back on the road safely with tailored instruction for returning drivers.</p>
      </div>
      </div>
      <div className="mt-12 text-center">
        <a href="/contact" style={{ background: "#FFC300" }} className="inline-block text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition">Book Now</a>
      </div>
    </div>
  )
}
