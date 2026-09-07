import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";

const TITLE = "Dillon & Bird Digital — technology, cloud and AI consulting in Dubai";
const DESCRIPTION =
  "The technology practice of Dillon and Bird Partners LLC-FZ, Dubai. E-invoicing readiness, cloud, applied AI, managed operations, websites, hosting, digital marketing and CRM.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    title: "Regulatory readiness: e-invoicing",
    body: "The UAE's move to structured electronic invoicing is not an IT upgrade. It reaches into finance operations, master data, supplier relationships and the systems of record beneath them — and it arrives with fixed dates and monthly penalties. We assess exposure, remediate the data, select the accredited provider that fits your architecture, and take you through to a controlled go-live.",
    cta: "Assess your exposure",
    subject: "E-invoicing readiness",
    items: [
      "Phase and scope determination",
      "System and ERP capability assessment",
      "Master data remediation",
      "Accredited provider selection",
      "Controlled go-live and testing",
    ],
  },
  {
    title: "Cloud and infrastructure modernisation",
    body: "Most UAE mid-market firms still carry a decade of infrastructure decisions nobody has revisited. We move workloads off ageing hardware onto architecture that scales, with recovery that has been tested rather than assumed — and for those already in the cloud, we take the commercial view too, because unexamined consumption is where budgets quietly disappear.",
    cta: "Review your estate",
    subject: "Cloud modernisation",
    items: [
      "Estate and dependency assessment",
      "Migration with continuity of service",
      "Recovery tested, not assumed",
      "Consumption and cost optimisation",
    ],
  },
  {
    title: "Applied AI",
    body: "Ambition is not in short supply; deployment is. We identify the handful of processes in your business where AI returns measurable hours — customer response, document handling, quotation, reconciliation — and we build them into production rather than into a pilot that never leaves the room. You see working software before you commit.",
    cta: "See it working",
    subject: "Applied AI",
    items: [
      "Use case identification and sizing",
      "Conversational assistants on web and WhatsApp",
      "Document and invoice intelligence",
      "Working demonstration before commitment",
    ],
  },
  {
    title: "Managed technology operations",
    body: "Transformation fails quietly, in the months after the consultants leave. We run the estate day to day — identity, endpoints, network, backup, security posture and the service desk your people actually call — under a single monthly agreement, so the capability you paid to build does not degrade the moment attention moves elsewhere.",
    cta: "Discuss coverage",
    subject: "Managed operations",
    items: [
      "Service desk with defined response times",
      "Proactive monitoring and patching",
      "Identity and access lifecycle",
      "Backup, continuity and security posture",
    ],
  },
  {
    title: "Website development",
    body: "Your website is a commercial asset, not a brochure. We design and build digital front ends that load fast, convert visitors into enquiries, hold up on the devices your market actually uses, and can be maintained by your own team without a retainer. Built to be found, measured and improved.",
    cta: "Scope a build",
    subject: "Website development",
    items: [
      "Positioning and content architecture",
      "Design and build, mobile first",
      "Search visibility and analytics",
      "Hosting, maintenance and handover",
    ],
  },
  {
    title: "Web hosting and AMC",
    body: "A site is a live asset with a maintenance obligation attached, and most organisations discover this only when a certificate expires or a plugin is exploited. We host on infrastructure sized to your traffic and hold it under an annual maintenance contract — patching, certificates, domain and DNS, uptime monitoring, off-site backups and a defined response when something breaks. One renewal date, one accountable party.",
    cta: "Discuss an AMC",
    subject: "Web hosting and AMC",
    items: [
      "Hosting sized to actual traffic",
      "Patching, plugins and certificates",
      "Domain, DNS and mail records",
      "Uptime monitoring and off-site backups",
      "Defined response times, single renewal",
    ],
  },
  {
    title: "Digital marketing",
    body: "Visibility is a commercial function, not a creative one. We build demand where your buyers already are — search, paid social and the content that earns a click — and we instrument it so that spend is answerable to enquiries rather than impressions. Campaigns are reported against cost per qualified lead, and we will tell you when a channel is not working.",
    cta: "Build a pipeline",
    subject: "Digital marketing",
    items: [
      "Search visibility and content",
      "Paid campaigns on Meta and Google",
      "Landing pages built to convert",
      "Tracking from click to enquiry",
      "Reporting on cost per qualified lead",
    ],
  },
  {
    title: "Customer platforms and CRM",
    body: "CRM programmes rarely fail on technology. They fail because the platform was selected before anyone mapped how revenue is actually won. We start with the commercial process, then choose the system, migrate the data intact, and stay through adoption — because a CRM nobody updates is worse than the spreadsheet it replaced.",
    cta: "Map your process",
    subject: "CRM and customer platforms",
    items: [
      "Commercial process mapping",
      "Platform selection and configuration",
      "Data migration with integrity checks",
      "Adoption support and enablement",
    ],
  },
];

const faqs = [
  {
    q: "Is my company actually in scope for e-invoicing?",
    a: "Almost certainly, yes. The turnover threshold decides which phase you fall into and therefore your deadline — it does not decide whether the rules apply to you. Business-to-consumer sales are outside the scope for now; business-to-business and business-to-government transactions are not.",
  },
  {
    q: "Do you replace our existing IT provider?",
    a: "Only if you want us to. A large part of our work sits alongside an incumbent — a readiness assessment, a cloud review, a specific build. Where we do take over an estate, we run a structured handover rather than a cut-over.",
  },
  {
    q: "Who actually does the work?",
    a: "Our own consultants lead every engagement, supported by vetted delivery partners for specialist and around-the-clock work. Every partner works under our contract, our confidentiality terms and our name. You have one point of accountability throughout.",
  },
  {
    q: "What does the first conversation cost?",
    a: "Nothing. Tell us your turnover band and what your finance team runs on, and we will tell you on the call which e-invoicing phase you sit in and what has to happen first. No proposal is attached to that answer.",
  },
];

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

function Countdown({ target }: { target: string }) {
  const [gap, setGap] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setGap(new Date(target).getTime() - Date.now());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (gap === null) return <div className="digits" />;
  if (gap < 0)
    return (
      <div className="digits">
        <div style={{ fontSize: 18 }}>Deadline passed</div>
      </div>
    );

  const d = Math.floor(gap / 86400000);
  const h = Math.floor(gap / 3600000) % 24;
  const m = Math.floor(gap / 60000) % 60;
  const s = Math.floor(gap / 1000) % 60;

  return (
    <div className="digits">
      <div>
        {d}
        <small>DAYS</small>
      </div>
      <div>
        {pad(h)}
        <small>HRS</small>
      </div>
      <div>
        {pad(m)}
        <small>MIN</small>
      </div>
      <div>
        {pad(s)}
        <small>SEC</small>
      </div>
    </div>
  );
}

function Index() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`top${solid ? " solid" : ""}`}>
        <div className="wrap">
          <a className="mark" href="#top">
            Dillon &amp; Bird<span>DIGITAL</span>
          </a>
          <nav className="topnav">
            <a href="#services">Capabilities</a>
            <a href="#why">Why us</a>
            <a href="#how">How we engage</a>
            <a className="navcta" href="#contact">
              Start a conversation
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster.url}
            aria-hidden="true"
          >
            <source src={heroVideo.url} type="video/mp4" />
          </video>
          <div
            className="still"
            aria-hidden="true"
            style={{ ["--hero-poster" as string]: `url('${heroPoster.url}')` }}
          />
          <div className="wrap hero-in">
            <p className="eyebrow rise">The technology practice of Dillon &amp; Bird Partners</p>
            <h1 className="rise">We build it, we run it, we stand behind it.</h1>
            <p className="lede rise">
              We design, build and operate the technology that UAE businesses depend on — regulatory
              readiness, cloud, applied AI and the operations beneath it all. Then we stay
              accountable for how it performs.
            </p>
            <div className="btns rise">
              <a className="btn" href="#contact">
                Start a conversation
              </a>
              <a className="btn btn-ghost" href="#services">
                Explore our capabilities
              </a>
            </div>
            <p className="hero-trust rise">
              Dillon and Bird Partners LLC-FZ &nbsp;·&nbsp; BurJuman Towers, Dubai &nbsp;·&nbsp;
              Management consultancy, corporate services, restructuring, audits and risk advisory
            </p>
          </div>
        </section>

        <section className="proof">
          <div className="wrap">
            <div>
              <b>30+</b>
              <p>Consultants and advisors across strategy, finance and technology</p>
            </div>
            <div>
              <b>2027</b>
              <p>The year UAE e-invoicing becomes mandatory for every business in scope</p>
            </div>
            <div>
              <b>One firm</b>
              <p>Technology, tax, audit and restructuring under a single roof in Dubai</p>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="wrap">
            <p className="note">
              The regulatory clock is already running. Time left to appoint an accredited
              e-invoicing provider.
            </p>
            <div className="clocks">
              <div className="tier">
                <p className="lbl">Turnover AED 50m and above — 31 Oct 2026</p>
                <Countdown target="2026-10-31T23:59:59+04:00" />
              </div>
              <div className="tier">
                <p className="lbl">Below AED 50m — 31 Mar 2027</p>
                <Countdown target="2027-03-31T23:59:59+04:00" />
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="services">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Capabilities</p>
              <h2>Eight practices, one delivery team.</h2>
              <p>We take on the work others hand back as a recommendation.</p>
            </div>

            {capabilities.map((cap, i) => (
              <article className={`row${i % 2 === 1 ? " flip" : ""}`} key={cap.title}>
                <div className="rowtext">
                  <h3>{cap.title}</h3>
                  <p className="body">{cap.body}</p>
                  <div className="cta">
                    <a
                      className="btn btn-line"
                      href={`mailto:consulting@dillonbird.com?subject=${encodeURIComponent(cap.subject)}`}
                    >
                      {cap.cta}
                    </a>
                  </div>
                </div>
                <div className="panel">
                  <h4>How we deliver</h4>
                  <ul>
                    {cap.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why" id="why">
          <div className="wrap">
            <p className="eyebrow">Why firms bring us in</p>
            <h2>Three reasons clients choose a Dubai firm over an offshore quote.</h2>
            <div className="why-grid">
              <div className="why-item">
                <h3>We are licensed here</h3>
                <p>
                  A registered UAE entity with a physical office in BurJuman Towers and named
                  partners who sign the engagement. If something goes wrong, there is somebody in
                  this city to hold to it.
                </p>
              </div>
              <div className="why-item">
                <h3>Finance and technology together</h3>
                <p>
                  E-invoicing is not a software problem or an accounting problem. It is both. Our
                  technology team sits alongside the people who already handle books, tax and audit
                  for UAE businesses.
                </p>
              </div>
              <div className="why-item">
                <h3>We stay after go-live</h3>
                <p>
                  Most of our work is delivered under monthly agreements rather than one-off
                  projects. We are still there when the certificate expires, the server fills up or
                  a member of staff leaves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec steps" id="how">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">How we engage</p>
              <h2>We open with a diagnostic, not a proposal.</h2>
              <p>You see the findings first, and decide what happens next.</p>
            </div>
            <div className="step-row">
              <div className="step">
                <b>Diagnostic</b>
                <h3>Understand the position</h3>
                <p>
                  Half a day with your team produces a written assessment: regulatory exposure,
                  security posture, licensing waste and continuity risk. The findings are yours
                  whether or not you engage us further.
                </p>
              </div>
              <div className="step">
                <b>Delivery</b>
                <h3>Fix what carries risk</h3>
                <p>
                  Each workstream is scoped and priced independently. You choose the sequence, and
                  nothing begins without an agreed number. Most organisations start with regulatory
                  readiness and continuity.
                </p>
              </div>
              <div className="step">
                <b>Run</b>
                <h3>Hold the gains</h3>
                <p>
                  We operate what we build under a monthly agreement — monitoring, patching, backup
                  and support — so capability compounds instead of decaying. Thirty days' notice,
                  always.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Common questions</p>
              <h2>Before you call.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="ans">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="parent">
          <div className="wrap parent-in">
            <div>
              <h2>Part of Dillon &amp; Bird Partners</h2>
            </div>
            <div>
              <p>
                We are the technology practice of Dillon and Bird Partners LLC-FZ, a Dubai
                consultancy operating across the full corporate lifecycle. That matters more than it
                sounds. The team modernising your systems sits alongside the team handling your
                accounts, your tax position and your audit — and the regulatory work now landing on
                UAE businesses sits precisely where finance and technology meet.
              </p>
              <ul>
                <li>Management consultancy</li>
                <li>Corporate services</li>
                <li>Restructuring</li>
                <li>Audits</li>
                <li>Risk advisory</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <h2>Begin with one question.</h2>
            <p className="lede">
              Which e-invoicing phase does my organisation fall into, and what has to happen first?
              We will answer it on the call, at no cost and with no proposal attached.
            </p>
            <a className="btn" href="tel:+971585570593">
              Call +971 58 557 0593
            </a>
            <div className="details-grid">
              <div>
                <h3>Phone and WhatsApp</h3>
                <a href="tel:+971585570593">+971 58 557 0593</a>
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:consulting@dillonbird.com">consulting@dillonbird.com</a>
              </div>
              <div>
                <h3>Office</h3>
                <p>
                  9th Floor, BurJuman Towers
                  <br />
                  BurJuman, Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div>
              <span className="mark">
                Dillon &amp; Bird<span>DIGITAL</span>
              </span>
              <p>
                The technology practice of Dillon and Bird Partners LLC-FZ, a licensed management
                consultancy based in Dubai, United Arab Emirates.
              </p>
            </div>
            <div>
              <p>
                9th Floor, BurJuman Towers, BurJuman, Dubai, UAE
                <br />
                +971 58 557 0593
                <br />
                consulting@dillonbird.com
              </p>
            </div>
          </div>
          <div className="foot-legal">
            <span>© 2026 Dillon and Bird Partners LLC-FZ</span>
            <span>Trade Licence No. [add licence number]</span>
            <span>dillonbird.digital</span>
          </div>
        </div>
      </footer>
    </>
  );
}
