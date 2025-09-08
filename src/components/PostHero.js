import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from 'motion/react'

const PostHero = ({ image, title, subtitle }) => {
  const gimg = image && getImage(image)
  const url = image && image.url ? image.url : null

  return (
    <section className="relative min-h-screen">
      {gimg ? (
        <GatsbyImage
          image={gimg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />)
        : url ? (
          <img src={url} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-black/10 to-transparent dark:from-black/60" />
      <div className="h-full flex items-end px-4 sm:px-6 md:px-8 py-16 md:py-24 safe-x">
        <div className="w-full">
          <motion.h1
            className="font-display leading-none tracking-tight text-white drop-shadow text-[clamp(2.25rem,10vw,6rem)] md:text-[clamp(3rem,8vw,8rem)]"
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="accent">{title}</span>
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-6 text-white/90 leading-snug max-w-none drop-shadow text-[clamp(1rem,4vw,2rem)] md:text-[clamp(1.25rem,2.2vw,2.5rem)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
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
