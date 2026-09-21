import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { motion, AnimatePresence } from 'motion/react'
import PageList from './PageList'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === ''

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On home page and not scrolled, nav is translucent floating over hero
  const isTransparent = isHome && !scrolled && !open

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isTransparent
          ? 'bg-transparent text-white border-transparent'
          : 'bg-background/90 text-foreground backdrop-blur-md border-b border-border/80 shadow-sm'
      }`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`font-display text-2xl font-medium tracking-tight transition-colors ${
            isTransparent ? 'text-white hover:text-white/80 drop-shadow' : 'text-foreground hover:text-accent'
          }`}
        >
          Belantara
        </Link>
        <button
          className={`md:hidden rounded-lg p-2 transition-colors ${
            isTransparent
              ? 'bg-black/30 text-white border border-white/20'
              : 'bg-muted/70 text-foreground border border-border'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="navMenu"
        >
          <span className="sr-only">Toggle Menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div id="navMenu" className="hidden items-center gap-8 text-sm md:text-base font-medium md:flex">
          <PageList
            navBar={true}
            className={`transition-colors duration-200 ${
              isTransparent
                ? 'text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                : 'text-foreground/80 hover:text-foreground'
            }`}
          />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border/80 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-base sm:px-8">
              <PageList
                navBar={true}
                className="block py-1 text-foreground transition-colors hover:text-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
