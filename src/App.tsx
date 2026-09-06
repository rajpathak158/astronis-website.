import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";

function Placeholder() {
  return (
    <section className="page">
      <p className="eyebrow">ASTRONIS</p>

      <h1>Coming Next</h1>

      <p>
        This section of the ASTRONIS platform will be built
        in the next stage.
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
