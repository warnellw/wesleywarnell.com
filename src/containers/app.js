import { h, render } from 'preact';
import Nav from '../components/nav';
import Headshot from '../components/headshot';
import Section from './section';
import Header from '../components/header';
import Footer from '../components/footer.js';
import cxs from 'cxs';

export default () => (
  <div class={gridContainer}>
    <Nav />
    <Headshot />
    <div class={filler}></div>
    <Header />
    <Section />
    <Footer />
  </div>
)

const gridContainer = cxs({
  width: '100%',
  margin: 'auto',
  display: 'grid',
  'grid-template-columns': '100%',
  'grid-template-rows': 'auto auto auto auto auto auto auto',
  'align-content': 'center',
  'justify-content': 'center',
  'box-shadow': '0px 0px 8px 0px rgba(0,0,0,0.3)',
  'background-color': '#2a75b1',
  'border-radius': '10px',
  '@media (min-width: 782px)': {
    'grid-template-columns': '250px 500px',
    'grid-template-rows': 'auto auto 2em auto auto',
    width: '750px'
  },
  '@media (min-width: 1082px)': {
    'grid-template-columns': '350px 700px',
    'grid-template-rows': 'auto auto 2em auto auto',
    width: '1050px'
  }
});

const filler = cxs({
  'grid-column': '1 / 2',
  'grid-row': '4 / 5',
  'background-color': '#ffffff',
  height: '2em',
  '@media (min-width: 782px)': {
    'grid-column': '1 / 3',
    'grid-row': '3 / 4'
  }
});