import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">ASTRONIS</p>

          <h1>
            Corporate, Regulatory
            <br />
            & Business Advisory
          </h1>

          <p className="hero-description">
            Enabling Business Growth Through Legal Intelligence.
          </p>

          <div className="hero-buttons">
            <a href="/book-consultation" className="button button-primary">
              Schedule Consultation
            </a>

            <a href="/services" className="button button-secondary">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div>
            <strong>2015</strong>
            <span>Since</span>
          </div>

          <div>
            <strong>11+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>1000+</strong>
            <span>Advisory Assignments</span>
          </div>

          <div>
            <strong>Global</strong>
            <span>Advisory Network</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function Placeholder() {
  return (
    <main className="page">
      <p className="eyebrow">ASTRONIS</p>

      <h1>Coming Next</h1>

      <p>
        This page will be built in the next steps.
      </p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="*"
        element={<Placeholder />}
      />
    </Routes>
  );
}
