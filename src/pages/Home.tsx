import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  homeIndustries,
  homeServices,
  homeStats,
} from "../data/homeData";

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="astronis-home">

      {/* ================= HERO ================= */}

      <section className="astronis-hero">
        <div className="hero-image" />
        <div className="hero-gradient" />
        <div className="hero-grid" />

        <motion.div
          className="hero-orbit orbit-one"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="hero-orbit orbit-two"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="hero-inner">

          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <div className="hero-label">
              <span />
              ASTRONIS
              <span />
            </div>

            <h1>
              Intelligence
              <br />
              <em>for complexity.</em>
            </h1>

            <p className="hero-lead">
              Corporate, regulatory and business advisory for
              organisations navigating complex markets,
              transactions and decisions.
            </p>

            <div className="hero-actions">
              <Link
                to="/book-consultation"
                className="hero-primary-button"
              >
                Schedule a Consultation
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/services"
                className="hero-outline-button"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <ArrowDown size={16} />
            <span>Scroll to explore</span>
          </motion.div>

          <div className="hero-side-label">
            CORPORATE · REGULATORY · BUSINESS
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="home-intro">
        <motion.div
          className="section-container intro-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div>
            <p className="section-kicker">
              THE ASTRONIS APPROACH
            </p>

            <h2>
              Where legal
              <br />
              intelligence meets
              <br />
              <span>business strategy.</span>
            </h2>
          </div>

          <div className="intro-content">
            <p>
              Modern businesses operate across interconnected legal,
              regulatory and commercial environments. ASTRONIS brings
              these perspectives together to help organisations
              understand risk, make informed decisions and pursue
              opportunities with confidence.
            </p>

            <p>
              Our approach combines legal insight, regulatory
              understanding and commercial awareness to address
              challenges from multiple angles.
            </p>

            <Link to="/about" className="text-link">
              Discover ASTRONIS
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>


      {/* ================= STATS ================= */}

      <section className="home-stats">
        <div className="section-container stats-grid">
          {homeStats.map((stat, index) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ================= SERVICES ================= */}

      <section className="home-services">
        <div className="section-container">

          <motion.div
            className="section-heading-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <div>
              <p className="section-kicker">
                WHAT WE DO
              </p>

              <h2>
                Advisory built
                <br />
                around your <span>business.</span>
              </h2>
            </div>

            <Link
              to="/services"
              className="circle-link"
              aria-label="Explore all services"
            >
              <ArrowUpRight size={23} />
            </Link>
          </motion.div>


          <div className="services-list">
            {homeServices.map((service, index) => (
              <motion.div
                key={service.number}
                className="service-row"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.55,
                }}
              >
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-main">
                  <Link to={service.path}>
                    <h3>{service.title}</h3>
                  </Link>

                  <p>{service.description}</p>
                </div>

                <Link
                  to={service.path}
                  className="service-arrow"
                  aria-label={`View ${service.title}`}
                >
                  <ArrowUpRight size={21} />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= WHY ASTRONIS ================= */}

      <section className="home-difference">
        <div className="section-container">

          <motion.div
            className="difference-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <p className="section-kicker">
              WHY ASTRONIS
            </p>

            <h2>
              One perspective is
              <br />
              <span>rarely enough.</span>
            </h2>
          </motion.div>

          <div className="difference-grid">

            <motion.div
              className="difference-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Scale size={27} strokeWidth={1.3} />
              <h3>Legal Intelligence</h3>
              <p>
                Understand the legal dimensions of critical
                commercial decisions with practical,
                business-focused advice.
              </p>
            </motion.div>

            <motion.div
              className="difference-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ShieldCheck size={27} strokeWidth={1.3} />
              <h3>Risk Perspective</h3>
              <p>
                Identify regulatory, operational and legal
                exposure before it becomes a business problem.
              </p>
            </motion.div>

            <motion.div
              className="difference-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={27} strokeWidth={1.3} />
              <h3>Strategic Thinking</h3>
              <p>
                Translate complex legal questions into
                actionable strategies aligned with business
                objectives.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ================= INDUSTRIES ================= */}

      <section className="home-industries">
        <div className="section-container">

          <motion.div
            className="industries-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <div>
              <p className="section-kicker">
                INDUSTRY EXPERIENCE
              </p>

              <h2>
                Expertise across
                <br />
                <span>complex industries.</span>
              </h2>
            </div>

            <p>
              Our multidisciplinary perspective allows us to
              understand the regulatory and commercial realities
              shaping different sectors.
            </p>
          </motion.div>


          <div className="industry-grid">
            {homeIndustries.map((industry, index) => (
              <motion.div
                key={industry}
                className="industry-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <span>0{index + 1}</span>
                <h3>{industry}</h3>
                <ArrowUpRight size={18} />
              </motion.div>
            ))}
          </div>

          <Link
            to="/industries"
            className="industries-button"
          >
            View All Industries
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>


      {/* ================= GLOBAL ================= */}

      <section className="home-global">

        <div className="global-glow" />

        <div className="section-container global-grid">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Globe2
              size={35}
              strokeWidth={1}
            />

            <p className="section-kicker">
              GLOBAL DESK
            </p>

            <h2>
              Think beyond
              <br />
              <span>borders.</span>
            </h2>

            <p className="global-description">
              Businesses increasingly operate across
              jurisdictions. ASTRONIS approaches cross-border
              matters with an understanding of regulatory,
              commercial and legal interdependencies.
            </p>

            <Link
              to="/global-desk"
              className="text-link"
            >
              Explore Global Desk
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            className="global-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="global-ring ring-a" />
            <div className="global-ring ring-b" />
            <div className="global-ring ring-c" />

            <div className="global-center">
              <Globe2 size={45} strokeWidth={1} />
              <span>ASTRONIS</span>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ================= INSIGHTS ================= */}

      <section className="home-insights">
        <div className="section-container">

          <motion.div
            className="section-heading-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <div>
              <p className="section-kicker">
                KNOWLEDGE CENTRE
              </p>

              <h2>
                Ideas for a
                <br />
                changing <span>world.</span>
              </h2>
            </div>

            <Link
              to="/insights"
              className="text-link"
            >
              View all insights
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>


          <div className="insights-grid">

            <Link
              to="/insights"
              className="insight-feature"
            >
              <div className="insight-number">01</div>
              <div>
                <span>LEGAL INTELLIGENCE</span>
                <h3>
                  Navigating complexity with
                  strategic foresight.
                </h3>
              </div>
              <ArrowUpRight size={22} />
            </Link>

            <Link
              to="/insights"
              className="insight-feature"
            >
              <div className="insight-number">02</div>
              <div>
                <span>BUSINESS & REGULATION</span>
                <h3>
                  Understanding the regulatory
                  landscape around growth.
                </h3>
              </div>
              <ArrowUpRight size={22} />
            </Link>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">
        <div className="cta-grid" />

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          variants={reveal}
        >
          <p className="section-kicker">
            START A CONVERSATION
          </p>

          <h2>
            Complex problem?
            <br />
            <span>Let's solve it.</span>
          </h2>

          <p>
            Tell us what you're navigating. We'll help you
            understand the landscape and identify the path
            forward.
          </p>

          <Link
            to="/book-consultation"
            className="cta-button"
          >
            Schedule a Consultation
            <ArrowUpRight size={19} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
                  }
