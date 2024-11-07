import Image, { type StaticImageData } from "next/image";
import { NavbarSpace } from "@/components/navbar";
import type { ReactNode } from "react";
import { Button } from "@/components/catalyst/button";
import { currentUser } from "@/lib/auth";

type PartyDetailsPageProps = {
	title: string;
	description: string;
	image: StaticImageData;
	children: ReactNode;
	redirectUrl: string;
	preTitle: string;
	imageTitleBig: string;
	imageTitleSmall: string;
};

type HasAccessProps = {
	children: ReactNode;
	redirectUrl: string;
};

async function HasAccess(props: HasAccessProps) {
	const user = await currentUser();
	if (user) {
		return <>{props.children}</>;
	} else {
		return (
			<div className="prose text-black">
				<div className="bg-neutral-100 p-6">
					<h1 className="font-serif font-normal">Verify invite to view</h1>
					<p>
						The details of this venue are only available to verified guests.
					</p>

					<div className="not-prose">
						<Button href={`/verify?redirect=${props.redirectUrl}`}>
							Sign in
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default async function PartyDetailsPage(props: PartyDetailsPageProps) {
	return (
		<main>
			<div className="-z-50 flex h-full min-h-screen">
				<div className="relative hidden w-full md:flex">
					<div className="sticky top-0 h-screen w-full">
						<div className="relative">
							<Image
								src={props.image}
								alt="bg"
								className="h-screen w-full object-cover"
								placeholder="blur"
							/>

							<div className="absolute top-0 z-50 flex h-full w-full items-center justify-center">
								<div className="mx-auto max-w-6xl p-8 backdrop-blur-md" >
									<h2 className="font-serif text-6xl text-white font-medium">
										{props.imageTitleBig}
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full -z-50 max-w-lg pt-16 sm:pt-0">
					<NavbarSpace />
					<div className="relative">
						<Image
							src={props.image}
							alt="bg"
							className="h-auto w-auto object-contain"
							placeholder="blur"
						/>

						<div className="absolute top-3 z-49 flex h-full w-full items-center justify-center">
							<div className="mx-auto max-w-6xl p-2 backdrop-blur-md overflow-hidden" >
								<h2 className="font-serif text-4xl text-white font-medium">
									{props.imageTitleSmall}
								</h2>
							</div>
						</div>
					</div>
					<div className="prose text-black">
						<div className="p-6">
							<h4 className="mt-0 text-lg font-medium">{props.preTitle}</h4>
							<h1 className="font-serif font-normal">{props.title}</h1>
							<p>{props.description}</p>
						</div>
					</div>

					<HasAccess redirectUrl={props.redirectUrl}>
						{props.children}
					</HasAccess>
				</div>
			</div>
		</main>
	);
}
