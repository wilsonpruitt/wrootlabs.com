import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import base from "../page.module.css";
import styles from "./soon.module.css";

export const metadata: Metadata = {
  title: "What we're building next — Wroot Labs",
  description:
    "The next Wroot Labs tools, organized by the marks of ministry — Sacrament (a lectionary worship planner and a sacramental-life tracker) and Justice (a parish justice profile and a congregational justice audit). In design, not yet released.",
};

type Tool = {
  name: string;
  description: string;
  tag: string;
};

const sacrament: Tool[] = [
  {
    name: "Lectionary worship planner",
    description:
      "Pick a Sunday and see the Revised Common Lectionary readings, the season's color, a collect, and hymns suggested by text and theme — composed into a printable, projectable order of worship. The software built for contemporary bands serves the lectionary church badly; this is the other way around.",
    tag: "In design",
  },
  {
    name: "Means of Grace",
    description:
      "A register for the sacramental life of a parish. Every baptism recorded, and the congregation's vow to nurture made operational — baptismal-anniversary nudges to families, confirmation cohorts, and a homebound-communion roster. The sacraments as pastoral promises kept, not just services held.",
    tag: "In design",
  },
];

const justice: Tool[] = [
  {
    name: "Parish Justice Profile",
    description:
      "A read of the justice realities in a church's own parish — housing and eviction, food access, school equity, environmental burden — drawn from public data and paired with the relevant Social Principle, plus who is already at work on it. Descriptive, not editorial.",
    tag: "In design",
  },
  {
    name: "Congregational Justice Audit",
    description:
      "The inward turn: does the church's own life embody what it preaches? A private, descriptive look at how leadership reflects the congregation and community, where the money goes, pay equity, and access — grounded in the church's own adopted commitments. A mirror, never a grade.",
    tag: "In design",
  },
];

const MARKS = [
  "Word",
  "Sacrament",
  "Order",
  "Service",
  "Compassion",
  "Justice",
] as const;
const NEXT = new Set(["Sacrament", "Justice"]);

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <li className={base.titleCard}>
      <h3 className={base.titleName}>{tool.name}</h3>
      <p className={styles.comingTag}>{tool.tag}</p>
      <p className={base.titleDescription}>{tool.description}</p>
    </li>
  );
}

export default function SoonPage() {
  return (
    <>
      <header className={base.header}>
        <div className={base.shell}>
          <Link href="/">
            <Image
              src="/wordmark.svg"
              alt="Wroot Labs"
              width={240}
              height={60}
              priority
              className={base.wordmark}
            />
          </Link>
        </div>
      </header>

      <main className={base.main}>
        <section className={base.shell}>
          <p className={base.eyebrow}>What we&rsquo;re building next</p>
          <h1 className={base.h1}>The marks of ministry.</h1>
          <p className={base.lede}>
            Six things a pastor is ordained to. Our tools have clustered around
            one of them — here is where we&rsquo;re headed next.
          </p>
        </section>

        <section className={base.shell}>
          <div className={base.missionBody}>
            <p>
              The church has its own word for what a pastor is for. Elders are
              ordained to <em>Word, Sacrament, Order, and Service</em>; deacons
              to <em>Word, Service, Compassion, and Justice</em>. Taken
              together, six marks of ministry.
            </p>
            <p>
              Most of what we&rsquo;ve built so far serves <strong>Order</strong>{" "}
              — the administering and ordering of a church&rsquo;s common life,
              because that is where the busywork piles up. But a calling is
              wider than its paperwork. The next two tools round out two more
              marks: <strong>Sacrament</strong> and <strong>Justice</strong>.
            </p>
          </div>
          <div className={styles.marks} aria-label="The six marks of ministry">
            {MARKS.map((m, i) => (
              <span key={m} style={{ display: "contents" }}>
                {i > 0 && <span className={styles.sep}>·</span>}
                <span
                  className={`${styles.mark} ${
                    NEXT.has(m) ? styles.markNext : ""
                  }`}
                >
                  {m}
                </span>
              </span>
            ))}
          </div>
        </section>

        <section className={`${base.shell} ${styles.markBlock}`}>
          <div>
            <p className={styles.markEyebrow}>Worship, font &amp; table</p>
            <h2 className={styles.markTitle}>Sacrament</h2>
          </div>
          <p className={styles.markBlurb}>
            Mainline churches plan worship around the lectionary, the hymnal,
            and the Book of Worship — and treat the sacraments as covenant, not
            just liturgy. Almost no software is built for that. We are.
          </p>
          <ul className={base.titleList}>
            {sacrament.map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </ul>
        </section>

        <section className={`${base.shell} ${styles.markBlock}`}>
          <div>
            <p className={styles.markEyebrow}>Witness, equity &amp; the neighborhood</p>
            <h2 className={styles.markTitle}>Justice</h2>
          </div>
          <p className={styles.markBlurb}>
            Justice tooling usually runs aground on partisanship. Our approach
            is descriptive: name what is true in a parish, pair it with what the
            church has already, formally, said it believes — the Social
            Principles — and leave the rest to the congregation. Two tools, one
            looking outward and one looking in.
          </p>
          <ul className={base.titleList}>
            {justice.map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </ul>
          <p className={styles.note}>
            A lighter companion, <em>Connectional Advocacy</em>, is also in the
            sketchbook — search a concern and get the denomination&rsquo;s
            adopted language and citations a church can stand on.
          </p>
        </section>

        <section className={base.shell}>
          <p className={base.eyebrow}>While these take shape</p>
          <p className={base.missionLede}>
            Is one of these what your church needs?
          </p>
          <div className={base.missionBody}>
            <p>
              These are in design, not yet released. If one of them is exactly
              what your ministry has been missing — or close — we&rsquo;d want
              to hear that while it&rsquo;s still taking shape. Write to{" "}
              <a href="mailto:wilson@wrootlabs.com?subject=A%20tool%20we%27re%20building%20next">
                wilson@wrootlabs.com
              </a>
              , or see{" "}
              <Link href="/" className={styles.backLink}>
                what&rsquo;s already live
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className={base.footer}>
        <div className={base.shell}>
          <p className={base.colophon}>
            Wroot Labs is an independent software shop. Its sister imprint{" "}
            <a href="https://wrootpress.com" rel="noopener">
              Wroot Press
            </a>{" "}
            publishes books and digital editions in Wesleyan and patristic
            studies.
          </p>
          <p className={base.colophonMeta}>
            © {new Date().getFullYear()} Wroot Labs ·{" "}
            <Link href="/">wrootlabs.com</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
