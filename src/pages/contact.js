import { h, render } from 'preact'
import Article from '../containers/article'
import Button from '../components/button'
import Form from '../components/form'
import Divider from '../components/divider'

export default () => (
  <Article h3text="Get in" h3accent="Touch">
    <div>
      <p>I look forward to hearing from you!</p>
    </div>
    <div>
      <Button type="button" href="mailto:wes@wesleywarnell.com" icon="far fa-envelope">Send an Email</Button>
      <Divider>or</Divider>
      <Form />
    </div>
  </Article>
)