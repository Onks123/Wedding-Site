import db from "./db";
import type { Prisma } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const inviteCode = async () => {
	const code = cookies().get("inviteCode");

	if (!code) {
		return null;
	}

	return code.value;
};

export const currentUser = async () => {
	const code = await inviteCode();

	if (!code) {
		return null;
	}

	return db.guest.findFirst({
		where: {
			id: code,
		},
	});
};

export const validateInvite = async (code: string) => {
	const guest = await db.guest.findFirst({
		where: {
			id: code,
		},
	});

	if (!guest) {
		return null;
	}

	cookies().set("inviteCode", code, {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
	});

	return guest;
};

export async function updateGuest(ops: Partial<Prisma.GuestUpdateInput>) {
	const user = await currentUser();
	if (!user) {
		return null;
	}

	const res = await db.guest.update({
		where: {
			id: user.id,
		},
		data: {
			...ops,
		},
	});

	revalidatePath("/");

	return res;
}

export const authenticate = (redirectTo: string) => {
	redirect(`/verify?redirect=${redirectTo}`);
};
