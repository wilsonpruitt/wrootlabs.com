import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

type Product = {
  name: string;
  description: string;
  href: string;
  meta?: string;
};

const products: Product[] = [
  {
    name: "Lampstand",
    description:
      "An editorial audit of your church's website, delivered as a designed PDF. Page-by-page Keep / Rewrite / Cut verdicts, plus a voice and audience read — pastoral judgment, not a rebuild.",
    href: "https://lampstand.review",
    meta: "Live · $49 / $149",
  },
  {
    name: "Echo",
    description:
      "Social-media autopilot for small and mid-sized churches. Sunday's sermon and the week's photos become a consistent week of posts with one short Monday approval. Show, don't tell.",
    href: "https://echochurch.app",
    meta: "Beta · from $90/yr",
  },
  {
    name: "FairShare",
    description:
      "Two apportionment tools for connexional Methodist churches: predict how budget decisions change your conference share before you file, and show your congregation exactly where every apportioned dollar goes — traced from conference ministries down to the General Church agencies it funds, with a printable bulletin insert.",
    href: "https://www.fairshare.church",
    meta: "Live · $24/yr",
  },
  {
    name: "Chapel",
    description:
      "Multi-tenant church management for small and mid-sized parishes — bulletins, services, contact lists, and the rota in one place. Built on the operational lessons of running a parish for ten years.",
    href: "https://chapelapp.com",
    meta: "Beta · free under 50 · $90/yr",
  },
  {
    name: "Book the Church",
    description:
      "Venue booking for parishes that hire out their hall, sanctuary, or fellowship space. Calendar, deposits, rental hours, and the boring paperwork — handled.",
    href: "https://www.bookthechurch.com",
    meta: "Beta · $90/yr",
  },
  {
    name: "Charles",
    description:
      "Music arrangement for the local church — hymn settings, choir parts, accompaniment, tailored to the musicians you actually have on a given Sunday.",
    href: "https://www.charlesscore.app",
    meta: "Beta",
  },
  {
    name: "Clara",
    description:
      "Music arrangement and orchestration for working musicians — variations, scoring, and parts generated around a tested arrangement engine.",
    href: "https://clarascore.app",
    meta: "Beta",
  },
  {
    name: "nave.build",
    description:
      "Quiet, careful church websites for parishes. $50 to build, set up in a week. Yours to host, or ours to keep tended for $10 a month. A productized version of the church-website work we already do.",
    href: "https://nave.build",
    meta: "Live · $50 build, optional $10/mo hosting",
  },
  {
    name: "Cupboard",
    description:
      "Tools for small feeding ministries — pantry intake, household tracking, monthly stakeholder reports. Productized from the workflows of a working food pantry that's been running for years.",
    href: "https://cupboard.cc",
    meta: "Beta · $99 one-time",
  },
  {
    name: "Plenary",
    description:
      "Annual conference companion for Methodist delegates — standing rules, agenda, committee motions, and Book of Discipline references in one place during session. Built for the floor, not the office.",
    href: "https://plenary.wrootlabs.com",
    meta: "Live",
  },
  {
    name: "Teller",
    description:
      "Phone-based shadow voting for annual conference sessions — a parallel tally that lets delegates and observers see how a vote would have gone, with lay and clergy preserved and anonymity protected.",
    href: "https://teller.wrootlabs.com",
    meta: "Live",
  },
  {
    name: "Conference Field Guide",
    description:
      "Annual-conference orientation for the delegates who sit in session — what each agency does, how the agenda and motions work, and the Book of Discipline behind them, with room to ask questions, weigh perspectives, and propose corrections. Bilingual, with a site for each conference.",
    href: "https://conferencefieldguide.org",
    meta: "Live · Río Texas + North Georgia",
  },
  {
    name: "Discern",
    description:
      "A guide for anyone sensing a call to ministry, meeting people where they actually are — youth, college, a second career, already in seminary — instead of flattening every path into one. The candidacy ladder, the orders, the seminaries, and the next concrete step, grounded in the Book of Discipline.",
    href: "https://discern.wrootlabs.com",
    meta: "Live · free, no login",
  },
];

export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.shell}>
          <Image
            src="/wordmark.svg"
            alt="Wroot Labs"
            width={240}
            height={60}
            priority
            className={styles.wordmark}
          />
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.shell}>
          <h1 className={styles.h1}>Software for the local church.</h1>
          <p className={styles.lede}>
            Wroot Labs builds careful tools for the work of ministry — small,
            quiet software made by someone who has had to use it on a Sunday
            morning.
          </p>
        </section>

        <section className={styles.shell}>
          <p className={styles.eyebrow}>Mission</p>
          <p className={styles.missionLede}>
            Give the local church back its time — and its authority.
          </p>
          <div className={styles.missionBody}>
            <p>
              The work of ministry — the gospel, healing, mercy, justice — keeps
              getting crowded out by the work of keeping the institution
              running: the admin, the reports, the rota, the opaque budgets. Our
              tools take that off a pastor&rsquo;s desk, so the hours go back
              where the calling is.
            </p>
            <p>
              And because so much of how a church&rsquo;s money and authority
              actually work is kept out of sight of the people who fund it, our
              tools make it plain — what you give, where it goes, and the say you
              already have. Not so churches do more, but so they are never
              passive before the institution they hold up.
            </p>
            <p>
              One aim under all of it: get the local church off the hamster wheel
              of institutional survival, and back to the work it was made for —
              making disciples, loving mercy, and walking humbly with God,
              together.
            </p>
          </div>
        </section>

        <section className={styles.shell}>
          <p className={styles.eyebrow}>An invitation</p>
          <p className={styles.missionLede}>
            Know a tool that would serve this?
          </p>
          <div className={styles.missionBody}>
            <p>
              If there&rsquo;s a piece of software that would take busywork off
              your ministry, or make a church&rsquo;s money and authority a
              little clearer — and no one has built it yet — we&rsquo;d love to
              hear it. Write to{" "}
              <a href="mailto:wilson@wrootlabs.com?subject=An%20idea%20for%20Wroot%20Labs">
                wilson@wrootlabs.com
              </a>{" "}
              and tell us the idea. If it serves the mission, we&rsquo;ll do our
              best to build it.
            </p>
          </div>
        </section>

        <section className={styles.shell}>
          <div className={styles.feature}>
            <div className={styles.featureBody}>
              <p className={styles.featureEyebrow}>Featured · something different</p>
              <h2 className={styles.featureTitle}>Kitchen Cabinet</h2>
              <p className={styles.featureText}>
                A playable simulation of the one season in Methodist life that
                nobody outside the room ever sees: the bishop and cabinet
                matching pastors to churches, where filling one pulpit empties
                another. Fictional, but true to how the work actually feels —
                and the most inventive thing we&rsquo;ve made.
              </p>
              <div className={styles.featureLinks}>
                <a
                  className={styles.featureLink}
                  href="https://cabinet.wrootlabs.com"
                  rel="noopener"
                >
                  Play the game →
                </a>
                <a
                  className={styles.featureLink}
                  href="https://cabinet.wrootlabs.com/vision"
                  rel="noopener"
                >
                  Read the vision →
                </a>
              </div>
            </div>
            <a
              className={styles.featureShot}
              href="https://cabinet.wrootlabs.com"
              rel="noopener"
              aria-label="Open the Kitchen Cabinet game board"
            >
              <Image
                className={styles.featureShotImg}
                src="/cabinet-board.png"
                alt="The Kitchen Cabinet appointment-season game board"
                width={1020}
                height={458}
              />
            </a>
          </div>
        </section>

        <section className={styles.shell}>
          <h2 className={styles.eyebrow}>Products</h2>
          <ul className={styles.titleList}>
            {products.map((p) => (
              <li key={p.name} className={styles.titleCard}>
                <h3 className={styles.titleName}>{p.name}</h3>
                {p.meta && <p className={styles.titleMeta}>{p.meta}</p>}
                <p className={styles.titleDescription}>{p.description}</p>
                {p.href !== "#" && (
                  <a className={styles.titleLink} href={p.href} rel="noopener">
                    Visit →
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.shell}>
          <p className={styles.eyebrow}>What&rsquo;s next</p>
          <p className={styles.missionLede}>
            Rounding out the marks of ministry.
          </p>
          <div className={styles.missionBody}>
            <p>
              The tools above mostly serve the <em>ordering</em> of a
              church&rsquo;s life. Next we&rsquo;re building for two more of the
              things a pastor is ordained to — worship and the sacraments, and
              the work of justice.{" "}
              <Link className={styles.titleLink} href="/soon">
                See what we&rsquo;re building →
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <p className={styles.colophon}>
            Wroot Labs is an independent software shop. Its sister imprint{" "}
            <a href="https://wrootpress.com" rel="noopener">
              Wroot Press
            </a>{" "}
            publishes books and digital editions in Wesleyan and patristic
            studies. Both are named for{" "}
            <a href="https://en.wikipedia.org/wiki/Wroot" rel="noopener">
              Wroot
            </a>
            , the Lincolnshire fen-edge village where the Wesley family lived
            in the early eighteenth century.
          </p>
          <p className={styles.colophonMeta}>
            © {new Date().getFullYear()} Wroot Labs ·{" "}
            <a href="https://wrootpress.com" rel="noopener">
              wrootpress.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
