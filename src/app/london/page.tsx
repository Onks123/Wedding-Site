import LondonImage from "@/lib/assets/images/london.jpg";
import VenueDetailsPage from "../venue-details";
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

export const metadata: Metadata = {
	title: "Celebrating in London",
};

const description = `
The upcoming London wedding will be a celebration deeply rooted in
tradition, specifically honoring Samara's Nigerian heritage. Despite
Samara being of Nigerian and Jamaican descent, the day will solely
embrace Nigerian traditions as Jamaica does not have specific wedding
customs. James and Samara’s choice to have a traditional Nigerian ceremony is
common practice in Samara’s culture and highlights the significance of
acknowledging and preserving her roots. There will be an array
of food options available on the day from both countries and in doing
this, there will be a meaningful representation of her cultural
background as celebration of her heritage.
`;

const hotels = [
	{
		name: "Travelodge Crystal Palace",
		distance: "9 min drive",
		link: "https://www.travelodge.co.uk/hotels/538/London-Crystal-Palace-hotel",
	},
	{
		name: "Travelodge Lewisham",
		distance: "12 min drive",
		link: "https://www.travelodge.co.uk/hotels/695/London-Lewisham-hotel",
	},
	{
		name: "Premier Inn Tooting",
		distance: "23 min drive",
		link: "https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-tooting.html",
	},
];

export default function London() {
	return (
		<VenueDetailsPage
			redirectUrl="/london"
			preTitle="We are celebrating in London on"
			title="Saturday 14th September"
			imageTitle="The London Wedding"
			description={description}
			image={LondonImage}
		>
			<div className="prose text-black">
				<div className="bg-neutral-100 p-8">
					<h1 className="font-serif font-normal">Food</h1>
					<p>The food on the day will be buffet-style.</p>
				</div>

				<div className="p-8">
					<h1 className="font-serif font-normal">Location</h1>
					<p>JK Banquets Hall 15A Perry Vale, London SE23 2NE</p>
				</div>
				<div className="py-8">
					<h1 className="px-8 font-serif font-normal">Hotel Recommendations</h1>
					<Table className="not-prose sm:px-8">
						<TableHead>
							<TableRow>
								<TableHeader>Name</TableHeader>
								<TableHeader>Distance</TableHeader>
								<TableHeader>Action</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							{hotels.map((hotel) => (
								<TableRow key={hotel.name}>
									<TableCell className="font-medium">{hotel.name}</TableCell>
									<TableCell>{hotel.distance}</TableCell>
									<TableCell className="text-zinc-500">
										<Button href={hotel.link} outline>
											View
											<ArrowTopRightOnSquareIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</VenueDetailsPage>
	);
}
