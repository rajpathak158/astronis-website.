import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";

function Home() {
  return (
    <section className="home">
      <div className="hero">
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
            <a
              href="/book-consultation"
              className="button button-primary"
            >
              Schedule Consultation
            </a>

            <a
              href="/services"
              className="button button-secondary"
            >
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
      </div>
    </section>
  );
}

function Placeholder() {
  return (
    <section className="page">
      <p className="eyebrow">ASTRONIS</p>
      <h1>Coming Next</h1>
      <p>
        This section of the ASTRONIS platform will be built in the
        next stage.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Placeholder />} />
      </Route>
    </Routes>
  );
}
