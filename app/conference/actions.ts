"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const VALID_INTERESTS = ["fairshare", "bookthechurch", "nave", "general"] as const;
const VALID_SOURCES = ["fairshare", "bookthechurch", "nave", "none"] as const;
const VALID_CONFERENCES = [
  "rio-texas", "north-georgia", "louisiana", "texas-annual", "arkansas", "other",
] as const;

type Interest = (typeof VALID_INTERESTS)[number];

export type SubmitState =
  | { status: "idle" }
  | { status: "ok"; name: string }
  | { status: "error"; message: string };

export async function submitLead(
  _prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const church = String(formData.get("church") ?? "").trim();
  const conference = String(formData.get("conference") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim() || null;
  const sourceRaw = String(formData.get("source") ?? "").trim();
  const source = (VALID_SOURCES as readonly string[]).includes(sourceRaw)
    ? sourceRaw
    : "none";

  const interests = formData
    .getAll("interests")
    .map((v) => String(v))
    .filter((v): v is Interest => (VALID_INTERESTS as readonly string[]).includes(v));

  if (!name) return { status: "error", message: "Please share your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { status: "error", message: "That email doesn't look right." };
  if (!church) return { status: "error", message: "Which church are you with?" };
  if (!(VALID_CONFERENCES as readonly string[]).includes(conference))
    return { status: "error", message: "Pick a conference." };

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );

  const { error: dbError } = await supabase.from("conference_leads").insert({
    name, email, church, conference, interests, note, source, event: "ac2026",
  });

  if (dbError) {
    console.error("supabase insert failed", dbError);
    return { status: "error", message: "Couldn't save that. Try again, or email wilson@wrootlabs.com." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const interestList = interests.length ? interests.join(", ") : "(none picked)";
      await resend.emails.send({
        from: "AC2026 leads <leads@wrootlabs.com>",
        to: ["wilson@wrootlabs.com"],
        replyTo: email,
        subject: `AC2026 lead: ${name} (${church})`,
        text: [
          `Name:       ${name}`,
          `Email:      ${email}`,
          `Church:     ${church}`,
          `Conference: ${conference}`,
          `Interests:  ${interestList}`,
          `Source:     ${source}`,
          ``,
          `Note:`,
          note ?? "(none)",
        ].join("\n"),
      });
    } catch (err) {
      console.error("resend send failed", err);
    }
  }

  return { status: "ok", name };
}
