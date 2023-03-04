"use client";

import Link from "next/link";
import { useState } from "react";
import CssMode from "./cssMode";
import Searchbox from "./searchbox";

type HeaderProps = {
	navItems: navItem[];
};

type navItem = {
	name: string;
	route: string;
};

export default function Header({ navItems }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<nav className="bg-base-300 py-2 outline-4">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
								aria-controls="mobile-menu"
								aria-expanded="false"
								onClick={toggle}
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex items-center justify-center">
								<Link
									href="/"
									title="IMBD Clone"
									className="text-2xl font-black text-accent"
								>
									IMBD Clone
								</Link>
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-10">
									{navItems.map(({ name, route }, i) => (
										<Link
											key={i}
											className="btn-ghost btn rounded-md px-3 py-2"
											href={route}
										>
											<button title={name} className="text-lg font-medium">
												{name}
											</button>
										</Link>
									))}
								</div>
							</div>
						</div>
						<Searchbox />
						<CssMode />
					</div>
				</div>
				{isOpen && (
					<div className="sm:hidden" id="mobile-menu">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navItems.map(({ name, route }, i) => (
								<Link
									key={i}
									className="btn-ghost btn block justify-center justify-items-center px-3 py-2"
									href={route}
								>
									<button title={name} className=" text-base font-medium">
										{name}
									</button>
								</Link>
							))}
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
