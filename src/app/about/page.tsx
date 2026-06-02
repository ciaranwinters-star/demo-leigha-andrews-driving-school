export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "#003566" }}>About Leigha Andrews Driving school</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">Leigha Andrews Driving School is run by Peter, a patient and professional instructor based in Wicklow who's helped dozens of learners pass their test on the first attempt. From complete beginners to experienced drivers preparing for HGV or trailer tests, Peter creates a calm, supportive environment where you'll actually enjoy learning to drive.</p>
      <div className="rounded-2xl p-8 mt-8" style={{ background: "#00356611" }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#003566" }}>Why Choose Us?</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3"><span style={{ color: "#FFC300" }}>✓</span> Locally based in Wicklow</li>
          <li className="flex items-start gap-3"><span style={{ color: "#FFC300" }}>✓</span> Fully insured and professional</li>
          <li className="flex items-start gap-3"><span style={{ color: "#FFC300" }}>✓</span> Friendly, personalised service</li>
          <li className="flex items-start gap-3"><span style={{ color: "#FFC300" }}>✓</span> Highly rated by local customers</li>
        </ul>
      </div>
      <div className="mt-10 text-center">
        <a href="/contact" style={{ background: "#FFC300" }} className="inline-block text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition">Get in Touch Today</a>
      </div>
    </div>
  )
}
