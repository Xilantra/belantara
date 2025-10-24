import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from 'motion/react'

const PostHero = ({ image, title, subtitle }) => {
  let gimg = null
  let url = null
  if (image) {
    if (typeof image === 'string') {
      url = image
    } else if (image.url) {
      url = image.url
    } else {
      gimg = getImage(image)
    }
  }

  return (
    <section className="relative min-h-[70vh]">
      {gimg ? (
        <GatsbyImage
          image={gimg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />)
        : url ? (
          <img src={url} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/75 to-background" />
      <div className="flex h-full items-end py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-balance font-display text-[clamp(2.5rem,8vw,5rem)] font-medium leading-tight text-foreground"
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground"
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
