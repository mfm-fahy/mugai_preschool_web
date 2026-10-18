'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, CalendarDays, Check, ChevronRight, Heart, Menu, MessageCircle, Phone, Sparkles, X } from 'lucide-react'

function useFadeUp(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const programs = [
  { number: '01', title: 'Play Group', detail: 'A gentle first step into a world of play, friendship, and discovery.', color: 'orange' },
  { number: '02', title: 'Pre-KG', detail: 'Building confidence through stories, sensory play, and everyday wonder.', color: 'blue' },
  { number: '03', title: 'LKG & UKG', detail: 'Growing curious, capable learners ready for their next big chapter.', color: 'green' },
  { number: '04', title: 'After-School', detail: 'Phonics, drawing, handwriting, sports, and tuition classes to explore.', color: 'pink' },
]

const activities = ['Phonics', 'Drawing & Handwriting', 'Sports', 'Tuition Classes', 'Day Care']

export function MugaiPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const aboutRef = useFadeUp()
  const programsRef = useFadeUp()
  const activitiesRef = useFadeUp()
  const galleryRef = useFadeUp()
  const admissionsRef = useFadeUp()

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="site-shell">
      <nav className={`nav-wrap${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          <button className="brand-mark" onClick={() => scrollTo('top')} aria-label="Mugai home">
            <Image src="/images/mugai-logo.png" alt="Mugai Preschool & Kindergarten" width={130} height={60} style={{ height: '52px', width: 'auto', objectFit: 'contain' }} priority />
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {['about', 'programs', 'activities', 'gallery'].map((item) => <button key={item} onClick={() => scrollTo(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}
            <button className="mobile-enquire" onClick={() => scrollTo('admissions')}>Enquire now</button>
          </div>
          <div className="nav-actions">
            <a className="whatsapp-link" href="https://wa.me/918428000221" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            <button className="nav-cta" onClick={() => scrollTo('admissions')}>Enquire now <ArrowUpRight size={16} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="sun-orb" /><div className="hero-doodle doodle-star">✦</div><div className="hero-doodle doodle-dot">•</div>
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> MUGAI PRESCHOOL & KINDERGARTEN <span className="eyebrow-year">EST. 2017</span></div>
          <h1>A little beginning.<br /><em>A beautiful future.</em></h1>
          <p className="hero-copy">Where little minds explore, little hearts grow, and every day brings a new discovery.</p>
          <div className="hero-buttons"><button className="button button-dark" onClick={() => scrollTo('about')}>Explore our school <ArrowDown size={16} /></button><button className="text-button" onClick={() => scrollTo('admissions')}>Enquire for admissions <ArrowUpRight size={16} /></button></div>
          <div className="hero-note"><span className="avatar-stack"><i /><i /><i /></span><span>Helping little learners grow<br /><strong>in Aminjikarai since 2017</strong></span></div>
        </div>
        <div className="hero-art">
          <Image src="/images/hero-learning.png" alt="Children learning together through play" fill priority sizes="(max-width: 850px) 100vw, 48vw" />
          <div className="hero-image-shade" />
          <div className="art-card art-card-top"><Sparkles size={15} /> Wonder lives here</div>
          <div className="art-card art-card-bottom"><Heart size={15} fill="currentColor" /> Learn · Play · Grow</div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={15} /></div>
      </section>

      <section id="about" ref={aboutRef as React.RefObject<HTMLElement>} className="about-section section-pad" style={{opacity:0,transform:'translateY(28px)',transition:'opacity .65s ease, transform .65s ease'}}>
        <div className="section-kicker">01 / GET TO KNOW US</div>
        <div className="about-grid"><div><h2>Small steps today.<br /><span>Wonderful possibilities</span> tomorrow.</h2></div><div className="about-copy"><p className="lead">Mugai is a warm early learning environment in Aminjikarai, Chennai, where childhood is celebrated and curiosity is encouraged.</p><p>From a child&apos;s very first classroom moments to the confidence they carry forward, every day is an invitation to explore, create, connect, and grow.</p><div className="since-badge"><strong>2017</strong><span>Since</span></div></div></div>
        <div className="about-strip"><Image src="/images/about-learning.png" alt="Teacher guiding children through a creative learning activity" fill sizes="(max-width: 850px) 100vw, 84vw" /><div className="strip-image-shade" /><div className="strip-caption"><span>Every child is a little universe.</span><ArrowUpRight size={19} /></div></div>
      </section>

      <section id="programs" ref={programsRef as React.RefObject<HTMLElement>} className="programs-section section-pad" style={{opacity:0,transform:'translateY(28px)',transition:'opacity .65s ease, transform .65s ease'}}>
        {/* Animated floating decorations */}
        <div className="programs-deco programs-deco-star1">✦</div>
        <div className="programs-deco programs-deco-star2">✦</div>
        <div className="programs-deco programs-deco-dot1" />
        <div className="programs-deco programs-deco-dot2" />
        <div className="programs-deco programs-deco-circle1" />
        <div className="programs-deco programs-deco-ring" />
        <div className="programs-glow programs-glow-1" />
        <div className="programs-glow programs-glow-2" />

        <div className="section-kicker light"><span className="kicker-line" />02 / OUR LEARNING PROGRAMS</div>
        <div className="section-heading-row">
          <h2 className="programs-heading">Every stage has<br /><em>something wonderful.</em><span className="heading-shimmer" /></h2>
          <p>Age-appropriate beginnings, thoughtfully shaped around the joy of learning. Program details are subject to confirmation.</p>
        </div>
        <div className="program-grid">
          {programs.map((program, i) => (
            <article
              className={`program-card program-card-animated ${program.color}`}
              key={program.number}
              style={{ '--card-delay': `${i * 0.12}s` } as React.CSSProperties}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
                e.currentTarget.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-8px)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
              }}
            >
              <div className="card-shine" />
              <span className="program-number">{program.number}</span>
              <div>
                <h3>{program.title}</h3>
                <p>{program.detail}</p>
              </div>
              <button onClick={() => scrollTo('admissions')} aria-label={`Enquire about ${program.title}`}>
                <ChevronRight />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="activities" ref={activitiesRef as React.RefObject<HTMLElement>} className="activities-section section-pad" style={{opacity:0,transform:'translateY(28px)',transition:'opacity .65s ease, transform .65s ease'}}><div className="activity-visual"><Image src="/images/activity-art.png" alt="Child painting with watercolors and crayons" fill sizes="(max-width: 850px) 100vw, 45vw" /><div className="activity-image-shade" /></div><div className="activity-content"><div className="section-kicker">03 / BEYOND THE CLASSROOM</div><h2>Learn more.<br /><span>Grow brighter.</span></h2><p>Little learners thrive when they have room to follow their interests. Explore the enrichment options highlighted in our school updates.</p><div className="activity-list">{activities.map((activity, index) => <div className="activity-item" key={activity}><span>0{index + 1}</span><strong>{activity}</strong><ArrowUpRight size={17} /></div>)}</div></div></section>

      <section id="gallery" ref={galleryRef as React.RefObject<HTMLElement>} className="gallery-section section-pad" style={{opacity:0,transform:'translateY(28px)',transition:'opacity .65s ease, transform .65s ease'}}><div className="section-kicker">04 / LITTLE MOMENTS</div><div className="gallery-heading"><h2>A place to <em>belong.</em></h2><p>Bright ideas, open-hearted play, and the little moments that make a childhood memorable.</p></div><div className="gallery-grid"><div className="gallery-card gallery-main"><Image src="/images/learning-philosophy.png" alt="Children collaborating with blocks and books" fill sizes="(max-width: 850px) 100vw, 55vw" /><div className="gallery-image-shade" /><span>Curious minds<br /><strong>at work</strong></span></div><div className="gallery-card gallery-green"><Image src="/images/activity-storytelling.png" alt="Children listening to a story" fill sizes="(max-width: 850px) 50vw, 25vw" /><div className="gallery-image-shade" /><span>Growing<br /><strong>together</strong></span></div><div className="gallery-card gallery-pink"><Image src="/images/admissions-family.png" alt="Parent and child sharing a picture book" fill sizes="(max-width: 850px) 50vw, 25vw" /><div className="gallery-image-shade" /><span>Every day is<br /><strong>a discovery</strong></span></div></div></section>

      <section id="admissions" ref={admissionsRef as React.RefObject<HTMLElement>} className="admissions-section section-pad" style={{opacity:0,transform:'translateY(28px)',transition:'opacity .65s ease, transform .65s ease'}}><div className="admissions-image"><Image src="/images/admissions-family.png" alt="Parent and child reading together" fill sizes="(max-width: 850px) 100vw, 38vw" /></div><div className="admissions-content"><div className="admissions-copy"><div className="section-kicker light">05 / YOUR CHILD&apos;S NEXT CHAPTER</div><h2>Ready to begin<br />your child&apos;s <em>journey?</em></h2><p className="admissions-lead">Let&apos;s help you discover the right beginning for your little one.</p><div className="contact-line"><Phone size={17} /> <a href="tel:+918428000221">+91 84280 00221</a></div><div className="contact-line"><CalendarDays size={17} /> Visits by appointment</div><div className="admissions-map-wrap"><iframe className="admissions-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4645945495736!2d80.21196767115296!3d13.069715484575864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677f69b4ba17%3A0xb6f506866fcee700!2sMugai%20Pre-school%20%26%20Kindergarten%20%7C%20After%20School%20Classes!5e0!3m2!1sen!2sin!4v1792336460035!5m2!1sen!2sin" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe></div></div><div className="enquiry-panel">{submitted ? <div className="success-state"><span className="success-icon"><Check /></span><h3>Thank you for reaching out.</h3><p>We&apos;ll be in touch soon to help you discover Mugai.</p><button className="button button-dark" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><div className="form-top"><span>Let&apos;s connect</span><span>01 — 04</span></div><h3>Tell us a little about your little one.</h3><label>Parent / guardian name<input required placeholder="Your name" /></label><div className="form-row"><label>Phone number<input required type="tel" placeholder="+91 00000 00000" /></label><label>Child&apos;s age<select defaultValue=""><option value="" disabled>Select age</option><option>2–3 years</option><option>3–4 years</option><option>4–5 years</option><option>5+ years</option></select></label></div><label>Program of interest<select defaultValue=""><option value="" disabled>Choose a program</option>{programs.map((program) => <option key={program.title}>{program.title}</option>)}</select></label><button className="button button-orange" type="submit">Request a call back <ArrowUpRight size={16} /></button><small>By submitting, you&apos;re inviting our team to contact you about admissions.</small></form>}</div></div></section>

      <footer className="footer"><div className="footer-brand"><button className="brand-mark" onClick={() => scrollTo('top')}><Image src="/images/mugai-logo.png" alt="Mugai Preschool & Kindergarten" width={140} height={65} style={{ height: '60px', width: 'auto', objectFit: 'contain' }} /></button><p>A little beginning.<br />A beautiful future.</p></div><div className="footer-address"><span>FIND US</span><p>No. 13/10, Ranganayaki Street,<br />Ayyavoo Colony, Aminjikarai,<br />Chennai, Tamil Nadu 600030.</p><small>Opposite Putthu Amman Koil</small></div><div className="footer-links"><span>QUICK LINKS</span><button onClick={() => scrollTo('about')}>About us</button><button onClick={() => scrollTo('programs')}>Programs</button><button onClick={() => scrollTo('admissions')}>Admissions</button></div><div className="footer-contact"><span>LET&apos;S TALK</span><a href="https://wa.me/918428000221" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={15} /></a><a href="tel:+918428000221">Call +91 84280 00221</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mugai Preschool & Kindergarten</span><span>Made for little dreamers.</span></div></footer>
    </main>
  )
}
