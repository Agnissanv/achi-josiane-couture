import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone, Clock, ChevronDown, Send } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem, PageTransition } from '../components/Motion'

const WA_NUMBER = '2250700000000' // ← Remplacer par le vrai numéro CI (+225 XXXXXXXXXX)

const services = [
  'Tenue en pagne sur mesure',
  'Robe de mariée',
  'Ensemble de cérémonie',
  'Tenue enfant',
  'Prêt-à-porter africain',
  'Retouche / modification',
  'Autre / Consultation',
]

// Format WhatsApp message with line breaks and bold
function buildWhatsAppMessage({ name, phone, service, date, message }) {
  const lines = [
    `*Demande de Rendez-vous — Achi Josiane Atelier*`,
    ``,
    `*👩 Nom :* ${name}`,
    `*📞 Téléphone :* ${phone}`,
    `*✂️ Service souhaité :* ${service}`,
    date ? `*📅 Date souhaitée :* ${date}` : null,
    message ? `*💬 Message :* ${message}` : null,
    ``,
    `_Envoyé depuis le site web de l'atelier_`,
  ]
    .filter(Boolean)
    .join('%0A')

  return `https://wa.me/${WA_NUMBER}?text=${lines}`
}

function InputField({ label, id, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div className="group">
      <label htmlFor={id} className="block font-sans text-xs tracking-widest text-ebene-light/70 mb-2 uppercase" style={{ letterSpacing: '0.12em' }}>
        {label} {required && <span className="text-or">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-sable2 focus:border-or outline-none py-3 font-sans text-sm text-ebene placeholder:text-ebene/30 transition-colors duration-300"
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service) return
    const url = buildWhatsAppMessage(form)
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <PageTransition>
      {/* ===== HEADER ===== */}
      <section className="pt-32 md:pt-40 pb-16 bg-ebene px-5 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 opacity-20"
          style={{ background: 'repeating-linear-gradient(90deg, #C4973A 0px, #C4973A 8px, #8B5E3C 8px, #8B5E3C 16px, #1A1208 16px, #1A1208 24px)' }}
        />
        {/* Decorative circle */}
        <div className="absolute right-0 top-20 w-64 h-64 border border-or/10 rounded-full translate-x-1/2 hidden md:block" />
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label text-or/70 mb-4 block" style={{ letterSpacing: '0.22em', fontSize: '9px' }}>RÉSERVATION</span>
            <h1 className="font-display text-5xl md:text-7xl font-light text-sable leading-none">
              Le Salon
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-sm text-sable/50 mt-4 max-w-sm font-light leading-relaxed">
              Prenez rendez-vous pour une consultation personnalisée dans notre atelier à Marcory.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="bg-sable py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20">

          {/* ===== FORM ===== */}
          <div className="md:col-span-3">
            <Reveal>
              <h2 className="font-display text-3xl font-light italic text-ebene mb-10">
                Votre demande de rendez-vous
              </h2>
            </Reveal>

            <form onSubmit={handleSubmit} className="space-y-8">
              <Reveal delay={0.05}>
                <InputField
                  label="Votre nom complet"
                  id="name"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Ex: Bamba Aïcha"
                  required
                />
              </Reveal>

              <Reveal delay={0.1}>
                <InputField
                  label="Votre numéro WhatsApp"
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+225 07 XX XX XX XX"
                  required
                />
              </Reveal>

              <Reveal delay={0.15}>
                <div className="group">
                  <label htmlFor="service" className="block font-sans text-xs tracking-widest text-ebene-light/70 mb-2 uppercase" style={{ letterSpacing: '0.12em' }}>
                    Service souhaité <span className="text-or">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={form.service}
                      onChange={set('service')}
                      required
                      className="w-full bg-transparent border-b border-sable2 focus:border-or outline-none py-3 font-sans text-sm text-ebene appearance-none cursor-pointer transition-colors duration-300"
                    >
                      <option value="" disabled>Choisissez un service</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-0 top-3.5 text-ebene/40 pointer-events-none" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <InputField
                  label="Date souhaitée (optionnel)"
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={set('date')}
                />
              </Reveal>

              <Reveal delay={0.25}>
                <div className="group">
                  <label htmlFor="message" className="block font-sans text-xs tracking-widest text-ebene-light/70 mb-2 uppercase" style={{ letterSpacing: '0.12em' }}>
                    Précisions sur votre projet
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Décrivez votre projet, la couleur souhaitée, une occasion particulière..."
                    className="w-full bg-transparent border-b border-sable2 focus:border-or outline-none py-3 font-sans text-sm text-ebene placeholder:text-ebene/30 transition-colors duration-300 resize-none"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    className="w-full md:w-auto relative overflow-hidden bg-[#25D366] text-white font-sans text-xs tracking-widest uppercase px-10 py-4 flex items-center justify-center gap-3 hover:bg-[#1ebe5c] transition-colors duration-300"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    <MessageCircle size={15} />
                    <span>Envoyer via WhatsApp</span>
                    <Send size={12} />
                  </motion.button>
                  <p className="font-sans text-[10px] text-ebene-light/40 mt-3 leading-relaxed">
                    Vous serez redirigé(e) vers WhatsApp avec votre message pré-rempli. La réponse se fait sous 24h.
                  </p>
                </div>
              </Reveal>
            </form>

            {/* Success message */}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-or/10 border border-or/30 px-5 py-4 flex items-center gap-3"
              >
                <MessageCircle size={16} className="text-or shrink-0" />
                <p className="font-sans text-sm text-ebene">
                  WhatsApp ouvert avec votre message ! Achi Josiane vous répondra très vite 🌟
                </p>
              </motion.div>
            )}
          </div>

          {/* ===== INFO SIDEBAR ===== */}
          <div className="md:col-span-2">
            <Reveal delay={0.1}>
              <div className="bg-ebene p-8 text-sable relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-24 h-24 border border-or/10" style={{ transform: 'translate(50%, -50%)' }} />
                <span className="section-label text-or/70 mb-6 block" style={{ letterSpacing: '0.2em', fontSize: '9px' }}>INFORMATIONS</span>

                <StaggerContainer className="space-y-6">
                  <StaggerItem>
                    <div className="flex gap-4">
                      <MapPin size={15} className="text-or shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-xs text-sable font-medium mb-1">Adresse</p>
                        <p className="font-sans text-xs text-sable/50 leading-relaxed">Marcory, Abidjan<br />Côte d'Ivoire</p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex gap-4">
                      <Phone size={15} className="text-or shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-xs text-sable font-medium mb-1">WhatsApp & Appels</p>
                        <a href={`https://wa.me/${WA_NUMBER}`} className="font-sans text-xs text-sable/50 hover:text-or transition-colors">
                          +225 07 00 00 00 00
                        </a>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex gap-4">
                      <Clock size={15} className="text-or shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans text-xs text-sable font-medium mb-1">Horaires d'atelier</p>
                        <p className="font-sans text-xs text-sable/50 leading-relaxed">Lundi – Vendredi : 8h – 18h<br />Samedi : 9h – 16h<br />Dimanche : sur RDV uniquement</p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                <div className="h-px bg-sable/10 my-7" />

                {/* WhatsApp direct link */}
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[#25D366] hover:text-[#1ebe5c] transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle size={15} />
                  </div>
                  <span className="font-sans text-xs tracking-wider" style={{ letterSpacing: '0.1em' }}>Écrire directement sur WhatsApp</span>
                </a>
              </div>
            </Reveal>

            {/* Testimonial */}
            <Reveal delay={0.15}>
              <div className="border border-or/20 p-6 bg-cream">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-or text-xs">★</span>
                  ))}
                </div>
                <p className="font-display text-base italic text-ebene leading-relaxed mb-4">
                  "Achi Josiane a créé ma robe de mariage. C'était exactement ce que je rêvais — élégante, africaine, moi."
                </p>
                <p className="font-sans text-xs text-ebene-light/50">— Koné Mariame, mariée en 2024</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-sable2 py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="divider-or mb-10">
              <span className="section-label px-4">Questions fréquentes</span>
            </div>
          </Reveal>

          {[
            { q: 'Combien de temps dure la confection d\'une tenue ?', a: 'Selon la complexité de la pièce, de 5 à 21 jours. Pour les robes de mariée, nous recommandons 4 à 6 semaines.' },
            { q: 'Faut-il payer d\'avance ?', a: 'Un acompte de 50% est demandé à la validation du devis. Le solde est payé à la livraison.' },
            { q: 'Livrez-vous à domicile ?', a: 'Oui, nous pouvons livrer à Abidjan. Les frais de livraison sont définis selon le quartier.' },
            { q: 'Cousez-vous aussi pour les enfants ?', a: 'Absolument ! Robes de cérémonie, tenues du quotidien et ensembles coordonnés mère-fille sont nos spécialités.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="border-b border-sable py-6">
                <p className="font-display text-base font-light italic text-ebene mb-2">{item.q}</p>
                <p className="font-sans text-sm text-ebene-light/60 leading-relaxed font-light">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
