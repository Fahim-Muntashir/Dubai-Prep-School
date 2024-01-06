import Image from "next/image";

const facilities = [
	{
		icon: "/curriculam_icon.png",
		title: "Modern Infrastructure",
		detail: "The school boasts state-of-the-art facilities, including well-equipped classrooms, laboratories, libraries, and recreational areas, fostering an enriching learning environment"
	},
	{
		icon: "/certificate_icon.png",
		title: "Comprehensive Curriculum",
		detail: "Offering a comprehensive curriculum across Primary, Junior Secondary, and Secondary divisions, ensuring a well-rounded education catering to different academic levels."
	},
	{
		icon: "/curriculam_icon.png",
		title: "Co-Educational Environment",
		detail: "Emphasizing inclusivity, the school provides equal opportunities for both boys and girls, promoting a balanced and diverse learning atmosphere."
	},
	{
		icon: "/certificate_icon.png",
		title: "Advanced Security Measures",
		detail: "The entire school premises are under CCTV camera surveillance, ensuring the safety and security of students, staff, and facilities."
	},
	{
		icon: "/curriculam_icon.png",
		title: "Regular Assessments",
		detail: "Conducting weekly class tests in all subjects aids in continuous evaluation and understanding of students' progress. Periodic exams every three months, half-annually, and annually help gauge their academic performance comprehensively."
	},
	{
		icon: "/certificate_icon.png",
		title: "Extracurricular Activities",
		detail: "Encouraging participation in extracurricular activities such as sports, arts, and clubs, promoting holistic development beyond academics."
	},
	{
		icon: "/curriculam_icon.png",
		title: "Qualified Faculty",
		detail: "A team of experienced and dedicated teachers committed to providing quality education and guiding students throughout their academic journey."
	},
	{
		icon: "/certificate_icon.png",
		title: "Career Counseling",
		detail: "Offering career guidance and counseling to students as they progress through their educational journey, preparing them for higher studies and future career paths."
	}
];

const WhyUs = () => {
	return (
		<section className="custom_container mt-8">
			<div className="text-center">
				<h2 className="title">Why Choose Us</h2>
				<p className="sub_title">
					We are committed to make our students as a gentle, good and
					intelligent human
				</p>
			</div>
			<div className="grid justify-center gap-2 sm:grid-cols-2 lg:grid-cols-4 divide-2 mt-5">
				{facilities.map((facility) => (
					<div
						key={facility.title}
						className="flex flex-col items-center p-2 text-center"
					>
						<Image
							src={facility.icon}
							alt={facility.title}
							width={80}
							height={80}
							className="object-contain"
						/>
						<h3 className="my-3 text-2xl font-semibold text-primary capitalize">
							{facility.title}
						</h3>
						<p className="text-md text-zinc-500">
							{facility.detail}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyUs;
