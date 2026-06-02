export default function Services() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#003566" }}>Our Services</h1>
      <p className="text-gray-500 text-lg mb-12">Everything we offer at Leigha Andrews Driving school.</p>
      <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Learner Lessons</h2>
        <p className="text-gray-600 leading-relaxed">Structured driving tuition tailored to your pace and experience level.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Test Preparation</h2>
        <p className="text-gray-600 leading-relaxed">Intensive coaching to get you test-ready and confident on the road.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Jeep & Trailer Training</h2>
        <p className="text-gray-600 leading-relaxed">Specialist instruction for larger vehicle and trailer handling.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8 border-l-4" style={{ borderColor: "#FFC300" }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#003566" }}>Pass Plus Courses</h2>
        <p className="text-gray-600 leading-relaxed">Advanced driving skills development after you've passed your test.</p>
      </div>
      </div>
      <div className="mt-12 text-center">
        <a href="/contact" style={{ background: "#FFC300" }} className="inline-block text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition">Book Now</a>
      </div>
    </div>
  )
}
