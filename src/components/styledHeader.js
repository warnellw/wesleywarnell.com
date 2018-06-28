import { h, render } from 'preact';
import cxs from 'cxs';

export default (props) => (
    <h3 class={h3}>{props.text} <span class={accent}>{props.accent}</span></h3>
  )

const h3 = cxs({
  'font-size': '1.5em'
})

const accent = cxs({
  color: '#2a75b1'
});