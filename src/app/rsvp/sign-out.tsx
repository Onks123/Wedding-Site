"use client";

import { Button } from "@/components/catalyst/button";
import { logout } from "./actions";

export default function SignOutButton() {
	return (
		<Button
			color="red"
			className="mt-6 ml-32 md:ml-60"
			onClick={() => {
				logout();
			}}
		>
			Sign Out
		</Button>
	);
}
