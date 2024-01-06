import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<div className="relative">
			<Link href={"/"} className="flex items-center justify-center">
				<Image src={"/logo.png"} height={50} width={100} alt="logo" />
				<Image
					src={"/logo_text.png"}
					height={50}
					width={300}
					alt="logo_text"
					className="hidden sm:inline-block"
				/>
			</Link>
		</div>
	);
};

export default Logo;
