"use client";

import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import { type Variants, motion } from "framer-motion";

const left = {
	hidden: { opacity: 0, x: -50, y: 0 },
	visible: { opacity: 1, x: 0, y: 0 },
} satisfies Variants;

const right = {
	hidden: { opacity: 0, x: 50, y: 0 },
	visible: { opacity: 1, x: 0, y: 0 },
} satisfies Variants;

const center = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: { opacity: 1, scale: 1, x: -30 },
} satisfies Variants;

const transition = {
	ease: "circInOut",
	duration: 0.5,
};

export default function ScrollDown() {
	return (
		<div className="flex items-center justify-center">
			<a href="#ourStory"
				className="!scroll-smooth text-white text-2xl font-serif font-base rounded-md p-2 outline-none transition-all duration-300">
				Our Story 
				<ChevronDoubleDownIcon className="animate-bounce h-7 w-7 inline" />
			</a>
		</div>
	);
}
