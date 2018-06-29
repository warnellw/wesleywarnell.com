import { h, render } from 'preact'
import cxs from 'cxs'

export default (props) => (
  <div class={row}>
    {props.button ? 
      <button type="submit" class={buttonCSS}>
        {props.icon && <i class={props.icon}></i>}
        {props.children}
        <i class={props.action ? props.action : "fa-external-link-alt"}></i>
      </button>
    : 
      <a href={props.href} class={buttonCSS}>
        {props.icon && <i class={props.icon}></i>}
        {props.children}
        <i class={props.action ? props.action : "fa-external-link-alt"}></i>
      </a>  
    }
  </div>
)

const row = cxs({
  'text-align': 'center',
  margin: '3em auto 0 auto'
})

const buttonCSS = cxs({
  margin: 'auto',
  color: '#ffffff',
  'background-color': '#2a75b1',
  border: 'none',
  'border-radius': '10px',
  'box-shadow': '0px 0px 8px 0px rgba(0,0,0,0.3)',
  'font-size': '1.5em',
  'text-decoration': 'none',
  cursor: 'pointer',
  padding: '.5em .75em',
  ' > i': {
    'font-size': '.75em'
  },
  ' > i:first-of-type': {
    padding: '0 .75em 0 0'
  },
  ' > i:last-of-type': {
    padding: '0 0 0 .75em'
  }
})