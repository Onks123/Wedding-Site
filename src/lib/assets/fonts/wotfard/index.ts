import localFont from "next/font/local";

export const Wotfard = localFont({
	variable: "--font-wotfard",
	src: [
		{
			path: "./wotfard-thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "./wotfard-extralight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "./wotfard-light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./wotfard-regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./wotfard-medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./wotfard-semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./wotfard-bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
});
