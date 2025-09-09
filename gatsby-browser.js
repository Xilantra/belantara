import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const onClientEntry = () => {
  NProgress.configure({ showSpinner: false, trickleSpeed: 120 })
}

export const onPreRouteUpdate = () => {
  NProgress.start()
}

export const onRouteUpdate = () => {
  NProgress.done()
}

export const onRouteUpdateDelayed = () => {
  NProgress.start()
}

