"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Logo from "../logo/Logo";

const menuLinks = [
	{
		title: "Home",
		path: "/"
	},
	{
		title: "About Us",
		path: "/"
	},
	{
		title: "Divisions",
		path: "/"
	},
	{
		title: "Admission",
		path: "/"
	},
	{
		title: "Support",
		path: "/"
	}
];

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav className="custom_container">
			<div className="flex items-center justify-between gap-5">
				{/* Logo */}
				<Logo />

				{/* Desktop Menu */}
				<ul className="hidden lg:flex items-center justify-center gap-8">
					{menuLinks.map((menuLink) => (
						<li key={menuLink.title}>
							<Link
								href={menuLink.path}
								className="text-lg text-zinc-600 font-semibold hover:text-primary transition-all"
							>
								{menuLink.title}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Menu */}
				<div className="relative lg:hidden">
					<button
						type="button"
						onClick={() => setOpenMenu((prev) => !prev)}
					>
						<FaBars className="w-6 h-6" />
					</button>
					{openMenu && (
						<ul className="absolute top-5 right-0 w-54 flex flex-col items-center justify-center bg-white shadow-md p-4 rounded-md divide-y space-y-1">
							{menuLinks.map((menuLink) => (
								<li key={menuLink.title} className="w-36 pt-1">
									<Link
										href={menuLink.path}
										className="text-lg text-zinc-600 font-semibold hover:text-primary transition-all"
									>
										{menuLink.title}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
