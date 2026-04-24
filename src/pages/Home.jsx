import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Scissors, Sparkles, Heart } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem, PageTransition } from '../components/Motion'

// High-quality African fashion images from Unsplash
const HERO_IMG = 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1400&q=85&auto=format&fit=crop'
const FEATURED_IMGS = [
  'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583396090706-e83a07e57f5c?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop',
]
const ABOUT_IMG = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop'

const values = [
  {
    icon: Scissors,
    title: 'Savoir-faire',
    desc: 'Chaque point est posé avec intention. Une maîtrise artisanale héritée, perfectionnée dans chaque création.',
  },
  {
    icon: Heart,
    title: 'Tradition',
    desc: "L'âme du pagne ivoirien, réinterprétée avec une élégance contemporaine qui honore nos racines.",
  },
  {
    icon: Sparkles,
    title: 'Modernité',
    desc: 'Des coupes architecturales, des matières précieuses — la mode africaine à l\'avant-garde.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Parallax Image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Couture africaine Achi Josiane"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ebene via-ebene/50 to-transparent" />
          {/* Warm tint */}
          <div className="absolute inset-0 bg-ocre/10 mix-blend-multiply" />
        </motion.div>

        {/* Vertical text label */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 writing-vertical text-[9px] font-sans tracking-ultra text-sable/40 hidden md:block" style={{ letterSpacing: '0.25em' }}>
          ABIDJAN — MARCORY — CÔTE D'IVOIRE
        </div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-5 pb-16 md:pb-24 w-full"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-or" />
            <span className="text-[10px] font-sans tracking-ultra text-or" style={{ letterSpacing: '0.22em' }}>
              ATELIER DE COUTURE · ABIDJAN
            </span>
          </motion.div>

          {/* Main title with stagger */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light leading-none text-sable"
            >
              L'Art
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.57, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light leading-none italic"
              style={{
                WebkitTextStroke: '1px #C4973A',
                color: 'transparent',
              }}
            >
              de Coudre
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.69, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light leading-none text-sable"
            >
              l'Élégance
            </motion.h1>
          </div>

          {/* Subtitle + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p className="font-sans text-sm text-sable/60 max-w-xs leading-relaxed font-light">
              Des créations féminines sur mesure, inspirées de la richesse culturelle ivoirienne.
            </p>
            <Link to="/lookbook" className="btn-luxury border border-or text-or shrink-0">
              <span className="relative z-10 flex items-center gap-2">
                Voir le Lookbook <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-or to-transparent"
          />
        </motion.div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-sable py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="divider-or mb-16">
              <span className="section-label px-4">Notre Philosophie</span>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="group p-8 border border-sable2 hover:border-or/40 transition-all duration-500 bg-cream relative overflow-hidden">
                  {/* hover tint */}
                  <div className="absolute inset-0 bg-or/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 border border-or/30 flex items-center justify-center mb-6 group-hover:border-or group-hover:bg-or/10 transition-all duration-300">
                      <Icon size={18} className="text-or" />
                    </div>
                    <h3 className="font-display text-2xl font-light italic text-ebene mb-3">{title}</h3>
                    <p className="font-sans text-sm text-ebene-light/70 leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FEATURED LOOK ===== */}
      <section className="bg-sable2 py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="order-2 md:order-1">
              <span className="section-label mb-4 block">Créations récentes</span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-ebene leading-snug mb-6">
                La beauté ivoirienne<br />
                <em>magnifiée</em>
              </h2>
              <p className="font-sans text-sm text-ebene-light/70 leading-relaxed mb-8 max-w-sm font-light">
                Du pagne wax tissé à la main aux ensembles de cérémonie les plus raffinés — chaque pièce est un dialogue entre l'héritage et le présent.
              </p>
              <Link to="/lookbook" className="btn-outline text-ebene border-ebene text-[10px] px-6 py-3 hover:text-sable hover:border-transparent group relative overflow-hidden">
                <span className="absolute inset-0 bg-ebene scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <span className="relative z-10 flex items-center gap-2">Explorer le Lookbook <ArrowRight size={13} /></span>
              </Link>
            </Reveal>

            {/* Image mosaic */}
            <div className="order-1 md:order-2 relative h-80 md:h-[500px]">
              <Reveal delay={0.1} className="absolute left-0 top-0 w-[55%] h-[65%] img-hover shadow-xl">
                <img src={FEATURED_IMGS[0]} alt="Création pagne" className="w-full h-full object-cover" />
              </Reveal>
              <Reveal delay={0.2} className="absolute right-0 top-8 w-[42%] h-[55%] img-hover shadow-xl">
                <img src={FEATURED_IMGS[1]} alt="Création mariage" className="w-full h-full object-cover" />
              </Reveal>
              <Reveal delay={0.3} className="absolute left-8 bottom-0 w-[45%] h-[40%] img-hover shadow-xl">
                <img src={FEATURED_IMGS[2]} alt="Prêt-à-porter" className="w-full h-full object-cover" />
              </Reveal>
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-or/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEASER ABOUT ===== */}
      <section className="bg-ebene py-20 md:py-28 relative overflow-hidden">
        {/* Kente strip */}
        <div className="absolute top-0 left-0 right-0 h-1 opacity-20"
          style={{ background: 'repeating-linear-gradient(90deg, #C4973A 0px, #C4973A 8px, #8B5E3C 8px, #8B5E3C 16px, #1A1208 16px, #1A1208 24px)' }}
        />
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
          <Reveal className="md:w-1/2">
            <div className="relative img-hover">
              <img src={ABOUT_IMG} alt="Achi Josiane" className="w-full h-72 md:h-96 object-cover grayscale-[20%]" />
              <div className="absolute inset-0 bg-ocre/10 mix-blend-multiply" />
              {/* Floating name card */}
              <div className="absolute -bottom-5 -right-5 bg-or px-6 py-4 hidden md:block">
                <p className="font-display text-ebene text-sm font-light italic">Achi Josiane</p>
                <p className="font-sans text-ebene text-[9px] tracking-wider" style={{ letterSpacing: '0.15em' }}>CRÉATRICE</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:w-1/2">
            <span className="section-label text-or/70 mb-4 block" style={{ letterSpacing: '0.22em', fontSize: '9px' }}>L'ÂME DE L'ATELIER</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-sable leading-snug mb-6">
              Une femme,<br />
              <em className="text-or">une vision,</em><br />
              un atelier.
            </h2>
            <p className="font-sans text-sm text-sable/60 leading-relaxed mb-8 font-light">
              Depuis Marcory, Achi Josiane crée des tenues qui racontent des histoires. Entre tradition Akan et modernité urbaine, son atelier est un espace où la féminité ivoirienne s'épanouit dans toute sa splendeur.
            </p>
            <Link to="/about" className="btn-luxury border border-or text-or text-[10px] px-6 py-3">
              <span className="relative z-10 flex items-center gap-2">Découvrir son histoire <ArrowRight size={13} /></span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-sable py-20 md:py-28">
        <div className="max-w-xl mx-auto px-5 text-center">
          <Reveal>
            <div className="w-px h-12 bg-or mx-auto mb-8" />
            <span className="section-label mb-4 block">Votre prochaine création vous attend</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ebene italic leading-snug mb-6">
              Commençons ensemble
            </h2>
            <p className="font-sans text-sm text-ebene-light/70 mb-10 font-light leading-relaxed">
              Que ce soit pour une occasion spéciale, votre tenue de mariée ou simplement vous faire plaisir — réservez votre consultation.
            </p>
            <Link to="/contact" className="btn-luxury bg-ocre text-sable border border-ocre text-[10px] px-10 py-4 inline-flex">
              <span className="relative z-10 flex items-center gap-2">
                Prendre Rendez-vous <ArrowRight size={13} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
