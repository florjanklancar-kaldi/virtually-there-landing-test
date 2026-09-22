"use server";

import { z } from "zod";

const waitlistSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

export type WaitlistState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const parsed = waitlistSchema.safeParse({ email: formData.get("email") });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Invalid input.",
    };
  }

  // TODO: persist the signup (database, Resend audience, Loops, etc.)
  console.info("[waitlist] new signup", parsed.data.email);

  return { status: "success", message: "You're on the list! We'll be in touch soon." };
}
