import { useState } from 'react';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Work', href: '#work' },
  { label: 'Studies', href: '#studies' },
  { label: 'Contact', href: '#contact' },
];

const toolGroups = [
  {
    index: '01',
    title: 'Build for the web',
    detail: 'Responsive interfaces and modern web applications',
    tools: ['React 19', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'TanStack Start/Router', 'React Query'],
  },
  {
    index: '02',
    title: 'Program & work with data',
    detail: 'Programming languages, relational data, and CS foundations',
    tools: ['Java', 'Python', 'C', 'C++', 'PHP', 'SQL', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    index: '03',
    title: 'Build & connect',
    detail: 'Backend services, containers, and interface design',
    tools: ['Supabase', 'Docker Desktop', 'Git', 'GitHub', 'Figma', 'Tailwind CSS', 'Radix UI'],
  },
];

const studyAreas = [
  {
    year: '01',
    title: 'Programming foundations',
    topics: 'C · Digital systems · Discrete mathematics · Calculus · Linear algebra',
  },
  {
    year: '02',
    title: 'Data & software design',
    topics: 'Data structures · Algorithms · OOP · Databases · Computer architecture',
  },
  {
    year: '03',
    title: 'Systems & networks',
    topics: 'Operating systems · Networking · Software engineering · Embedded systems',
  },
  {
    year: '04',
    title: 'Intelligence & visual computing',
    topics: 'AI · Compilers · Graphics · Security · Digital Image Processing elective',
  },
];

const projects = [
  {
    index: '01',
    type: 'ONGOING · SOLO PROJECT',
    title: 'Neo Cash AI',
    description: 'A cashless finance and academic-operations app with student admission verification, administrator approval, institution-scoped access, student wallets, fee workflows, and payment tracking.',
    note: 'The in-app AI help chat is a prototype; connection to a live AI model is planned.',
    stack: ['React 19', 'TypeScript', 'TanStack Start/Router', 'Supabase', 'React Query', 'Figma'],
    href: 'https://github.com/Ruhandash2000/neo-cash-clone',
    style: 'project-art--web',
  },
  {
    index: '02',
    type: 'INDEPENDENT BUILD',
    title: 'Personal Portfolio Website',
    description: 'A responsive single-page portfolio built with React 19, JavaScript, Vite 6, HTML5, and custom CSS, with accessible navigation and layouts for phone, tablet, and desktop.',
    stack: ['React 19', 'JavaScript', 'Vite 6', 'HTML5', 'CSS'],
    href: 'https://github.com/Ruhandash2000/ruhan-portfolio',
    style: 'project-art--systems',
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Ruhan, home" onClick={closeMenu}>R<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <span className="header-note">CSE / 01—04</span>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <span className={menuOpen ? 'menu-glyph menu-glyph--open' : 'menu-glyph'} aria-hidden="true"><i /><i /></span>
      </button>
      {menuOpen && (
        <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowIcon diagonal /></a>)}
        </nav>
      )}
    </header>
  );
}

function SectionHeading({ number, eyebrow, title, summary }) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta"><span>{number}</span><span>{eyebrow}</span></div>
      <div className="section-heading__main">
        <h2>{title}</h2>
        {summary && <p>{summary}</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-topline">
            <p><span className="status-dot" /> Computer Science &amp; Engineering student</p>
            <p>Learning by building · Portfolio 2026</p>
          </div>
          <div className="hero-stage">
            <div className="hero-side-note hero-side-note--left">Curious about<br />how things work.</div>
            <div className="hero-side-note hero-side-note--right">From a first idea<br />to a working build.</div>
            <h1 className="hero-title" id="hero-title">
              <span className="hero-phrase hero-phrase--intro">
                <span className="hero-word hero-word--im">I’m</span>
                <span className="hero-word hero-word--name">Ruhan</span>
              </span>
              <span className="hero-phrase hero-phrase--build">
                <span className="hero-word hero-word--and">and I</span>
                <span className="hero-word hero-word--build">build</span>
              </span>
              <span className="hero-phrase hero-phrase--idea">
                <span className="hero-word hero-word--ideas">ideas</span>
                <span className="hero-word hero-word--work">into code.</span>
              </span>
            </h1>
            <div className="hero-portrait">
              <img className="portrait-photo" src="/images/hero-portrait.png" alt="Stylized monochrome portrait" />
            </div>
          </div>
          <div className="hero-bottomline">
            <span>Software · Systems · Visual computing</span>
            <a className="hero-contact" href="#contact">Let’s connect <ArrowIcon diagonal /></a>
            <a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="intro-section frame-section" id="about">
          <div className="intro-title">
            <p className="section-kicker">01 / A little about me</p>
            <h2>Computer science,<br />made <span>practical.</span></h2>
          </div>
          <div className="intro-copy">
            <p className="intro-lead">I’m a CSE student and solo builder of Neo Cash AI, a cashless finance and academic-operations app.</p>
            <p>I’ve worked on student admission verification, wallet and fee workflows, and administrator tools. My studies span programming, algorithms, databases, operating systems, networks, AI, and the Digital Image Processing elective I selected.</p>
            <a className="text-link" href="#studies">Explore my learning path <ArrowIcon /></a>
          </div>
          <div className="intro-stamp"><span>Always</span><strong>learning<br />by doing</strong><span>↘</span></div>
        </section>

        <section className="toolkit-section frame-section" id="toolkit">
          <SectionHeading
            number="02"
            eyebrow="Tools & foundations"
            title="A toolkit in progress."
            summary="A mix of technologies I use and core computer science ideas I’ve studied."
          />
          <div className="tool-grid">
            {toolGroups.map((group) => (
              <article className="tool-card" key={group.index}>
                <div className="tool-card__top"><span>{group.index}</span><span className="tool-card__mark">↗</span></div>
                <h3>{group.title}</h3>
                <p>{group.detail}</p>
                <div className="tag-list" aria-label={group.title + ' technologies'}>
                  {group.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="foundation-strip">
            <span className="foundation-strip__label">CSE foundations</span>
            <p>Data structures <b>·</b> Algorithms <b>·</b> Databases <b>·</b> Operating systems <b>·</b> Networking <b>·</b> AI <b>·</b> Digital Image Processing</p>
          </div>
        </section>

        <section className="work-section frame-section" id="work">
          <SectionHeading
            number="03"
            eyebrow="Selected work"
            title="A couple of builds."
            summary="An ongoing student-finance app and a responsive portfolio, built while learning by doing."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.index}>
                <div className={'project-art ' + project.style} aria-hidden="true">
                  <span className="project-art__index">{project.index}</span>
                  {project.index === '01' && <div className="browser-art"><div className="browser-art__bar"><i /><i /><i /></div><div className="browser-art__body"><span /><span /><b>NEO<br />CASH AI</b><i /></div></div>}
                  {project.index === '02' && <div className="code-art"><span>01&nbsp; R. / PORTFOLIO</span><span>02&nbsp; React 19 · Vite 6</span><span>03&nbsp; Responsive layouts</span><span>04&nbsp; Accessible navigation</span><b>R.</b></div>}
                  <span className="project-art__label">Illustrative visual</span>
                </div>
                <div className="project-info">
                  <div className="project-info__meta"><span>{project.type}</span><span>{project.index} / 02</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.note && <p className="project-note">{project.note}</p>}
                  <div className="project-stack" aria-label={project.title + ' technologies'}>
                    {project.stack.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
                  </div>
                  {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View GitHub repository <ArrowIcon diagonal /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="studies-section frame-section" id="studies">
          <SectionHeading
            number="04"
            eyebrow="What I’ve studied"
            title="Four years of foundations."
            summary="My CSE curriculum moves from programming basics to systems, AI, web engineering, and image processing."
          />
          <div className="study-table">
            <div className="study-table__head"><span>YEAR</span><span>FOCUS</span><span>SELECTED TOPICS</span><span aria-hidden="true">↘</span></div>
            {studyAreas.map((area) => (
              <article className="study-row" key={area.year}>
                <span className="study-year">{area.year}</span>
                <h3>{area.title}</h3>
                <p>{area.topics}</p>
                <span className="study-arrow" aria-hidden="true">↘</span>
              </article>
            ))}
          </div>
          <div className="education-note">
            <strong>B.Sc. (Honours), Computer Science &amp; Engineering</strong>
            <span>Dhaka City College · National University Professional Programme</span>
            <span>Final examinations completed October 2026; results pending.</span>
          </div>
          <div className="dip-feature">
            <div className="dip-feature__index">ELECTIVE / 04</div>
            <div>
              <p className="section-kicker">A subject I chose</p>
              <h3>Digital Image<br /><span>Processing.</span></h3>
            </div>
            <div className="dip-feature__copy">
              <p>Image enhancement, filtering, restoration, color models, compression, and segmentation.</p>
              <div className="dip-visual" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
            </div>
          </div>
        </section>

        <section className="contact-section frame-section" id="contact">
          <div className="contact-heading">
            <p className="section-kicker">05 / Get in touch</p>
            <h2>Have an idea?<br /><span>Let’s build it.</span></h2>
          </div>
          <div className="contact-copy">
            <p>I’m open to conversations about projects, internships, and opportunities to learn by building.</p>
            <a className="contact-email" href="mailto:Ruhandashdibya.ed@gmail.com">Ruhandashdibya.ed@gmail.com</a>
            <a className="contact-button" href="mailto:Ruhandashdibya.ed@gmail.com" aria-label="Send an email to Ruhandashdibya.ed@gmail.com">Email me <ArrowIcon diagonal /></a>
            <div className="contact-downloads" aria-label="Download my CV or resume">
              <a className="download-link" href="/documents/Ruhan_Dash_Dibya_CV.docx" download>Download CV <span aria-hidden="true">↓</span></a>
              <a className="download-link" href="/documents/Ruhan_Dash_Dibya_Resume.docx" download>Download Resume <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="contact-side">CURRENTLY<br />LEARNING &amp; BUILDING<br /><span>✳</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><a className="footer-brand" href="#home">Ruhan<span>.</span></a><span>Computer Science &amp; Engineering</span><a href="#home">Back to top ↑</a></div>
        <div className="footer-bottom"><span>Made with curiosity.</span><span>© 2026 Ruhan</span></div>
      </footer>
    </div>
  );
}

export default App;
