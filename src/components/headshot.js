import { h, render } from 'preact'
import cxs from 'cxs'

export default () => <img class={headshotCSS} src="assets/images/headshot.jpg" alt="headshot"></img>

const headshotCSS = cxs({
  'grid-column': '1 / 2',
  'grid-row': '3 / 5',
  border: '3px solid #ffffff',
  'box-shadow': '0px 0px 8px 0px rgba(0,0,0,0.3)',
  width: '250px',
  height: '250px',
  margin: 'auto',
  'z-index': '1',
  '@media (min-width: 782px)': {
    'grid-column': '1 / 2',
    'grid-row': '2 / 4',
    'margin': '0 0 0 3em'
  }
})