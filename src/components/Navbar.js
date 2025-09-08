import React from 'react'
import { motion } from 'motion/react'
import PageList from './PageList'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-darkbg-900/70 border-b border-slate-200/60 dark:border-slate-800/60"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        <a href="/" className="text-[8vw] leading-none font-display tracking-tight md:text-[4vw]">
          <span className="accent">Belantara</span>
        </a>
        <button
          className="md:hidden rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="navMenu"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-0.5 bg-slate-900 dark:bg-slate-100" />
        </button>
        <div id="navMenu" className="hidden md:flex items-center gap-10 text-lg">
          <PageList navBar={true} className="hover:text-primary" />
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 sm:px-6 md:px-8 py-2 flex flex-col gap-2 text-lg">
            <PageList navBar={true} className="py-2 hover:text-primary" />
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
