import Header from "@/components/header";

const navItems = [
	{ name: "Movies", route: "/movies" },
	{ name: "TV Shows", route: "/tv-shows" },
	{ name: "People", route: "/people" },
];
export default function Movies() {
	return (
		<div>
			<Header navItems={navItems} />
		</div>
	);
}
