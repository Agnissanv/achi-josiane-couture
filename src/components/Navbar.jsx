import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Lookbook', path: '/lookbook' },
  { label: "L'Âme", path: '/about' },
  { label: 'Le Salon', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-sable/95 backdrop-blur-md border-b border-or/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-display text-lg font-light tracking-widest text-ebene group-hover:text-ocre transition-colors duration-300">
              ACHI JOSIANE
            </span>
            <span className="text-[9px] font-sans font-medium tracking-ultra text-or" style={{ letterSpacing: '0.22em' }}>
              ATELIER DE COUTURE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative font-sans text-xs tracking-widest uppercase text-ebene-light hover:text-ocre transition-colors duration-300 group"
                style={{ letterSpacing: '0.15em' }}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-or transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link to="/contact" className="btn-luxury border border-ocre text-ocre text-[10px] px-5 py-2.5">
              <span className="relative z-10">Prendre RDV</span>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-ebene"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ebene flex flex-col justify-center items-center"
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #C4973A 0, #C4973A 1px, transparent 0, transparent 50%)',
                  backgroundSize: '20px 20px',
                }}
              />
            </div>

            <nav className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className="font-display text-4xl font-light text-sable hover:text-or transition-colors duration-300 italic"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link to="/contact" className="btn-luxury border border-or text-or px-8 py-4 text-xs">
                  <span className="relative z-10">Prendre Rendez-vous</span>
                </Link>
              </motion.div>
            </nav>

            {/* Bottom label */}
            <div className="absolute bottom-8 text-center">
              <p className="text-sable/30 font-sans text-xs tracking-ultra" style={{ letterSpacing: '0.2em' }}>
                ABIDJAN — MARCORY
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
