"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  MessageCircle, 
  HelpCircle,
  Scissors,
  User,
  CalendarDays,
  Check
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialNavbar } from "@/components/social-navbar"
import { Button } from "@/components/ui/button"
import { barbershopImages } from "@/services/pexels"

interface FormData {
  nome: string
  email: string
  telefone: string
  comoConheceu: string
  servico: string
  descricao: string
  diaPreferido: string
  horario: string
  primeiraVez: string
  termos: boolean
}

const initialForm: FormData = {
  nome: "", email: "", telefone: "", comoConheceu: "",
  servico: "", descricao: "", diaPreferido: "", horario: "",
  primeiraVez: "nao", termos: false,
}

const steps = ["Your Details", "Service", "Preferences", "Confirmation"]

const servicos = [
  { id: "haircut-finish", nome: "Haircut & Finish", descricao: "Haircut with scissors & clippers and finished off with styling", duracao: "30 min", preco: "$69" },
  { id: "wash-haircut", nome: "Wash, Haircut & Style", descricao: "Cleansed, moisturised, cut and styled", duracao: "45 min", preco: "$74" },
  { id: "long-hair", nome: "Long Hair", descricao: "For hair that is shoulder length or longer. Wash, cut and styled", duracao: "60 min", preco: "$110" },
  { id: "clipper-cut", nome: "Clipper Cut", descricao: "Using electric clippers to cut your hair instead of using scissors", duracao: "20 min", preco: "$40" },
  { id: "zero-fade", nome: "Zero Fade", descricao: "Haircut down to the minimal length leaving a slight shadow", duracao: "45 min", preco: "$74" },
  { id: "skin-fade", nome: "Skin Fade", descricao: "Haircut blends to skin on back and sides", duracao: "45 min", preco: "$74", popular: true },
  { id: "beard-trim", nome: "Beard Trim", descricao: "Defining and shortening your beard with precision by using clippers, finished with a hot towel", duracao: "20 min", preco: "$41" },
  { id: "bespoke-beard", nome: "Bespoke Beard Trim", descricao: "For longer beards, using clippers or scissors and razor finish on the cheeks", duracao: "30 min", preco: "$52" },
  { id: "beard-line-up", nome: "Beard Trim & Line It Up", descricao: "Bringing out the straight razor for an even sharper line-up", duracao: "35 min", preco: "$62" },
  { id: "hot-towel-head", nome: "Hot Towel Head Shave", descricao: "Using shaving products followed by a hot towel cleanse and moisturiser", duracao: "30 min", preco: "$70" },
  { id: "traditional-shave", nome: "Traditional Hot Face Shave", descricao: "Ultimate shaving experience using a single razor blade finished with moisturiser", duracao: "30 min", preco: "$70" },
]

const diasSemana = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const horarios = [
  { label: "Morning", sub: "8am - 12pm" },
  { label: "Afternoon", sub: "12pm - 5pm" },
  { label: "Evening", sub: "5pm - 8pm" },
]

const faq = [
  { q: "What are your opening hours?", a: "Monday-Friday: 8am - 8pm, Saturday: 8am - 5pm, Sunday: Closed" },
  { q: "Do I need to make a booking?", a: "Walk-ins are welcome but bookings are recommended to secure your preferred time." },
  { q: "Can I cancel or reschedule?", a: "Yes, please give us at least 24 hours notice for cancellations or rescheduling." },
  { q: "How should I prepare for my visit?", a: "Come with clean hair and relax. We'll take care of the rest and ensure you have a premium experience." },
]

export default function BookingPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const setField = (field: keyof FormData, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const canNext = () => {
    if (step === 0) return form.nome && form.email && form.telefone
    if (step === 1) return form.servico
    if (step === 2) return form.diaPreferido && form.horario
    if (step === 3) return form.termos
    return true
  }

  const PHONE = "0292901033"

  const handleSubmit = () => {
    if (!form.termos) return

    const servicoSelecionado = servicos.find(s => s.id === form.servico)

    const msg = [
      "NOVO AGENDAMENTO - THE GENTLEMANS CUT",
      "",
      "DADOS DO CLIENTE",
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      form.comoConheceu ? `Como conheceu: ${form.comoConheceu}` : "",
      "",
      "SOBRE O SERVICO",
      `Servico: ${servicoSelecionado?.nome}`,
      form.descricao ? `Descricao: ${form.descricao}` : "",
      `Primeira vez: ${form.primeiraVez === "sim" ? "Sim" : "Nao"}`,
      "",
      "PREFERENCIAS",
      `Dia preferido: ${form.diaPreferido}`,
      `Horario: ${form.horario}`,
    ].filter(Boolean).join("%0A")

    window.open(`tel:${PHONE}`, "_blank")
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero com video */}
      <div className="relative h-56 md:h-72 overflow-hidden mt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={barbershopImages.gallery[0].src}
        >
          <source src={barbershopImages.videos.booking} type="video/mp4" />
          <source src={barbershopImages.videos.bookingHD} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-2 text-[#a3a3a3] text-xs tracking-widest mb-4">
            <Link href="/" className="hover:text-[#fafafa] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#fafafa]">Booking</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#fafafa] tracking-wide">
            BOOK YOUR <span className="font-serif italic text-[#c9a961]">SESSION</span>
          </h1>
          <p className="text-[#a3a3a3] text-sm mt-2">Take the first step towards your transformation</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-12 py-8 md:py-12">
        {submitted ? (
          <div className="max-w-lg mx-auto text-center py-20">
            <CheckCircle2 size={64} className="text-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl font-semibold mb-3 tracking-wide text-[#fafafa]">BOOKING REQUEST SENT!</h2>
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-3">
              Your booking request has been sent. Our team will contact you shortly to confirm your appointment details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a961] text-[#0a0a0a] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#d4b978] transition-colors"
              >
                <MessageCircle size={16} />
                CALL US
              </a>
              <Link
                href="/"
                className="inline-block border border-[#262626] text-[#fafafa] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#1a1a1a] transition-colors"
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center gap-0 mb-3">
                  {steps.map((s, i) => (
                    <div key={s} className="flex items-center flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                        i < step ? "bg-[#c9a961] text-[#0a0a0a]" : i === step ? "bg-[#c9a961] text-[#0a0a0a] ring-4 ring-[#c9a961]/20" : "bg-[#1a1a1a] text-[#737373]"
                      }`}>
                        {i < step ? <Check size={14} /> : i + 1}
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 transition-all ${i < step ? "bg-[#c9a961]" : "bg-[#262626]"}`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  {steps.map((s, i) => (
                    <span key={s} className={`text-xs hidden sm:block ${i === step ? "text-[#c9a961] font-medium" : "text-[#737373]"}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#141414] border border-[#262626] rounded-2xl p-4 sm:p-6 md:p-8"
                >
                  {/* Step 0 - Dados */}
                  {step === 0 && (
                    <div className="space-y-5">
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">YOUR DETAILS</h2>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={form.nome}
                          onChange={e => setField("nome", e.target.value)}
                          placeholder="Your full name"
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setField("email", e.target.value)}
                          placeholder="your@email.com"
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Phone *</label>
                        <input
                          type="tel"
                          value={form.telefone}
                          onChange={e => setField("telefone", e.target.value)}
                          placeholder="02 9290 1033"
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">How did you hear about us?</label>
                        <select
                          value={form.comoConheceu}
                          onChange={e => setField("comoConheceu", e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option>Instagram</option>
                          <option>Google</option>
                          <option>Friend recommendation</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 1 - Servico */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">SELECT SERVICE</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {servicos.map((servico) => (
                          <div
                            key={servico.id}
                            onClick={() => setField("servico", servico.id)}
                            className={`p-5 rounded-xl border cursor-pointer transition-all ${
                              form.servico === servico.id
                                ? "border-[#c9a961] bg-[#c9a961]/5"
                                : "border-[#262626] bg-[#0a0a0a] hover:border-[#c9a961]/30"
                            }`}
                          >
                            {servico.popular && (
                              <span className="inline-block px-2 py-0.5 bg-[#c9a961] text-[#0a0a0a] text-[10px] font-bold rounded-full mb-2">
                                POPULAR
                              </span>
                            )}
                            <div className="flex items-center gap-2 mb-2">
                              <Scissors className="w-4 h-4 text-[#c9a961]" />
                              <h3 className="font-medium text-[#fafafa]">{servico.nome}</h3>
                            </div>
                            <p className="text-xs text-[#a3a3a3] mb-3">{servico.descricao}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-[#737373] flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {servico.duracao}
                              </span>
                              <span className="text-[#c9a961] font-medium">{servico.preco}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Notes</label>
                        <textarea
                          value={form.descricao}
                          onChange={e => setField("descricao", e.target.value)}
                          placeholder="Any special requests or preferences?"
                          rows={3}
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2 - Preferencias */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">PREFERENCES</h2>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Preferred Day *</label>
                        <div className="flex flex-wrap gap-2">
                          {diasSemana.map(dia => (
                            <button
                              key={dia}
                              onClick={() => setField("diaPreferido", dia)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                                form.diaPreferido === dia
                                  ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]"
                                  : "border-[#262626] text-[#a3a3a3] hover:border-[#c9a961]/30 hover:text-[#fafafa]"
                              }`}
                            >
                              {dia}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Preferred Time *</label>
                        <div className="grid grid-cols-3 gap-3">
                          {horarios.map(h => (
                            <button
                              key={h.label}
                              onClick={() => setField("horario", h.label)}
                              className={`p-4 rounded-xl border text-left transition-all ${
                                form.horario === h.label
                                  ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]"
                                  : "border-[#262626] hover:border-[#c9a961]/30"
                              }`}
                            >
                              <p className={`font-semibold text-sm ${form.horario === h.label ? "text-[#0a0a0a]" : "text-[#fafafa]"}`}>
                                {h.label}
                              </p>
                              <p className={`text-xs mt-0.5 ${form.horario === h.label ? "text-[#0a0a0a]/70" : "text-[#737373]"}`}>
                                {h.sub}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">First visit?</label>
                        <div className="flex gap-3">
                          {["sim", "nao"].map(v => (
                            <button
                              key={v}
                              onClick={() => setField("primeiraVez", v)}
                              className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                                form.primeiraVez === v ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]" : "border-[#262626] text-[#a3a3a3] hover:border-[#c9a961]/30"
                              }`}
                            >
                              {v === "sim" ? "Yes" : "No"}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 - Confirmacao */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">CONFIRMATION</h2>
                      <div className="space-y-3 mb-8">
                        {[
                          { label: "Name", value: form.nome },
                          { label: "Email", value: form.email },
                          { label: "Phone", value: form.telefone },
                          { label: "Service", value: servicos.find(s => s.id === form.servico)?.nome },
                          { label: "Day", value: form.diaPreferido },
                          { label: "Time", value: form.horario },
                        ].map(item => (
                          <div key={item.label} className="flex justify-between py-2.5 border-b border-[#262626]">
                            <span className="text-xs tracking-widest text-[#737373] uppercase">{item.label}</span>
                            <span className="text-sm text-[#fafafa] font-medium">{item.value || "-"}</span>
                          </div>
                        ))}
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.termos}
                          onChange={e => setField("termos", e.target.checked)}
                          className="mt-0.5 accent-[#c9a961] w-4 h-4 shrink-0"
                        />
                        <span className="text-sm text-[#a3a3a3] leading-relaxed">
                          I agree to the <a href="#" className="text-[#c9a961] underline">Terms of Service</a> and <a href="#" className="text-[#c9a961] underline">Privacy Policy</a>.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className={`flex mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
                    {step > 0 && (
                      <button
                        onClick={() => setStep(s => s - 1)}
                        className="flex items-center gap-2 text-sm font-medium text-[#737373] hover:text-[#fafafa] transition-colors"
                      >
                        <ArrowLeft size={16} />
                        Back
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        onClick={() => canNext() && setStep(s => s + 1)}
                        disabled={!canNext()}
                        className="bg-[#c9a961] text-[#0a0a0a] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#d4b978] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        Continue
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!form.termos}
                        className="bg-[#c9a961] text-[#0a0a0a] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#d4b978] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <MessageCircle size={16} />
                        CALL TO BOOK
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info cards */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#c9a961] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#fafafa] mb-1">Response Time</p>
                    <p className="text-xs text-[#737373] leading-relaxed">We respond within 24 business hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-[#c9a961] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#fafafa] mb-1">Cancellation Policy</p>
                    <p className="text-xs text-[#737373] leading-relaxed">Please give 24 hours notice for cancellations.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <HelpCircle size={18} className="text-[#c9a961]" />
                  <h3 className="text-lg font-semibold tracking-widest text-[#fafafa]">FAQ</h3>
                </div>
                <div className="space-y-3">
                  {faq.map((item, i) => (
                    <div key={i} className="border-b border-[#262626] pb-3 last:border-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full text-left flex items-center justify-between gap-2"
                      >
                        <span className="text-sm font-medium text-[#fafafa]">{item.q}</span>
                        <span className="text-[#737373] text-lg shrink-0">{openFaq === i ? "-" : "+"}</span>
                      </button>
                      {openFaq === i && (
                        <p className="text-xs text-[#737373] leading-relaxed mt-2">{item.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* PHONE CTA */}
              <div className="bg-[#c9a961] rounded-2xl p-6 text-center">
                <p className="text-xl font-semibold tracking-wider mb-2 text-[#0a0a0a]">CALL US</p>
                <p className="text-xs text-[#0a0a0a]/70 mb-4">Prefer to call directly?</p>
                <a
                  href={`tel:${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0a0a0a] text-[#c9a961] px-6 py-2.5 rounded-lg font-medium text-sm tracking-wider hover:bg-[#1a1a1a] transition-colors"
                >
                  <MessageCircle size={15} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <SocialNavbar />
    </main>
  )
}
