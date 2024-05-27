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
import { User } from "../components/user/User";
import { useEffect, useState } from "react";
// import { Detail } from "../components/detail/Detail";

const Allroute = () => {
	const [movies, setMovies] = useState([]);
	const [showMovie, setShowMovie] = useState(false);
	useEffect(() => {
		fetch("http://localhost:3000/movies")
			.then((res) => res.json())
			.then((apimovies) => {
				setMovies(apimovies);
				setShowMovie(true);
			});
	}, []);

	return (
		<>
			<div className="link_to_top">
				<div className="link_to_top_logo">
					<Link to="#navbar_logo">
						<BiArrowToTop />
					</Link>
				</div>
			</div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="about"
					element={<About />}
				/>
				<Route
					path="blog"
					element={<Blog />}
				/>
				<Route
					path="raxbariyat"
					element={<Raxbariyat />}
				/>
				<Route
					path="contact"
					element={<Contact />}
				/>
				<Route
					path="users"
					element={<User />}
				/>
				<Route
					path="*"
					element={<NoPage />}
				/>
			</Routes>
			<Footer />
		</>
	);
};

export default Allroute;
