import { h, render } from 'preact'
import cxs from 'cxs'
import Article from '../containers/article'
import Button from '../components/button'
import Project from '../components/project'

export default () => (
  <Article h3text="My" h3accent="Work">
    <Button href="https://github.com/warnellw" icon="fa-github">Go to Github</Button>
    <div class={row}>
      <Project title="People Like Me" img="assets/images/plm.png">
        <p><a href="https://peoplelikemeapp.com/">People Like Me</a> is an application that allows users to find, rate and review businesses based on their LGBTQ+ friendliness anywhere in the world! I have been a core team member for a number of years, and we are currently rewriting the app from scratch using <a href="https://vuejs.org/">Vue.js</a> and <a href="https://feathersjs.com/">Feathers</a>.</p>
      </Project>
      <Project title="Zoom Block" img="assets/images/zoomblock.png">
        <p>Zoom Block is a browser extension that disables zooming by default preventing unwanted or accidental zooming. It is published on the Chrome Web Store, and the source code can be <a href="https://github.com/warnellw/Zoom-Block">found on Github!</a></p>
      </Project>
      <Project title="This website!" icon="fa-home">
        <p>I built this website with Preact, and the design is inspired by Material Design. The following are the major dependencies: Preact, Preact-router, and CXS. Finally, it is built and deployed by Netlify. The source code is available <a href="https://github.com/warnellw/wesleywarnell.com">on Github!</a></p>
      </Project>
      <Project title="StrainJS - Coming soon!" icon="fa-filter">
        <p>StrainJS is a small JavaScript library used to filter large amounts of data. It is currently under active development and the source code will be released on Github once it is feature complete.</p>
      </Project>
    </div>
  </Article>
)

const row = cxs({
  margin: '2em 0 0 0'
})