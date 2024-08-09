import { formatDistance, subDays } from "date-fns";

export default function TopBanner() {
	return (
		<div className="relative isolate overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-red-600">
			<div className="flex items-center justify-center">
				<p className="text-sm leading-6 text-white capitalize">
					<strong className="font-semibold">RSVP Soon!</strong>
					<svg
						viewBox="0 0 2 2"
						className="mx-2 inline h-0.5 w-0.5 fill-current"
						aria-hidden="true"
					>
						<circle cx={1} cy={1} r={1} />
					</svg>
					only {formatDistance(new Date("2024-09-10"), new Date())} left to RSVP
				</p>
			</div>
		</div>
	);
}
