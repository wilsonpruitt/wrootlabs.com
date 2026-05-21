import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — Wroot Labs",
  description:
    "The rules of the road for using Wroot Labs products — Lampstand, nave.build, Fairshare, Book the Church, Echo, Chapel. Plain language, written by a pastor.",
};

const EFFECTIVE = "May 21, 2026";

export default function TermsPage() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <a href="/" className={styles.wordmark}>
          Wroot Labs
        </a>
      </header>

      <main className={styles.main}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.h1}>Terms of Service</h1>
        <p className={styles.effective}>Effective {EFFECTIVE}</p>

        <p className={styles.lede}>
          These are the terms that govern your use of Wroot Labs products. We
          have tried to write them in plain English. They are still a
          contract; please read them.
        </p>

        <section className={styles.section}>
          <h2>1. Who we are</h2>
          <p>
            "Wroot Labs," "we," and "us" refer to Wroot Labs LLC, a Texas
            limited liability company. "You" means the person or organization
            using one of our products. These terms apply to{" "}
            <a href="https://wrootlabs.com">wrootlabs.com</a> and every product
            we operate, including{" "}
            <a href="https://lampstand.review">Lampstand</a> (church-website
            audits), <a href="https://nave.build">nave.build</a> (church
            websites), <a href="https://fairshare.wrootlabs.com">Fairshare</a>{" "}
            (apportionment planning), <a href="https://bookthechurch.com">Book the
            Church</a> (venue rental), <a href="https://echochurch.app">Echo</a>{" "}
            (social-media autopilot), and{" "}
            <a href="https://chapelapp.com">Chapel</a> (multi-tenant church
            management). Where a specific product has additional terms,
            those terms are noted below.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Using our products</h2>
          <p>
            We do our best to keep our products available and working. We
            cannot promise they will be available without interruption, and
            we will not be liable for occasional downtime.
          </p>
          <p>
            You agree to use our products lawfully and in good faith. You
            will not attempt to break into accounts that are not yours, abuse
            our systems, send spam through our tools, or use our products to
            do anything illegal or harmful. We may suspend or terminate
            accounts that violate this in a serious way; in most cases we
            will write to you first.
          </p>
          <p>
            Some products require an account. You are responsible for
            keeping your login information secure and for what happens under
            your account.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Payments and refunds</h2>
          <p>
            Our pricing is published on each product's website. Payments are
            processed by Stripe and are subject to Stripe's terms.
          </p>

          <h3>Lampstand audits</h3>
          <p>
            Lampstand is a one-time service. We will issue a full refund if
            you request one within forty-eight hours of payment and before
            the audit has been delivered. After the audit has been delivered,
            we do not issue refunds — but if the report contains factual
            errors, or recommendations that do not fit your congregation, we
            will revise it once at no additional charge. Write to{" "}
            <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a> to
            request either.
          </p>

          <h3>Subscriptions (Fairshare, Chapel, Book the Church, Echo, nave.build)</h3>
          <p>
            Subscriptions are billed in advance for each subscription period.
            You can cancel at any time; cancellation takes effect at the end
            of the current paid period, and we do not refund partial periods.
            If we materially break a product during a paid period and cannot
            promptly fix it, we will refund the affected portion in good
            faith.
          </p>

          <h3>Taxes</h3>
          <p>
            Prices shown do not include sales tax. Where sales tax is owed,
            it will be added at checkout.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Intellectual property</h2>
          <h3>What we own</h3>
          <p>
            We retain all rights to our software, websites, brand, audit
            framework, rubric, exemplar library, and other proprietary
            materials. Nothing in these terms transfers ownership of our
            work to you.
          </p>

          <h3>What you own</h3>
          <p>
            You retain all rights to the content you give us — your church's
            information, your member data, the records you enter into our
            applications, the website content we read during an audit. We
            never claim ownership of your content.
          </p>

          <h3>Lampstand audit reports — license to you</h3>
          <p>
            When we deliver a Lampstand audit report, you receive a
            perpetual, non-exclusive license to read, share, forward, and
            act on the report within your church or organization. You may
            quote brief excerpts publicly with attribution to Wroot Labs.
            You may not republish the report in its entirety, resell it, or
            use it as a basis for a competing product.
          </p>

          <h3>Feedback</h3>
          <p>
            If you send us suggestions, ideas, or feedback, you grant us a
            perpetual, royalty-free license to use them to improve our
            products, without obligation to you.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Our products are advisory</h2>
          <p>
            A Lampstand audit, a Fairshare projection, and any
            recommendation from any Wroot Labs product is advisory. You
            remain responsible for the decisions you make about your church,
            its website, its finances, and its operations. We work hard to
            be accurate and pastorally honest, and we review every Lampstand
            report before delivery, but we are not a substitute for legal,
            financial, or tax counsel.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Liability</h2>
          <p>
            To the maximum extent permitted by law, our total liability to
            you for any claim arising out of these terms or your use of our
            products is limited to the amount you have paid us for the
            product in question in the twelve months preceding the claim.
            We are not liable for indirect, incidental, consequential, or
            punitive damages. Some jurisdictions do not allow these
            limitations; in those places, they apply only to the extent
            permitted.
          </p>
          <p>
            We provide our products "as is" and disclaim implied warranties
            of merchantability and fitness for a particular purpose to the
            extent law allows.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Privacy</h2>
          <p>
            How we handle your information is described in our{" "}
            <a href="/privacy">Privacy Policy</a>, which is part of these
            terms by reference.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Termination</h2>
          <p>
            You can stop using our products and cancel any subscription at
            any time. We may terminate your access if you violate these
            terms in a serious way, if we are required to by law, or if we
            decide to discontinue a product. If we discontinue a product
            with paid subscribers, we will give reasonable notice and refund
            any unused prepaid time.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. If we make a
            material change, we will update the effective date at the top
            of this page and, for products with subscribers, notify you by
            email. Continued use after a change means you accept the new
            terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Governing law and disputes</h2>
          <p>
            These terms are governed by the laws of the State of Texas,
            without regard to its conflict-of-laws principles. The courts
            located in Travis County, Texas have exclusive jurisdiction
            over any dispute that cannot be resolved informally between us.
            We agree to try to resolve any dispute by writing to each
            other first; suing is a last resort.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact</h2>
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
          <a href="/privacy">Privacy</a> · <a href="/support">Support</a> ·{" "}
          <a href="/">wrootlabs.com</a>
        </span>
      </footer>
    </div>
  );
}
