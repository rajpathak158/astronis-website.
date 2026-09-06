import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/">
            <img
              src="/IMG-20260906-WA0008.jpg"
              alt="ASTRONIS"
              className="footer-logo"
            />
          </Link>

          <p>
            Corporate, regulatory and business advisory for organisations
            navigating complex markets and high-stakes decisions.
          </p>

          <Link
            to="/book-consultation"
            className="footer-cta"
          >
            Start a Conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/about">About ASTRONIS</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/global-desk">Global Desk</Link>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <Link to="/contact">Contact</Link>
          <Link to="/book-consultation">Consultation</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/client-portal">Client Portal</Link>
          <Link to="/employee-portal">Employee Portal</Link>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/accessibility">Accessibility</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} ASTRONIS. All rights reserved.
        </span>

        <span>
          Enabling Business Growth Through Legal Intelligence.
        </span>
      </div>
    </footer>
  );
}
