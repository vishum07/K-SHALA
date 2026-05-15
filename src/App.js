import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JavaFullStackSyllabus from "./Pages/JavaFullStackSyllabus";
import ServicesPage from "./Pages/ServicesPage";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/servicespage" element={<ServicesPage />} />

      <Route path="/javafullstacksyllabus" element={<JavaFullStackSyllabus/>} />
      
    </Routes>
    </div>
  );
}

export default App;
