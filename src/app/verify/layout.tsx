import { NavbarSpace } from "@/components/navbar";

export default function VerifyLayout({
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
