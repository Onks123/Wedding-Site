import Image from "next/image";
import BackgroundImage from "@/lib/assets/images/cool.png";
import FrontTitle from "./front-title";
import ScrollDown from "./front-scroll-down";
import Image6 from "@/lib/assets/images/kneel.jpg";
import Image4 from "@/lib/assets/images/looking_at_eachother.jpg";
import Image3 from "@/lib/assets/images/background2.jpg";
import AboutImage from "@/lib/assets/images/about.jpg";
import SideScreenPill from "./side-screen-pill";

export default function Home() {
	return (
		<main className="!scroll-smooth">
			<div className="relative h-screen !scroll-smooth">
				<div className="absolute -z-10 h-full w-full overflow-hidden">
					<Image
						src={BackgroundImage}
						alt="bg"
						className="h-full w-full object-cover object-center"
						placeholder="blur"
					/>
				</div>

				<div className="absolute !scroll-smooth inset-x-0 bottom-24 md:bottom-14 z-49 items-center justify-center sm:flex">
					<div className="flex items-center justify-center">
						<ScrollDown />
					</div>
				</div>

				<div className="h-full">
					<div className="flex h-full items-center justify-center">
						<FrontTitle />
					</div>
				</div>

				<div className="absolute top-0 h-full z-49 h-dvh items-center justify-center pl-0 sm:flex">
					<div className="rotate-180 [writing-mode:vertical-lr] h-full">
						<SideScreenPill
							href="/wedding"
							location="16.03.2025 — Essex"
							date="2025-03-16"
						/>
					</div>
				</div>

				<div className="absolute right-0 top-0 h-full z-49 items-center hidden md:visible justify-center pr-0 sm:flex">
					<div className="[writing-mode:vertical-lr] h-full">
						<SideScreenPill
							href="/wedding"
							location="16.03.2025 — Essex"
							date="2025-03-16"
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-rows-1 lg:grid-cols-2">
				<div id="ourStory" className="flex items-center justify-center">
					<div className="relative m-16">
						<Image
							src={AboutImage}
							alt="us together"
							className="object-cover object-top"
							placeholder="blur"
						/>
					</div>
				</div>

				<div id="ourStory" className="flex items-center justify-center bg-zinc-100">
					<div className="prose max-w-2xl p-16 text-justify text-black">
						<h1 className="font-serif font-normal">Our Story</h1>
						<p className="font-light text-wrap tracking-tight">
							{`
              Having crossed paths at IMPRINT Leicester in 2019, after Zara approached Onkar for prayer during a Sunday Service, little did they know their lives would continue to intertwine. 
			  Over the years, they mysteriously found themselves around each other more & more, by no effort of their own - being placed in the same groups, teams, friendship circles, with short interactions in between.
			  It wasn’t until November 2021, when Onkar smoothly slid into Zara’s DMs, and together went onto spending countless days & nights laughing, chopping up the bible, discussing conspiracies and sharing deep experiences, quickly forming a close friendship. 
			  Throughout the first half of 2022, after experiencing the typical highs & lows of any relationship, they decided to stop pursuing a romantic relationship and instead to focus on building a deeper friendship. 
			  However, with no sign of change in sight, they heartbreakingly began to distance and go on their own way, focusing on themselves instead. But, just how God always does….
              `}
						</p>
						<p className="font-light text-wrap tracking-tight">
							{`
              ….He spun the block! In the beginning of 2023, the once distance began to draw nearer, and reverted back into friendship. Soon after, as they started noticing signs from God, their friendship blossomed into a romance! 
			  In June 2023, noticing God’s hand in their relationship, they decided to make it official, and since then, they’ve been inseparable - as they journeyed together in serving God and each other. 
			  Fast forwarding to Feb 2024, as Onkar felt it was time for the next step, he proposed to the one he loves and received a tear-filled “Yes!” in return. 
			  Since being engaged, they began to plan their future, and are excited to start the next chapter of their lives with you all on March 16th 2025!

			  Glory be to God!
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
