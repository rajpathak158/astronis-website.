import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

const heroImage = new URL(
  "../IMG-20260906-WA0003.jpg",
  import.meta.url
).href;

const logoImage = new URL(
  "../IMG-20260906-WA0008.jpg",
  import.meta.url
).href;

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020817",
        color: "#ffffff",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* CINEMATIC HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* HERO IMAGE */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* DARK CINEMATIC OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(
                180deg,
                rgba(2, 8, 23, 0.72) 0%,
                rgba(2, 8, 23, 0.35) 35%,
                rgba(2, 8, 23, 0.72) 75%,
                rgba(2, 8, 23, 0.98) 100%
              )
            `,
            zIndex: 1,
          }}
        />

        {/* BLUE CINEMATIC GLOW */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.22), transparent 70%)",
            top: "10%",
            right: "-180px",
            filter: "blur(20px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* NAVBAR */}
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            boxSizing: "border-box",
            padding: "24px clamp(20px, 5vw, 72px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(2,8,23,0.18)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img
              src={logoImage}
              alt="ASTRONIS"
              style={{
                width: "52px",
                height: "52px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "5px",
                }}
              >
                ASTRONIS
              </div>

              <div
                style={{
                  fontSize: "8px",
                  letterSpacing: "2.5px",
                  color: "rgba(255,255,255,0.58)",
                  marginTop: "3px",
                }}
              >
                ADVISORY & CONSULTING
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "34px",
            }}
          >
            {["About", "Services", "Industries", "Insights"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    textDecoration: "none",
                    fontSize: "13px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item}
                </a>
              )
            )}

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                padding: "12px 19px",
                border: "1px solid rgba(255,255,255,0.30)",
                borderRadius: "999px",
                fontSize: "12px",
                letterSpacing: "0.8px",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              Contact
            </a>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            aria-label="Open menu"
            style={{
              display: "none",
              border: "1px solid rgba(255,255,255,0.20)",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Menu size={20} />
          </button>
        </motion.header>

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding:
              "100px clamp(24px, 7vw, 100px) 80px",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "38px",
                  height: "1px",
                  background: "#60a5fa",
                  display: "block",
                }}
              />

              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#93c5fd",
                  textTransform: "uppercase",
                }}
              >
                Strategic Advisory
              </span>
            </div>

            <h1
              style={{
                margin: 0,
                maxWidth: "950px",
                fontSize: "clamp(54px, 9vw, 118px)",
                lineHeight: 0.91,
                fontWeight: 700,
                letterSpacing: "-5px",
              }}
            >
              <span style={{ display: "block" }}>
                THINK
              </span>

              <span
                style={{
                  display: "block",
                  color: "#93c5fd",
                }}
              >
                BEYOND.
              </span>
            </h1>

            <p
              style={{
                maxWidth: "680px",
                marginTop: "34px",
                marginBottom: "34px",
                fontSize: "clamp(16px, 2vw, 21px)",
                lineHeight: 1.65,
                color: "rgba(226,232,240,0.78)",
                fontWeight: 400,
              }}
            >
              Corporate, regulatory and business advisory
              designed for organisations navigating
              complexity, transformation and growth.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#ffffff",
                  color: "#020817",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "15px 23px",
                  borderRadius: "999px",
                  background: "#2563eb",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  transition: "0.25s ease",
                }}
              >
                Explore ASTRONIS
                <ArrowRight size={17} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "15px 23px",
                  borderRadius: "999px",
                  border:
                    "1px solid rgba(255,255,255,0.22)",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "13px",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  transition: "0.25s ease",
                }}
              >
                Our capabilities
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
          style={{
            position: "relative",
            zIndex: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding:
              "0 clamp(24px, 7vw, 100px) 28px",
            color: "rgba(255,255,255,0.52)",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <span>
            Corporate • Regulatory • Business
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
            }}
          >
            <span>Scroll to discover</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
              }
