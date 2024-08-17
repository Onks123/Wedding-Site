import BridalPImage from "@/lib/assets/images/orsett_hall4.jpeg";
import PartyDetailsPage from "../bridalParty-details";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/catalyst/table";
import { Button } from "@/components/catalyst/button";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import Image from "next/image";
import Image6 from "@/lib/assets/images/kneel.jpg";
import Image4 from "@/lib/assets/images/looking_at_eachother.jpg";
import Image3 from "@/lib/assets/images/background2.jpg";

export const metadata: Metadata = {
	title: "Bridal Party",
};

const description = `
UNDER CONSTRUCTION
`;

const hotels = [
	{
		name: "Premier Inn Coventry East",
		distance: "8 min drive",
		link: "https://www.premierinn.com/gb/en/hotels/england/west-midlands/coventry/coventry-east-ansty.html",
	},
	{
		name: "Brandon Hall Hotel and Spa",
		distance: "11 min drive",
		link: "https://brandonhallhotel.com",
	},
	{
		name: "Premier Rugby Inn North",
		distance: "15 min drive",
		link: "https://www.premierinn.com/gb/en/hotels/england/warwickshire/rugby/rugby-north-m6-jct1.html",
	},
];

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
			</div>
		</PartyDetailsPage>
	);
}
