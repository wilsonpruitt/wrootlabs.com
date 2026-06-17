"use client";

import { useActionState } from "react";
import { submitLead, type SubmitState } from "./actions";
import styles from "./page.module.css";

const initial: SubmitState = { status: "idle" };

const INTERESTS: { id: string; label: string; sub: string }[] = [
  { id: "fairshare", label: "Fairshare", sub: "make sure we're paying the right apportionment" },
  { id: "bookthechurch", label: "Book the Church", sub: "handle our outside rentals (and maybe internal scheduling)" },
  { id: "nave", label: "nave.build", sub: "we need a better website" },
  { id: "general", label: "Just keep me posted", sub: "I want to know what Wroot Labs is up to" },
];

const SOURCE_TO_INTEREST: Record<string, string> = {
  fairshare: "fairshare",
  bookthechurch: "bookthechurch",
  nave: "nave",
};

export function ConferenceForm({ source }: { source: string }) {
  const [state, formAction, pending] = useActionState(submitLead, initial);
  const preChecked = SOURCE_TO_INTEREST[source];

  if (state.status === "ok") {
    return (
      <div className={styles.thankyou}>
        <h2 className={styles.h1}>Got it.</h2>
        <p className={styles.lede}>
          Thank you, {state.name}. I&rsquo;ll write back within a week of conference closing —
          usually faster. If something is on fire before then,{" "}
          <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a>.
        </p>
        <p className={styles.signoff}>
          — Wilson Pruitt
          <br />
          <em>Pastor, Covenant UMC Austin · Wroot Labs</em>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form} noValidate>
      <input type="hidden" name="source" value={source} />

      <Field label="Name" htmlFor="name">
        <input id="name" name="name" type="text" required autoComplete="name" />
      </Field>

      <Field label="Email" htmlFor="email">
        <input id="email" name="email" type="email" required autoComplete="email" inputMode="email" />
      </Field>

      <Field label="Church" htmlFor="church">
        <input
          id="church" name="church" type="text" required autoComplete="organization"
          placeholder="First UMC Anywhere"
        />
      </Field>

      <Field label="Conference" htmlFor="conference">
        <select id="conference" name="conference" defaultValue="rio-texas" required>
          <option value="rio-texas">Río Texas</option>
          <option value="north-georgia">North Georgia</option>
          <option value="louisiana">Louisiana</option>
          <option value="texas-annual">Texas Annual</option>
          <option value="arkansas">Arkansas</option>
          <option value="other">Other</option>
        </select>
      </Field>

      <fieldset className={styles.checkGroup}>
        <legend className={styles.label}>What would help your church?</legend>
        {INTERESTS.map((it) => (
          <label key={it.id} className={styles.checkRow}>
            <input
              type="checkbox"
              name="interests"
              value={it.id}
              defaultChecked={preChecked === it.id}
            />
            <span>
              <strong>{it.label}</strong>
              <span className={styles.checkSub}> — {it.sub}</span>
            </span>
          </label>
        ))}
      </fieldset>

      <Field label="Anything specific I should know? (optional)" htmlFor="note">
        <textarea
          id="note" name="note" rows={3}
          placeholder="We've been wrestling with our apportionment math for two years…"
        />
      </Field>

      {state.status === "error" && <p className={styles.error}>{state.message}</p>}

      <button type="submit" className={styles.btn} disabled={pending}>
        {pending ? "Sending…" : "Send →"}
      </button>
    </form>
  );
}

function Field({
  label, htmlFor, children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={htmlFor} className={styles.label}>{label}</label>
      {children}
    </div>
  );
}
