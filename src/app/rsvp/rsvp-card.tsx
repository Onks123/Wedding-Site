"use client";

import { useFormStatus } from "react-dom";
import { Text, TextLink } from "@/components/catalyst/text";
import {
	Dropdown,
	DropdownButton,
	DropdownDescription,
	DropdownHeading,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
	DropdownSection,
} from "@/components/catalyst/dropdown";
import { Button } from "@/components/catalyst/button";
import {
	ClockIcon,
	HandThumbDownIcon,
	HandThumbUpIcon,
	MapIcon,
} from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import { respond, updateResponse } from "./actions";
import { Fragment, type ReactNode } from "react";

function Options() {
	const { pending } = useFormStatus();

	return (
		<>
			<Button
				color="green"
				type="submit"
				name="response"
				value="going"
				disabled={pending}
				className="h-full"
			>
				<HandThumbUpIcon />I{"'"}m Going
			</Button>
			<Button
				color="red"
				type="submit"
				name="response"
				value="not_going"
				disabled={pending}
			>
				<HandThumbDownIcon />
				Not Going
			</Button>
		</>
	);
}

type RsvpCardProps = {
	title: string;
	subtitle: string;
	details: {
		time: string;
		location: string[];
	};
	isAttending?: boolean | null;
	wedding: "ceremony" | "reception";
	additionalActions?: ReactNode;
	directionLink: string;
};

type ResponseProps = {
	isAttending?: boolean | null;
	additionalActions?: ReactNode;
	wedding: "ceremony" | "reception";
};

type UpdateStatusProps = {
	wedding: "ceremony" | "reception";
};

function UpdateStatus(props: UpdateStatusProps) {
	return (
		<Dropdown>
			<DropdownButton outline>
				Change
				<ChevronDownIcon />
			</DropdownButton>
			<DropdownMenu className="flex items-center">
				<DropdownSection>
					<DropdownHeading className="capitalize">
						{props.wedding} RSVP
					</DropdownHeading>

					<DropdownItem onClick={() => updateResponse(true, props.wedding)}>
						<HandThumbUpIcon />
						<DropdownLabel>Going</DropdownLabel>
						<DropdownDescription>We{"'"}ll see you there!</DropdownDescription>
					</DropdownItem>
					<DropdownItem onClick={() => updateResponse(false, props.wedding)}>
						<HandThumbDownIcon />
						<DropdownLabel>Not Going</DropdownLabel>
						<DropdownDescription>We{"'"}ll miss you :(</DropdownDescription>
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
}

function Response(props: ResponseProps) {
	return (
		<div>
			{props.isAttending ? (
				<Fragment>
					<h1 className="text-green-600">We{"'"}ll see you there!</h1>
					<Text>
						We{"'"}re so excited to celebrate with you. We hope you have a great
						time.
					</Text>
				</Fragment>
			) : (
				<Fragment>
					<h1 className="text-red-600">We{"'"}ll miss you.</h1>
					<Text>
						We{"'"}re so sorry you wont be able to make it. We hope to see you
						soon.
					</Text>
				</Fragment>
			)}

			{/* remove this when RSVP is over */}
			<div className="mt-3">
				<UpdateStatus wedding={props.wedding} />
			</div>
			{props.additionalActions && props.isAttending && (
				<div className="mt-2">{props.additionalActions}</div>
			)}
		</div>
	);
}

export default function RsvpCardNew(props: RsvpCardProps) {
	return (
		<div>
			<div className="relative overflow-clip rounded-2xl ring-1 ring-zinc-950/10">
				{props.isAttending !== null && (
					<>
						{props.isAttending ? (
							<div className="absolute bottom-0 right-0 -z-40 h-24 w-72 bg-green-300/70 blur-3xl" />
						) : (
							<div className="absolute bottom-0 right-0 -z-40 h-24 w-72 bg-red-200 blur-3xl" />
						)}
					</>
				)}
				<div className="w-full items-stretch justify-between p-4 sm:flex">
					<div>
						<h1 className="pb-1 font-medium">{props.title}</h1>
						<h1 className="text-sm font-light">{props.subtitle}</h1>
						<div className="pt-3">
							<div className="flex items-center gap-2">
								<ClockIcon className="h-4 w-4 text-black/70" />
								<Text>{props.details.time}</Text>
							</div>
							<div className="flex items-start gap-2">
								<MapIcon className="mt-[5px] h-4 w-4 text-black/70" />
								<Text>
									{props.details.location.map((line) => (
										<Fragment key={line}>
											{line}
											<br />
										</Fragment>
									))}
									<TextLink href={props.directionLink} rel="noopener noreferrer" target="_blank" > Directions</TextLink>
								</Text>
							</div>
						</div>
					</div>

					{/* remove this when RSVP is over */}
					{props.isAttending === null ? (
						<form
							className="flex flex-col items-stretch gap-3 pt-4 sm:pt-0"
							action={(e) => respond(e, props.wedding)}
						>
							<Options />
						</form>
					) : (
						<div className="flex max-w-60 items-center gap-3 pt-4 sm:pt-0">
							<Response
								wedding={props.wedding}
								isAttending={props.isAttending}
								additionalActions={props.additionalActions}
							/>
						</div>
					)}
					{/* <div className="flex max-w-60 items-center gap-3 pt-4 sm:pt-0">
						<Response
							wedding={props.wedding}
							isAttending={props.isAttending}
							additionalActions={props.additionalActions}
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
}
