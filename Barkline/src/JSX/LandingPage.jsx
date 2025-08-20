import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';

function LandingPage() {
  // SVG icon components (all accessible, mobile-friendly, and visually distinct)
  const icons = [
    // Personalized Feeds
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="1">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="#0d6efd" />
      <rect x="6" y="8" width="12" height="2" rx="1" fill="#fff" />
      <rect x="6" y="12" width="8" height="2" rx="1" fill="#fff" />
    </svg>,
    // Ask & Answer
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="2">
      <circle cx="12" cy="12" r="10" fill="#198754" />
      <text x="12" y="17" textAnchor="middle" fontSize="14" fill="#fff">?</text>
    </svg>,
    // Topic & Tagging
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="3">
      <rect x="4" y="7" width="16" height="10" rx="2" fill="#ffc107" />
      <rect x="7" y="10" width="10" height="2" rx="1" fill="#fff" />
      <circle cx="8" cy="13.5" r="1" fill="#fff" />
    </svg>,
    // Peer Support System
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="4">
      <circle cx="8" cy="12" r="4" fill="#0dcaf0" />
      <circle cx="16" cy="12" r="4" fill="#0dcaf0" opacity="0.6" />
      <rect x="6" y="16" width="12" height="2" rx="1" fill="#0dcaf0" opacity="0.7" />
    </svg>,
    // Notifications and Mentions
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="5">
      <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" fill="#dc3545" />
      <circle cx="18" cy="6" r="3" fill="#fff" />
      <text x="18" y="8" textAnchor="middle" fontSize="10" fill="#dc3545">@</text>
    </svg>,
    // Reputation and Badges
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="6">
      <polygon points="12,2 15,9 22,9.5 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.5 9,9" fill="#6c757d" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
      <text x="12" y="14" textAnchor="middle" fontSize="10" fill="#6c757d">★</text>
    </svg>,
    // Community Guidelines & Moderation
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="7">
      <rect x="5" y="5" width="14" height="14" rx="3" fill="#fd7e14" />
      <rect x="9" y="9" width="6" height="2" rx="1" fill="#fff" />
      <rect x="9" y="13" width="6" height="2" rx="1" fill="#fff" />
    </svg>,
    // Realtime Updates
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="8">
      <circle cx="12" cy="12" r="10" fill="#20c997" />
      <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>,
    // Mobile Friendly
    <svg width="32" height="32" viewBox="0 0 24 24" className="me-3 flex-shrink-0" key="9">
      <rect x="7" y="3" width="10" height="18" rx="2" fill="#6610f2" />
      <circle cx="12" cy="19" r="1" fill="#fff" />
    </svg>,
  ];

  const features = [
    "Personalized Feeds",
    "Ask & Answer",
    "Topic & Tagging",
    "Peer Support System",
    "Notifications and Mentions",
    "Reputation and Badges",
    "Community Guidelines & Moderation",
    "Realtime Updates",
    "Mobile Friendly"
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left: Text and Buttons */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1><b>Barkline:</b></h1>
            <h1 style={{ maxWidth: '400px' }}>Student Centered Discussion Hub</h1>
            <p style={{ maxWidth: '280px' }}>
              An interactive space where NU students ask, answer, and learn together—anytime, anywhere.
            </p>
            <div className="d-flex mb-3">
              <Button variant="dark"><b>JOIN NOW</b></Button>
              <Button
                variant="light"
                style={{ border: '2px solid black', marginLeft: '10px' }}
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="https://media-public.canva.com/OcTHA/MAGIUoOcTHA/1/tl.png"
              alt="First"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }}
            />
          </div>
        </div>

        {/* Centered UN SDG 4 Section */}
        <div style={{ textAlign: 'center', marginTop: '70px' }}>
          <h2>Align with UN SDG 4: Quality Education</h2>
          <div className="d-flex justify-content-center mt-4">
            <p style={{ maxWidth: '410px', textAlign: 'center', margin: 0 }}>
              Barkline empowers NU students with accessible, inclusive, and peer-driven learning.
              Together, we make education more engaging and supportive.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Key Features</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-4">
            {features.map((feature, idx) => (
              <div className="col" key={feature}>
                <div className="d-flex align-items-center border rounded p-3 h-100 bg-white">
                  {icons[idx]}
                  <span className="fw-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action (Conversion Section) */}
        <div className="my-5 py-5 text-center" style={{ background: "#f8f9fa", borderRadius: "1rem" }}>
          <h2 className="fw-bold mb-3">Ready to Learn Together?</h2>
          <Button variant="dark" size="lg" className="mb-2">
            Join Barkline Today
          </Button>
          <div>
            <small className="text-muted">Free for all NU students.</small>
          </div>
        </div>
      </div>

      {/* Full-width Footer */}
      <footer className="mt-5 pt-4 pb-2 w-100" style={{ background: "#222", color: "#fff", borderRadius: "0", position: "relative", left: 0 }}>
        <div className="container-fluid px-0">
          <div className="row align-items-center mx-0">

            {/* Quick Links */}
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-start py-2">
              <div>
                <a href="#home" className="text-white me-3 text-decoration-none">Home</a>
                <a href="#features" className="text-white me-3 text-decoration-none">Features</a>
                <a href="#about" className="text-white me-3 text-decoration-none">About</a>
                <a href="#community" className="text-white me-3 text-decoration-none">Community</a>
                <a href="#contact" className="text-white text-decoration-none">Contact</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center py-2">
              <a href="https://facebook.com/nationaluniversityphilippines" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/></svg>
              </a>
              <a href="https://twitter.com/NUpage" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Twitter/X">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.92c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.86a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="https://instagram.com/nuphils_" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
            </div>
            
            {/* Credits */}
            <div className="col-12 col-md-4 text-center text-md-end py-2">
              <div>Barkline © 2025 | Built for NU Students</div>
              <small className="text-light d-block mt-1">Aligned with UN SDG 4: Quality Education</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;