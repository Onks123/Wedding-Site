import localFont from "next/font/local";

export const RightDidone = localFont({
	variable: "--font-right-didone",
	src: [
		{
			path: "./PP Right Didone - Light.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./PP Right Didone - Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./PP Right Didone - Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
});
