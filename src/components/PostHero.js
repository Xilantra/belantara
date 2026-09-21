import React from 'react'
import { withPrefix } from 'gatsby'
import { motion } from 'motion/react'

const PostHero = ({ image, title, subtitle }) => {
  let url = null
  if (image) {
    if (typeof image === 'string') {
      url = image
    } else if (image.publicURL) {
      url = image.publicURL
    } else if (image.url) {
      url = image.url
    } else if (image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src) {
      url = image.childImageSharp.gatsbyImageData.images.fallback.src
    }
  }

  const fallbackUrl = url || '/img/jumbotron.jpg'

  return (
    <section className="relative isolate min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
      <img
        src={withPrefix(fallbackUrl)}
        alt=""
        loading="eager"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Neutral dark scrim without theme-colored background: keeps artwork visible and text legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <div className="relative z-10 w-full pb-14 pt-32 sm:pt-36 md:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.h1
            className="text-balance font-display text-[clamp(2.5rem,8vw,5rem)] font-medium leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PostHero
