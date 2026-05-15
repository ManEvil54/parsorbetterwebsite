import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      {/* Refined Glass Navbar */}
      <nav className="glass-nav">
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/images/logo.png" alt="Pars Or Better" style={{ height: '40px' }} />
          <div className="nav-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#about" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '15px' }}>About</a>
            <a href="#features" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '15px' }}>Reviews</a>
            <a href="#" className="store-btn" style={{ padding: '8px 20px', borderRadius: '10px', fontSize: '14px', background: 'var(--primary-color)', color: '#000', border: 'none' }}>ENTER APP</a>
          </div>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section style={{ position: 'relative', paddingTop: '100px', textAlign: 'center' }}>
        <div className="section-container">
          <p style={{ color: 'var(--primary-color)', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '20px', textTransform: 'uppercase' }}>
            Pars or Better Golf Tournament app
          </p>
          <h1 className="hero-title" style={{ color: '#94a3b8' }}>
            THE <span style={{ color: 'var(--primary-color)' }}>GLADIATOR</span><br />
            <span style={{ color: '#fff' }}>SCHOOL</span> OF GOLF<br />
            <span style={{ display: 'block', marginTop: '10px' }}>
              <span style={{ color: '#CC5500' }}>PARS OR</span> <span style={{ color: '#64748b' }}>BETTER</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Check Out The Many Games that Can be Played!!<br />
            <span style={{ opacity: 0.6, fontSize: '0.9em' }}>The Gladiator School of Golf is a click away.</span>
          </p>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
            <div style={{ 
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.1) 0%, transparent 60%)',
              zIndex: -1 
            }}></div>
            
            <img 
              src="/images/hero.png" 
              className="floating-phone" 
              alt="App Interface" 
              style={{ width: '90%', maxWidth: '380px' }} 
            />
          </div>

          <div className="store-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="https://apps.apple.com" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05 1.72-3.4 1.72-1.33 0-1.89-.84-3.41-.84-1.53 0-2.13.82-3.41.82-1.28 0-2.32-.82-3.32-2.16-2.02-2.73-3.13-7.7-1.12-11.23 1-1.74 2.82-2.85 4.81-2.88 1.51-.03 2.94 1.01 3.86 1.01.91 0 2.66-1.26 4.47-1.08 1.8.18 3.16.83 4.14 2.21-3.15 1.84-2.65 5.86.35 7.15-1.15 2.72-2.62 5.05-3.97 6.28zM12.03 6.35c-.04-1.92 1.56-3.79 3.52-3.95.18 2.37-2.3 4.41-3.52 3.95z"/></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', opacity: 0.6 }}>Download on the</div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>App Store</div>
              </div>
            </a>
            <a href="https://play.google.com" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M5,3.06c-0.34,0.34-0.5,0.85-0.5,1.5v14.88c0,0.65,0.16,1.16,0.5,1.5l0.06,0.06L13.1,12L13.1,12L5.06,3L5,3.06z M17.44,16.34l-4.34-4.34l0,0l4.34-4.34l0.06,0.03l5.13,2.92c1.46,0.83,1.46,2.2,0,3.03l-5.13,2.92L17.44,16.34z M16.91,15.81l-3.81-3.81l-3.81,3.81l-0.03,0.03l0,0l3.81,3.81l0.03-0.03L16.91,15.81z M13.1,11.47l3.81-3.81l-3.81-3.81l-0.03,0.03l0,0l3.81,3.81l0.03,0.03L13.1,11.47z"/></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', opacity: 0.6 }}>Get it on</div>
                <div style={{ fontSize: '18px', fontWeight: 700 }}>Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About / Games Section */}
      <section id="about" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '14px', letterSpacing: '0.4em', color: 'var(--primary-color)', marginBottom: '16px', textTransform: 'uppercase' }}>The Games</h2>
          <h3 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '48px' }}>SHOW THE RECEIPTS</h3>
          
          <div className="feature-grid glass-card">
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: 'var(--text-dim)', fontSize: '20px', lineHeight: '1.7', marginBottom: '32px' }}>
                Finally, the stats to back up the trash talk. Create a league, link your tournaments, and watch the season-long leaderboard unfold. We keep track of every glorious birdie and every soul-crushing shank.
              </p>
              <p style={{ color: 'var(--text-dim)', fontSize: '20px', lineHeight: '1.7', marginBottom: '32px' }}>
                Go ahead, pull up the head-to-head record against your buddy. Your bragging rights are now officially weaponized.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/images/group.png" className="glass-card" style={{ width: '100%', boxShadow: '0 40px 100px rgba(0,0,0,0.6)' }} alt="Feature Spotlight" />
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Features */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            {/* For Directors */}
            <div className="glass-card" style={{ padding: '60px' }}>
              <h2 style={{ color: 'var(--primary-color)', fontSize: '16px', letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>For Tournament Directors</h2>
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Effortless Tournament Creation</h3>
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>Our intuitive, multi-step form guides you through setting up every detail, from tournament information to rounds, games, and flights.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Drag-and-Drop Tee Sheet Management</h3>
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>Easily create and manage tee times with our interactive interface. Simply drag unassigned players into pairing groups to build your tee sheet in minutes.</p>
              </div>
            </div>

            {/* For Players */}
            <div className="glass-card" style={{ padding: '60px' }}>
              <h2 style={{ color: 'var(--primary-color)', fontSize: '16px', letterSpacing: '0.2em', marginBottom: '24px', textTransform: 'uppercase' }}>For Players</h2>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Seamless Tournament Entry</h3>
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>Join any tournament with a simple 6-digit access code right from our clean and user-friendly dashboard.</p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Live Mobile Scoring</h3>
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>Our mobile-optimized screen lets you track scores for your group, hole by hole, with a sleek and simple interface.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Real-Time Leaderboard</h3>
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>Stay on top of the competition with a live leaderboard that updates automatically. Filter by game or flight to see how you stack up against your peers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ textAlign: 'center', padding: '100px 24px', background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.05) 0%, transparent 70%)' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '24px' }}>Because Bragging Rights Don't Pay for the Next Round.</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '20px', marginBottom: '40px' }}>Available for iOS and Android</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="store-btn" style={{ padding: '20px 40px', fontSize: '18px', fontWeight: 700 }}>GET THE APP</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '100px 24px', textAlign: 'center' }}>
        <img src="/images/logo.png" alt="Logo" style={{ height: '60px', marginBottom: '32px', opacity: 0.8 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <Link to="/privacy" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Privacy</Link>
          <Link to="/terms" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Terms</Link>
          <a href="mailto:info@parsorbetter.com" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Contact</a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '14px' }}>
          © {new Date().getFullYear()} Pars Or Better. Built by Manny Upshaw / GOLFLA.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
