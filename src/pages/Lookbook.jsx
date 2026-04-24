import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ZoomIn } from 'lucide-react'
import { Reveal, PageTransition } from '../components/Motion'

const categories = ['Tout', 'Pagne', 'Mariage', 'Prêt-à-porter', 'Enfant']

const works = [
  {
    id: 1,
    category: 'Pagne',
    title: 'Éclat Wax',
    desc: 'Ensemble deux-pièces en pagne wax imprimé',
    img: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=700&q=80&auto=format&fit=crop',
    tall: true,
  },
  {
    id: 2,
    category: 'Mariage',
    title: 'Robe Blanche Ivoire',
    desc: 'Robe de mariée sur mesure avec broderies dorées',
    img: 'https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=700&q=80&auto=format&fit=crop',
    tall: false,
  },
  {
    id: 3,
    category: 'Prêt-à-porter',
    title: 'Urbaine Chic',
    desc: 'Robe midi à imprimé géométrique africain',
    img: 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=700&q=80&auto=format&fit=crop',
    tall: false,
  },
  {
    id: 4,
    category: 'Pagne',
    title: 'Femme Royale',
    desc: 'Tenue de cérémonie complète, pagne kita',
    img: 'https://images.unsplash.com/photo-1583396090706-e83a07e57f5c?w=700&q=80&auto=format&fit=crop',
    tall: true,
  },
  {
    id: 5,
    category: 'Enfant',
    title: 'Petite Princesse',
    desc: 'Robe enfant sur mesure pour cérémonie',
    img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700&q=80&auto=format&fit=crop',
    tall: false,
  },
  {
    id: 6,
    category: 'Prêt-à-porter',
    title: 'Modern Africa',
    desc: 'Blazer structuré à motifs kente revisités',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80&auto=format&fit=crop',
    tall: false,
  },
  {
    id: 7,
    category: 'Mariage',
    title: 'Soirée de Noces',
    desc: 'Ensemble de mariage pagne et dentelle',
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80&auto=format&fit=crop',
    tall: true,
  },
  {
    id: 8,
    category: 'Pagne',
    title: 'Couleurs d\'Abidjan',
    desc: 'Robe longue fente latérale, pagne bazin',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700&q=80&auto=format&fit=crop',
    tall: false,
  },
  {
    id: 9,
    category: 'Enfant',
    title: 'Mini Moi',
    desc: "Tenue coordonnée mère-fille en pagne",
    img: 'https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=700&q=80&auto=format&fit=crop',
    tall: false,
  },
]

export default function Lookbook() {
  const [active, setActive] = useState('Tout')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'Tout' ? works : works.filter(w => w.category === active)

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sable px-5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="section-label mb-4 block">Saison 2024 – 2025</span>
            <h1 className="font-display text-5xl md:text-7xl font-light text-ebene leading-none mb-6">
              Le Lookbook
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <p className="font-sans text-sm text-ebene-light/60 max-w-sm leading-relaxed font-light">
                Chaque pièce est une déclaration. Explorez notre univers créatif.
              </p>
              <span className="font-sans text-xs text-or tabular-nums">{filtered.length} créations</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-sable px-5 pb-8 sticky top-16 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2 font-sans text-xs tracking-widest uppercase transition-all duration-300 border ${
                  active === cat
                    ? 'bg-ocre text-sable border-ocre'
                    : 'text-ebene-light border-sable2 hover:border-ocre hover:text-ocre bg-transparent'
                }`}
                style={{ letterSpacing: '0.12em' }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-or/30 via-transparent to-transparent mt-4" />
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="bg-sable px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`break-inside-avoid mb-4 relative group cursor-pointer overflow-hidden ${
                    item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ebene/80 via-ebene/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {/* Content on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="text-[9px] font-sans text-or tracking-ultra block mb-1" style={{ letterSpacing: '0.2em' }}>
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-light italic text-sable">{item.title}</h3>
                    <p className="font-sans text-xs text-sable/60 mt-1">{item.desc}</p>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-sable/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={14} className="text-sable" />
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-sable/90 backdrop-blur-sm">
                    <span className="text-[8px] font-sans text-ocre tracking-widest" style={{ letterSpacing: '0.15em' }}>{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sable2 py-16 px-5 text-center">
        <Reveal>
          <p className="section-label mb-3">Votre tenue sur mesure</p>
          <h2 className="font-display text-3xl md:text-4xl font-light italic text-ebene mb-6">
            Rien ne vous convient exactement ?<br />
            <span className="text-ocre">Créons ensemble.</span>
          </h2>
          <Link to="/contact" className="btn-luxury bg-ocre text-sable border border-ocre text-[10px] px-8 py-4 inline-flex">
            <span className="relative z-10 flex items-center gap-2">Prendre Rendez-vous <ArrowRight size={13} /></span>
          </Link>
        </Reveal>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ebene/95 backdrop-blur-md flex items-center justify-center p-5"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[70vh] object-cover" />
              <div className="bg-ebene px-6 py-4 border-t border-or/20">
                <span className="text-[9px] font-sans text-or tracking-ultra block mb-1" style={{ letterSpacing: '0.2em' }}>{lightbox.category}</span>
                <h3 className="font-display text-xl font-light italic text-sable">{lightbox.title}</h3>
                <p className="font-sans text-xs text-sable/50 mt-1">{lightbox.desc}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-9 h-9 bg-or text-ebene flex items-center justify-center font-sans text-lg leading-none hover:bg-or-light transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
