/* style */
import "./myStyle.css";
/* Routing */
import { Routes, Route } from "react-router-dom";
/* Pages */
import { AboutPage, ContactPage, Home, NoPage, Blog, FAQ, WeDo } from "./pages";
/* Components */
import { Header, Footer, TestAccordion } from "./components";

const App = () => {
  return (
    <>
      <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutPage/>}/>
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="wedo" element={<WeDo />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NoPage/>}/>
          <Route path="test" element={<TestAccordion />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
