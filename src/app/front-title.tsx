"use client";

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

export default function Title() {
	return (
		<div className="relative">
			<div className="absolute h-full w-full">
				<div className="flex h-full items-center">
					<motion.span
						variants={center}
						initial="hidden"
						animate="visible"
						transition={transition}
						className="h-min pl-4 font-serif text-7xl font-light text-white/30 md:p-0 md:text-9xl"
					>
						&
					</motion.span>
				</div>
			</div>
			<motion.h1
				variants={left}
				initial="hidden"
				animate="visible"
				transition={transition}
				className="font-serif text-6xl font-light text-white md:text-8xl"
			>
				Samara
			</motion.h1>
			<motion.h1
				variants={right}
				initial="hidden"
				animate="visible"
				transition={transition}
				className="font-serif text-6xl font-light text-white md:text-8xl"
			>
				James
			</motion.h1>
		</div>
	);
}
