import React from "react";

const skillsContent = [
	{
		name: "Right Hand Slap",
		skillPercent: "95"
	},
	{
		name: "Left hand slap",
		skillPercent: "85"
	},
	{
		name: "Double hand slap",
		skillPercent: "90"
	}
	// {
	// 	name: "Redux ToolKit(RTK)",
	// 	skillPercent: "95"
	// },
	// {
	// 	name: "AWS Amplify",
	// 	skillPercent: "90"
	// },
	// {
	// 	name: "AWS Cloudfront",
	// 	skillPercent: "90"
	// },
	// {
	// 	name: "AWS EC2",
	// 	skillPercent: "90"
	// },
	// {
	// 	name: "AWS S3",
	// 	skillPercent: "90"
	// }
];

const Skills = () => {
	return (
		<>
			{skillsContent.map((val, i) => (
				<div
					className="progress_inner"
					key={i}
				>
					<span className="label">{val.name}</span>
					<div className="background">
						<div className="bar">
							<div
								className="bar_in"
								style={{ width: val.skillPercent + "%" }}
							></div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Skills;
