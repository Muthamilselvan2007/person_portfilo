import { useEffect, useRef, useState } from 'react'

// ✏️ EDIT YOUR CONTENT HERE
const ME = {
  name: 'Muthamilselvan M', city: 'Chennai',
  email: 'muthamilselvanm2007@gmail.com',
  github: 'https://github.com/Muthamilselvan2007',
  linkedin: 'https://www.linkedin.com/in/muthamilselvan-m-b90b1a381',
  roles: ['Future Tech Innovator', 'IT Student', 'AI Enthusiast', 'Web & App Developer'],
  bio: 'I am an IT student and member of the ACM Student Chapter, passionate about AI and building useful things for the web and mobile. I am always open to learn and grow.',
}
const SERVICES = [
  ['🌐', 'Web Development', 'Building responsive, clean websites with React and modern tools.'],
  ['📱', 'App Development', 'Learning and building mobile apps with a focus on simple, useful UX.'],
  ['🤖', 'AI Exploration', 'Exploring AI and machine learning ideas and turning them into projects.'],
  ['🤝', 'Community', 'Learning and sharing with peers through the ACM Student Chapter.'],
]
const TECH = ['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub', 'VS Code', 'AI / ML', 'App Dev']
const PROJECTS = [
  ['Portfolio Website', 'React · Glassmorphism UI', 'This site, designed and coded by me.'],
  ['Your Next Project', 'Add on GitHub', 'Replace this card in App.jsx with your real project.'],
  ['AI Experiment', 'Add on GitHub', 'Replace this card in App.jsx with your real project.'],
]
const STEPS = [['Curious', 'Spot a problem worth solving'], ['Learn', 'Study the tools and concepts'], ['Build', 'Prototype it in code'], ['Share', 'Push to GitHub, get feedback'], ['Improve', 'Iterate and grow']]

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
function Typer({ words }) {
  const [i, setI] = useState(0), [t, setT] = useState(''), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i], id = setTimeout(() => {
      if (!del) { setT(w.slice(0, t.length + 1)); if (t.length + 1 === w.length) setTimeout(() => setDel(true), 1200) }
      else { setT(w.slice(0, t.length - 1)); if (t.length <= 1) { setDel(false); setI((i + 1) % words.length) } }
    }, del ? 40 : 80)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return <span className="grad">{t}<i className="caret" /></span>
}
function Tilt({ children }) {
  const r = useRef()
  const move = e => { const b = r.current.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5
    r.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)` }
  return <div ref={r} className="tilt" onMouseMove={move} onMouseLeave={() => r.current.style.transform = ''}>{children}</div>
}
const Head = ({ k, t }) => <div className="reveal"><p className="eyebrow">{k}</p><h2>{t}</h2></div>

export default function App() {
  useReveal()
  useEffect(() => {
    const m = e => { document.documentElement.style.setProperty('--mx', e.clientX + 'px'); document.documentElement.style.setProperty('--my', e.clientY + 'px') }
    window.addEventListener('mousemove', m); return () => window.removeEventListener('mousemove', m)
  }, [])
  return (<>
    <div className="bg"><span className="orb o1" /><span className="orb o2" /><span className="orb o3" /></div>
    <div className="glow" />
    <nav className="glass nav">
      <a href="#home" className="logo"><b>M</b><span>{ME.name}<small>Future Tech Innovator</small></span></a>
      <div className="links">{['About', 'Services', 'Skills', 'Work', 'Process', 'Contact'].map(l => <a key={l} href={'#' + l.toLowerCase()}>{l}</a>)}</div>
      <a className="btn dark sm" href="#contact">Let's Talk ↗</a>
    </nav>

    <header id="home" className="hero">
      <div className="reveal">
        <p className="eyebrow">Hello, I'm</p>
        <h1>{ME.name}</h1>
        <h3><Typer words={ME.roles} /></h3>
        <p className="lead">IT student · ACM Student Chapter member · passionate about AI · basic web &amp; app developer · open to learn &amp; grow.</p>
        <div className="row"><a className="btn dark" href="#work">View My Work ↗</a><a className="btn glass" href={ME.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
        <div className="chips"><span>📍 {ME.city}, India</span><span>🎓 ACM Student Chapter</span><span>✨ AI Enthusiast</span></div>
      </div>
      <Tilt><div className="glass frame reveal">
        <img src="/profile.jpg" alt={ME.name} />
        <div className="glass float f1"><b>AI</b><small>Passionate about</small></div>
        <div className="glass float f2"><small>Always</small><b>Learning ↗</b></div>
      </div></Tilt>
    </header>

    <section id="about" className="glass sec split">
      <Head k="About me" t="Learning Fast, Building with Purpose" />
      <div className="reveal"><p>{ME.bio}</p>
        <div className="stats"><div><b>IT</b><small>Student</small></div><div><b>ACM</b><small>Chapter Member</small></div><div><b>AI</b><small>Focus Area</small></div></div></div>
    </section>

    <section id="services" className="sec"><Head k="What I do" t="Things I Work On" />
      <div className="grid4">{SERVICES.map(([i, t, d]) => <article key={t} className="glass card reveal"><span className="ico">{i}</span><h4>{t}</h4><p>{d}</p></article>)}</div></section>

    <section id="skills" className="glass sec"><Head k="Tools & skills" t="Technologies I Use" />
      <div className="tech reveal">{TECH.map(t => <span key={t} className="glass pill">{t}</span>)}</div></section>

    <section id="work" className="sec"><Head k="Featured projects" t="Selected Work" />
      <div className="grid3">{PROJECTS.map(([t, s, d], i) => <a key={t} href={ME.github} target="_blank" rel="noreferrer" className="glass proj reveal">
        <div className={'thumb t' + i}><span>{t.split(' ').map(w => w[0]).join('')}</span></div><h4>{t} <em>↗</em></h4><small>{s}</small><p>{d}</p></a>)}</div></section>

    <section id="process" className="sec"><Head k="My process" t="How I Learn & Build" />
      <div className="steps">{STEPS.map(([t, d], i) => <div key={t} className="glass step reveal"><b>0{i + 1}</b><h4>{t}</h4><p>{d}</p></div>)}</div></section>

    <section id="contact" className="glass sec split">
      <div className="reveal"><p className="eyebrow">Let's connect</p><h2>Have a project in mind? Let's build something together.</h2>
        <ul className="contact"><li>✉️ <a href={'mailto:' + ME.email}>{ME.email}</a></li><li>📍 {ME.city}, India</li>
          <li>💻 <a href={ME.github} target="_blank" rel="noreferrer">GitHub</a></li><li>🔗 <a href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li></ul></div>
      <form className="glass form reveal" onSubmit={e => { e.preventDefault(); const f = new FormData(e.target)
        location.href = `mailto:${ME.email}?subject=${encodeURIComponent('Portfolio message from ' + f.get('n'))}&body=${encodeURIComponent(f.get('m') + '\n\n' + f.get('e'))}` }}>
        <input name="n" placeholder="Your name" required /><input name="e" type="email" placeholder="Your email" required />
        <textarea name="m" rows="5" placeholder="Your message" required /><button className="btn dark">Send Message ➤</button></form>
    </section>
    <footer>© {new Date().getFullYear()} {ME.name} · Built with React</footer>
  </>)
}
