import Header from "@/components/header";

export default function Home() {
	const navItems = [
		{ name: "Movies", route: "/movies" },
		{ name: "TV Shows", route: "/tv-shows" },
		{ name: "People", route: "/people" },
	];

	return (
		<>
			<Header navItems={navItems} />
		</>
	);
}
