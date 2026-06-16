import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './styles.css';

export default function About() {
  // PARTNER PROGRAMS - Programs run by partner organizations
  const partnerPrograms = [
    { icon: "🏫", title: "Valley School of Excellence", desc: "State-of-the-art primary school providing quality education to KCH children and the community" },
    { icon: "🎓", title: "Bright Horizons Project", desc: "Helping post-secondary students navigate their next steps to self-sufficiency" },
    { icon: "🍲", title: "Namanga Hope Center", desc: "Outreach to vulnerable communities, founded by KCH alumnus Richard Nyinge" }
  ];

  // SUPPORTING PARTNERS - Organizations that support KCH
  const supportingPartners = [
    { icon: "🌟", title: "Hope for Kajiado (HFK)", desc: "Sustaining KCH through fundraising, campus improvements, and program development for over a decade" },
    { icon: "🤝", title: "Kenya Child Services", desc: "Designated Kajiado Rescue Center for temporary placement of vulnerable children" },
    { icon: "🌾", title: "Community Outreach Program", desc: "Education needs for orphans living with guardians" },
    { icon: "🆘", title: "Emergency Relief", desc: "COVID-19, Drought, and Flood community relief projects" }
  ];

  const services = [
    { icon: "❤️", title: "Love & Christian Care" },
    { icon: "🏠", title: "Safe Shelter" },
    { icon: "🍲", title: "Nutritious Food" },
    { icon: "👕", title: "Clothing" },
    { icon: "🏥", title: "Medical Care" },
    { icon: "📚", title: "Quality Education through Secondary School" },
    { icon: "🙏", title: "Spiritual Nourishment" },
    { icon: "⭐", title: "Hope for Future" }
  ];

  const staff = [
    { name: "Ruth Mbugua", role: "Manager", image: "/images/staff/staff1.jpg" },
    { name: "Simon Wainaina", role: "Director", image: "/images/staff/staff2.jpg" },
    { name: "Mary Wanjiku", role: "Teacher", image: "/images/staff/staff3.jpg" },
    { name: "James Kariuki", role: "Pastor", image: "/images/staff/staff4.jpg" }
  ];

  const values = [
    { letter: "L", title: "Love & Compassion" },
    { letter: "E", title: "Excellence" },
    { letter: "C", title: "Community" },
    { letter: "I", title: "Integrity" }
  ];

  return (
    <>
      <SEO 
        title="About Us - kajiado Childrens Home"
        description="kajiado Bright Horizons (KCH) has been home to multi-generations of vulnerable children since 1997. Learn about our mission to provide loving Christian care, shelter, education, and hope."
        path="/about"
      />
      
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-bg-container">
            <div 
              className="hero-bg-image-about"
              style={{ backgroundImage: 'url("/images/hero/hero-bg4.jpg")' }}
            ></div>
            <div className="hero-overlay-dark"></div>
          </div>
          <div className="container">
            <div className="hero-content-about">
              <h1>About <span>kajiado Bright Horizons</span></h1>
              <p>Home to multi-generations of vulnerable children since 1997</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="container">
            <div className="about-flex">
              <div className="about-text">
                <h2>Our <span>Story</span></h2>
                <p>kajiado Bright Horizons (KCH) has been home to multi-generations of vulnerable children since <strong>1997</strong>. KCH works closely with Kenya Child Services to identify children who are the most desperate in need, with those admitted having no family, access to parental oversight, nor having their basic needs for protection met.</p>
                <p>KCH provides physical and spiritual nourishment in a safe environment, supplemented by care from a loving staff, medical care, and educational needs through secondary school. The children come from different African tribes and grow up as sisters and brothers. Currently, there are over <strong>100 children</strong> being cared for at KCH.</p>
                <p>KCH is also a designated <strong>Kajiado Rescue Center</strong> for Kenya Child Services, which places vulnerable children on a temporary basis. These children can stay as little as a few days to many months depending on their needs, with KCH absorbing the cost and care of these children.</p>
                <p>Alumni of KCH remain active as mentors, volunteers, and some even serve as local board of management or board of trustee members alongside respected community leaders.</p>
              </div>
              <div className="about-img">
                <img src="/images/about/kajiado-home.jpg" alt="kajiado Bright Horizons" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Hope for Kajiado Partnership Section */}
        <section className="hope-partnership">
          <div className="container">
            <div className="hope-content">
              <h2>Hope for <span>Kajiado</span></h2>
              <p>kajiado Bright Horizons provides loving Christian care, shelter, food, clothing, medical and educational needs to children who have no other resources. Hope for Kajiado (HFK) support of KCH has evolved for over a decade through campus improvements and increased programming.</p>
              <div className="hope-grid">
                <div className="hope-item">
                  <i className="fas fa-building"></i>
                  <h4>Capital Projects</h4>
                  <p>Facility improvements, property and farm enhancements, and a new state-of-the-art primary school providing quality education.</p>
                </div>
                <div className="hope-item">
                  <i className="fas fa-chart-line"></i>
                  <h4>Programming Improvements</h4>
                  <p>Enhanced on-campus medical care through added staffing, Community Outreach Program, and Bright Horizons Project for post-secondary students.</p>
                </div>
                <div className="hope-item">
                  <i className="fas fa-hand-holding-heart"></i>
                  <h4>Community Relief</h4>
                  <p>COVID-19, drought, and flood community relief projects supporting vulnerable families.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mission-vision">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <i className="fas fa-quote-left"></i>
                <h3>Our Mission</h3>
                <p>To provide loving Christian care, shelter, food, clothing, medical care, and educational needs to children who have no other resources, ensuring every child receives love, emotional support, and hope for a brighter future.</p>
              </div>
              <div className="vision-card">
                <i className="fas fa-quote-left"></i>
                <h3>Our Commitment</h3>
                <p>KCH alumni remain active as mentors and volunteers. Some serve as local board of management or board of trustee members alongside respected community leaders, giving back to the home that raised them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide Section */}
        <section className="services-provided">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What We <span>Provide</span></h2>
              <p className="section-subtitle">Comprehensive care for every child's development</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Programs Section */}
        <section className="partner-programs-section">
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
        </section>

        {/* Supporting Partners Section */}
        <section className="supporting-partners-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Supporting <span>Partners</span></h2>
              <p className="section-subtitle">Organizations working together to support our mission</p>
            </div>
            <div className="supporting-partners-grid">
              {supportingPartners.map((partner, index) => (
                <div className="supporting-partner-card" key={index}>
                  <div className="supporting-partner-icon">{partner.icon}</div>
                  <h3>{partner.title}</h3>
                  <p>{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="staff-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Dedicated Team</span></h2>
              <p className="section-subtitle">Meet the caring individuals who make our home a loving environment</p>
            </div>
            <div className="staff-grid">
              {staff.map((member, index) => (
                <div className="staff-card" key={index}>
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="values-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Core Values</span></h2>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div className="value-card" key={index}>
                  <div className="value-letter">{value.letter}</div>
                  <h3>{value.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Child Sponsorship Section */}
        <section className="sponsorship-cta">
          <div className="container">
            <div className="sponsorship-cta-content">
              <h2>Child Sponsorship Program</h2>
              <p>The Child Sponsorship Program at KCH enables you to have a direct impact on a child. A sponsorship partially covers the actual cost for each child, and your sponsored child knows you as their special supporter. They value the personal relationship developed throughout their childhood and look forward to writing to you and receiving your letters.</p>
              <p>If sponsorship isn't right for you, consider becoming a <strong>recurring donor</strong> to help meet the many needs of these young lives. Will you join us in helping these children achieve their goals?</p>
              <div className="sponsorship-cta-buttons">
                <Link to="/children" className="btn-gold">
                  <i className="fas fa-child"></i> Sponsor a Child
                </Link>
                <Link to="/donate" className="btn-outline">
                  <i className="fas fa-hand-holding-heart"></i> Become a Recurring Donor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Help Us Transform Lives</h2>
              <p>Your support makes a direct impact on a child's future. Join us in helping these children achieve their dreams.</p>
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
        </section>
      </div>

      <style>{`
        .hope-partnership {
          padding: 80px 0;
          background: var(--bg-deep);
          transition: background 0.3s ease;
        }
        
        .hope-content h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 24px;
          color: var(--text-color);
        }
        
        .hope-content h2 span {
          color: var(--primary-color);
        }
        
        .hope-content > p {
          text-align: center;
          color: var(--text-muted);
          max-width: 800px;
          margin: 0 auto 48px;
          line-height: 1.8;
        }
        
        .hope-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
        
        .hope-item {
          background: var(--card-bg);
          padding: 32px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        
        .hope-item:hover {
          border-color: var(--primary-color);
          transform: translateY(-5px);
        }
        
        .hope-item i {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 16px;
        }
        
        .hope-item h4 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--text-color);
        }
        
        .hope-item p {
          color: var(--text-muted);
          line-height: 1.6;
        }
        
        /* Partner Programs Section */
        .partner-programs-section {
          padding: 90px 0;
          background: var(--bg-deep);
          transition: background 0.3s ease;
        }
        
        .partner-programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
          color: var(--text-color);
        }
        
        .partner-program-card p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        
        /* Supporting Partners Section */
        .supporting-partners-section {
          padding: 90px 0;
          background: var(--bg-deep);
          transition: background 0.3s ease;
        }
        
        .supporting-partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }
        
        .supporting-partner-card {
          background: var(--card-bg);
          padding: 32px;
          border-radius: 24px;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        
        .supporting-partner-card:hover {
          border-color: var(--primary-color);
          transform: translateY(-5px);
        }
        
        .supporting-partner-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        
        .supporting-partner-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--text-color);
        }
        
        .supporting-partner-card p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        
        .sponsorship-cta {
          padding: 80px 0;
          background: var(--bg-deep);
          transition: background 0.3s ease;
        }
        
        .sponsorship-cta-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .sponsorship-cta-content h2 {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 24px;
        }
        
        .sponsorship-cta-content p {
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        
        .sponsorship-cta-content strong {
          color: var(--text-color);
        }
        
        .sponsorship-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 32px;
        }
        
        /* Dark mode specific adjustments */
        [data-theme="dark"] .partner-programs-section,
        [data-theme="dark"] .supporting-partners-section,
        [data-theme="dark"] .sponsorship-cta {
          background: var(--bg-deep);
        }
        
        /* Light mode specific adjustments */
        [data-theme="light"] .partner-programs-section,
        [data-theme="light"] .supporting-partners-section,
        [data-theme="light"] .sponsorship-cta {
          background: var(--bg-deep);
        }
        
        @media (max-width: 968px) {
          .hope-grid,
          .partner-programs-grid,
          .supporting-partners-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hope-partnership,
          .partner-programs-section,
          .supporting-partners-section {
            padding: 60px 0;
          }
          
          .hope-content h2 {
            font-size: 1.8rem;
          }
          
          .sponsorship-cta {
            padding: 60px 0;
          }
          
          .sponsorship-cta-content h2 {
            font-size: 1.5rem;
          }
          
          .sponsorship-cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}