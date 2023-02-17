import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../../header/Sidebar";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";
import "bootstrap/dist/css/bootstrap.css";

const EdinaHomeSidebar = () => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		document.querySelector("body").classList.remove("rtl");
	}, []);

	const handleLabelClick = () => {
		if (isDark) {
			localStorage.setItem("theme-color", "theme-light");
			document.querySelector("body").classList.add("theme-light");
			document.querySelector("body").classList.remove("theme-dark");
			setIsDark(false);
		} else {
			localStorage.setItem("theme-color", "theme-dark");
			document.querySelector("body").classList.add("theme-dark");
			document.querySelector("body").classList.remove("theme-light");
			setIsDark(true);
		}
	};

	return (
		<div className={`home-light edina_tm_mainpart ${isDark ? "theme-dark" : ""}`}>
			{/* Start Dark & Light Mode Swicher  */}
			{/* <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
				<input
					type="checkbox"
					onClick={handleLabelClick}
					className="theme-switcher"
				/>
				<div className="switch-handle">
					<i
						className="light-text"
						title="Switch to Dark"
					>
						<FaMoon />
					</i>
					<i
						className="dark-text"
						title="Switch to Light"
					>
						<FaSun />
					</i>
				</div>
			</label> */}
			{/* End Dark & Light Mode Swicher  */}

			<header className="header-area">
				<div className="header-inner">
					<HeaderMobile />
				</div>
			</header>
			{/* End mobile-header */}

			<Sidebar />
			{/* End Header */}
			<Hero />
			{/* End Hero */}
			<About />
			{/* End Hero */}
			{/* <div
				className="edina_tm_services"
				id="service"
			>
				<div className="container">
					<div className="edina_tm_title">
						<h3>What I Do</h3>
						<p style={{ maxWidth: "100%" }}>
							{`As a full-stack web developer with experience in building end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js), I am well-suited to provide a
							comprehensive solution to your online needs. My expertise in both front-end and back-end development, along with my proficiency in using AWS solutions such as S3, Amplify, and EC2,
							allows me to deliver a robust and scalable web application that meets all of your requirements. Whether you need a new website, updates to an existing one, or a custom web application, I
							am confident in my ability to deliver a top-quality product that exceeds your expectations. Let's work together to bring your online vision to life.`}
						</p>
					</div>
			
				</div>
			</div> */}
			{/* End Services */}

			<div
				className="edina_tm_portfolio"
				id="portfolio"
			>
				<div className="container">
					<div className="edina_tm_title">
						<h3>Portfolio</h3>
						<p>{`The following are some of the projects I have worked on and are live today`}</p>
					</div>
					{/* End edian_tm_title */}
					<Portfolio />
				</div>
			</div>
			{/* End Portfolio */}

			{/* <div
				className="edina_tm_testimonials"
				id="testimonial"
			>
				<div className="container">
					<div className="edina_tm_title">
						<h3>Testimonials</h3>
						<p>{`The following are some of the people who worked with me and gave me a feedback`} </p>
					</div>
					<div className="list ">
						<ul>
							<Testimonial />
						</ul>
					</div>
				</div>
			</div> */}
			{/* End Testimonial */}

			{/* <div
				className="edina_tm_news"
				id="blog"
			>
				<div className="container">
					<div className="edina_tm_title">
						<h3>Blog</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
					</div>
					<Blog />
				</div>
			</div> */}
			{/* End Blog */}

			<div
				className="edina_tm_contact"
				id="contact"
			>
				<div className="container">
					<div className="edina_tm_title">
						<h3>Contact</h3>
						<p>I would love to hear from you! Please feel free to contact with any questions or feedback.</p>
					</div>
					<div className="extra_info">
						<Address />
					</div>
					{/* End Address Info */}
					<div className="mainpart">
						<div
							className="left w-100"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="300"
						>
							<div className="title">
								{/* <p>
									I am always open to discussing product
									<br />
									<span> design work or partnerships.</span>
								</p> */}
							</div>
							{/* End title */}
							<div className="fields">
								<Contact />
							</div>
							{/* End Contact Form */}
						</div>
						{/* <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div> */}
						{/* End Map */}
					</div>
				</div>
			</div>
			{/* /CONTACT */}
		</div>
	);
};

export default EdinaHomeSidebar;
