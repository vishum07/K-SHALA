import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JavaFullStackSyllabus from "./Pages/JavaFullStackSyllabus";
import OracleDBASyllabus from "./Pages/OracleDBASyllabus";
import AppSupportSyllabus from "./Pages/AppSupportSyllabus";
import LinuxAdminSyllabus from "./Pages/LinuxAdminSyllabus";
import OracleSQLSyllabus from "./Pages/OracleSQLSyllabus";
import SoftwareTestingSyllabus from "./Pages/SoftwareTestingSyllabus";
import DotNetSyllabus from "./Pages/DotNetSyllabus";
import PythonSyllabus from "./Pages/PythonSyllabus";
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
          <Route path="/oracledbasyllabus" element={<OracleDBASyllabus />} />
          <Route path="/appsupportsyllabus" element={<AppSupportSyllabus />} />
          <Route path="/linuxadminsyllabus" element={<LinuxAdminSyllabus />} />
          <Route path="/oraclesqlsyllabus" element={<OracleSQLSyllabus />} />
          <Route path="/softwaretestingsyllabus" element={<SoftwareTestingSyllabus />} />
          <Route path="/dotnetsyllabus" element={<DotNetSyllabus />} />
          <Route path="/pythonsyllabus" element={<PythonSyllabus />} />
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

