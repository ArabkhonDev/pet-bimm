import { Routes, Route, Link } from "react-router-dom";
import { BiArrowToTop } from "react-icons/bi";
// this pages for agrr
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import About from "../pages/about/About";
import Home from "../pages/home/Home";
import NoPage from "../pages/noPage/NoPages";
import { Blog } from "../pages/blog/Blog";
import { Contact } from "../pages/contact/Contact";
import { Raxbariyat } from "../pages/raxbariyat/Raxbariyat";
import { Info } from "../components/raxbariyat/info/Info";
import { Work } from "../components/raxbariyat/work/Work";
import { Task } from "../components/raxbariyat/task/Task";

const Allroute = () => {
  return (
    <>
      <div className="link_to_top">
        <div className="link_to_top_logo">
          <Link to="#">
            <BiArrowToTop />
          </Link>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kengash" element={<Blog />} />
        <Route path="/raxbariyat" element={<Raxbariyat />}>
          <Route index element={<Info />} />
          <Route path="info" element={<Info />} />
          <Route path="work" element={<Work />} />
          <Route path="task" element={<Task />} />
        </Route>
        <Route path="/managment" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Allroute;
