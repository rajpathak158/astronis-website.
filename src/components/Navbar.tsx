import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const services = [
  ["Corporate & Business Advisory", "/services/corporate-business-advisory"],
  ["Regulatory & Compliance", "/services/regulatory-compliance"],
  ["Litigation & Dispute Resolution", "/services/litigation-dispute-resolution"],
  ["Intellectual Property", "/services/intellectual-property"],
  ["Taxation & GST", "/services/taxation-gst"],
  ["Employment & Labour", "/services/employment-labour"],
  ["Real Estate", "/services/real-estate"],
  ["Technology & FinTech", "/services/technology-fintech"],
];

const industries = [
  ["Banking, Finance & Insurance", "/industries/banking-finance-insurance"],
  ["Technology & E-Commerce", "/industries/technology-ecommerce"],
  ["Healthcare & Life Sciences", "/industries/healthcare-life-sciences"],
  ["Real Estate & Infrastructure", "/industries/real-estate-infrastructure"],
  ["Automotive", "/industries/automotive"],
  ["Food & Consumer", "/industries/food-consumer"],
  ["Media & Entertainment", "/industries/media-entertainment"],
  ["Energy & Environment", "/industries/energy-environment"],
];

function MegaMenu({
  title,
  items,
  onClose,
}: {
  title: string;
  items: string[][];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="mega-menu"
    >
      <div className="mega-menu-inner">
        <div className="mega-menu-heading">
          <span className="mega-menu-kicker">ASTRONIS</span>
          <h3>{title}</h3>
          <p>
            Strategic advice, legal intelligence and business solutions
            designed for complex environments.
          </p>
        </div>

        <div className="mega-menu-grid">
          {items.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="mega-menu-link"
              onClick={onClose}
            >
              <span>{label}</span>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="navbar">
          <Link
            to="/"
            className="navbar-logo"
            aria-label="ASTRONIS Home"
            onClick={closeMenus}
          >
            <img
              src="/IMG-20260906-WA0008.jpg"
              alt="ASTRONIS"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>

            <button
              className={`nav-link nav-button ${
                activeMenu === "services" ? "active" : ""
              }`}
              onClick={() =>
                setActiveMenu(
                  activeMenu === "services" ? null : "services"
                )
              }
            >
              Services
              <ChevronDown size={15} />
            </button>

            <button
              className={`nav-link nav-button ${
                activeMenu === "industries" ? "active" : ""
              }`}
              onClick={() =>
                setActiveMenu(
                  activeMenu === "industries" ? null : "industries"
                )
              }
            >
              Industries
              <ChevronDown size={15} />
            </button>

            <Link to="/insights" className="nav-link">
              Insights
            </Link>

            <Link to="/global-desk" className="nav-link">
              Global Desk
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <div className="navbar-actions">
            <Link
              to="/book-consultation"
              className="navbar-consultation"
            >
              Consultation
              <ArrowUpRight size={16} />
            </Link>

            <button
              className="mobile-menu-button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu === "services" && (
            <MegaMenu
              title="Our Services"
              items={services}
              onClose={closeMenus}
            />
          )}

          {activeMenu === "industries" && (
            <MegaMenu
              title="Industries"
              items={industries}
              onClose={closeMenus}
            />
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mobile-menu-inner">
              <Link to="/" onClick={closeMenus}>
                Home
              </Link>

              <Link to="/about" onClick={closeMenus}>
                About
              </Link>

              <details>
                <summary>Services</summary>
                <div className="mobile-submenu">
                  {services.map(([label, path]) => (
                    <Link key={path} to={path} onClick={closeMenus}>
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              <details>
                <summary>Industries</summary>
                <div className="mobile-submenu">
                  {industries.map(([label, path]) => (
                    <Link key={path} to={path} onClick={closeMenus}>
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              <Link to="/insights" onClick={closeMenus}>
                Insights
              </Link>

              <Link to="/global-desk" onClick={closeMenus}>
                Global Desk
              </Link>

              <Link to="/contact" onClick={closeMenus}>
                Contact
              </Link>

              <Link
                to="/book-consultation"
                className="mobile-consultation"
                onClick={closeMenus}
              >
                Schedule Consultation
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
                }
