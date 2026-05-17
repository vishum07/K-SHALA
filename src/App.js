import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JavaFullStackSyllabus from "./Pages/JavaFullStackSyllabus";
import ServicesPage from "./Pages/ServicesPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Support from "./Pages/Support";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route
          path="/javafullstacksyllabus"
          element={<JavaFullStackSyllabus />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
