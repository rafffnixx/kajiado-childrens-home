import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  const [stats, setStats] = useState({
    children: 0,
    volunteers: 0,
    partners: 0,
    years: 0
  });

  const [currentHero, setCurrentHero] = useState(0);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const statsRef = useRef(null);
  const programsRef = useRef(null);
  const aboutRef = useRef(null);

  const heroMessages = [
    {
      title: "kajiado Bright Horizons",
      subtitle: "Providing hope for the vulnerable, one child at a time",
      description: "Transforming lives through love, education, and faith since 1997",
      bgImage: "/images/hero/hero-bg.jpg"
    },
    {
      title: "Every Child Deserves a Chance",
      subtitle: "Help us provide shelter, food, and education",
      description: "Your support changes lives forever",
      bgImage: "/images/hero/hero-bg2.jpg"
    },
    {
      title: "Building Bright Futures",
      subtitle: "Together we can break the cycle of poverty",
      description: "Join us in making a difference today",
      bgImage: "/images/hero/hero-bg3.jpg"
    },
    {
      title: "Hope Starts Here",
      subtitle: "One child, one dream, one future at a time",
      description: "Be part of their journey to success",
      bgImage: "/images/hero/hero-bg4.jpg"
    }
  ];

  const aboutImages = [
    { src: "/images/about/kajiado-home.jpg", alt: "kajiado Bright Horizons", caption: "Our Home" },
    { src: "/images/children/happy-children.jpg", alt: "Happy Children", caption: "Happy Children" },
    { src: "/images/about/founder.jpg", alt: "Founder", caption: "Our Founder" },
    { src: "/images/staff/staff1.jpg", alt: "Staff", caption: "Dedicated Staff" }
  ];

  const corePrograms = [
    { id: 'education', icon: 'fas fa-book', title: 'Education Program', desc: 'Quality education for every child, from primary through vocational training.' },
    { id: 'healthcare', icon: 'fas fa-heartbeat', title: 'Healthcare Program', desc: 'Regular medical checkups, nutrition, and healthcare for all children.' },
    { id: 'shelter', icon: 'fas fa-home', title: 'Shelter & Care', desc: 'Safe, loving home environment with proper care and support.' },
    { id: 'mentorship', icon: 'fas fa-users', title: 'Mentorship', desc: 'Guidance and mentorship to help children build better futures.' }
  ];

  const partnerPrograms = [
    { icon: "🌟", title: "Hope for Kajiado", desc: "Sustaining KCH through fundraising and support for over a decade" },
    { icon: "📚", title: "Valley School of Excellence", desc: "State-of-the-art primary school providing quality education to KCH children and community" },
    { icon: "🎓", title: "Bright Horizons Project", desc: "Helping post-secondary students navigate their next steps to self-sufficiency" },
    { icon: "🍲", title: "Namanga Hope Center", desc: "Outreach to vulnerable communities, founded by KCH alumnus Richard Nyinge" }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (programsRef.current) observer.observe(programsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    const counters = [
      { key: 'children', target: 450, duration: 2000 },
      { key: 'volunteers', target: 90, duration: 2000 },
      { key: 'partners', target: 20, duration: 2000 },
      { key: 'years', target: 27, duration: 1500 }
    ];

    counters.forEach(counter => {
      const steps = 60;
      const increment = counter.target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
          setStats(prev => ({ ...prev, [counter.key]: counter.target }));
          clearInterval(interval);
        } else {
          setStats(prev => ({ ...prev, [counter.key]: Math.floor(current) }));
        }
      }, counter.duration / steps);
    });
  }, []);

  // Rotate hero message every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroMessages.length]);

  // Rotate about images every 8 seconds (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAboutImage((prev) => (prev + 1) % aboutImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <>
      <SEO 
        title="kajiado Bright Horizons - Providing Hope & Care to Vulnerable Children"
        description="kajiado Bright Horizons provides shelter, education, healthcare, and love to orphaned and vulnerable children in Kajiado, Kenya. Support us through donations, sponsorship, or volunteering."
        path="/"
      />
      
      <div className="home-page">
        {/* Hero Section with Smooth Crossfade */}
        <div className="hero-slider">
          {heroMessages.map((message, index) => (
            <div
              key={index}
              className={`hero-slide ${currentHero === index ? 'active' : ''}`}
            >
              <div 
                className="hero-bg-image"
                style={{ backgroundImage: `url(${message.bgImage})` }}
              >
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content-wrapper">
                <div className="container">
                  <div className="hero-text">
                    <h1 className="hero-title">{message.title}</h1>
                    <p className="hero-subtitle">{message.subtitle}</p>
                    <p className="hero-description">{message.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Hero Dots Indicator */}
          <div className="hero-dots">
            {heroMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHero(index)}
                className={`hero-dot ${currentHero === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mission-statement">
          <div className="container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                To provide loving Christian care, shelter, food, clothing, medical and educational needs to children who have no other resources, ensuring every child receives <span className="highlight">love</span>, 
                a <span className="highlight">full stomach</span>, 
                <span className="highlight"> quality education</span>, 
                <span className="highlight"> spiritual nourishment</span>, 
                and <span className="highlight">hope for a better future</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div 
          ref={statsRef}
          id="stats"
          className={`stats-counter-section ${isVisible.stats ? 'visible' : ''}`}
        >
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <i className="fas fa-child"></i>
                <h3>{stats.children}+</h3>
                <p>Children Cared For</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-hands-helping"></i>
                <h3>{stats.volunteers}+</h3>
                <p>Active Volunteers</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-handshake"></i>
                <h3>{stats.partners}+</h3>
                <p>Partner Organizations</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-calendar-alt"></i>
                <h3>{stats.years}+</h3>
                <p>Years of Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section with Rotating Image Slider - Updated */}
        <div 
          ref={aboutRef}
          id="about"
          className={`about-preview ${isVisible.about ? 'visible' : ''}`}
        >
          <div className="container">
            <div className="about-flex">
              <div className="about-text">
                <h2>About <span>kajiado Bright Horizons</span></h2>
                <p>kajiado Bright Horizons (KCH) has been home to multi-generations of vulnerable children since <strong>1997</strong>. KCH works closely with Kenya Child Services to identify children who are the most desperate in need, with those admitted having no family, access to parental oversight, nor have their basic needs for protection met.</p>
                <p>KCH provides physical and spiritual nourishment in a safe environment, supplemented by care by a loving staff, medical care and educational needs through secondary school. The children come from different African tribes and grow up as sisters and brothers. Currently, there are over <strong>100 children</strong> being cared for at KCH.</p>
                <p>KCH is also a designated <strong>Kajiado Rescue Center</strong> for Kenya Child Services, who places vulnerable children on a temporary basis. Alumni of KCH remain active as mentors, volunteers, and some even serve as local board members.</p>
                <Link to="/about" className="btn-outline">
                  Read Our Story <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              <div className="about-image-slider">
                {aboutImages.map((image, index) => (
                  <div
                    key={index}
                    className={`about-slide ${currentAboutImage === index ? 'active' : ''}`}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      onError={(e) => e.target.src = 'https://placehold.co/500x400/e2e8f0/3b82f6?text=' + image.alt}
                    />
                    <div className="about-slide-caption">{image.caption}</div>
                  </div>
                ))}
                
                {/* About Image Dots */}
                <div className="about-image-dots">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAboutImage(index)}
                      className={`about-dot ${currentAboutImage === index ? 'active' : ''}`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Programs Section */}
        <div 
          ref={programsRef}
          id="programs"
          className={`programs-section ${isVisible.programs ? 'visible' : ''}`}
        >
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Core Programs</span></h2>
              <p className="section-subtitle">Comprehensive care and support for every child's development</p>
            </div>
            <div className="programs-grid">
              {corePrograms.map((program) => (
                <div key={program.id} className="program-card">
                  <div className="program-icon"><i className={program.icon}></i></div>
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                  <Link to="/get-involved" className="program-link">
                    Support This Program <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Programs Section - Updated from Partners to Partner Programs */}
        <div className="partner-programs-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Partner <span>Programs</span></h2>
              <p className="section-subtitle">Collaborative initiatives transforming lives through partnership</p>
            </div>
            <div className="partner-programs-grid">
              {partnerPrograms.map((program, index) => (
                <div className="partner-program-card" key={index}>
                  <div className="partner-program-icon">{program.icon}</div>
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section">
          <div className="container">
            <div className="testimonial-card">
              <i className="fas fa-quote-left"></i>
              <p>"kajiado Bright Horizons gave me a second chance at life. Today, I'm a social worker helping children just like me. Richard Nyinge, founder of Namanga Hope Center, was admitted to KCH in 1997 as a six-year-old orphan and went on to earn a Master's degree in Divinity."</p>
              <h4>— KCH Alumni Success Story</h4>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Help Us Transform Lives</h2>
              <p>Your donation, sponsorship, or volunteer time makes a direct impact on a child's future. Join us in helping these children achieve their goals.</p>
              <div className="cta-buttons">
                <Link to="/donate" className="btn-gold">
                  <i className="fas fa-hand-holding-heart"></i> Donate Now
                </Link>
                <Link to="/contact" className="btn-outline">
                  <i className="fas fa-envelope"></i> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .partner-programs-section {
          padding: 90px 0;
          background: #080808;
        }
        
        .partner-programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }
        
        .partner-program-card {
          background: var(--card-bg);
          padding: 32px;
          border-radius: 24px;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        
        .partner-program-card:hover {
          border-color: var(--primary-color);
          transform: translateY(-5px);
        }
        
        .partner-program-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        
        .partner-program-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: #fff;
        }
        
        .partner-program-card p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .partner-programs-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .partner-programs-section {
            padding: 60px 0;
          }
        }
      `}</style>
    </>
  );
}