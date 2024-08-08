import Link, { type LinkProps } from "next/link";
import {
	ArrowTopRightOnSquareIcon,
	TicketIcon,
} from "@heroicons/react/16/solid";

export function NavbarSpace() {
	return <div className="h-11 sm:h-20" />;
}

function NavbarLink(props: LinkProps & { children: React.ReactNode }) {
	return <Link className="transition-colors hover:text-black/50" {...props} />;
}

export default function DesktopNavbar() {
	return (
		<div className="fixed z-50 grid w-full sm:h-20 sm:grid-cols-3 sm:items-center sm:justify-between sm:px-8">
			<div />
			<div className="sm:flex sm:items-center sm:justify-center">
				<nav className="z-50 flex h-11 items-center justify-between whitespace-nowrap rounded-b-md border border-black/10 bg-white/90 pl-4 text-sm font-medium text-black shadow-md backdrop-blur-md sm:justify-normal sm:rounded-full sm:shadow-none">
					<div className="flex items-center space-x-4">
						<NavbarLink href="/">O&Z</NavbarLink>
						<NavbarLink href="/london">London</NavbarLink>
						{/* <NavbarLink href="/rugby">Rugby</NavbarLink> */}
						<NavbarLink href="https://www.johnlewis.com/wish-list/TFTNJNP">
							Registry
							<ArrowTopRightOnSquareIcon className="-mt-1 ml-1 hidden h-4 w-4 sm:inline-block" />
						</NavbarLink>
						<NavbarLink href="/faq">FAQs</NavbarLink>
					</div>

					<Link
						href="/rsvp"
						className="ml-4 mr-1.5 flex h-8 items-center rounded-full border border-dashed border-black/30 bg-black px-1.5 pr-3 text-white"
					>
						<TicketIcon className="mr-2 h-5 w-5 -rotate-45 p-px" />
						RSVP
					</Link>
				</nav>
			</div>
			<div />
		</div>
	);
}
