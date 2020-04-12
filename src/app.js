import { h, render } from './web_modules/preact.js';
import htm from './web_modules/htm.js';
import { Router } from './web_modules/preact-router.js';
import { Link } from './web_modules/preact-router/match.js';

const html = htm.bind(h);

const ExternalLink = ({ children, href, spaceBefore, spaceAfter }) => html`
  ${spaceBefore ? ' ' : ''}
  <a href=${href} class="underline text-teal-600">${children}</a>
  ${spaceAfter ? ' ' : ''}
`;

const NavLink = ({ children, href }) => html`
  <${Link}
    href=${href}
    activeClassName="border-solid border-b-2"
    class="mx-4 sm:mx-8 pb-1"
  >
    ${children}
  <//>
`;

const ProjectCard = ({ title, img, children }) => html`
  <div class="rounded shadow-lg flex-1 m-4">
    <div class="bg-gray-200 rounded-t-lg p-4">
      <img src="${img}" class="mx-auto p-4" />
    </div>
    <div class="p-4">
      <h4 class="text-xl font-bold">${title}</h4>
      <p class="text-xl">
        ${children}
      </p>
    </div>
  </div>
`;

const ContactInput = ({ label, type }) => html`
  <label
    class="block text-xl text-gray-700 text-sm font-bold mb-2 mt-4"
    for="${label.toLowerCase()}"
  >
    ${label}
  </label>
  <${type}
    class="shadow appearance-none border rounded w-full py-2 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id=${type === 'input' ? label.toLowerCase() : undefined}
    name=${type === 'textarea' ? label.toLowerCase() : undefined}
    type=${type === 'input' ? 'text' : undefined}
  />
`;

const Section = ({ title, children }) => {
  const words = title.split(' ');
  const [titleAppend, ...titlePrepend] = [words.pop(), ...words.join(' ')];
  return html`
    <h3 class="text-2xl font-bold mt-4">
      ${titlePrepend} <span class="text-teal-600">${titleAppend}</span>
    </h3>
    ${children}
  `;
};

const About = () =>
  html`
    <${Section} title="Hi! I'm Wes">
      <p class="text-xl">
        I'm a software engineer specializing in web technologies and JavaScript
        application development. By day I work at a railroad logistics company
        as a front-end engineer building their next generation system using
        React and GraphQL. By night I am a core team member of
        <${ExternalLink} spaceBefore href="https://peoplelikemeapp.com"
          >People Like Me<//
        >, a startup that aims to make the world a better place by providing a
        platform for users to find, rate, and review LGBTQ+ businesses anywhere
        in the world.
      </p>
    <//>
  `;

const Contact = () =>
  html`
    <${Section} title="Get in Touch">
      <div class="max-w-xl m-auto">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <${ContactInput} type="input" label="Name" />
          <${ContactInput} type="input" label="Email" />
          <${ContactInput} type="textarea" label="Message" />
          <button
            type="submit"
            class="bg-teal-600 hover:bg-teal-500 text-xl text-white font-bold py-2 px-4 border-b-4 border-teal-800 hover:border-teal-600 rounded mt-4 flex ml-auto"
          >
            Send
          </button>
        </form>
      </div>
    <//>
  `;

const Projects = () =>
  html`
    <${Section} title="My Work">
      <div class="flex flex-col lg:flex-row">
        <${ProjectCard} title="People Like Me" img="plm.png">
          <${ExternalLink} spaceAfter href="https://peoplelikemeapp.com/"
            >People Like Me<//
          >is an application that allows users to find, rate and review
          businesses based on their LGBTQ+ friendliness anywhere in the world! I
          have been a core team member for a number of years, and we are
          currently rewriting the app from scratch using Vue.js and Apollo
          GraphQL.
        <//>
        <${ProjectCard} title="Zoom Block" img="zoomblock.png">
          Zoom Block is a browser extension that disables zooming by default
          preventing unwanted or accidental zooming. It is published on the
          <${ExternalLink}
            spaceBefore
            href="https://chrome.google.com/webstore/detail/zoom-block/jmomepcgehgfoimapeoinphcloinjfpb"
            >Chrome Web Store<//
          >, and the source code can be
          <${ExternalLink}
            spaceBefore
            href="https://github.com/warnellw/Zoom-Block"
            >found on Github<//
          >!
        <//>
      </div>
    <//>
  `;

const App = () => html`
  <div class="container mx-auto">
    <div class="max-w-screen-lg mx-auto p-4">
      <div class="rounded-lg shadow-lg ">
        <header
          class="rounded-t-lg bg-teal-600 text-white p-8 flex flex-col-reverse md:flex-row"
        >
          <div>
            <img
              src="headshot.jpg"
              class="border-4 border-solid shadow-md flex-initial -mb-16 mx-auto"
              alt="headshot"
            />
          </div>
          <div class="flex flex-col flex-1">
            <nav class="flex-initial flex flex-wrap justify-center text-xl">
              <${NavLink} href="/">About<//>
              <${NavLink} href="/projects">Projects<//>
              <${NavLink} href="/contact">Contact<//>
            </nav>
            <div
              class="flex-1 flex flex-col text-center items-center justify-center my-4 sm:my-8 md:m-0"
            >
              <h1 class="text-4xl sm:text-5xl font-bold">Wesley Warnell</h1>
              <h2 class="text-2xl sm:text-3xl">Software Engineer</h2>
            </div>
          </div>
        </header>
        <section class="p-4 sm:p-8 pt-12">
          <${Router}>
            <${About} default />
            <${Projects} path="/projects" />
            <${Contact} path="/contact" />
          <//>
        </section>
      </div>
    </div>
  </div>
`;

render(html` <${App} /> `, document.getElementById('app'));
