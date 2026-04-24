import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react'

const WA_NUMBER = '2250700000000' // À remplacer par le vrai numéro

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ebene text-sable pt-16 pb-8 relative overflow-hidden">
      {/* Geometric pattern top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-or to-transparent" />

      {/* Kente-inspired decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30"
        style={{
          background: 'repeating-linear-gradient(90deg, #C4973A 0px, #C4973A 8px, #8B5E3C 8px, #8B5E3C 16px, #1A1208 16px, #1A1208 24px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <p className="font-display text-2xl font-light tracking-widest text-sable">ACHI JOSIANE</p>
              <p className="text-[9px] font-sans font-medium tracking-ultra text-or mt-1" style={{ letterSpacing: '0.22em' }}>
                ATELIER DE COUTURE
              </p>
            </div>
            <p className="font-sans text-sm text-sable/60 leading-relaxed max-w-xs">
              Chaque création est une lettre d'amour à la femme africaine — tissée dans l'élégance, ancrée dans la tradition.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-sable/20 flex items-center justify-center hover:border-or hover:text-or transition-all duration-300 text-sable/60"
              >
                <Instagram size={15} />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-sable/20 flex items-center justify-center hover:border-or hover:text-or transition-all duration-300 text-sable/60"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label text-or/70 mb-5 text-[10px]" style={{ letterSpacing: '0.22em' }}>Navigation</p>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', path: '/' },
                { label: 'Lookbook', path: '/lookbook' },
                { label: "L'Âme de l'Atelier", path: '/about' },
                { label: 'Prendre Rendez-vous', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="font-sans text-sm text-sable/60 hover:text-or transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="section-label text-or/70 mb-5 text-[10px]" style={{ letterSpacing: '0.22em' }}>Nous Trouver</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-or mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-sable/60 leading-relaxed">
                  Marcory, Abidjan<br />Côte d'Ivoire
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-or shrink-0" />
                <a href={`https://wa.me/${WA_NUMBER}`} className="font-sans text-sm text-sable/60 hover:text-or transition-colors duration-300">
                  +225 07 00 00 00 00
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-sable/40 mt-2">
                  Lun – Sam · 8h00 – 18h00
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sable/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="font-sans text-xs text-sable/30">
            © {year} Achi Josiane — Tous droits réservés
          </p>
          <p className="font-sans text-xs text-sable/30 italic font-light">
            Fait avec amour à Abidjan 🇨🇮
          </p>
        </div>
      </div>
    </footer>
  )
}
