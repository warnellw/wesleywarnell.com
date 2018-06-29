import { h, render } from 'preact'
import cxs from 'cxs'

export default (props) => (
  <div class={card}>
    <div class={header}>
      {props.img && <img src={props.img} />}
      {props.icon && <i class={props.icon}></i>}
    </div>
    <div class={content}>
        <h4>{props.title}</h4>
        {props.children}
    </div>
  </div>
)

const card = cxs({
  display: 'block',
  margin: '1em auto',
  'box-shadow': '0px 0px 3px 0px rgba(0,0,0,0.3)',
  width: '100%',
  '@media (min-width: 782px)': {
    width: '450px'
  },
  '@media (min-width: 1082px)': {
    display: 'inline-block',
    'vertical-align': 'top',
    margin: '12px'
  }
})

const header = cxs({
  background: '#d8d8d8',
  ' > i': {
    'text-align': 'center',
    display: 'block',
    'font-size': '130px',
    padding: '13px 0',
    'line-height': '174px'
  },
  ' > img': {
    margin: 'auto',
    display: 'block',
    width: '200px',
    height: '200px',
    'box-shadow': 'none',
    border: 'none',
    'box-sizing': 'border-box',
    padding: '15px'
  }
})

const content = cxs({
  padding: '1em',
  '@media (min-width: 1082px)': {
    'min-height': '250px',
  },
  ' > h4': {
    'font-size': '1.5em',
    margin: '0'
  },
  ' > p': {
      margin: '1em 0 0 0'
  }
})