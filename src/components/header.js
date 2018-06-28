import { h, render } from 'preact';
import cxs from 'cxs';

export default () => (
  <header class={headerCSS}>
    <h1>Wesley Warnell</h1>
    <h2>Software Developer</h2>
  </header>
)

const headerCSS = cxs({
  'grid-column': '1 / 2',
  'grid-row': '2 / 3',
  'text-align': 'center',
  'align-self': 'center',
  'margin-top': '2em',
  ' > h1,h2': {
    color: '#ffffff'
  },
  ' > h1': {
    margin: '0',
    'font-size': '2em',
    'font-weight': 'bold'
  },
  ' > h2': {
    margin: '0 0 1em 0',
    'font-weight': 'normal'
  },
  '@media (min-width: 782px)': {
    'grid-column': '2 / 3',
    'grid-row': '2 / 3',
    margin: '0'
  },
  '@media (min-width: 1082px)': {
    ' > h1': {
      'font-size': '3em'
    },
    ' > h2': {
      margin: '.75em 0 0 0'
    }
  }
});