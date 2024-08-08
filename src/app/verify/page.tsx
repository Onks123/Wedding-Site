import { redirect } from "next/navigation";
import { InputOTPForm } from "./otp-form";
import type { Metadata } from "next";
import { currentUser } from "@/lib/auth";

export const metadata: Metadata = {
	title: "Verify invite",
};

export default async function VerifyInvite() {
	const user = await currentUser();
	if (user) {
		return redirect("/rsvp");
	}

	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
			<div className="mx-auto max-w-2xl">
				<h2 className="font-serif text-4xl text-black">Verify your invite</h2>
				<p className="mt-6 text-black">
					You should have received an invite code. Please enter it below to
					continue. Please do not share your invite code with anyone, as it is
					unique to you.
				</p>
				<div className="py-8">
					<InputOTPForm />
				</div>
			</div>
		</div>
	);
}
