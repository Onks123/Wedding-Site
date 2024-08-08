import Image from "next/image";
import BackgroundImage from "./background.jpg";
import FrontTitle from "./front-title";
import Image3 from "./3.jpg";
import Image4 from "./4.jpg";
import Image6 from "./6.jpg";
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
							href="/london"
							location="14.09.2024 — London"
							date="2024-09-14"
						/>
					</div>
				</div>

				<div className="absolute right-0 top-0 z-50 hidden h-dvh items-center pr-4 sm:flex">
					<div className="[writing-mode:vertical-lr]">
						<SideScreenPill
							href="/rugby"
							location="18.09.2024 — Rugby"
							date="2024-09-18"
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
						{/* <enhanced:img
              src={PortraitImage}
              className="object-cover object-top"
              alt="us together"
            /> */}
					</div>
				</div>

				<div className="flex items-center justify-center bg-zinc-100">
					<div className="prose max-w-2xl p-16 text-justify text-black">
						<h1 className="font-serif font-normal">Our Story</h1>
						<p className="font-light">
							{`
              Samara and James met at W5 Church upon joining the worship team, just a few years after moving to Northampton. Little did they know, the leading of the Holy Spirit and a shared passion for worship would lay the foundation for something deeper.
              `}
						</p>
						<p className="font-light">
							{`
              As time went on their friendship blossomed and they became very
              close friends and unbeknownst to them, God was gently nudging them
              towards a future intertwined. Until finally in April 2023, God
              spoke louder and clearer than ever that the person He had for them
              both was each other. With spirits obedient and hearts aligned,
              they embraced His plan and stepped into a love story written by
              love Himself. And so, their journey together began, a testament to
              God's faithfulness and the beauty of obedience.
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
