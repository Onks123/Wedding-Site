import Image from "next/image";
import BackgroundImage from "@/lib/assets/images/cool.jpg";
import FrontTitle from "./front-title";
import Image4 from "@/lib/assets/images/kneel.jpg";
import Image6 from "./WinterWonderland.jpg";
import Image3 from "@/lib/assets/images/background2.jpg";
import AboutImage from "@/lib/assets/images/about.jpg";
import SideScreenPill from "./side-screen-pill";

export default function Home() {
	return (
		<main>
			<div className="relative h-screen">
				<div className="absolute -z-10 h-full w-full overflow-hidden">
					<Image
						src={BackgroundImage}
						alt="bg"
						className="h-full w-full object-cover object-center"
						placeholder="blur"
					/>
				</div>
				<div className="h-full">
					<div className="flex h-full items-center justify-center">
						<FrontTitle />
					</div>
				</div>

				<div className="absolute top-0 z-50 hidden h-dvh items-center pl-4 sm:flex">
					<div className="rotate-180 [writing-mode:vertical-lr]">
						<SideScreenPill
							href="/wedding"
							location="16.03.2025 — Essex"
							date="2025-03-16"
						/>
					</div>
				</div>

				<div className="absolute right-0 top-0 z-50 hidden h-dvh items-center pr-4 sm:flex">
					<div className="[writing-mode:vertical-lr]">
						<SideScreenPill
							href="/wedding"
							location="16.03.2025 — Essex"
							date="2025-03-16"
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-rows-1 lg:grid-cols-2">
				<div className="flex items-center justify-center">
					<div className="relative m-16">
						<Image
							src={AboutImage}
							alt="us together"
							className="object-cover object-top"
							placeholder="blur"
						/>
					</div>
				</div>

				<div className="flex items-center justify-center bg-zinc-100">
					<div className="prose max-w-2xl p-16 text-justify text-black">
						<h1 className="font-serif font-normal">Our Story</h1>
						<p className="font-light">
							{`
              Onkar and Zara met in the DMs.
              `}
						</p>
						<p className="font-light">
							{`
              WORK IN PROGRESS
              `}
						</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-8 p-16 md:grid-cols-3">
				<Image
					src={Image3}
					alt=""
					className="aspect-[9/16] object-cover"
					placeholder="blur"
				/>
				<Image
					src={Image6}
					alt=""
					className="aspect-[9/16] object-cover"
					placeholder="blur"
				/>
				<Image
					src={Image4}
					alt=""
					className="aspect-[9/16] object-cover"
					placeholder="blur"
				/>
			</div>
		</main>
	);
}
