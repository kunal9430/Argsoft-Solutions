import Home from "./Components/Home"
import Layout from "./Components/Layout";
import NoPage from "./Components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurProducts from "./Components/OurProducts";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";
import Portfolio from "./Components/Portfolio";
import Careers from "./Components/Careers";
import Blogs from "./Components/Blogs";

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="OurProducts" element={<OurProducts />} />
          <Route path="OurServices" element={<OurServices/>} />
          <Route path="AboutUs" element={<AboutUs/>} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Careers" element={<Careers />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
