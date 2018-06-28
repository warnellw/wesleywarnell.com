import { h, render } from 'preact';
import cxs from 'cxs';

export default () => (
  <footer class={footerCSS}>
    <p>Copyright &#169; {year} Wesley Warnell</p>
  </footer>
)

const year = (new Date()).getFullYear()

const footerCSS = cxs({
  'grid-column': '1 / 2',
  'grid-row': '6 / 7',
  'text-align': 'center',
  'border-radius': '0 0 10px 10px',
  'background-color': '#ffffff',
  padding: '1em',
  ' > p': {
    margin:'0',
    'font-size': '.75em',
    color: '#545454'
  },
  '@media (min-width: 782px)': {
    'grid-column': '1 / 3',
    'grid-row': '5 / 6'
  }
});