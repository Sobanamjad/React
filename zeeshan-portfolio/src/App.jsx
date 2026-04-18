import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML", level: 95, color: "#E34F26" },
  { name: "CSS", level: 90, color: "#1572B6" },
  { name: "JavaScript", level: 88, color: "#F7DF1E" },
  { name: "React", level: 85, color: "#61DAFB" },
  { name: "Vue.js", level: 80, color: "#42B883" },
  { name: "Next.js", level: 82, color: "#ffffff" },
  { name: "Node.js", level: 78, color: "#339933" },
  { name: "Laravel", level: 80, color: "#FF2D20" },
  { name: "PHP", level: 82, color: "#777BB4" },
  { name: "MySQL", level: 75, color: "#4479A1" },
  { name: "PostgreSQL", level: 72, color: "#336791" },
];

const projects = [
  {
    title: "E-Commerce Platform",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    desc: "Full-stack shopping experience with real-time inventory, auth & payments.",
    color: "#61DAFB",
    icon: "🛒",
  },
  {
    title: "Task Management App",
    tech: ["React", "Laravel", "MySQL"],
    desc: "Collaborative project board with drag-and-drop, roles & notifications.",
    color: "#FF2D20",
    icon: "📋",
  },
  {
    title: "Real-time Chat App",
    tech: ["Vue.js", "Node.js", "MySQL"],
    desc: "WebSocket-powered messenger with rooms, file sharing & read receipts.",
    color: "#42B883",
    icon: "💬",
  },
  {
    title: "Portfolio CMS",
    tech: ["Next.js", "PostgreSQL", "PHP"],
    desc: "Headless CMS with a rich editor, media library & role-based access.",
    color: "#336791",
    icon: "🎨",
  },
];

const navLinks = ["About", "Skills", "Projects", "Contact"];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [typed, setTyped] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState({});
  const skillsRef = useRef(null);
  const roles = ["Full-Stack Developer", "Frontend Engineer", "Backend Architect", "Open-Source Enthusiast"];
  const roleRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  // Typewriter
  useEffect(() => {
    const tick = () => {
      const current = roles[roleRef.current];
      if (!deletingRef.current) {
        setTyped(current.slice(0, charRef.current + 1));
        charRef.current++;
        if (charRef.current === current.length) {
          deletingRef.current = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        setTyped(current.slice(0, charRef.current - 1));
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          roleRef.current = (roleRef.current + 1) % roles.length;
        }
      }
      setTimeout(tick, deletingRef.current ? 55 : 90);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  // Intersection observer for skill bars
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible((v) => ({ ...v, [e.target.dataset.name]: e.isIntersecting }))),
      { threshold: 0.3 }
    );
    const els = document.querySelectorAll("[data-name]");
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      fontFamily: "'Syne', 'Space Mono', monospace",
      background: "#09090f",
      color: "#e8e6ff",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #09090f; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 4px; }

        .nav-link {
          background: none; border: none; color: #a89fc8; cursor: pointer;
          font-family: 'Space Mono', monospace; font-size: 0.78rem;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 0;
          position: relative; transition: color 0.2s;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: #a78bfa; transition: width 0.3s;
        }
        .nav-link:hover, .nav-link.active { color: #a78bfa; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .hero-badge {
          display: inline-block; background: rgba(124,58,237,0.15);
          border: 1px solid rgba(167,139,250,0.3); border-radius: 2px;
          padding: 4px 14px; font-size: 0.7rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: #a78bfa; margin-bottom: 28px;
        }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px; font-family: 'Space Mono', monospace;
          font-size: 0.78rem; letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; border: none; transition: all 0.25s; border-radius: 2px;
          text-decoration: none;
        }
        .cta-primary {
          background: #7c3aed; color: #fff;
          box-shadow: 0 0 28px rgba(124,58,237,0.4);
        }
        .cta-primary:hover { background: #6d28d9; box-shadow: 0 0 40px rgba(124,58,237,0.6); transform: translateY(-1px); }
        .cta-secondary {
          background: transparent; color: #a78bfa;
          border: 1px solid rgba(167,139,250,0.4);
        }
        .cta-secondary:hover { border-color: #a78bfa; background: rgba(167,139,250,0.06); transform: translateY(-1px); }

        .section-label {
          font-family: 'Space Mono', monospace; font-size: 0.68rem;
          letter-spacing: 0.25em; text-transform: uppercase; color: #7c3aed;
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Syne', sans-serif; font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; line-height: 1.1; margin-bottom: 48px;
        }

        .skill-bar-bg {
          height: 3px; background: rgba(255,255,255,0.07);
          border-radius: 2px; overflow: hidden; margin-top: 8px;
        }
        .skill-bar-fill {
          height: 100%; border-radius: 2px;
          transition: width 1.2s cubic-bezier(0.22,1,0.36,1);
        }

        .project-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 4px; padding: 32px;
          background: rgba(255,255,255,0.02);
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          position: relative; overflow: hidden;
        }
        .project-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--accent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s;
        }
        .project-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.14); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .project-card:hover::before { transform: scaleX(1); }

        .tech-tag {
          display: inline-block; font-family: 'Space Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.1em; padding: 3px 10px;
          border-radius: 2px; background: rgba(255,255,255,0.06);
          color: #a89fc8; margin: 3px 3px 0 0;
        }

        .contact-input {
          width: 100%; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 2px;
          padding: 14px 18px; color: #e8e6ff;
          font-family: 'Space Mono', monospace; font-size: 0.82rem;
          outline: none; transition: border-color 0.2s;
          resize: vertical;
        }
        .contact-input:focus { border-color: #7c3aed; }
        .contact-input::placeholder { color: rgba(255,255,255,0.2); }

        .grid-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glow-orb {
          position: fixed; border-radius: 50%; filter: blur(120px);
          pointer-events: none; z-index: 0;
        }

        .float-anim { animation: floatUp 6s ease-in-out infinite; }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        .fade-in { animation: fadeIn 0.8s ease forwards; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

        .cursor { display: inline-block; width: 2px; height: 1.1em; background: #a78bfa; margin-left: 2px; vertical-align: middle; animation: blink 0.9s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .social-link {
          display: inline-flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px; color: #a89fc8; text-decoration: none; font-size: 1rem;
          transition: all 0.2s;
        }
        .social-link:hover { border-color: #7c3aed; color: #a78bfa; background: rgba(124,58,237,0.1); }

        @media (max-width: 768px) {
          .hero-name { font-size: 3rem !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Background */}
      <div className="grid-overlay" />
      <div className="glow-orb" style={{ width: 500, height: 500, top: -100, right: -100, background: "rgba(124,58,237,0.12)" }} />
      <div className="glow-orb" style={{ width: 400, height: 400, bottom: 200, left: -150, background: "rgba(59,130,246,0.08)" }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(9,9,15,0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(24px, 5vw, 80px)", height: 64,
      }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
          <span style={{ color: "#7c3aed" }}>&lt;</span>Zeeshan<span style={{ color: "#7c3aed" }}>/&gt;</span>
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {navLinks.map((l) => (
            <button key={l} className={`nav-link ${active === l ? "active" : ""}`} onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>
        <a href="mailto:zeeshan@email.com" className="cta-btn cta-primary" style={{ padding: "8px 20px", fontSize: "0.7rem" }}>Hire Me</a>
      </nav>

      <main style={{ position: "relative", zIndex: 1 }}>

        {/* HERO */}
        <section id="About" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px clamp(24px,5vw,80px) 80px" }}>
          <div style={{ maxWidth: 900, width: "100%" }}>
            <div className="hero-badge fade-in">Available for work ✦</div>
            <h1 className="hero-name fade-in" style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: "clamp(3.5rem,8vw,7rem)", lineHeight: 1.0, marginBottom: 24,
              letterSpacing: "-0.02em",
            }}>
              Hi, I'm<br />
              <span style={{
                background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Zeeshan.</span>
            </h1>
            <div className="fade-in" style={{
              fontFamily: "'Space Mono',monospace", fontSize: "clamp(1rem,2.5vw,1.4rem)",
              color: "#a89fc8", marginBottom: 32, minHeight: 36,
            }}>
              {typed}<span className="cursor" />
            </div>
            <p className="fade-in" style={{ maxWidth: 560, lineHeight: 1.8, color: "#8b86a8", marginBottom: 48, fontSize: "0.95rem" }}>
              I craft performant, elegant web applications — from pixel-perfect UIs to robust backends.
              Fluent in modern stacks, passionate about clean code and great user experiences.
            </p>
            <div className="fade-in" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="cta-btn cta-primary" onClick={() => scrollTo("Projects")}>View Projects →</button>
              <button className="cta-btn cta-secondary" onClick={() => scrollTo("Contact")}>Let's Talk</button>
            </div>

            {/* Stats */}
            <div className="fade-in" style={{ display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap" }}>
              {[["11+", "Technologies"], ["3+", "Years Coding"], ["20+", "Projects Built"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#a78bfa" }}>{n}</div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.15em", color: "#5a5570", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating code card */}
          <div className="float-anim" style={{
            position: "absolute", right: "clamp(24px,6vw,120px)", top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8, padding: 28, fontFamily: "'Space Mono',monospace",
            fontSize: "0.75rem", lineHeight: 2, color: "#a89fc8", display: "none",
            maxWidth: 300,
          }} id="code-card">
            <div style={{ color: "#7c3aed" }}>const</div>
            <div><span style={{ color: "#60a5fa" }}>developer</span> = {"{"}</div>
            <div>&nbsp;&nbsp;name: <span style={{ color: "#a78bfa" }}>'Zeeshan'</span>,</div>
            <div>&nbsp;&nbsp;role: <span style={{ color: "#a78bfa" }}>'Full-Stack'</span>,</div>
            <div>&nbsp;&nbsp;loves: <span style={{ color: "#34d399" }}>['code','design']</span></div>
            <div>{"}"}</div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="Skills" style={{ padding: "100px clamp(24px,5vw,80px)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="section-label">What I Know</div>
            <div className="section-title">Technical <span style={{ color: "#7c3aed" }}>Skills</span></div>

            <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px 80px" }}>
              {skills.map((s) => (
                <div key={s.name} data-name={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>{s.name}</span>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", color: "#5a5570" }}>{s.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{
                      width: visible[s.name] ? `${s.level}%` : "0%",
                      background: `linear-gradient(90deg, ${s.color}88, ${s.color})`,
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech pills */}
            <div style={{ marginTop: 64, display: "flex", flexWrap: "wrap", gap: 12 }}>
              {["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Next.js", "Node.js", "Laravel", "PHP", "MySQL", "PostgreSQL", "REST APIs", "Git", "Tailwind"].map((t) => (
                <span key={t} style={{
                  fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.08em",
                  padding: "8px 18px", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 2,
                  color: "#a78bfa", background: "rgba(124,58,237,0.06)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="Projects" style={{ padding: "100px clamp(24px,5vw,80px)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="section-label">What I've Built</div>
            <div className="section-title">Featured <span style={{ color: "#7c3aed" }}>Projects</span></div>

            <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              {projects.map((p) => (
                <div key={p.title} className="project-card" style={{ "--accent": p.color }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: 20 }}>{p.icon}</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem", marginBottom: 12, color: "#e8e6ff" }}>{p.title}</h3>
                  <p style={{ color: "#6b6585", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                  <div>{p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}</div>
                  <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
                    <a href="#" style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", color: p.color, textDecoration: "none", letterSpacing: "0.1em" }}>
                      VIEW →
                    </a>
                    <a href="#" style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.7rem", color: "#5a5570", textDecoration: "none", letterSpacing: "0.1em" }}>
                      GITHUB
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="Contact" style={{ padding: "100px clamp(24px,5vw,80px)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div className="section-label">Get In Touch</div>
            <div className="section-title">Let's <span style={{ color: "#7c3aed" }}>Connect</span></div>

            <p style={{ color: "#6b6585", marginBottom: 48, lineHeight: 1.8 }}>
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <input className="contact-input" placeholder="Your Name" />
                <input className="contact-input" placeholder="Your Email" type="email" />
              </div>
              <input className="contact-input" placeholder="Subject" />
              <textarea className="contact-input" placeholder="Your Message..." rows={6} />
              <button className="cta-btn cta-primary" style={{ alignSelf: "flex-start" }}>
                Send Message →
              </button>
            </div>

            {/* Social */}
            <div style={{ marginTop: 64, paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.2em", color: "#3d3857", textTransform: "uppercase", marginBottom: 20 }}>Find me online</div>
              <div style={{ display: "flex", gap: 12 }}>
                {[["GH", "GitHub"], ["LI", "LinkedIn"], ["TW", "Twitter"]].map(([abbr, name]) => (
                  <a key={name} href="#" className="social-link" title={name}>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.05em" }}>{abbr}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "32px clamp(24px,5vw,80px)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.9rem" }}>
            <span style={{ color: "#7c3aed" }}>&lt;</span>Zeeshan<span style={{ color: "#7c3aed" }}>/&gt;</span>
          </span>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", color: "#3d3857", letterSpacing: "0.1em" }}>
            © 2024 ZEESHAN · BUILT WITH REACT
          </span>
        </footer>
      </main>
    </div>
  );
}