"use server";

import { validateInvite } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function verifyOTP(otp: string, redirectTo: string | null) {
	const invite = await validateInvite(otp);

	if (!invite) {
		return { error: "Invalid code", result: false };
	}

	if (redirectTo) {
		redirect(redirectTo);
	}
		redirect("/rsvp");
}
