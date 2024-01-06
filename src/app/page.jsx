import About from "@/components/home/About";
import Division from "@/components/home/Division";
import HomeBanner from "@/components/home/HomeBanner";
import WhyUs from "@/components/home/WhyUs";

const Home = () => {
	return (
		<div>
			<HomeBanner />
			<About />
			<WhyUs />
			<Division />
		</div>
	);
};

export default Home;
