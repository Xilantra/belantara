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
      className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="font-display text-2xl font-medium text-foreground md:text-3xl">
          Belantara
        </a>
        <button
          className="md:hidden border border-border bg-muted/70 p-2 text-foreground transition-colors hover:bg-secondary/70"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="navMenu"
        >
          <span className="sr-only">Menu</span>
          <div className="h-0.5 w-6 bg-foreground" />
        </button>
        <div id="navMenu" className="hidden items-center gap-10 text-lg md:flex">
          <PageList navBar={true} className="transition-colors hover:text-accent" />
        </div>
      </div>
      {open && (
        <div className="border-t border-border/80 bg-muted/80 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-lg sm:px-6 lg:px-8">
            <PageList navBar={true} className="py-2 transition-colors hover:text-accent" />
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
