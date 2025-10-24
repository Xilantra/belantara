import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'motion/react'

const normalisePosition = (position) => {
  if (!position) return 'center center'
  return position.toLowerCase().replace(/_/g, ' ').replace(/-/g, ' ')
}

const getHeroImage = (image) => {
  if (!image) return null
  if (typeof image === 'string') return image
  if (image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src) {
    return image.childImageSharp.gatsbyImageData.images.fallback.src
  }
  return image?.publicURL || null
}

const FlashyHero = ({ hero }) => {
  if (!hero) return null

  const { title, description: subtitle, image, position } = hero
  const heroImage = getHeroImage(image)
  const cssPosition = normalisePosition(position)

  const backgroundStyle = heroImage
    ? {
        backgroundImage: `linear-gradient(0deg, hsla(var(--background) / 0.85), hsla(var(--background) / 0.92)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: cssPosition,
      }
    : {
        backgroundColor: 'hsl(var(--secondary))',
      }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-20 flex justify-end">
        <div
          className="h-[85vh] w-[100vw]"
          style={backgroundStyle}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/80 to-background" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-24 sm:px-6 md:py-28 lg:px-8">
        <motion.p
          className="max-w-md text-sm uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6 }}
        >
          Strategic digital craftsmanship
        </motion.p>
        <motion.h1
          className="text-balance font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] text-foreground"
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-secondary-foreground"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="mt-4 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-transparent bg-accent px-6 py-3 text-base font-medium text-[#1f1300] transition-transform duration-200 hover:translate-x-1"
          >
            Start a project
          </Link>
          <Link to="/work" className="inline-flex items-center text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            View recent work →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FlashyHero
