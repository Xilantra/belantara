import * as React from 'react'
import PageList from './PageList'
import twitter from '../img/social/twitter.svg'
import instagram from '../img/social/instagram.svg'
import github from '../img/github-icon.svg'

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/80 bg-secondary/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 text-base text-foreground sm:px-6 md:text-lg lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr,1fr]">
          <nav>
            <p className="font-display text-xl font-medium text-foreground">Explore</p>
            <p className="mt-3 max-w-prose text-sm text-muted-foreground">
              Navigate the archive of civic design thinking, policy prototypes, and tools that inform our practice.
            </p>
            <ul className="mt-8 columns-2 gap-x-10 text-base [column-fill:balance]">
              <PageList footerBar={true} className="break-inside-avoid text-foreground transition-colors hover:text-accent" />
            </ul>
          </nav>
          <div className="flex flex-col gap-6 md:items-end">
            <p className="font-display text-xl font-medium text-foreground">Follow</p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Ongoing research drops and field notes land first on these channels.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com/xilantra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:text-accent"
                aria-label="Twitter @xilantra"
              >
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
                <span className="hidden md:inline">Twitter</span>
              </a>
              <a
                href="https://instagram.com/xilantra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:text-accent"
                aria-label="Instagram @xilantra"
              >
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
                <span className="hidden md:inline">Instagram</span>
              </a>
              <a
                href="https://github.com/xilantra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:text-accent"
                aria-label="GitHub @xilantra"
              >
                <img src={github} alt="GitHub" className="h-6 w-6" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-border/70 pt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Belantara</div>
          <div>
            Built by{' '}
            <a className="font-medium text-foreground transition-colors hover:text-accent" href="https://afiq.me" target="_blank" rel="noopener noreferrer">
              Afiq Xilantra Azmi
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
