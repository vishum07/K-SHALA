import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JavaFullStackSyllabus from "./Pages/JavaFullStackSyllabus";
import ServicesPage from "./Pages/ServicesPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Support from "./Pages/Support";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import GlobalDotGrid from "./components/GlobalDotGrid";

function App() {
  return (
    <div className="App">
      <div className="bg-anim-layer" aria-hidden="true">
        <GlobalDotGrid />
      </div>

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route
            path="/javafullstacksyllabus"
            element={<JavaFullStackSyllabus />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsConditions />}
          />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;

