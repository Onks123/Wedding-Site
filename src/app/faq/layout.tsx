import { NavbarSpace } from "@/components/navbar";

export default function FaqLayout({
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
