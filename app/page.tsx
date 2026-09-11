import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Cloud, Crown, Leaf, LockKeyhole, Mountain, Users } from "lucide-react";
import data from "../data/site.json";

export default function Home(){
 return <main className="page"><div className="sky"/><div className="sun"/><div className="mountain"/><div className="mountain two"/><div className="cloud c1"/><div className="cloud c2"/><div className="cloud c3"/><div className="particles"/>
 <nav className="nav"><Link className="brand" href="/"><span className="logo">S</span>SIH Team Hub</Link><div className="links"><Link href="/problem">Problem</Link><Link href="/study">Study Hub</Link><Link href="/roadmap">Roadmap</Link><Link href="/team">Team</Link><Link href="/resources">Resources</Link></div><Link className="btn" href="/login">Login <ArrowRight size={16}/></Link></nav>
 <div className="wrap"><section className="hero"><div className="eyebrow">Build • Learn • Collaborate</div><h1>Your SIH journey, organised under one sky.</h1><p>A secure, reusable workspace where every member knows what to study, what to build, what to own and what comes next.</p><div className="actions"><Link className="btn primary" href="/register">Join the team <ArrowRight size={17}/></Link><Link className="btn" href="/study"><BookOpen size={17}/> Explore study hub</Link></div></section>
 <section className="section"><div className="section-head"><div><div className="eyebrow">Designed for teams</div><h2>Everything in one place</h2></div><span className="muted">Current: {data.activeStatement.year}</span></div><div className="grid">
 {[["Roles","Choose a role and get a focused learning plan.",Users],["Progress","Track duties, deadlines and completion.",CheckCircle2],["Secure","Authentication and role-based access are built in.",LockKeyhole]].map(([t,d,I]:any)=><div className="card" key={t}><div className="icon"><I size={21}/></div><h3>{t}</h3><p className="muted">{d}</p></div>)}
 </div></section>
 <section className="section"><div className="panel"><div className="eyebrow">Active mission</div><h2>{data.activeStatement.title}</h2><p className="muted">{data.activeStatement.description}</p><Link className="btn primary" href="/problem">Open mission <ArrowRight size={16}/></Link></div></section>
 </div><footer className="footer"><div className="wrap">SIH Team Hub · A reusable platform for future SIH statements and team cycles.</div></footer>
 </main>
}