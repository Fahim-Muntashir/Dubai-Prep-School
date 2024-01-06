import Image from "next/image";

const HomeBanner = () => {
	return (
		<section className="relative">
			<div className="bg-overlay-dark-blue absolute top-0 left-0 w-full h-[500px]">
				<Image
					src={"/home_banner.jpg"}
					fill={true}
					alt={"home_banner"}
					sizes="100vw"
					className="object-cover z-[-1]"
				/>
			</div>
			<div className="relative custom_container mx-auto px-3 z-10">
				<div className="h-[500px] w-full flex flex-col items-center justify-center">
					<h2 className="text-white text-5xl font-bold text-center font-primary-bn leading-[55px]">
						আইওএম এ রয়েছে
						<br />
						ফ্রি রেকর্ডেড কোর্স
						<br />
						যা সকলের জন্য উন্মুক্ত
					</h2>
					<button className="btn mt-5">আরো জানুন</button>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;
