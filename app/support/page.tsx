import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Support — Wroot Labs",
  description:
    "How to reach us, what each Wroot Labs charge is, and answers to the most common questions about Lampstand audits, nave.build, Fairshare, Book the Church, Echo, and Chapel.",
};

interface Decoder {
  readonly descriptor: string;
  readonly product: string;
}
const DECODER: readonly Decoder[] = [
  { descriptor: "WROOT LABS LAMPSTAND", product: "A one-time Lampstand church-website audit." },
  { descriptor: "WROOT LABS BTC", product: "Book the Church — venue-rental management." },
  { descriptor: "WROOT LABS FAIRSHARE", product: "Fairshare — annual conference apportionment planning." },
  { descriptor: "WROOT LABS NAVE", product: "nave.build — a church website built and hosted by us." },
  { descriptor: "WROOT LABS ECHO", product: "Echo — church social-media autopilot." },
  { descriptor: "WROOT LABS CHAPEL", product: "Chapel — multi-tenant church management." },
];

export default function SupportPage() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a href="/" className={styles.wordmark}>
          Wroot Labs
        </a>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>Help</p>
        <h1 className={styles.h1}>Support</h1>

        <p className={styles.lede}>
          A real person reads every message. If you wrote yesterday and
          haven&rsquo;t heard back, write again — it&rsquo;s a small shop and
          occasionally an email gets buried.
        </p>

        <section className={styles.section}>
          <h2>Reach us</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a>
            <br />
            <strong>Response time:</strong> within one business day, usually
            sooner.
            <br />
            <strong>Mailing address:</strong> Wroot Labs LLC, 110 Deerfield
            Cove, Lakeway, Texas 78734.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What charge did I just see on my statement?</h2>
          <p>
            Every Wroot Labs charge starts with <code>WROOT LABS</code>{" "}
            followed by the specific product. Here is what each one is:
          </p>
          <div className={styles.decoder}>
            {DECODER.map((d) => (
              <div key={d.descriptor} className={styles.decoderRow}>
                <code>{d.descriptor}</code>
                <span>{d.product}</span>
              </div>
            ))}
          </div>
          <p>
            If the descriptor on your statement doesn&rsquo;t match any of
            these, write to <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a>{" "}
            with the amount and date and we&rsquo;ll figure it out together.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Lampstand audits</h2>
          <dl className={styles.qa}>
            <dt>I bought an audit. When will I receive the report?</dt>
            <dd>
              Within forty-eight hours of payment. If you haven&rsquo;t
              received it by then, write to us — we&rsquo;d rather hear from
              you than have you wonder.
            </dd>

            <dt>Can I get a refund?</dt>
            <dd>
              Yes, before the report has been delivered. Email within
              forty-eight hours of payment and we&rsquo;ll refund in full.
              After delivery we don&rsquo;t refund — but if the report has
              factual errors or recommendations that don&rsquo;t fit your
              congregation, we&rsquo;ll revise it once at no charge.
            </dd>

            <dt>I lost the PDF. Can you resend it?</dt>
            <dd>
              Yes. We keep the report on file for a year after delivery.
              Email us and we&rsquo;ll send it again.
            </dd>

            <dt>Can I share the report with my staff or vestry?</dt>
            <dd>
              Yes — the license you receive with the report covers reading,
              forwarding, and acting on it within your church or
              organization. Pastors do this regularly.
            </dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2>Subscriptions (Fairshare, Book the Church, Chapel, Echo, nave.build)</h2>
          <dl className={styles.qa}>
            <dt>How do I cancel?</dt>
            <dd>
              Log into the product and cancel from your account settings, or
              email us and we&rsquo;ll do it for you. Cancellation takes
              effect at the end of the current paid period.
            </dd>

            <dt>I can&rsquo;t log in.</dt>
            <dd>
              Use the &ldquo;forgot password&rdquo; link on the sign-in page.
              If that doesn&rsquo;t work, email us with the address you signed
              up with and we&rsquo;ll sort it out.
            </dd>

            <dt>I&rsquo;m being charged but I thought I cancelled.</dt>
            <dd>
              Write to us with the amount, the date, and the email on the
              account. We&rsquo;ll find it and either confirm the
              cancellation is in flight or refund the charge.
            </dd>
          </dl>
        </section>

        <section className={styles.section}>
          <h2>Press, partnerships, and everything else</h2>
          <p>
            The same address works for all of it:{" "}
            <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a>.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© Wroot Labs LLC. Built in Austin, Texas.</span>
        <span>
          <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> ·{" "}
          <a href="/">wrootlabs.com</a>
        </span>
      </footer>
    </div>
  );
}
