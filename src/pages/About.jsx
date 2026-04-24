import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Clock, Users, Star } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem, PageTransition } from '../components/Motion'

const PORTRAIT = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop'
const ATELIER1 = 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=700&q=80&auto=format&fit=crop'
const ATELIER2 = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&q=80&auto=format&fit=crop'
const DETAIL1 = 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=600&q=80&auto=format&fit=crop'
const DETAIL2 = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop'

const stats = [
  { icon: Clock, value: '10+', label: 'Années de passion' },
  { icon: Users, value: '500+', label: 'Femmes habillées' },
  { icon: Award, value: '100%', label: 'Sur mesure' },
  { icon: Star, value: '❤', label: 'Fait à Abidjan' },
]

const savoirFaire = [
  {
    step: '01',
    title: 'La Consultation',
    desc: 'Une première rencontre pour comprendre votre vision, vos mesures et votre personnalité. Chaque pièce commence par vous.',
  },
  {
    step: '02',
    title: 'La Conception',
    desc: "Croquis, choix des tissus et des ornements. Ensemble, nous composons la tenue qui vous ressemble profondément.",
  },
  {
    step: '03',
    title: 'La Coupe',
    desc: "Le tracé au millimètre, la coupe précise — c'est ici que la structure prend vie, que le tissu commence à raconter.",
  },
  {
    step: '04',
    title: 'L\'Assemblage',
    desc: 'Points à la main, finitions brodées, ourlets impeccables. La magie opère dans les détails invisibles.',
  },
  {
    step: '05',
    title: 'L\'Essayage Final',
    desc: "Nous ajustons ensemble jusqu'à la perfection. Votre tenue doit vous envelopper comme une seconde peau.",
  },
]

export default function About() {
  return (
    <PageTransition>
      {/* ===== HERO INTRO ===== */}
      <section className="pt-32 md:pt-40 pb-0 bg-ebene relative overflow-hidden">
        {/* Kente strip */}
        <div className="absolute top-0 left-0 right-0 h-1 opacity-20"
          style={{ background: 'repeating-linear-gradient(90deg, #C4973A 0px, #C4973A 8px, #8B5E3C 8px, #8B5E3C 16px, #1A1208 16px, #1A1208 24px)' }}
        />
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pb-16">
            <Reveal>
              <span className="section-label text-or/70 mb-4 block" style={{ letterSpacing: '0.22em', fontSize: '9px' }}>L'ÂME DE L'ATELIER</span>
              <h1 className="font-display text-5xl md:text-7xl font-light text-sable leading-none mb-6">
                Derrière<br />
                <em className="text-or">l'aiguille,</em><br />
                une femme.
              </h1>
              <p className="font-sans text-sm text-sable/60 max-w-sm leading-relaxed font-light">
                Achi Josiane est plus qu'une couturière. C'est une artiste, une gardienne de tradition, une femme qui croit que chaque femme mérite de se sentir absolument extraordinaire.
              </p>
            </Reveal>

            {/* Portrait */}
            <Reveal delay={0.2} className="relative">
              <div className="relative img-hover">
                <img src={PORTRAIT} alt="Achi Josiane" className="w-full h-80 md:h-[420px] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-ebene/40 to-transparent" />
                <div className="absolute inset-0 bg-ocre/10 mix-blend-multiply" />
              </div>
              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -left-5 bottom-8 bg-or px-5 py-4 max-w-[200px] hidden md:block"
              >
                <p className="font-display text-ebene text-sm italic leading-snug">
                  "Une tenue bien cousue change tout."
                </p>
                <p className="font-sans text-ebene text-[9px] mt-2 tracking-wider" style={{ letterSpacing: '0.12em' }}>— ACHI JOSIANE</p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="bg-sable py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="divider-or mb-12">
              <span className="section-label px-4">Son histoire</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <Reveal>
                <p className="font-display text-2xl font-light italic text-ebene leading-relaxed">
                  "Depuis petite, je regardais ma maman coudre. J'ai grandi entre les tissus et les patrons, et je n'ai jamais voulu partir de là."
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="font-sans text-sm text-ebene-light/70 leading-relaxed font-light">
                  Née et élevée à Marcory, Achi Josiane a commencé sa formation artisanale dès l'adolescence. Passionnée par la mode africaine et par l'art de sublimer la femme ivoirienne, elle a développé un style unique qui marie la richesse du pagne traditionnel avec des coupes modernes et architecturales.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-sans text-sm text-ebene-light/70 leading-relaxed font-light">
                  Aujourd'hui, son atelier à Marcory est un espace de création et d'échange. Elle habille des femmes de tous horizons — des robes de mariée somptueuses aux tenues quotidiennes élégantes — et confectionne également pour les petites filles, parce que la beauté n'a pas d'âge.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="md:col-span-2 space-y-3">
              <div className="img-hover">
                <img src={ATELIER1} alt="L'atelier" className="w-full h-48 object-cover" />
              </div>
              <div className="img-hover">
                <img src={ATELIER2} alt="Création en cours" className="w-full h-36 object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-sable2 py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <StaggerItem key={label}>
                <div className="text-center p-6 border border-sable hover:border-or/30 transition-colors duration-300 bg-cream">
                  <Icon size={18} className="text-or mx-auto mb-3" />
                  <div className="font-display text-3xl font-light text-ebene mb-1">{value}</div>
                  <div className="font-sans text-xs text-ebene-light/60 tracking-wider" style={{ letterSpacing: '0.1em' }}>{label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SAVOIR-FAIRE PROCESS ===== */}
      <section className="bg-sable py-20 md:py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="divider-or mb-16">
              <span className="section-label px-4">Le Savoir-faire</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              {savoirFaire.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.08}>
                  <div className="flex gap-6 pb-10 relative">
                    {/* Timeline line */}
                    {i < savoirFaire.length - 1 && (
                      <div className="absolute left-5 top-12 w-px h-full bg-gradient-to-b from-or/40 to-transparent" />
                    )}
                    <div className="shrink-0 w-10 h-10 border border-or/40 flex items-center justify-center">
                      <span className="font-sans text-[10px] text-or" style={{ letterSpacing: '0.05em' }}>{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-light italic text-ebene mb-2">{step.title}</h3>
                      <p className="font-sans text-sm text-ebene-light/65 leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Detail images */}
            <Reveal delay={0.2} className="grid grid-cols-2 gap-4 sticky top-24 self-start">
              <div className="img-hover col-span-2">
                <img src={DETAIL1} alt="Détail de couture" className="w-full h-52 object-cover" />
              </div>
              <div className="img-hover">
                <img src={DETAIL2} alt="Broderies" className="w-full h-40 object-cover" />
              </div>
              <div className="bg-ocre flex flex-col items-center justify-center p-6 h-40">
                <span className="font-display text-3xl text-sable font-light italic text-center leading-tight">100%<br />sur mesure</span>
                <div className="w-8 h-px bg-sable/40 mt-3" />
                <span className="font-sans text-[9px] text-sable/60 mt-2 tracking-wider text-center" style={{ letterSpacing: '0.12em' }}>GARANTIE</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SPECIALITES ===== */}
      <section className="bg-ebene py-16 md:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label text-or/70 mb-6 block text-center" style={{ letterSpacing: '0.22em', fontSize: '9px' }}>SPÉCIALITÉS</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-sable text-center mb-12">
              Ce qu'Achi Josiane crée pour <em>vous</em>
            </h2>
          </Reveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Pagne & Kita', sub: 'Tenues de cérémonie, sorties, prêt-à-porter en wax, bazin, kita et bogolan.' },
              { label: 'Mariage', sub: 'Robes blanches, ensembles boubou de mariée, tenues de famille coordonnées.' },
              { label: 'Enfant', sub: 'Robes, barboteuses et ensembles pour petites filles, 0–12 ans.' },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="border border-sable/10 p-6 hover:border-or/30 transition-colors duration-300 group">
                  <div className="w-6 h-px bg-or mb-4 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-display text-xl font-light italic text-sable mb-3">{s.label}</h3>
                  <p className="font-sans text-xs text-sable/50 leading-relaxed">{s.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-sable py-20 px-5 text-center">
        <Reveal>
          <div className="w-px h-12 bg-or mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-ebene mb-4">
            Prête à créer ensemble ?
          </h2>
          <p className="font-sans text-sm text-ebene-light/60 mb-8 max-w-sm mx-auto font-light">
            Réservez votre consultation et laissez Achi Josiane créer la tenue de vos rêves.
          </p>
          <Link to="/contact" className="btn-luxury bg-ocre text-sable border border-ocre text-[10px] px-10 py-4 inline-flex">
            <span className="relative z-10 flex items-center gap-2">Prendre Rendez-vous <ArrowRight size={13} /></span>
          </Link>
        </Reveal>
      </section>
    </PageTransition>
  )
}
