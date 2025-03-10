import RsvpCardNew from "@/app/rsvp/rsvp-card";
import { CaptureDietaryRequirements } from "@/app/rsvp/captureDietaryRequirements";
import SignOutButton from "./sign-out";
import type { Metadata } from "next";
import { authenticate, currentUser } from "@/lib/auth";
import ToWeddingPage from "./toWeddingPage";
import ToFAQPage from "./toFAQPage";

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
					for you to join us on our special day, but the final guest list
					has now been submitted. Your presence will be truly missed. Thank you
					for understanding.
					<br />
					<br />
					Love, Onkar and Zara
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
			<div className="mx-auto max-w-2xl text-center space-y-1">
				<h1 className="font-serif text-4xl text-black pt-10">
					Hey {user?.displayName}, we can’t wait to see you!
				</h1>
				<p className="mt-6 pt-7 pb-4 text-black">
					{	
						//change this when RSVP is over
						"Thank you for taking the time to RSVP - the RSVP window has now closed, but you can still view your responses below."
					}
				</p>
				{/* <p className="mt-6 pt-7 pb-3 text-black">
					{
						"Please RSVP by Friday 27th December 2024 latest!"
					}
				</p> */}
				<p className="pb-10 text-black">
						<b>NOTE:</b> You have confirmed for <u>all</u> of the names above - in the case there is more than one name above and someone can <u>not</u> make it, please reach out and let us know ASAP.
				</p>
			</div>

			<div className="mx-auto max-w-xl space-y-6 pt-13">
				{user?.invitedToCeremony &&(
					<RsvpCardNew
						directionLink="https://www.google.com/maps/dir//Prince+Charles+Ave,+Orsett,+Grays+RM16+3HS/@51.5158374,0.2954933,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d8b801ccafe345:0x6136e805ecefafaa!2m2!1d0.3778935!2d51.5158663?entry=ttu"
						wedding="ceremony"
						title="Wedding Ceremony"
						subtitle="Sunday 16th March 2025"
						details={{
							time: "1:15 PM",
							location: ["Orsett Hall", "Prince Charles Avenue, Orsett, Essex, RM16 3HS"],
						}}
						isAttending={user?.ceremonyIsAttending}
					/>
				)}

				<RsvpCardNew
					directionLink="https://www.google.com/maps/dir//Prince+Charles+Ave,+Orsett,+Grays+RM16+3HS/@51.5158374,0.2954933,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d8b801ccafe345:0x6136e805ecefafaa!2m2!1d0.3778935!2d51.5158663?entry=ttu"
					wedding="reception"
					title="Drinks & Evening Reception"
					subtitle="Sunday 16th March 2025"
					details={{
						time: "3:00 PM",
						location: ["Orsett Hall", "Prince Charles Avenue, Orsett, Essex, RM16 3HS"],
					}}
					isAttending={user?.receptionIsAttending}
				/>
			</div>
			<div className="mt-8 flex gap-x-2 justify-center items-center">
				<ToWeddingPage />
				<ToFAQPage />
				<SignOutButton />
			</div>
		</div>
	);
}

export const dynamic = "force-dynamic";
