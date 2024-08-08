import RugbyImage from "@/lib/assets/images/rugby3.jpeg";
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
	title: "Celebrating in Rugby",
};

const description = `
The Rugby wedding will be a traditional white wedding, serving as a
homage to James' cultural background. The white wedding is the official
recognition of marriage in the UK but also reflects his heritage. There
will be a set menu of British food served on the wedding day which
further shares a piece of James’ tradition.
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

export default async function Rugby() {
	return (
		<VenueDetailsPage
			redirectUrl="/rugby"
			preTitle="We are celebrating in Rugby on"
			title="Wednesday 18th September"
			imageTitle="The Rugby Wedding"
			description={description}
			image={RugbyImage}
		>
			<div className="prose text-black">
				<div className="bg-neutral-100 p-8">
					<h1 className="font-serif font-normal">Food</h1>
					<p>The food on the day will be a set menu as follows:</p>
					<h2 className="font-serif font-normal">Starter</h2>
					<p>
						Spanish Style Chicken & Chorizo Salad with Tomato Vinaigrette (GF)
						(DF)
					</p>
					<h2 className="font-serif font-normal">Main Course</h2>
					<p>
						Roast Chicken Supreme served with Bread Sauce, Sage & Onion Stuffing
					</p>
					<h2 className="font-serif font-normal">Dessert</h2>
					<p>Warm Chocolate Brownie with Vanilla Ice Cream (V)</p>
					<p>
						<strong>(V) Vegetarian | (DF) Dairy Free | (GF) Gluten Free</strong>
					</p>
					<p>NOTE: ANY FOOD REQUIREMENTS CAN BE LISTED WHEN YOU RSVP</p>
				</div>

				<div className="p-8">
					<h1 className="font-serif font-normal">Location</h1>
					<p>
						Ashton Lodge Country House, Street Ashton, Stretton Under Fosse,
						Rugby, Warwickshire, CV23 0PJ
					</p>
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
