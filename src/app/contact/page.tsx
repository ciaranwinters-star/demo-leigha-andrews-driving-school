"use client"
import { useState } from "react"
export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle")
  const [form, setForm] = useState({name:"",phone:"",message:""})
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          access_key: "9954f21f-74fb-4a5d-bb3f-9c8a63f1446d",
          subject: "New enquiry — Leigha Andrews Driving school",
          from_name: form.name,
          phone: form.phone,
          message: form.message,
          business: "Leigha Andrews Driving school",
        })
      })
      setStatus(res.ok ? "done" : "error")
      if (res.ok) setForm({name:"",phone:"",message:""})
    } catch { setStatus("error") }
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#003566" }}>Contact Us</h1>
      <p className="text-gray-500 text-lg mb-12">Book your first lesson with Leigha Andrews today.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-6" style={{ color: "#003566" }}>Get in Touch</h2>
          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a href="tel:045851867" className="font-bold text-lg hover:underline" style={{ color: "#FFC300" }}>(045) 851 867</a>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <span>Wicklow</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6" style={{ color: "#003566" }}>Send a Message</h2>
          {status === "done" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800 font-medium">
              ✅ Thanks! We'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} required className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2" />
              <input type="tel" placeholder="Your phone number" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} required className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2" />
              <textarea placeholder="How can we help?" rows={4} value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none" />
              <button type="submit" disabled={status === "sending"} style={{ background: "#FFC300" }} className="text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && <p className="text-red-600 text-sm">Something went wrong — please call us directly.</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
