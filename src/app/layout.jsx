import Navbar from "@/components/navbar/Navbar";
import { Alkatra, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"]
});

const alkatra = Alkatra({
	subsets: ["bengali"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-alkatra",
	preload: true
});

export const metadata = {
	title: "Markajut Tahfiz",
	description: "Islamic Academy"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.className} ${alkatra.variable}`}>
				<header>
					<Navbar />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
