/* style */
import "./myStyle.css";
/* Routing */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Pages */
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import WeDo from "./pages/WeDo";
import Footer from "./components/Footer";
import TestAccordion from "./components/TestAccordion"

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="wedo" element={<WeDo />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NoPage />} />
        <Route path="test" element={<TestAccordion />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
};

export default App;
