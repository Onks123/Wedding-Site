"use client";

import { useState } from "react";
import { Button } from "@/components/catalyst/button";
import {
	Dialog,
	DialogActions,
	DialogBody,
	DialogDescription,
	DialogTitle,
} from "@/components/catalyst/dialog";
import { Text, TextLink } from "@/components/catalyst/text";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

export function CaptureDietaryRequirements() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button type="button" color="orange" onClick={() => setIsOpen(true)}>
				Dietary Requirements?
			</Button>
			<Dialog open={isOpen} onClose={setIsOpen}>
				<DialogTitle>Dietary Requirements</DialogTitle>
				<DialogDescription color="red">
					If you have any dietary requirements, please let download the form
					below, fill it out, and email it back to us.
				</DialogDescription>
				<DialogBody className="text-sm/6 text-zinc-900 dark:text-white">
					<Button
						href="https://ashtonlodgecountryhouse.com/wp-content/uploads/sites/7/2019/08/Ashton-Lodge-Dietary-Requirement-Form.pdf"
						target="_blank"
						color="cyan"
					>
						<ArrowDownTrayIcon />
						Download Form
					</Button>
					<Text className="pt-4">
						Please note that we require this form to be returned to us at least
						8 weeks before our wedding day. Please email the completed form to{" "}
						<TextLink href="mailto:dietaryrequirements@sj24.co?subject=Ruby Dietary Requirements Form">
							dietaryrequirements@sj24.co.
						</TextLink>
					</Text>
				</DialogBody>
				<DialogActions>
					<Button onClick={() => setIsOpen(false)}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
