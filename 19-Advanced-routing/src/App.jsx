import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Male from "./Pages/Male";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Courses/:id" element={<CourseDetails/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />}>
          <Route path="Male" element={<Male />} />
          <Route path="Women" element={<Women />} />
          <Route path="Kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
