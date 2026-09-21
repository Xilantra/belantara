import React from 'react'
import { motion } from 'motion/react'
import { withPrefix } from 'gatsby'

const FlashyHero = ({ hero }) => {
  const title = hero?.title || 'Belantara'
  const subtitle =
    hero?.description ||
    'Templat laman web percuma dan laju gila berserta CMS dengan 1 klik sahaja. Menggunakan GatsbyJS, Github, Netlify dan Netlify CMS.'

  const fallbackUrl =
    typeof hero?.image === 'string'
      ? hero.image
      : hero?.image?.publicURL || '/img/hero-versailles.jpg'

  return (
    <section className="relative isolate min-h-[72vh] md:min-h-[82vh] lg:min-h-[88vh] w-full overflow-hidden flex flex-col justify-end">
      {/* Background artwork with subtle ambient warmth */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={withPrefix(fallbackUrl)}
          alt={title || "Belantara Hero"}
          loading="eager"
          decoding="sync"
          className="h-full w-full object-cover object-center"
        />
        {/* Scrim gradients: subtle dark top for nav readability, clear center for artwork, rich transition at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/75" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Hero bottom content container */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-6 md:pb-20 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left Column: Hero Title & Subtitle Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex max-w-xl flex-col gap-3 text-white"
          >
            {/* Hero Title: Belantara */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {title}
            </h1>

            {/* Tagline / Description text */}
            <p className="font-sans text-sm md:text-base font-normal leading-relaxed text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {subtitle}
            </p>
          </motion.div>

          {/* Right Column: Circular Avatar Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-start md:justify-end"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 rounded-full bg-white/25 blur-sm transition duration-300 group-hover:bg-white/40" />
              <img
                src={withPrefix('/img/author-avatar.png')}
                alt="Afiq Xilantra Azmi"
                className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border-2 border-white/90 object-cover shadow-2xl ring-4 ring-black/20 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FlashyHero

