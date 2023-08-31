import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						I am a Software Developer with a strong foundation in Graphics
						Design, UI/UX Design, and Digital Marketing. With over 5 years of
						professional experience, I have a proven track record of delivering
						high-quality projects that combine my technical skills and creative
						flair. My work spans from designing captivating visuals to
						developing robust web/mobile applications. This portfolio showcases
						my journey and highlights some of the key projects and experiences
						that have shaped my career.
					</p>
					<p className="py-2 text-gray-600">
						{/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. In eum,
						est incidunt nesciunt soluta tempora temporibus possimus laborum
						iusto dolore. Laborum eius consectetur repudiandae et ab voluptate
						ullam recusandae iure? */}
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects.
						</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
