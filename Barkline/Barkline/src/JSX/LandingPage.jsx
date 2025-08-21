import Navbar from "./components/NavBar/NavBar.jsx";
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";

import { FaUsers, FaBell, FaTags, FaHandsHelping, FaRegCommentDots, 
         FaMedal, FaGavel, FaSyncAlt, FaMobileAlt, FaFacebook, FaTwitter, FaInstagram } 
from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();
  const features = [
    { icon: FaUsers, name: "Personalized Feeds", color: "#0dcaf0" },
    { icon: FaRegCommentDots, name: "Ask & Answer", color: "#dc3545" },
    { icon: FaTags, name: "Topic & Tagging", color: "#6c757d" },
    { icon: FaHandsHelping, name: "Peer Support System", color: "#20c997" },
    { icon: FaBell, name: "Notifications and Mentions", color: "#ffc107" },
    { icon: FaMedal, name: "Reputation and Badges", color: "#6f42c1" },
    { icon: FaGavel, name: "Community Guidelines & Moderation", color: "#fd7e14" },
    { icon: FaSyncAlt, name: "Realtime Updates", color: "#20c997" },
    { icon: FaMobileAlt, name: "Mobile Friendly", color: "#6610f2" }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {/* Hero Section */}
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h1><b>Barkline:</b> Student Centered Discussion Hub</h1>
            <p style={{ maxWidth: '280px' }}>
              An interactive space where NU students ask, answer, and learn together—anytime, anywhere.
            </p>
            <div className="d-flex mb-3">
              <Button variant="dark" onClick={() => navigate("/create-account")}><b>JOIN NOW</b></Button>
              <Button variant="light" style={{ border: '2px solid black', marginLeft: '10px' }}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="https://media-public.canva.com/OcTHA/MAGIUoOcTHA/1/tl.png"
              alt="Discussion Hub"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }}
            />
          </div>
        </div>

        {/* SDG 4 Section */}
        <div style={{ marginTop: '100px' }} className="text-center">
          <h2>Align with UN SDG 4: Quality Education</h2>
            <p className="mx-auto" style={{ maxWidth: '410px' }}>
              Barkline empowers NU students with accessible, inclusive, and peer-driven learning.
              Together, we make education more engaging and supportive.
            </p>
        </div>

        {/* Key Features */}
        <div>
          <h2 style={{marginTop: '100px'}} className="text-center">Key Features</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {features.map((feature, index) => (
              <div className="col" key={index}>
                <div className="d-flex align-items-center border rounded p-3 h-100 bg-white flex-column flex-sm-row text-center text-sm-start">
                  <feature.icon size={32} color={feature.color} className="mb-2 mb-sm-0 me-0 me-sm-3" />
                  <span className="fw-semibold">{feature.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="my-5 py-5 text-center bg-light rounded">
          <h2 className="fw-bold mb-3">Ready to Learn Together?</h2>
          <Button variant="dark" size="lg" className="mb-2" onClick={() => navigate("/create-account")}>
            Join Barkline Today
          </Button>
          <div><small className="text-muted">Free for all NU students.</small></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-start">
              {['Home', 'Features', 'About', 'Community', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white me-3 text-decoration-none">{item}</a>
              ))}
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
              <a href="https://facebook.com/nationaluniversityphilippines" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com/NUpage" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Twitter/X">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/nuphils_" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="col-12 col-md-4 text-center text-md-end">
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