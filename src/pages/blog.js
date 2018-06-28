import { h, render } from 'preact';
import Article from '../containers/article';
import Button from '../components/button';

export default () => (
  <Article h3text="My" h3accent="Writing">
    <p>I'm currently using Medium to blog about things that interest me. Follow the link below!</p>
    <Button href="https://medium.com" icon="fab fa-medium-m">Go to Medium</Button>
  </Article>
);