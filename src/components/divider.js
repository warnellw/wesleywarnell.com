import { h, render } from 'preact'
import cxs from 'cxs'

export default (props) => (
  <p class={dividerCSS}>
    <span>{props.children}</span>
  </p>
)

const dividerCSS = cxs({
  width:'100%',
  '@media (min-width: 782px)': {
    width: '600px'
  },
  margin: '3em auto 2em auto',
  'text-align':'center',
  'border-bottom': '1px solid #c1c1c1',
  'line-height':'0.1em',
  ' > span': {
    background: '#fff',
    padding: '0 10px',
    color: '#c1c1c1'
  }
})