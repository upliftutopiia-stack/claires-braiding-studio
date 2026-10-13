"use client";

import { useState, type FormEvent } from "react";

const PHONE = "6822722677";
const DISPLAY_PHONE = "(682) 272-2677";
const INSTAGRAM = "https://www.instagram.com/clairesbraidingstudio/";

const styles = [
  {
    id: "01",
    title: "Knotless Braids",
    detail: "Ask about your preferred length, size, and finish.",
    tag: "STYLE INSPIRATION",
  },
  {
    id: "02",
    title: "Boho-Inspired Braids",
    detail: "Share your inspiration and preferred braid details.",
    tag: "STYLE INSPIRATION",
  },
  {
    id: "03",
    title: "Custom Braiding",
    detail: "Have another style in mind? Send a reference and enquire.",
    tag: "PERSONALIZED ENQUIRY",
  },
];

const navigation = [
  { label: "STYLES", href: "#styles" },
  { label: "THE EXPERIENCE", href: "#experience" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "BOOKING ENQUIRY", href: "#booking" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 5L19 19M19 5L5 19" />
    </svg>
  ) : (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 6H21M3 12H21M3 18H21" />
    </svg>
  );
}

function BraidArtwork() {
  return (
    <div
      className="braid-art"
      role="img"
      aria-label="Original abstract illustration inspired by braided hairstyles; not a photograph of Claire's work"
    >
      <div className="art-halo" />
      <div className="art-arch" />
      <div className="art-head" />
      <div className="art-neck" />
      <div className="art-shoulders" />

      {[11, 12, 10, 12].map((count, index) => (
        <div className={`braid braid-${index + 1}`} key={index}>
          {Array.from({ length: count }, (_, i) => (
            <span key={i} />
          ))}
        </div>
      ))}

      <div className="art-mark">C.</div>
      <span className="art-caption">THE ART OF THE BRAID</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [style, setStyle] = useState("Knotless Braids");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [length, setLength] = useState("");
  const [details, setDetails] = useState("");
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  const message = [
    "Hi Claire!",
    "",
    "I'd like to enquire about a braiding appointment.",
    "",
    `Name: ${name.trim()}`,
    `Phone: ${phone.trim()}`,
    `Preferred style: ${style}`,
    `Preferred date: ${date || "Flexible"}`,
    `Length / size: ${length.trim() || "To be discussed"}`,
    `Additional details: ${details.trim() || "None provided"}`,
    "",
    "Could you please let me know about availability and pricing?",
  ].join("\n");

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReady(true);
    setCopied(false);
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function chooseStyle(selected: string) {
    setStyle(selected);
    setReady(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main id="top">
      <div className="concept-notice">
        INDEPENDENT WEBSITE CONCEPT · NOT THE OFFICIAL CLAIRE&apos;S
        BRAIDING STUDIO WEBSITE
      </div>

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-monogram">
            C<span>✦</span>
          </span>
          <span className="brand-name">
            Claire&apos;s
            <small>BRAIDING STUDIO</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Desktop navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#booking">
          ENQUIRE NOW <Arrow />
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label} <Arrow />
          </a>
        ))}

        <a href={`sms:+1${PHONE}`} onClick={closeMenu}>
          TEXT THE STUDIO <Arrow />
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            PLANO, TEXAS · BRAIDING STUDIO
          </div>

          <h1>
            BRAIDED
            <br />
            WITH
            <br />
            <em>INTENTION.</em>
          </h1>

          <p>
            Your next look starts with inspiration. Explore braiding
            styles, share your vision, and reach out about your
            next appointment.
          </p>

          <div className="hero-actions">
            <a className="button button-gold" href="#booking">
              START AN ENQUIRY <Arrow />
            </a>

            <a
              className="button button-outline"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW REAL WORK <Arrow />
            </a>
          </div>

          <div className="hero-bottom">
            <span>BEAUTY IN EVERY DETAIL</span>
            <span>PLANO / TX</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-top">
            <span>THE BRAID EDIT</span>
            <span>001 / STUDIO</span>
          </div>

          <BraidArtwork />

          <div className="hero-image-bottom">
            <span>STYLE IS PERSONAL.</span>
            <span>SO IS YOUR ENQUIRY. ↗</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Braiding inspiration and style">
        <div className="marquee-track">
          BRAIDED BEAUTY <span>✦</span> PERSONAL STYLE <span>✦</span>
          THE BRAID EDIT <span>✦</span> PLANO, TEXAS <span>✦</span>
          BRAIDED BEAUTY <span>✦</span> PERSONAL STYLE <span>✦</span>
          THE BRAID EDIT <span>✦</span> PLANO, TEXAS <span>✦</span>
        </div>
      </div>

      <section id="styles" className="styles-section section">
        <div className="section-label">
          <span>01 / STYLE INSPIRATION</span>
          <span>FIND YOUR NEXT LOOK</span>
        </div>

        <div className="styles-heading">
          <h2>
            EVERY BRAID
            <br />
            <em>TELLS A STORY.</em>
          </h2>

          <p>
            Start with a style you love. The categories below are
            enquiry ideas, not a confirmed service menu. Claire can
            confirm which styles, sizes, and lengths are available.
          </p>
        </div>

        <div className="style-cards">
          {styles.map((item) => (
            <a
              href="#booking"
              className="style-card"
              key={item.id}
              onClick={() => chooseStyle(item.title)}
            >
              <div className={`style-art style-art-${item.id}`}>
                <div className="style-art-orbit" />
                <div className="style-art-strands">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <span>{item.id}</span>
              </div>

              <div className="style-card-bottom">
                <span className="style-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="style-card-link">
                  ENQUIRE ABOUT THIS STYLE <Arrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section section">
        <div className="section-label">
          <span>02 / THE BEAUTY OF DETAIL</span>
          <span>YOUR STYLE, YOUR WAY</span>
        </div>

        <div className="experience-grid">
          <div className="experience-copy">
            <span className="overline">A LOOK THAT FEELS LIKE YOU</span>

            <h2>
              MORE
              <br />
              THAN
              <br />
              <em>HAIR.</em>
            </h2>
          </div>

          <div className="experience-detail">
            <span className="detail-star">✳</span>

            <h3>
              Come with an idea. Start with a conversation.
            </h3>

            <p>
              Whether you know exactly what you want or you&apos;re
              still collecting inspiration, a clear enquiry helps
              start the conversation.
            </p>

            <div className="experience-points">
              <div>
                <span>01</span>
                <strong>CHOOSE YOUR STYLE</strong>
                <p>Select a look or describe your own inspiration.</p>
              </div>

              <div>
                <span>02</span>
                <strong>SHARE YOUR DETAILS</strong>
                <p>Include your preferred date, size, and length.</p>
              </div>

              <div>
                <span>03</span>
                <strong>CONTACT THE STUDIO</strong>
                <p>Text Claire to confirm options and availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section section">
        <div className="section-label">
          <span>03 / THE REAL WORK</span>
          <span>FIND YOUR INSPIRATION</span>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-visual">
            <span className="portfolio-visual-top">
              CLAIRE&apos;S / BRAIDING STUDIO
            </span>

            <div className="portfolio-letter">C</div>
            <div className="portfolio-ornament">✦</div>

            <div className="portfolio-visual-bottom">
              <span>
                THE
                <br />
                BRAID
                <br />
                EDIT.
              </span>
              <span>PLANO, TX / 2026</span>
            </div>

            <small>
              ORIGINAL GRAPHIC · NOT A CLIENT HAIRSTYLE PHOTO
            </small>
          </div>

          <div className="portfolio-copy">
            <span className="overline">SEE THE ACTUAL STYLES</span>

            <h2>
              THE
              <br />
              PROOF IS
              <br />
              IN THE
              <br />
              <em>BRAIDS.</em>
            </h2>

            <p>
              See Claire&apos;s real braiding work, recent styles,
              and updates directly on Instagram before reaching out.
            </p>

            <a
              className="button button-espresso"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              EXPLORE INSTAGRAM <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <span>THE BRAID EDIT / PLANO, TEXAS</span>

        <h2>
          YOUR HAIR.
          <br />
          <em>YOUR</em> MOMENT.
        </h2>

        <div className="quote-bottom">
          <span>✦</span>
          <span>MAKE THE NEXT LOOK YOURS</span>
          <span>✦</span>
        </div>
      </section>

      <section id="booking" className="booking-section section">
        <div className="section-label">
          <span>04 / START THE CONVERSATION</span>
          <span>BOOKING ENQUIRY</span>
        </div>

        <div className="booking-grid">
          <div className="booking-copy">
            <span className="overline">
              READY FOR YOUR NEXT LOOK?
            </span>

            <h2>
              LET&apos;S
              <br />
              TALK
              <br />
              <em>BRAIDS.</em>
            </h2>

            <p>
              Tell Claire what you have in mind. Prepare your
              enquiry, then send it by text or Instagram DM.
              Appointments are not booked through this demo.
            </p>

            <div className="contact-links">
              <a href={`sms:+1${PHONE}`}>
                <span>TEXT THE STUDIO</span>
                <strong>{DISPLAY_PHONE}</strong>
                <Arrow />
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>MESSAGE ON INSTAGRAM</span>
                <strong>@clairesbraidingstudio</strong>
                <Arrow />
              </a>
            </div>
          </div>

          <div className="booking-card">
            <div className="booking-card-top">
              <span>YOUR ENQUIRY / 001</span>
              <span>✦</span>
            </div>

            <h3>
              YOUR NEXT
              <br />
              LOOK STARTS HERE.
            </h3>

            <p>
              Fill in the details to prepare a text message.
              Nothing is sent automatically.
            </p>

            <form onSubmit={prepareEnquiry}>
              <label htmlFor="style">BRAIDING STYLE</label>

              <select
                id="style"
                value={style}
                onChange={(event) => {
                  setStyle(event.target.value);
                  setReady(false);
                }}
              >
                <option>Knotless Braids</option>
                <option>Boho-Inspired Braids</option>
                <option>Custom Braiding</option>
                <option>Other / Not Sure</option>
              </select>

              <label htmlFor="name">YOUR NAME</label>

              <input
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setReady(false);
                }}
                autoComplete="name"
                maxLength={100}
                placeholder="Your name"
                required
              />

              <label htmlFor="phone">YOUR PHONE NUMBER</label>

              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  setReady(false);
                }}
                autoComplete="tel"
                maxLength={30}
                placeholder="Your phone number"
                required
              />

              <label htmlFor="date">
                PREFERRED DATE (OPTIONAL)
              </label>

              <input
                id="date"
                type="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setReady(false);
                }}
              />

              <label htmlFor="length">
                LENGTH / SIZE (OPTIONAL)
              </label>

              <input
                id="length"
                value={length}
                onChange={(event) => {
                  setLength(event.target.value);
                  setReady(false);
                }}
                maxLength={150}
                placeholder="e.g. Medium, waist-length"
              />

              <label htmlFor="details">ANYTHING ELSE?</label>

              <textarea
                id="details"
                value={details}
                onChange={(event) => {
                  setDetails(event.target.value);
                  setReady(false);
                }}
                rows={4}
                maxLength={1000}
                placeholder="Style inspiration, questions, or special requests..."
              />

              <button className="submit-button" type="submit">
                PREPARE MY ENQUIRY <Arrow />
              </button>
            </form>

            {ready && (
              <div className="enquiry-result" aria-live="polite">
                <h4>YOUR MESSAGE IS READY.</h4>

                <p>
                  Copy it or open your text messaging app with
                  the message filled in.
                </p>

                <textarea
                  aria-label="Prepared enquiry message"
                  readOnly
                  value={message}
                  rows={11}
                  onFocus={(event) => event.target.select()}
                />

                <div className="result-actions">
                  <button type="button" onClick={copyEnquiry}>
                    {copied ? "COPIED ✓" : "COPY MESSAGE"}
                  </button>

                  <a
                    href={`sms:+1${PHONE}?body=${encodeURIComponent(message)}`}
                  >
                    OPEN TEXT APP <Arrow />
                  </a>
                </div>
              </div>
            )}

            <div className="booking-footnote">
              <span>NO PAYMENT COLLECTED</span>
              <span>NO APPOINTMENT CONFIRMED</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <a href="#top" className="footer-brand">
              Claire&apos;s<span>✦</span>
              <small>BRAIDING STUDIO</small>
            </a>

            <p>
              STYLE &amp; BRAIDING INSPIRATION · PLANO, TEXAS
            </p>
          </div>

          <div className="footer-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}

            <a href={`sms:+1${PHONE}`}>TEXT ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 CLAIRE&apos;S BRAIDING STUDIO — WEBSITE CONCEPT
          </span>
          <span>
            INDEPENDENT DEMO · NOT AFFILIATED WITH OR ENDORSED BY THE BUSINESS
          </span>
        </div>
      </footer>

      <a className="mobile-booking-bar" href="#booking">
        START A BOOKING ENQUIRY <Arrow />
      </a>
    </main>
  );
}