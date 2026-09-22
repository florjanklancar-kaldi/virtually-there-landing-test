"use client";

import { Loader2Icon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { joinWaitlist, type WaitlistState } from "@/app/_actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: WaitlistState = { status: "idle" };

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);

  useEffect(() => {
    if (state.status === "success") toast.success(state.message);
    if (state.status === "error") toast.error(state.message);
  }, [state]);

  return (
    <form
      action={formAction}
      className="mx-auto flex w-full max-w-md flex-col gap-2 sm:flex-row"
    >
      <Label htmlFor="email" className="sr-only">
        Email address
      </Label>
      <Input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        className="h-11 flex-1"
        aria-invalid={state.status === "error" || undefined}
      />
      <Button type="submit" disabled={pending} className="h-11 px-5">
        {pending && <Loader2Icon className="animate-spin" />}
        Join the waitlist
      </Button>
    </form>
  );
}
