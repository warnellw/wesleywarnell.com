import { h, render } from 'preact'
import cxs from 'cxs'
import { Link } from 'preact-router/match'

export default () => (
  <nav class={navCSS}>
    <Link activeClassName={active} href="/">Home</Link>
    <Link activeClassName={active} href="/projects">Projects</Link>
    <Link activeClassName={active} href="/blog">Blog</Link>
    <Link activeClassName={active} href="/contact">Contact</Link>
  </nav>
)

const active = cxs({
  'border-bottom': '2px solid #ffffff;'
})

const navCSS = cxs({
  'grid-column': '1 / 2',
  'grid-row': '1 / 2',
  'text-align': 'center',
  padding: '1em 0 0 0',
  ' > a': {
    'font-size': '1em',
    color: '#ffffff',
    'text-decoration': 'none',
    margin: '0 .25em',
    'padding-bottom': '5px'
  },
  ' > a:hover': {
    'border-bottom': '2px solid #ffffff'
  },
  '@media (min-width: 376px)': {
    ' > a': {
      margin: '0 1em'
    }
  },
  '@media (min-width: 782px)': {
    'grid-column': '2 / 3',
    'grid-row': '1 / 2',
    padding: '2em 0 0 0'
  },
  '@media (min-width: 1082px)': {
    ' > a': {
      margin: '0 2em'
    }
  }
})