"use server";

import { currentUser, updateGuest } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { track } from "@vercel/analytics/server";

type Wedding = "ceremony" | "reception";

export const respond = async (formData: FormData, wedding: Wedding) => {
	"use server";

	const user = await currentUser();

	const response = formData.get("response") as string;

	track("rsvp response", {
		wedding,
		response: response === "going",
		user: user?.id || "anonymous",
		name: user?.fullName || "anonymous",
	});

	return await updateGuest({
		[`${wedding}IsAttending`]: response === "going",
	});
};

export const updateResponse = async (going: boolean, wedding: Wedding) => {
	"use server";

	const user = await currentUser();

	return await updateGuest({
		[`${wedding}IsAttending`]: going,
	});
};

export const logout = async () => {
	"use server";

	cookies().delete("inviteCode");

	revalidatePath("/");
};
