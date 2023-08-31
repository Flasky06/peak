import Image from "next/image";
import Link from "next/link";
import React from "react";
import potatoImg from "../public/assets/projects/Mr-PotatoHead.png";
import hyperwaveImg from "../public/assets/projects/HyperwaveKenya.png";
import namlahImg from "../public/assets/projects/Namlah.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Namlah Homes"
						backgroundImg={namlahImg}
						projectUrl="/namlah"
						tech="www.namlahhomes.com"
					/>
					<ProjectItem
						title="Mr Potato"
						backgroundImg={potatoImg}
						projectUrl="/potato"
						tech="Grocery eccomerce website"
					/>
					<ProjectItem
						title="https://www.hyperwave.co.ke"
						backgroundImg={hyperwaveImg}
						projectUrl="/hyperwave"
						tech="https://www.hyperwave.co.ke"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
