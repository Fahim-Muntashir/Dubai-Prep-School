import Image from "next/image";
import Link from "next/link";

const About = () => {
	return (
		<section className="custom_container mt-8 flex items-center justify-between gap-10">
			<div className="relative flex-1 h-[500px] w-full">
				<Image
					src="/about_us.png"
					fill
					alt="about_us"
					className="object-cover rounded-xl"
				/>
			</div>
			<div className="flex-1 w-full">
				<h2 className="title mt-3 mb-4">About Us</h2>
				<p className="text-lg text-zinc-500">
					Dubai Prep School is a progressive Islamic institution
					committed to providing a comprehensive educational
					experience while integrating modern amenities with
					traditional Islamic teachings.
				</p>
				<ul className="list-disc pl-5 mt-3 mb-5 w-5/6">
					<li className="text-zinc-700 mb-2">
						Our diverse curriculum is designed to cater to students
						across various levels and objectives, ensuring a
						well-rounded education.
					</li>
					<li className="text-zinc-700 mb-2">
						Our diverse curriculum is designed to cater to students
						across various levels and objectives, ensuring a
						well-rounded education.
					</li>
					<li className="text-zinc-700 mb-2">
						Our diverse curriculum is designed to cater to students
						across various levels and objectives, ensuring a
						well-rounded education.
					</li>
					<li className="text-zinc-700 mb-2">
						Our diverse curriculum is designed to cater to students
						across various levels and objectives, ensuring a
						well-rounded education.
					</li>
					<li className="text-zinc-700 mb-2">
						Our diverse curriculum is designed to cater to students
						across various levels and objectives, ensuring a
						well-rounded education.
					</li>
				</ul>
				<Link href={"/"}>
					<button type="button" className="btn">
						Know More
					</button>
				</Link>
			</div>
		</section>
	);
};

export default About;
