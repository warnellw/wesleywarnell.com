import { h, render } from 'preact';
import cxs from 'cxs';
import Article from '../containers/article';
import Button from '../components/button';
import Project from '../components/project';

export default () => (
  <Article h3text="My" h3accent="Work">
    <Button href="https://github.com/warnellw" icon="fab fa-github">Go to Github</Button>
    <div class={row}>
      <Project title="People Like Me" img="assets/images/plm.webp">
        <p>People Like Me is an application that allows users to find, rate and review businesses based on their LGBTQ+ friendliness anywhere in the world!</p>
      </Project>
      <Project title="Zoom Block" img="assets/images/zoomblock.webp">
        <p>Zoom Block is a browser extension that disabled zooming by default preventing unwanted or accidental zooming. It is published on the Chrome Web Store, and the source code can be found on Github!</p>
      </Project>
      <Project title="This website!" icon="fas fa-home">
        <p>I built this website with Preact and the design is inspired by elements from Material Design.</p>
        <p>The full stack is as follows:</p>
        <ul>
            <li>Preact</li>
            <li>Preact-router</li>
            <li>CXS</li>
            <li>Unstated</li>
        </ul>
      </Project>
      <Project title="StrainJS - Coming soon!" icon="fas fa-filter">
        <p>StrainJS is a small JavaScript library used to filter large amounts of data. It is currently under active development and the source code will be released on Github once it is in a stable state.</p>
      </Project>
    </div>
  </Article>
);

const row = cxs({
  margin: '2em 0 0 0'
})