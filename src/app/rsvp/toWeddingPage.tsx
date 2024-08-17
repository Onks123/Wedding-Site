"use client";

import { Button } from "@/components/catalyst/button";
import { logout } from "./actions";

export default function ToWeddingPage() {
	return (
		<Button
			color="blue"
			className="flex justify-center items-center"
		>
			<a href='./wedding'>Wedding Page</a> 
		</Button>
	);
}
