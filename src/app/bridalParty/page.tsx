import BridalPImage from "@/lib/assets/images/orsett_hall4.jpeg";
import PartyDetailsPage from "../bridalParty-details";
import type { Metadata } from "next";
import { Button } from "@/components/catalyst/button";
import Image from "next/image";
import Image6 from "@/lib/assets/images/kneel.jpg";
import Image4 from "@/lib/assets/images/looking_at_eachother.jpg";
import Image3 from "@/lib/assets/images/background2.jpg";

export const metadata: Metadata = {
	title: "Bridal Party",
};

const description = `
We are so grateful for all our amazing family & friends who have been supporting us on our journey, with the privilege of asking some of them to be our bridesmaids & groomsmen!
It is a joy to be ushered into our next chapter with them alongside us, so take a look below to see who they are.
`;

export default async function BridalParty() {
	return (
		<PartyDetailsPage
			redirectUrl="/bridalParty"
			preTitle="We are celebrating with our amazing"
			title="Bridesmaids & Groomsmen"
			imageTitleBig="Wedding Party"
			imageTitleSmall="Wedding Party"
			description={description}
			image={BridalPImage}
		>
				<Button href="#bridesmaids" className="!scroll-smooth items-center justify-center">
					Jump to bridesmaids
				</Button>
			<div className="prose text-black">
				<div className="grid grid-cols-1 p-16 pt-24 md:pt-0 md:p-8 gap-6 -space-y-0 md:grid-cols-3 md:space-y-20">
					<h1 id="bridesmaids" className="font-serif font-normal text-center md:pl-6 outline md:outline-none space-y-0">Bridesmaids</h1>
					<Image
						src={Image3}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
						id="bridesmaids"
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
				</div>
				<div className="grid grid-cols-1 p-16 md:p-8 gap-6 -space-y-0 md:grid-cols-3 md:space-y-20">
					<h1 className="font-serif font-normal text-center md:pl-6 outline md:outline-none space-y-0">Groomsmen</h1>
					<Image
						src={Image4}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
						id="groomsmen"
					/>
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
					<Image
						src={Image4}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
				</div>
			</div>
		</PartyDetailsPage>
	);
}
