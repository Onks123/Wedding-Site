"use client";

import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";

export default function ScrollDown() {
	return (
		<div className="relative items-center justify-center">
			<a href="#ourStory"
				className="!scroll-smooth text-white text-2xl font-serif font-bold rounded-md p-2 transition-all duration-300">
				Tap for Our Story
				<ChevronDoubleDownIcon className="animate-bounce h-7 w-7 inline" />
			</a>
		</div>
	);
}
