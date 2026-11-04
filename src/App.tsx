import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { photo, shots } from "./assets";
import { EMAIL, skills, jobs, own, live, other, services, stack, stats } from "./data";

type Theme = "light" | "dark";

function useTheme(): () => void {
  const [theme, setTheme] = useState<Theme>(() => {
    const a = document.documentElement.getAttribute("data-theme");
    if (a === "light" || a === "dark") return a;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  return () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    setTheme(next);
  };
}

// Fades elements in as they scroll into view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const delay = (i: number) => ({ transitionDelay: i * 80 + "ms" });

function LivePreview({ src, poster, alt }: { src: string; poster?: string; alt: string }) {
  const [on, setOn] = useState(false);
  const host = src.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="frame">
      <div className="bar"><i /><i /><i /><span>{host}</span></div>
      <div className="view">
        {on ? (
          <iframe src={src} title={"Live preview of " + host} loading="lazy" referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms" />
        ) : (
          <>
            {poster && <img src={poster} alt={alt} loading="lazy" />}
            <button type="button" className="load" onClick={() => setOn(true)}>Load live preview</button>
          </>
        )}
      </div>
    </div>
  );
}

function Ext({ href, main, children }: { href: string; main?: boolean; children: ReactNode }) {
  return <a className={main ? "btn main" : "btn"} href={href} target="_blank" rel="noopener">{children}</a>;
}

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
  );
}

function Head({ title, sub }: { title: string; sub?: string }) {
  return <div className="head rv"><h2>{title}</h2>{sub && <p>{sub}</p>}</div>;
}

function Header() {
  const toggle = useTheme();
  return (
    <header><div className="wrap">
      <a className="brand" href="#top">CipherDev</a>
      <nav aria-label="Primary" className="links">
        <a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
      <div className="act">
        <a className="btn main sm" href="#contact">Hire me</a>
        <button id="tt" type="button" aria-label="Toggle light and dark theme" onClick={toggle}>
          <svg className="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          <svg className="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
        </button>
      </div>
    </div></header>
  );
}

function Hero() {
  return (
    <div className="wrap hero">
      <div>
        <div className="avail"><i />Open to freelance projects</div>
        <h1>Abdelrahman Ashour</h1>
        <p className="role">Software developer and web penetration tester</p>
        <p className="lede">I build fast, secure websites and web apps for clients, then test them the way an attacker would.</p>
        <div className="btns">
          <a className="btn main" href={"mailto:" + EMAIL + "?subject=New%20project"}>Start a project</a>
          <a className="btn" href="#projects">View my work</a>
        </div>
        <div className="stats">{stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>
      </div>
      <div className="photo">
        <img src={photo} alt="Abdelrahman Ashour at his laptop, surrounded by code, security dashboards and cybersecurity books" width={720} height={720} fetchPriority="high" />
        <div className="badge"><b>100%</b>of PortSwigger’s XSS labs solved</div>
      </div>
    </div>
  );
}

export default function App() {
  useReveal();
  const loop = [...stack, ...stack];
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero />
        <div className="marq" aria-hidden="true"><div className="track">{loop.map((s, i) => <span key={i}>{s}</span>)}</div></div>

        <section id="services" className="sec"><div className="wrap">
          <Head title="What I can build for you" sub="From a sharp landing page to a secure web app, I take projects from idea to a live site." />
          <div className="svc">
            {services.map((s, i) => (
              <div className="rv" style={delay(i)} key={s.title}>
                <article><div className="ic"><Icon d={s.icon} /></div><h3>{s.title}</h3><p>{s.text}</p></article>
              </div>
            ))}
          </div>
        </div></section>

        <section id="projects" className="sec"><div className="wrap">
          <Head title="Selected projects" sub="Real, live work. Load a preview right here or open the site." />
          <div className="cards">
            {own.map((p, i) => (
              <div className="rv" style={delay(i % 2)} key={p.title}>
                <article className="card">
                  <LivePreview src={p.live} poster={shots[p.shot]} alt={"Screenshot of " + p.title} />
                  <div className="body">
                    <span className="tag">{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p>
                    <div className="btns"><Ext main href={p.live}>Live site</Ext><Ext href={p.gh}>GitHub</Ext></div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <h3 className="sub rv">Freelance and research</h3>
          <div className="proj">
            {live.map((e) => (
              <div className="panel live rv" key={e.title}>
                <div className="info">
                  <span className="tag">{e.tag}</span><h3>{e.title}</h3><p>{e.desc}</p>
                  <Ext main href={e.url!}>Open live site</Ext>
                  <p className="cap">Blank preview? The site may block embedding, so use the button.</p>
                </div>
                <LivePreview src={e.url!} alt={e.title} />
              </div>
            ))}
            {other.map((e) => <div className="panel rv" key={e.title}><span className="tag">{e.tag}</span><h3>{e.title}</h3><p>{e.desc}</p></div>)}
          </div>
        </div></section>

        <section id="about" className="sec"><div className="wrap about">
          <div className="rv">
            <h2>Building where creation meets defense</h2>
            <p>I engineer digital environments where creation meets defense. While I shape interactive experiences on the surface, my true work happens in the unseen layers, reading invisible patterns and seeking out the quiet vulnerabilities others overlook. I don’t just build systems to function seamlessly; I architect them to remain impenetrable against the unexpected.</p>
          </div>
          <div className="edu rv"><h3>Bachelor of Computer Science</h3><p>Mansoura University, Faculty of Computer and Information Science, Mansoura, Egypt. Currently in my 2nd year.</p></div>
        </div></section>

        <section className="sec"><div className="wrap">
          <Head title="What I work with" />
          <div className="skills">
            {skills.map(([k, v], i) => (
              <div className="rv" style={delay(i % 3)} key={k}>
                <div className="sk"><h3>{k}</h3><div className="chips">{v.split(", ").map((c) => <span key={c}>{c}</span>)}</div></div>
              </div>
            ))}
          </div>
        </div></section>

        <section id="work" className="sec"><div className="wrap">
          <Head title="Experience and training" />
          <ol className="tl">{jobs.map((j) => <li className="rv" key={j.title}><h3>{j.title}</h3><div className="meta">{j.meta}</div><p>{j.text}</p></li>)}</ol>
        </div></section>

        <section id="contact" className="sec"><div className="wrap">
          <div className="cta rv">
            <h2>Let’s build something great</h2>
            <p>Have a freelance project, a collaboration in mind, or just want to chat tech? I’m always open to new opportunities and ideas.</p>
            <a className="mail" href={"mailto:" + EMAIL}>{EMAIL}</a>
            <div className="btns">
              <Ext main href="https://wa.me/201032039679">WhatsApp</Ext>
              <Ext href="https://www.linkedin.com/in/abdelrahman-tabaga-9a6105274">LinkedIn</Ext>
              <Ext href="https://github.com/abdelrahmanashour86-stack">GitHub</Ext>
            </div>
          </div>
        </div></section>
      </main>
      <footer><div className="wrap">© {new Date().getFullYear()} Abdelrahman Ashour</div></footer>
    </>
  );
}
