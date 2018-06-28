import { h, render } from 'preact'
import cxs from 'cxs'
import H3 from '../components/styledHeader'

export default (props) => (
  <article class={articleCSS}>
    <H3 text={props.h3text} accent={props.h3accent} />
    {props.children}
  </article>
)

const articleCSS = cxs({
  ' p': {
    'font-size': '1.2em'
  }
})