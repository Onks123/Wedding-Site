import Link from "next/link";

type LocationPillProps = {
	location: string;
	date: string;
	href: string;
};

export default function SideScreenPill(props: LocationPillProps) {
	const daysToGo = Math.floor(
		(new Date(props.date).getTime() - new Date().getTime()) /
			(1000 * 60 * 60 * 24),
	);

	return (
		<Link
			href={props.href}
			className="animate-infinite-scroll relative flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full px-4 text-sm font-medium uppercase text-white transition-opacity hover:opacity-70"
		>
			{props.location} — {daysToGo} days left
		</Link>
	);
}
