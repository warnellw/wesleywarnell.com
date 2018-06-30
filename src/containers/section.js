import { h, render } from 'preact'
import { Router } from 'preact-router'
import cxs from 'cxs'
import Home from '../pages/home'
import Projects from '../pages/projects'
import Blog from '../pages/blog'
import Contact from '../pages/contact'
import NotFound from '../pages/notfound'

export default () => (
  <section class={sectionCSS}>
    <Router>
      <Home path="/" />
      <Projects path="/projects" />
      <Blog path="/blog" />
      <Contact path="/contact" />
      <NotFound default />
    </Router>
  </section>
)

const sectionCSS = cxs({
  'grid-column': '1 / 2',
  'grid-row': '5 / 6',
  'background-color': '#ffffff',
  padding: '1em',
  ' > p': {
    'font-size': '1.2em',
    'margin-top': '0'
  },
  '@media (min-width: 782px)': {
    'grid-column': '1 / 3',
    'grid-row': '4 / 5',
    padding: '1em 3em'
  }
})