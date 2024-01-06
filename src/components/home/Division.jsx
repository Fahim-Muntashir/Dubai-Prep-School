import { FaChildren } from "react-icons/fa6";

const Division = () => {
	return (
		<section className="custom_container mt-8">
			<div className="text-center">
				<h2 className="title">Division</h2>
				<p className="sub_title">
					To give our students proper education, we divide them in
					several categories.
				</p>
			</div>
			<div className="mt-4 flex items-center justify-center gap-6">
				<div className="w-full h-full p-6 rounded-md shadow-md bg-primary text-center">
					<FaChildren className="w-16 h-16 text-white mx-auto" />
					<h3 className="my-3 text-2xl font-semibold text-secondary capitalize">
						Primary Division
					</h3>
					<p className="text-md text-zinc-300">
						An introductory program that lays the foundation for
						understanding the core principles of Islam in an
						engaging and age-appropriate manner
					</p>
				</div>
				<div className="w-full h-full p-6 rounded-md shadow-md bg-primary text-center">
					<FaChildren className="w-16 h-16 text-white mx-auto" />
					<h3 className="my-3 text-2xl font-semibold text-secondary capitalize">
						Junior Secondary Division
					</h3>
					<p className="text-md text-zinc-300">
						An introductory program that lays the foundation for
						understanding the core principles of Islam in an
						engaging and age-appropriate manner
					</p>
				</div>
				<div className="w-full h-full p-6 rounded-md shadow-md bg-primary text-center">
					<FaChildren className="w-16 h-16 text-white mx-auto" />
					<h3 className="my-3 text-2xl font-semibold text-secondary capitalize">
						Secondary Division
					</h3>
					<p className="text-md text-zinc-300">
						An introductory program that lays the foundation for
						understanding the core principles of Islam in an
						engaging and age-appropriate manner
					</p>
				</div>
			</div>
		</section>
	);
};

export default Division;
