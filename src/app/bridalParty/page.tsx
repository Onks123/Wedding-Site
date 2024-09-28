import BridalPImage from "@/lib/assets/images/cool.png";
import PartyDetailsPage from "../bridalParty-details";
import type { Metadata } from "next";
import { Button } from "@/components/catalyst/button";
import Image from "next/image";
import Image1 from "@/lib/assets/images/samara.jpg";
// import Image2 from "@/lib/assets/images/sharon.jpg";
import Image2 from "@/lib/assets/images/kneel.jpg";
import Image3 from "@/lib/assets/images/adanna.jpg";
import Image4 from "@/lib/assets/images/jacqui.jpg";
import Image5 from "@/lib/assets/images/toyin.jpg";
import Image6 from "@/lib/assets/images/jasmine.jpg";
import Image7 from "@/lib/assets/images/tomi.jpg";
import Image8 from "@/lib/assets/images/tianna.jpg";
// import Image9 from "@/lib/assets/images/calvin.jpg";
// import Image10 from "@/lib/assets/images/sib.jpg";
// import Image11 from "@/lib/assets/images/manni.jpg";
import Image9 from "@/lib/assets/images/kneel.jpg";
import Image10 from "@/lib/assets/images/kneel.jpg";
import Image11 from "@/lib/assets/images/kneel.jpg";
import Image12 from "@/lib/assets/images/joseph.jpg";
import Image13 from "@/lib/assets/images/richard.jpg";
import Image14 from "@/lib/assets/images/elijah.jpg";
import Image15 from "@/lib/assets/images/akaash.jpg";
import Image16 from "@/lib/assets/images/kneel.jpg";

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
			<div className="prose text-black">
				<div className="grid grid-cols-1 p-16 pt-15 md:pt-0 md:p-8 gap-6 -space-y-0 md:grid-cols-3 md:space-y-20">
					<h1 id="bridesmaids" className="font-serif font-normal text-center md:underline md:decoration-2 outline md:outline-none space-y-0">Bridesmaids</h1>
					<Image
						src={Image1}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
						id="bridesmaids"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Samara Morris - Matron of Honour</p>
					<p></p>
					<Image
						src={Image2}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Lena Holmes - Maid of Honour</p>
					<p></p>
					<Image
						src={Image3}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Adanna Akinfenwa - Chief Bridesmaid</p>
					<p></p>
					<Image
						src={Image4}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Jacqui Olaifa - Bridesmaid</p>
					<p></p>
					<Image
						src={Image5}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Toyin Orelaja - Bridesmaid</p>
					<p></p>
					<Image
						src={Image6}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Jasmine Rossey - Bridesmaid</p>
					<p></p>
					<Image
						src={Image7}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Tomi Banwo - Bridesmaid</p>
					<p></p>
					<Image
						src={Image8}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Tianna Abrahams - Bridesmaid</p>
				</div>
				<div className="grid grid-cols-1 p-16 md:p-8 gap-6 -space-y-0 md:grid-cols-3 md:space-y-20">
					<h1 className="font-serif font-normal text-center outline md:underline md:decoration-3 md:outline-none space-y-0">Groomsmen</h1>
					<Image
						src={Image9}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
						id="groomsmen"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Calvin Agodi - Best Man</p>
					<p></p>
					<Image
						src={Image10}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Gurinder Hunjan - Best Man</p>
					<p></p>
					<Image
						src={Image11}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Manni Johal - Groomsman</p>
					<p></p>
					<Image
						src={Image12}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Joseph Njuru - Groomsman</p>
					<p></p>
					<Image
						src={Image13}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Richard Amoshe - Groomsman</p>
					<p></p>
					<Image
						src={Image14}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Elijah Emmanuel - Groomsman</p>
					<p></p>
					<Image
						src={Image15}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2">Akaash Mattu - Groomsman</p>
					<p></p>
					<Image
						src={Image16}
						alt=""
						className="aspect-[9/16] object-cover"
						placeholder="blur"
					/>
					<p className="font-sans font-normal text-center underline underline-offset-2"> ??? - Groomsman</p>
				</div>
			</div>
		</PartyDetailsPage>
	);
}
