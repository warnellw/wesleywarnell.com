import { h, render } from 'preact'
import cxs from 'cxs'

export default () => <h3 class={notFound}>404 - Page not found!</h3>

const notFound = cxs({
  'font-size': '3em',
  'text-align': 'center'
})