import { NavbarSpace } from "@/components/navbar";

export default function RsvpLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavbarSpace />
			{children}
		</>
	);
}
