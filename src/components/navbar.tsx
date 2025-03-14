import Link, { type LinkProps } from "next/link";
import {
	ArrowTopRightOnSquareIcon,
	TicketIcon,
	InboxIcon,
} from "@heroicons/react/16/solid";
import {
	Dropdown,
	DropdownButton,
	DropdownHeading,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
} from "@/components/catalyst/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { NavbarDivider } from "./catalyst/navbar";
import { Divider } from "./catalyst/divider";


export function NavbarSpace() {
	return <div className="sm:-h-3" />;
}

function NavbarLink(props: LinkProps & { children: React.ReactNode }) {
	return <Link className="transition-colors hover:text-black/50" {...props} />;
}

export default function DesktopNavbar() {
	return (
		<div className="fixed z-50 grid w-full sm:h-20 sm:grid-cols-3 sm:items-center sm:justify-center sm:px-8">
			<div />
			<div className="sm:flex sm:items-center sm:justify-center">
				<nav className="z-50 flex h-11 items-center justify-center whitespace-nowrap rounded-b-md border border-black/10 bg-white/90 pl-4 text-sm font-medium text-black shadow-md backdrop-blur-md sm:justify-normal sm:rounded-full sm:shadow-none">
					<div className="flex items-center space-x-3">
						<NavbarLink href="/">O&Z</NavbarLink>
						<NavbarDivider></NavbarDivider>
						<NavbarLink href="/wedding">Wedding</NavbarLink>
						<NavbarDivider></NavbarDivider>
						<NavbarLink href="/bridalParty">Party</NavbarLink>
						<NavbarDivider></NavbarDivider>
						<a href="https://www.amazon.co.uk/wedding/registry/1FDU26FDU86J" rel="noopener noreferrer" target="_blank">
							Registry
							<ArrowTopRightOnSquareIcon className="animate-wiggleLight -mt-1 ml-1 h-4 w-4 inline-block" />
						</a>
						<NavbarDivider></NavbarDivider>
						{/* <NavbarLink href="/faq">
						FAQs
						</NavbarLink> */}
					</div>

					<Dropdown>
						<DropdownButton className="flex ml-2 h-11 items-center rounded-b-md bg-white px-1.5 text-white">
							More
							<ChevronDownIcon />
						</DropdownButton>
						<DropdownMenu className="bg-white/90">
							<DropdownSection>
								<DropdownItem href="/rsvp" className="flex h-full w-full text-white bg-zinc-200 " >
									<TicketIcon className="animate-wiggle h-5 w-3 -rotate-45 fill-black" />
									RSVP
								</DropdownItem>
								<DropdownItem href="/faq" className="flex h-full w-full">
									<InboxIcon className="h-5 w-1 fill-black" />
									FAQs
								</DropdownItem>
							</DropdownSection>
						</DropdownMenu>
					</Dropdown>		
					{/* <Link
						href="/rsvp"
						className="ml-4 mr-1.5 flex h-8 items-center rounded-full border border-dashed border-black/30 bg-black px-1.5 pr-3 text-white"
					>
						<TicketIcon className="animate-wiggle mr-2 h-5 w-5 -rotate-45 p-px" />
						RSVP
					</Link> */}
				</nav>
			</div>
			<div />
		</div>
	);
}