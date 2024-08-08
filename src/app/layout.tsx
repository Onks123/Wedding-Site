import "./globals.css";
import type { Metadata } from "next";
import { RightDidone } from "@/lib/assets/fonts/RightDidone";
import { Wotfard } from "@/lib/assets/fonts/wotfard";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	title: {
		template: "%s | Samara & James",
		default: "Samara & James",
	},
	description: "September 2024",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${RightDidone.variable} ${Wotfard.variable}`}>
			<body className="flex min-h-screen flex-col">
				<Navbar />
				<div className="w-full flex-auto">{children}</div>
				<Footer />
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}
