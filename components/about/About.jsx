import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#__next");

const About = () => {
	const [isOpen, setIsOpen] = useState(false);
	function toggleModalOne() {
		setIsOpen(!isOpen);
	}

	return (
		//    ABOUT
		<div
			className="edina_tm_about"
			id="about"
		>
			<div className="container">
				<div className="about_title">
					<h3>About Me</h3>
				</div>
				<div className="content">
					<div
						className="leftpart"
						data-aos="fade-right"
						data-aos-duration="1200"
						data-aos-delay="100"
					>
						<div className="info">
							<h3>
								Hi, Im <span>Rahima Khan</span>
							</h3>
							<p>
								As a chamat freelancer with significant skills and experience, I thrive on tackling complex and exciting challenges. I am confident in my ability to effectively redirect {`someone's`}
								attention and emotions by adjusting their body positioning in response to a physical altercation. This technique can diffuse the situation and prevent further conflict.
							</p>
						</div>
						<div className="my_skills">
							<h3 className="title">What is my skill level?</h3>
							<p className="desc">
								Throughout my career, I have been exposed to a variety of challenges and opportunities, which has allowed me to build a comprehensive skillset. Some of my key abilities include:
							</p>
							<div className="wrapper">
								<div className="dodo_progress">
									<Skills />
								</div>
							</div>
							{/* <div className="edina_tm_button">
								<button
									type="submit"
									className="color"
									onClick={toggleModalOne}
								>
									See More
								</button>
							</div> */}
						</div>
					</div>
					{/* End leftpart */}

					<div className="rightpart">
						<div className="image">
							<img
								src="img/thumbs/26-35.jpg"
								alt="thumb"
							/>

							<div
								className="main"
								style={{
									backgroundImage: "url(img/hero/rano_about.jpg)"
								}}
								data-aos="fade-left"
								data-aos-duration="1200"
								data-aos-delay="200"
							></div>

							<div
								className="experience"
								data-aos="fade-up"
								data-aos-duration="1200"
								data-aos-delay="300"
							>
								<div className="info">
									<h3>2+ Years</h3>
									<span>Of Experiance</span>
								</div>
							</div>
						</div>
					</div>
					{/* End righttpart */}
				</div>
			</div>

			{/* Start About Details Modal */}
			<Modal
				isOpen={isOpen}
				onRequestClose={toggleModalOne}
				contentLabel="My dialog"
				className="custom-modal about-popup-wrapper"
				overlayClassName="custom-overlay "
				closeTimeoutMS={500}
			>
				<div className="edina_tm_modalbox">
					<button
						className="close-modal"
						onClick={toggleModalOne}
					>
						<img
							src="/img/svg/cancel.svg"
							alt="close icon"
						/>
					</button>
					{/* End close icon */}

					<div className="box_inner">
						<div className="description_wrap scrollable">
							<ModalContent />
						</div>
					</div>
					{/* End box inner */}
				</div>
				{/* End modal box news */}
			</Modal>
			{/* End  About Details Modal */}
		</div>
		// /ABOUT
	);
};

export default About;
