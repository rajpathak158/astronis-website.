import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const heroImage = new URL(
  "../IMG-20260906-WA0003.jpg",
  import.meta.url
).href;

const logoImage = new URL(
  "../IMG-20260906-WA0008.jpg",
  import.meta.url
).href;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Services",
    "Industries",
    "Insights",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020817",
        color: "#fff",
        fontFamily:
          "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      {/* ================= NAVBAR ================= */}

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "18px clamp(20px, 5vw, 70px)",
          borderBottom:
            "1px solid rgba(255,255,255,0.09)",
          background:
            "rgba(2,8,23,0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}

          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "13px",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <img
              src={logoImage}
              alt="ASTRONIS"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "5px",
                }}
              >
                ASTRONIS
              </div>

              <div
                style={{
                  marginTop: "3px",
                  fontSize: "7px",
                  letterSpacing: "2.5px",
                  color:
                    "rgba(255,255,255,0.5)",
                }}
              >
                ADVISORY & CONSULTING
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color:
                    "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  fontSize: "13px",
                  transition:
                    "color 0.25s ease",
                }}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "11px 19px",
                borderRadius: "30px",
                border:
                  "1px solid rgba(147,197,253,0.4)",
                background:
                  "rgba(37,99,235,0.16)",
                fontSize: "12px",
              }}
            >
              Contact
            </a>
          </nav>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border:
                "1px solid rgba(255,255,255,0.2)",
              background:
                "rgba(255,255,255,0.06)",
              color: "#fff",
            }}
            className="mobile-menu-button"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              padding: "25px 5px",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() =>
                  setMenuOpen(false)
                }
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              style={{
                color: "#93c5fd",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Contact ASTRONIS →
            </a>
          </motion.div>
        )}
      </header>

      {/* ================= HERO ================= */}

      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}

        <motion.div
          initial={{
            scale: 1.12,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* DARK OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(2,8,23,0.97) 0%, rgba(2,8,23,0.78) 38%, rgba(2,8,23,0.32) 75%, rgba(2,8,23,0.7) 100%)",
          }}
        />

        {/* BOTTOM GRADIENT */}

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "35%",
            background:
              "linear-gradient(transparent,#020817)",
          }}
        />

        {/* BLUE LIGHT */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            right: "-200px",
            top: "15%",
            background:
              "radial-gradient(circle,rgba(37,99,235,0.35),transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* HERO CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding:
              "150px clamp(25px, 7vw, 100px) 100px",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.35,
            }}
          >
            {/* EYEBROW */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "25px",
              }}
            >
              <span
                style={{
                  width: "42px",
                  height: "1px",
                  background: "#60a5fa",
                }}
              />

              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform:
                    "uppercase",
                  color: "#93c5fd",
                }}
              >
                Strategic Advisory
              </span>
            </div>

            {/* TITLE */}

            <h1
              style={{
                margin: 0,
                fontSize:
                  "clamp(58px, 10vw, 140px)",
                lineHeight: 0.88,
                letterSpacing: "-7px",
                fontWeight: 750,
                maxWidth: "1050px",
              }}
            >
              THINK
              <br />

              <span
                style={{
                  color: "#93c5fd",
                }}
              >
                BEYOND.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              style={{
                maxWidth: "650px",
                marginTop: "38px",
                fontSize:
                  "clamp(16px, 2vw, 21px)",
                lineHeight: 1.65,
                color:
                  "rgba(226,232,240,0.75)",
              }}
            >
              Corporate, regulatory and
              business advisory for
              organisations navigating
              complexity, transformation
              and growth.
            </p>

            {/* BUTTONS */}

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "34px",
              }}
            >
              <motion.a
                href="#services"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding:
                    "15px 23px",
                  borderRadius: "40px",
                  background: "#2563eb",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Explore our capabilities
                <ArrowRight size={17} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  background:
                    "rgba(255,255,255,0.12)",
                }}
                style={{
                  padding:
                    "15px 23px",
                  borderRadius: "40px",
                  border:
                    "1px solid rgba(255,255,255,0.25)",
                  background:
                    "rgba(255,255,255,0.04)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Start a conversation
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* SCROLL */}

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            zIndex: 5,
            bottom: "28px",
            right:
              "clamp(25px, 7vw, 100px)",
            display: "flex",
            alignItems: "center",
            gap: "9px",
            color:
              "rgba(255,255,255,0.55)",
            fontSize: "9px",
            letterSpacing: "3px",
            textTransform:
              "uppercase",
          }}
        >
          Scroll
          <ChevronDown size={15} />
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}

      <section
        id="about"
        style={{
          minHeight: "70vh",
          padding:
            "120px clamp(25px, 7vw, 100px)",
          background:
            "linear-gradient(#020817,#06152c)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              color: "#60a5fa",
              marginBottom: "25px",
            }}
          >
            ASTRONIS
          </div>

          <h2
            style={{
              fontSize:
                "clamp(38px, 6vw, 78px)",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              maxWidth: "950px",
              margin: 0,
            }}
          >
            Clarity for complex
            <span
              style={{
                color: "#93c5fd",
              }}
            >
              {" "}business decisions.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "720px",
              marginTop: "32px",
              color:
                "rgba(226,232,240,0.62)",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            ASTRONIS brings together
            corporate, regulatory,
            legal, financial and business
            advisory capabilities to help
            organisations make informed
            decisions and move forward
            with confidence.
          </p>
        </div>
      </section>

      {/* ================= SERVICES PLACEHOLDER ================= */}

      <section
        id="services"
        style={{
          minHeight: "60vh",
          padding:
            "120px clamp(25px, 7vw, 100px)",
          background: "#020817",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: "10px",
              letterSpacing: "4px",
              marginBottom: "20px",
            }}
          >
            OUR CAPABILITIES
          </div>

          <h2
            style={{
              fontSize:
                "clamp(40px, 6vw, 80px)",
              margin: 0,
              letterSpacing: "-4px",
            }}
          >
            Advisory without
            <br />
            <span
              style={{
                color: "#93c5fd",
              }}
            >
              boundaries.
            </span>
          </h2>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        style={{
          minHeight: "55vh",
          padding:
            "100px clamp(25px, 7vw, 100px)",
          background:
            "linear-gradient(135deg,#06152c,#020817)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              color: "#60a5fa",
              marginBottom: "20px",
            }}
          >
            CONTACT ASTRONIS
          </div>

          <h2
            style={{
              margin: 0,
              fontSize:
                "clamp(42px, 7vw, 90px)",
              letterSpacing: "-4px",
              lineHeight: 0.95,
            }}
          >
            Let's build what
            <br />
            comes next.
          </h2>

          <a
            href="mailto:contact@astronis.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "35px",
              padding:
                "15px 24px",
              borderRadius: "40px",
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            Contact us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer
        style={{
          padding:
            "35px clamp(25px, 7vw, 100px)",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          background: "#010611",
          color:
            "rgba(255,255,255,0.45)",
          fontSize: "11px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent:
              "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <span>
            © {new Date().getFullYear()} ASTRONIS
          </span>

          <span>
            Corporate • Regulatory • Business
          </span>
        </div>
      </footer>

      {/* ================= RESPONSIVE CSS ================= */}

      <style>{`
        @media (max-width: 800px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-button {
            display: flex !important;
          }
        }

        @media (min-width: 801px) {
          .mobile-menu-button {
            display: none !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #020817;
        }

        * {
          box-sizing: border-box;
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
            }
