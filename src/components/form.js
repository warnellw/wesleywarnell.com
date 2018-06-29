import { h, render } from 'preact'
import cxs from 'cxs'
import Button from './button'

export default () => (
  <form class={formCSS} name="contact" method="post">
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" placeholder="Dwight Schrute" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="dwight.schrute@dundermifflin.com" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea name="message" placeholder="Through concentration, I can raise and lower my cholesterol at will."></textarea>
    </div>
    <div>
      <Button button action="fa-paper-plane">Send message</Button>
    </div>
  </form>
)

const formCSS = cxs({
  ' > div': {
    width: '100%',
    margin: '2em auto 0 auto',
    '@media (min-width: 782px)': {
      width: '600px'
    }
  },
  ' > div > input': {
    display: 'block',
    height: '2em',
    width: '100%',
    border: 'none',
    padding: '.5em',
    'box-sizing': 'border-box',
    'box-shadow': 'rgba(0, 0, 0, 0.3) 0px 0px 8px 0px',
    'border-radius': '5px'
  },
  ' > div > textarea': {
    display: 'block',
    width: '100%',
    height: '150px',
    padding: '.5em',
    'box-sizing': 'border-box',
    border: 'none',
    'box-shadow': 'rgba(0, 0, 0, 0.3) 0px 0px 8px 0px',
    'border-radius': '5px'
  },
  ' > div > label': {
    display: 'block',
    margin: '0 0 .5em 0'
  },
  ' > button': {
    width: '100%'
  }
})