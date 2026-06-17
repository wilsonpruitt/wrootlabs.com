import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import home from "../page.module.css";

export const metadata: Metadata = {
  title: "Río Texas Annual Conference — Wroot Labs",
  description:
    "Stop by the Wroot Labs table at Río Texas AC2026 — send a quick email and we'll be in touch with whichever of our church tools would actually help.",
  robots: { index: false, follow: false },
};

const LABELS: Record<string, string> = {
  fairshare: "FairShare",
  bookthechurch: "Book the Church",
  nave: "nave.build",
};

export default async function ConferencePage({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}) {
  const { p } = await searchParams;
  const label = p && LABELS[p] ? LABELS[p] : null;
  const subject = label
    ? `Wroot Labs at Río Texas — ${label}`
    : "Wroot Labs at Río Texas AC";
  const body =
    "Hi Wilson — we connected at Río Texas AC.\n\nName:\nChurch:\nWhat would help:\n";
  const mailto = `mailto:wilson@wrootlabs.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <header className={home.header}>
        <div className={home.shell}>
          <a href="/" aria-label="Wroot Labs home">
            <Image
              src="/wordmark.svg"
              alt="Wroot Labs"
              width={240}
              height={60}
              priority
              className={home.wordmark}
            />
          </a>
        </div>
      </header>

      <main className={home.main}>
        <section className={home.shell}>
          <p className={styles.eyebrow}>
            Río Texas Annual Conference · June 17, 2026
          </p>
          <h1 className={home.h1}>Thanks for stopping by.</h1>
          <p className={home.lede}>
            Send a quick email and I&rsquo;ll be in touch after conference — no
            marketing list, no automated drip. Just a real note from Wilson with
            whichever of these would actually help your church. Tell me which
            ones, and I&rsquo;ll send something specific.
          </p>
        </section>

        <section className={home.shell}>
          <a className={styles.btn} href={mailto}>
            Email Wilson →
          </a>
        </section>
      </main>

      <footer className={home.footer}>
        <div className={home.shell}>
          <p className={home.colophon}>
            Wroot Labs is an independent software shop building careful tools for
            the local church. <a href="/">See what we make →</a>
          </p>
          <p className={home.colophonMeta}>
            © {new Date().getFullYear()} Wroot Labs · wilson@wrootlabs.com
          </p>
        </div>
      </footer>
    </>
  );
}
