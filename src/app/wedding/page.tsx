import LocationImage from "@/lib/assets/images/orsett_hall.jpeg";
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
	title: "Wedding",
};

const description = `
TBC
`;

const hotels = [
	{
		name: "Premier Inn Thurrock East",
		distance: "10 min drive",
		link: "https://www.premierinn.com/gb/en/hotels/england/essex/thurrock/thurrock-east.html",
	},
	{
		name: "Travelodge Thurrock Lakeside",
		distance: "12 min drive",
		link: "https://www.travelodge.co.uk/hotels/627/Thurrock-Lakeside-hotel",
	},
	{
		name: "Premier Inn Thurrock West",
		distance: "14 min drive",
		link: "https://www.premierinn.com/gb/en/hotels/england/essex/thurrock/thurrock-west.html",
	},
];

const schedules = [
	{
		schedule: "Ceremony",
		time: "1:00pm",
		location: "See below",
	},
	{
		schedule: "Drinks",
		time: "3:30pm",
		location: "See below",
	},
	{
		schedule: "Reception",
		time: "5:00pm",
		location: "See below",
	},
];

export default function Wedding() {
	return (
		<VenueDetailsPage
			redirectUrl="/wedding"
			preTitle="We are celebrating our big day on"
			title="Sunday 16th March"
			imageTitle="The Wedding Day"
			description={description}
			image={LocationImage}
		>
			<div className="prose text-black">
				<div className="bg-neutral-100 p-8">
					<h1 className="font-serif font-normal">Itinerary</h1>
					<Table className="not-prose sm:px-8">
						<TableHead>
							<TableRow>
								<TableHeader>Schedule</TableHeader>
								<TableHeader>Time</TableHeader>
								<TableHeader>Location</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							{schedules.map((item) => (
								<TableRow key={item.schedule}>
									<TableCell className="font-medium">{item.schedule}</TableCell>
									<TableCell>{item.time}</TableCell>
									<TableCell>{item.location}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<p><strong>Please note:</strong></p>
					<p>Due to capacity of the chapel, we unfortunately could not invite everyone to the ceremony, so please refer to your invite as to what time you should arrive.
					For those who are attending the ceremony, it will be starting <b>promptly</b>, so please ensure you are on time, as you will not be let in after the ceremony has begun - 
					thank you for understanding! </p>
					<p>For any other questions, please refer to the <a href='./faq'>FAQs</a>.</p>
				</div>

				<div className="p-0 py-4 pl-8">
					<h1 className="font-serif font-normal">Location</h1>
					<pre className="bg-white text-black prose font-sans font-"><a href='https://www.google.com/maps/dir//Prince+Charles+Ave,+Orsett,+Grays+RM16+3HS/@51.5158374,0.2954933,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d8b801ccafe345:0x6136e805ecefafaa!2m2!1d0.3778935!2d51.5158663?entry=ttu'>{'Orsett Hall \nPrince Charles Avenue \nOrsett \nEssex \nRM16 3HS'}</a>
					</pre>
				</div>
				<div className="py-8 bg-neutral-100">
					<h1 className="px-8 font-serif font-normal">Hotel Recommendations</h1>
					<Table className="not-prose sm:px-10">
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
