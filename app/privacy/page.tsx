import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Wroot Labs",
  description:
    "What Wroot Labs collects, how we use it, who we share it with, and how long we keep it. Covers all Wroot Labs products including Lampstand, nave.build, Fairshare, Book the Church, Echo, and Chapel.",
};

const EFFECTIVE = "May 21, 2026";

export default function PrivacyPage() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a href="/" className={styles.wordmark}>
          Wroot Labs
        </a>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.h1}>Privacy Policy</h1>
        <p className={styles.effective}>Effective {EFFECTIVE}</p>

        <p className={styles.lede}>
          Wroot Labs builds careful software for the local church. This page
          explains what we collect, why, who we share it with, and how long
          we keep it. We aim to collect as little as possible and to be
          plain about what we do with it.
        </p>

        <section className={styles.section}>
          <h2>Who we are</h2>
          <p>
            Wroot Labs LLC is a Texas limited liability company, based in
            Lakeway, Texas. We operate <a href="https://wrootlabs.com">wrootlabs.com</a>{" "}
            and a family of product sites including{" "}
            <a href="https://lampstand.review">lampstand.review</a>,{" "}
            <a href="https://nave.build">nave.build</a>,{" "}
            <a href="https://fairshare.wrootlabs.com">fairshare.wrootlabs.com</a>,{" "}
            <a href="https://bookthechurch.com">bookthechurch.com</a>,{" "}
            <a href="https://echochurch.app">echochurch.app</a>, and{" "}
            <a href="https://chapelapp.com">chapelapp.com</a>. This policy
            covers all of them.
          </p>
          <p>
            For any privacy question or request, write to{" "}
            <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a>. A
            real person reads every message.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What we collect</h2>
          <h3>Information you give us</h3>
          <ul>
            <li>
              <strong>Contact information.</strong> Your name, email address,
              church or organization name, and anything else you choose to
              include when you write to us or sign up for one of our products.
            </li>
            <li>
              <strong>Payment information.</strong> When you pay for one of our
              products, our payment processor (Stripe) collects your card
              details, billing address, and the amount of the charge. We never
              see your full card number; we see only the last four digits and
              the basic transaction record Stripe shares with us.
            </li>
            <li>
              <strong>Content you submit to a product.</strong> For Lampstand
              audits, this includes the URL of the website you ask us to
              review, and a captured copy of that site's public pages at the
              time of the audit. For products like Fairshare or Book the
              Church, this includes the records, names, and figures you
              enter into the application.
            </li>
            <li>
              <strong>Communications.</strong> The content of any email or
              message you send us, kept in our mailbox in the ordinary course
              of business.
            </li>
          </ul>

          <h3>Information we collect automatically</h3>
          <ul>
            <li>
              <strong>Server logs.</strong> Our hosting providers (Vercel,
              Cloudflare) log request metadata — IP address, page requested,
              user agent, timestamp — for operational and security purposes.
              We do not use these logs to build a profile of you.
            </li>
            <li>
              <strong>No third-party analytics, no advertising trackers.</strong>{" "}
              Wroot Labs marketing sites do not run Google Analytics, Facebook
              Pixel, or any advertising tracker. Logged-in product applications
              may use minimal first-party analytics to understand product
              usage; if so, that is disclosed in the product's specific
              documentation.
            </li>
            <li>
              <strong>Cookies.</strong> We use cookies only where they are
              required for a product to function (session cookies for
              logged-in applications) or where you opt in. We do not set
              advertising cookies.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How we use what we collect</h2>
          <ul>
            <li>To provide the product or service you asked for.</li>
            <li>To send you transactional messages — receipts, audit deliveries, password resets, important notices.</li>
            <li>To reply to your support requests.</li>
            <li>To improve our products by understanding which features are used and which are not.</li>
            <li>To comply with legal obligations (tax records, dispute resolution).</li>
          </ul>
          <p>
            We do not sell your personal information. We do not share it with
            advertisers. We do not use it to train third-party AI models.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Who we share information with</h2>
          <p>
            We use a small set of third-party service providers (sub-
            processors) to run our products. They access only the data
            necessary to perform their function, under written agreements
            that require them to protect it.
          </p>
          <ul>
            <li>
              <strong>Stripe</strong> — payment processing. Subject to Stripe's
              own{" "}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Vercel</strong> — application hosting and server logs.
            </li>
            <li>
              <strong>Cloudflare</strong> — DNS and edge networking.
            </li>
            <li>
              <strong>Supabase</strong> — Postgres database hosting for
              specific products (Fairshare, Chapel, and others where noted).
            </li>
            <li>
              <strong>Google Workspace</strong> — email (wilson@wrootlabs.com
              and aliases).
            </li>
            <li>
              <strong>Anthropic</strong> — large-language-model calls used by
              certain product features (notably Lampstand's classification
              and verdict passes). The content sent to Anthropic during a
              Lampstand audit is the rendered text of the church's public
              website. Anthropic does not retain this content for training
              when accessed via API under standard terms.
            </li>
            <li>
              <strong>Resend</strong> — transactional email delivery, where
              applicable.
            </li>
            <li>
              <strong>Mercury</strong> — business banking. Records of payments
              are reflected in our bank statements.
            </li>
          </ul>
          <p>
            We will also disclose information if required by law, or to
            protect the safety, rights, or property of Wroot Labs, our
            customers, or others.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How long we keep it</h2>
          <ul>
            <li>
              <strong>Audit deliverables (Lampstand).</strong> We retain the
              final report PDF and the JSON manifest that produced it for one
              year after delivery, to support follow-up questions and free
              revisions. Captured copies of the audited site's pages are
              purged within thirty days of delivery.
            </li>
            <li>
              <strong>Application data.</strong> For products with logged-in
              accounts, your data is retained as long as your account is
              active. On cancellation, data is deleted within ninety days
              unless we are required to retain it longer (for example, tax
              records).
            </li>
            <li>
              <strong>Communications.</strong> Email correspondence is
              retained in our mailbox in the ordinary course of business.
            </li>
            <li>
              <strong>Payment records.</strong> Retained for seven years for
              tax and accounting compliance.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Your rights</h2>
          <p>
            You can ask us at any time to:
          </p>
          <ul>
            <li>tell you what information we have about you,</li>
            <li>correct anything that is wrong,</li>
            <li>delete your information, where we are not required to keep it,</li>
            <li>export your information in a portable format.</li>
          </ul>
          <p>
            Write to <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a>{" "}
            with the request. We will respond within thirty days. If you are
            in California, Colorado, Virginia, the European Union, or any
            other jurisdiction with specific privacy rights, those rights are
            preserved here.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Children</h2>
          <p>
            Wroot Labs products are designed for adults working at churches
            and church-adjacent organizations. We do not knowingly collect
            information from anyone under the age of thirteen. If you believe
            we have, write to us and we will delete it.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Changes to this policy</h2>
          <p>
            If we make a material change to this policy, we will update the
            effective date at the top of the page and, where appropriate,
            notify customers of active products by email. Continued use of
            our products after a change means you accept the new policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            Wroot Labs LLC<br />
            110 Deerfield Cove<br />
            Lakeway, Texas 78734<br />
            <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a>
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© Wroot Labs LLC. Built in Austin, Texas.</span>
        <span>
          <a href="/terms">Terms</a> · <a href="/support">Support</a> ·{" "}
          <a href="/">wrootlabs.com</a>
        </span>
      </footer>
    </div>
  );
}
