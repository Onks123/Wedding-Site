"use client";

import { Button } from "@/components/catalyst/button";
import { logout } from "./actions";

export default function SignOutButton() {
	return (
		<Button
			color="red"
			className="flex justify-center items-center"
			onClick={() => {
				logout();
			}}
		>
			Sign Out
		</Button>
	);
}
