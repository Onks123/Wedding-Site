import { authenticate, currentUser } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQs",
};

const faqs = [
	{
		id: 1,
		question: "What date should I RSVP by?",
		answer: "Please RSVP by Friday 27th December 2024 latest.",
	},
	{
		id: 2,
		question: "Can I change/cancel my RSVP?",
		answer: "Your RSVP can be changed BEFORE the end date. If you're canceling anytime AFTER this, we respectfully ask you consider supporting us financially, to help us manage our costs during the wedding process. This would be appreciated!",
	},
	{
		id: 3,
		question: "Can I bring a plus one?",
		answer:
			"Unfortunately, No plus ones will be allowed for the wedding - please do contact us if there's any concerns.",
	},
	{
		id: 4,
		question: "Can I bring my children?",
		answer:
			"Only children within the families of the bride & groom and those who we're already aware of (please check your invite/RSVP) will be permitted at the wedding - contact us if there's any concerns.",
	},
	{
		id: 5,
		question: "What is the dress code for the wedding?",
		answer:
			"Kindly try to avoid wearing purple, lavender, and navy. Otherwise, with three cultures being celebrated, we encourage you to dress as creatively as you like — traditional attire is absolutely welcome! Just a gentle reminder to please respect the occasion and dress modestly. Thank you!",
	},
	{
		id: 6,
		question: "What time should I arrive on the day?",
		answer:
			"Please refer to your invite/RSVP and the Wedding page as to what time you should arrive - if you're NOT invited to the ceremony, you are welcome to join for the Drinks before the Reception. If you ARE invited to the ceremony, it will be starting around 1:00pm.",
	},
	{
		id: 7,
		question: "Is there parking available at your venue?",
		answer:
			"Yes, there is limited parking onsite.",
	},
	{
		id: 8,
		question: "Can I take photos during the ceremony?",
		answer:
			"We would love for you to take photos and videos throughout the day, however, we ask that you be mindful of the professional photographs & videos being taken, and respect their instructions.",
	},
	{
		id: 9,
		question: "Will the wedding take place indoors or outdoors?",
		answer: "Wedding is currently planned to take place indoors.",
	},
	{
		id: 10,
		question: "Will there be a gift table?",
		answer:
			"We are currently not planning on having a gift table, but please refer to the registry if you would like to kindly gift to us.",
	},
	{
		id: 11,
		question: "Can we send our wedding gift to you after the wedding?",
		answer:
			"Please email onkarandzara@gmail.com and we will inform you of how you can get a gift to us, or refer to the registry.",
	},
	{
		id: 12,
		question: "Where can I find a registry of gifts for you both?",
		answer:
			"You can find our registry by pressing on the link at the top of the screen.",
	},
];

export default async function Faq() {
	const user = await currentUser();

	if (!user) {
		authenticate("/faq");
	}

	return (
		<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="font-serif pt-3 text-4xl text-black">
					Frequently asked questions
				</h2>
			</div>
			<div className="mt-10">
				<dl className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
					{faqs.map((faq) => (
						<div key={faq.id}>
							<dt className="text-base underline">{faq.question}</dt>
							<dd className="mt-2 text-base font-light text-gray-900">
								{faq.answer}
							</dd>
						</div>
					))}
				</dl>
			</div>
			<p className="mt-6 pt-3 text-balance text-center text-black">
					Have a different question? Reach out to{" "}
					<a href="mailto:onkarandzara@gmail.com" className="font-medium underline">
						onkarandzara@gmail.com
					</a>{" "}
					and we’ll get back to you as soon as we can.
				</p>
		</div>
	);
}
