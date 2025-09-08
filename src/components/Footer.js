import * as React from 'react'
import PageList from './PageList'
import twitter from '../img/social/twitter.svg'
import instagram from '../img/social/instagram.svg'
import github from '../img/github-icon.svg'

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-800">
      <div className="px-4 sm:px-6 md:px-8 py-16 text-base md:text-lg text-slate-700 dark:text-slate-300">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <nav>
              <ul className="columns-2 gap-x-10 [column-fill:balance]">
                <PageList footerBar={true} className="hover:text-primary break-inside-avoid" />
              </ul>
            </nav>
            <div className="flex md:justify-end items-start gap-6">
              <a href="https://twitter.com/xilantra" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Twitter @xilantra">
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/xilantra" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Instagram @xilantra">
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://github.com/xilantra" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="GitHub @xilantra">
                <img src={github} alt="GitHub" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <div>© {new Date().getFullYear()} Belantara</div>
            <div>
              Built by <a className="hover:text-primary" href="https://afiq.me" target="_blank" rel="noopener noreferrer">Afiq Xilantra Azmi</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
