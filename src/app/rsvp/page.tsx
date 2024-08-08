import RsvpCardNew from "@/app/rsvp/rsvp-card";
import { CaptureDietaryRequirements } from "@/app/rsvp/captureDietaryRequirements";
import SignOutButton from "./sign-out";
import type { Metadata } from "next";
import { authenticate, currentUser } from "@/lib/auth";

export const metadata: Metadata = {
	title: "RSVP",
};

const Closed = () => {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
			<div className="mx-auto max-w-2xl">
				<h2 className="font-serif text-4xl text-black">
					We Are Sorry You Couldn’t Make It!
				</h2>
				<p className="mt-6 text-black">
					As the RSVP deadline for our wedding has now passed, we unfortunately
					can no longer accept confirmations for attendance. We would have loved
					for you to join us on our special day, but the finalised guest list
					has now been submitted. Your presence will be truly missed. Thank you
					for understanding.
					<br />
					<br />
					Love, Samara and James
				</p>
			</div>
		</div>
	);
};

export default async function RsvpPage() {
	
	const user = await currentUser();

	if (!user) {
		authenticate("/rsvp");
	}

	return (
		<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h1 className="font-serif text-4xl text-black">
					Hey {user?.displayName}, we can’t wait to see you!
				</h1>
				<p className="mt-6 text-black">
					{	
						//change this when RSVP is over
						"We're so excited to celebrate with you. Please RSVP by Friday 11:59pm 12th July, 2024."
						// "Thank you for taking the time to RSVP. We're so excited to celebrate with you. The RSVP window has now closed, but you can still view your responses below."
					}
				</p>
				<SignOutButton />
			</div>

			<div className="mx-auto max-w-xl space-y-8 pt-16">
				<RsvpCardNew
					directionLink="http://maps.apple.com/?q=JK+Banquet+Hall,+15A+Perry+Vale,+London+SE23+2NE"
					wedding="london"
					title="London Wedding"
					subtitle="Saturday 14th September 2024"
					details={{
						time: "3:30 PM",
						location: ["JK Banquet Hall", "15A Perry Vale, London SE23 2NE"],
					}}
					isAttending={user?.londonIsAttending}
					additionalActions={<CaptureDietaryRequirements />}
				/>
				{/* <RsvpCardNew
					directionLink="http://maps.apple.com/?q=Ashton+Lodge+Country+House,+Street+Ashton,+Rugby+CV23+0PJ"
					wedding="rugby"
					title="Rugby Wedding"
					subtitle="Wednesday 18th September 2024"
					details={{
						time: "1:45 PM",
						location: [
							"Ashton Lodge Country House",
							"Street Ashton, Rugby CV23 0PJ",
						],
					}}
					isAttending={user?.rugbyIsAttending}
				/> */}
			</div>
		</div>
	);
}

export const dynamic = "force-dynamic";
