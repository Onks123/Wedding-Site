import LocationImage from "@/lib/assets/images/ring2_Cropped.jpg";
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
With the ceremony taking place in a beautiful chapel, and the reception in a stunning hall, we're excited to have you all join us for our big day! 
Below, you can find all the important information you may need, including the Itinerary, Location, and nearby Hotels. 
Please do checkout the O&Z, Bridal Party & Registry pages too, and read the FAQs (under 'More')!
`;

const hotels = [
	{
		name: "Premier Inn East",
		distance: "10 mins drive",
		link: "https://www.premierinn.com/gb/en/hotels/england/essex/thurrock/thurrock-east.html",
	},
	{
		name: "Travelodge Lakeside",
		distance: "12 mins drive",
		link: "https://www.travelodge.co.uk/hotels/627/Thurrock-Lakeside-hotel",
	},
	{
		name: "Premier Inn West",
		distance: "14 mins drive",
		link: "https://www.premierinn.com/gb/en/hotels/england/essex/thurrock/thurrock-west.html",
	},
];

const schedules = [
	{
		schedule: "Ceremony",
		time: "1:30pm",
		location: "See below",
	},
	{
		schedule: "Drinks & Pictures",
		time: "3:00pm",
		location: "See below",
	},
	{
		schedule: "Reception",
		time: "4:00pm",
		location: "See below",
	},
];

export default function Wedding() {
	return (
		<VenueDetailsPage
			redirectUrl="/wedding"
			preTitle="We are celebrating our big day on"
			title="Sunday 16th March"
			imageTitleBig="The Wedding Day"
			imageTitleSmall="The Wedding Day"
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
					<p>Due to the very limited capacity of the chapel, we unfortunately could <b>not</b> invite everyone to the ceremony, 
					so please refer to your <a href='./rsvp'>invite <ArrowTopRightOnSquareIcon className="-mt-4 h-4 w-3 inline" /></a> as to what time you should arrive (you're welcome to join for Drinks).
					For those who are attending the ceremony, please ensure you are on time, as you will not be let in after the ceremony has begun - 
					thank you for understanding! </p>
					<p>For all other important info, please refer to the <a href='./faq'>FAQs<ArrowTopRightOnSquareIcon className="-mt-4 h-4 w-3 inline" /></a>!</p>
				</div>

				<div className="p-0 py-4 pl-8">
					<h1 className="font-serif font-normal">Location</h1>
					<pre className="bg-white text-black prose font-sans font-">
						<a href='https://www.google.com/maps/dir//Prince+Charles+Ave,+Orsett,+Grays+RM16+3HS/@51.5158374,0.2954933,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d8b801ccafe345:0x6136e805ecefafaa!2m2!1d0.3778935!2d51.5158663?entry=ttu'
						   rel="noopener noreferrer" target="_blank">
						{'Orsett Hall \nPrince Charles Avenue \nOrsett \nEssex \nRM16 3HS'}</a>
					</pre>
				</div>
				<div className="bg-neutral-100 p-8 pr-5">
					<h1 className="font-serif font-normal">Hotels</h1>
					<Table className="flex justify-center items-center not-prose sm:-px-20 table-auto">
						<TableHead>
							<TableRow>
								<TableHeader>Name</TableHeader>
								<TableHeader>Distance</TableHeader>
								<TableHeader>Link</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							{hotels.map((hotel) => (
								<TableRow key={hotel.name}>
									<TableCell className="font-medium">{hotel.name}</TableCell>
									<TableCell>{hotel.distance}</TableCell>
									<TableCell className="text-zinc-500">
										<Button href={hotel.link} rel="noopener noreferrer" target="_blank " outline>
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
