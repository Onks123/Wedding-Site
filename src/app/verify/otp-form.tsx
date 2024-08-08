"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyOTP } from "./actions";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "@/components/catalyst/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

const FormSchema = z.object({
	pin: z.string().min(6, {
		message: "Your code must be 6 characters.",
	}),
});

export function InputOTPForm() {
	const searchParams = useSearchParams();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			pin: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		const red = searchParams.get("redirect");
		const result = await verifyOTP(data.pin, red);

		if (result?.error) {
			form.setError("pin", {
				type: "manual",
				message: result.error,
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
				<FormField
					control={form.control}
					name="pin"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Invite code</FormLabel>
							<FormControl>
								<InputOTP
									maxLength={6}
									inputMode="text"
									pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
									{...field}
								>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
										<InputOTPSlot index={4} />
										<InputOTPSlot index={5} />
									</InputOTPGroup>
								</InputOTP>
							</FormControl>
							<FormDescription>
								Please enter the code you received with your invitation.
							</FormDescription>
							{/* <FormMessage /> */}
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					disabled={form.formState.isSubmitting}
					className="mr-1"
				>
					{form.formState.isSubmitting && (
						<ArrowPathIcon className="ml-2 h-4 w-4 animate-spin" />
					)}
					Verify
				</Button>
			</form>
		</Form>
	);
}
