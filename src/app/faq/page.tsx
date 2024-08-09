import { authenticate, currentUser } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQs",
};

const faqs = [
	{
		id: 1,
		question: "What date should I RSVP by?",
		answer: "Please RSVP by Thursday 18th July 2024.",
	},
	{
		id: 2,
		question: "Is there parking available near your wedding venues?",
		answer:
			"Yes, the nearest car parks for the London wedding (Saturday 14th September) are ‘Perry Vale Parking’ & ‘24 Pearcefield Ave Parking’. There is parking on site for the Rugby wedding (Wednesday 18th September 2024).",
	},
	{
		id: 3,
		question: "Can I bring a plus one?",
		answer:
			"Unfortunately, no plus ones will be allowed for either of the weddings.",
	},
	{
		id: 4,
		question: "What is the dress code for your wedding?",
		answer:
			"Please dress smart for both occasions and refrain from wearing green, orange and gold to the London wedding and white to the Rugby wedding.",
	},
	{
		id: 5,
		question: "Can I take photos during the ceremony?",
		answer:
			"You are permitted to take photos and videos throughout the day, however we ask that you do not use flash so as to not interfere with the professional photographs and videos being taken.",
	},
	{
		id: 6,
		question: "Will the wedding take place indoors or outdoors?",
		answer: "Both weddings will take place indoors.",
	},
	{
		id: 7,
		question: "Will there be a gift table?",
		answer:
			"Yes, there will be a gift table at both weddings. If you would like to give a gift, please leave it there.",
	},
	{
		id: 8,
		question: "Can we send our wedding gift to you after the wedding?",
		answer:
			"Please email onkarandzara@gmail.com and we will inform you how you can get a gift to us.",
	},
	{
		id: 9,
		question: "What time should I arrive on both days?",
		answer:
			"The London Wedding will begin at 3:30pm and the Rugby Wedding starts at 1:45pm so please arrive in good time before they start.",
	},
	{
		id: 10,
		question: "Where can I find a registry of gifts for you both?",
		answer:
			"You can access our registry here: https://www.johnlewis.com/wish-list/TFTNJNP",
	},
	{
		id: 11,
		question: "Can I bring my children?",
		answer:
			"Unfortunately, only children within the families of the bride and groom will be permitted at the wedding.",
	},
	{
		id: 12,
		question:
			"Will there be meal options for guests with dietary restrictions or allergies?",
		answer:
			"Yes, there will be different meal options for guests with dietary restrictions at the London Wedding. There is also a form to be filled out by hand and sent back to us for the Rugby Wedding if you have any dietary restrictions or allergies.",
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
				<h2 className="font-serif text-4xl text-black">
					Frequently asked questions
				</h2>
				<p className="mt-6 text-balance text-black">
					Have a different question and can’t find the answer you’re looking
					for? Reach out to{" "}
					<a href="mailto:onkarandzara@gmail.com" className="font-medium underline">
						onkarandzara@gmail.com
					</a>{" "}
					we’ll get back to you as soon as we can.
				</p>
			</div>
			<div className="mt-20">
				<dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
					{faqs.map((faq) => (
						<div key={faq.id}>
							<dt className="text-base">{faq.question}</dt>
							<dd className="mt-2 text-base font-light text-gray-900">
								{faq.answer}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
