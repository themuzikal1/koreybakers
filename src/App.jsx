export default function App() {
  const nextDrop = {
  dateLabel: "Saturday • Dec 27",
  windowLabel: "Pickup 12–3pm",
  note: "Limited quantity • pickup only",
};

  return (
    <>
      {/* TOP BAR */}
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top">
            <img
              className="logo"
              src="/logo.jpg"
              alt="Korey Baker’s logo"
            />
            <div>
              <p className="name">Korey Baker’s</p>
              <p className="sub">Signature Cookies • Rochester, NY</p>
            </div>
          </a>

          <nav>
            <a className="navlink" href="#product">Cookies</a>
            <a className="navlink" href="#about">About</a>
            <a className="navlink" href="#how">Ordering</a>
            <a className="navlink" href="#pickup">Pickup</a>
            <a className="navlink" href="#faq">FAQ</a>
            <button className="btn btn-primary">
              Order
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main id="top">

        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="card">
              <div className="kicker">
                Fresh-baked, small batches • Limited drops
              </div>
              <div className="callout" style={{ marginTop: "10px" }}>
  <span>Next drop:</span> {nextDrop.dateLabel} • {nextDrop.windowLabel} — {nextDrop.note}
</div>


              <h1 className="title display">
                Signature Chocolate Chip Cookies
              </h1>

              <p className="subtitle">
                Thick, bakery-style cookies with crisp edges and a soft center —
                made to feel like a treat you’d bring to someone you love.
              </p>

          <ul className="feature-row">
  <li className="feature">Bakery-size (120g)</li>
  <li className="feature">Crisp edge • soft center</li>
  <li className="feature">Chef-driven • small batch</li>
</ul>

<p className="help" style={{ marginTop: "10px" }}>
  Baked in a licensed commercial kitchen in Rochester, NY.
</p>


              <div className="hero-actions">
                <button className="btn btn-primary">
                  Order for pickup
                </button>
                <a className="btn btn-soft" href="#pickup">
                  Pickup details
                </a>
              </div>

              <p className="help">
                Orders are confirmed after payment is received.
              </p>
            </div>

            {/* PRODUCT CARD */}
            <aside className="card product" id="product">
              <h3 className="display">
                Korey Baker’s Signature Chocolate Chip
              </h3>

<img
  className="product-image"
  src="/signature-4pack.png"
  alt="Boxed 4-pack of Korey Baker’s Signature Chocolate Chip Cookies"
/>



              <p>
                A classic done right — rich chocolate, a buttery bite,
                and that signature top texture.
              </p>

              <div className="price-line">
                <div>
                  <div className="price">$24</div>
                  <div className="meta">4-pack • pickup only</div>
                </div>
                <button className="btn btn-primary">
                  Order
                </button>
              </div>

              <div className="callout">
                <span>Drop-style:</span> small batches on set dates.
                Once it’s gone, it’s gone.
              </div>
            </aside>
          </div>
        </section>
{/* DROP ALERTS */}
<section id="alerts">
  <div className="container">
    <div className="card" style={{ padding: "18px" }}>
      <h2 className="display" style={{ margin: 0 }}>Get drop alerts</h2>
      <p className="subtitle" style={{ marginTop: "8px" }}>
        One email when a drop opens. No spam, no newsletters.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          if (!email) return;
          alert(`Thanks! Drop alerts will go to: ${email}`);
          e.currentTarget.reset();
        }}
        style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}
      >
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          style={{
            flex: "1 1 240px",
            padding: "12px 14px",
            borderRadius: "14px",
            border: "1px solid rgba(0,0,0,.12)",
            outline: "none",
          }}
        />
        <button className="btn btn-primary" type="submit">
          Notify me
        </button>
      </form>

      <p className="help" style={{ marginTop: "10px" }}>
        Tip: Add us to contacts so alerts don’t land in spam.
      </p>
    </div>
  </div>
</section>

        {/* WHAT YOU’RE GETTING */}
        <section>
          <div className="container">
            <h2 className="section-title display">
              What you’re getting
            </h2>

            <div className="grid-3">
              <div className="mini">
                <img
                  className="context-image"
                  src="/interior.jpeg"
                  alt="Cookies cooling on a rack"
                />
                <strong>Small-batch consistency</strong>
                <p>
                  Same portion, same bake, same texture —
                  so your cookie always hits the way it should.
                </p>
              </div>

              <div className="mini">
                <strong>Giftable + boxed</strong>
                <p>
                  Designed to travel well and look intentional
                  the moment you open the box.
                </p>
              </div>

              <div className="mini">
                <strong>Best warm</strong>
                <p>
                  Pop one in for a few seconds and you’ll get
                  that fresh-from-the-oven feeling.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT */}
<section id="about">
  <div className="container">
    <h2 className="section-title display">About Korey</h2>

    <div className="grid-3">
<div className="mini">
  <div className="about-card">
    <img
      src="/korey-about.jpeg"
      alt="Korey Baker"
      className="about-avatar"
    />

    <div>
      <strong>Pastry chef energy.</strong>
      <p>
        I’m Korey — a pastry-focused baker based in Rochester, NY.
        Korey Baker’s is my small-batch cookie brand built on technique,
        consistency, and that “one more bite” feeling.
      </p>
    </div>
  </div>
</div>


      <div className="mini">
        <strong>Why cookies?</strong>
        <p>
          Because a cookie is simple — which means it has to be done perfectly.
          I build everything around texture: crisp edges, soft centers,
          and that signature top you recognize immediately.
        </p>
      </div>

      <div className="mini">
        <strong>Small drops. Big intention.</strong>
        <p>
          I bake in limited runs so every box stays fresh, warm-ready,
          and giftable. No shortcuts, no “factory batch” vibes —
          just premium cookies made like they’re for someone you love.
        </p>
      </div>
    </div>

    <div className="callout">
      <span>What I’m building:</span> A premium cookie brand with commissary
      drops, pickup-first ordering, and delivery expansion through platforms
      like Uber Eats — without sacrificing quality.
    </div>

    <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <button className="btn btn-primary">Order a drop</button>
      <a className="btn btn-soft" href="#how">How it works</a>
    </div>
  </div>
</section>


        {/* HOW IT WORKS */}
        <section id="how">
          <div className="container">
            <h2 className="section-title display">
              How ordering works
            </h2>

            <div className="grid-3">
              <div className="mini">
                <strong>1) Choose your drop</strong>
                <p>
                  Select a pickup date and how many 4-packs you want.
                </p>
              </div>

              <div className="mini">
                <strong>2) Pay to confirm</strong>
                <p>
                  Orders are confirmed after payment is received.
                </p>
              </div>

              <div className="mini">
                <strong>3) Pickup + enjoy</strong>
                <p>
                  Bring your name or confirmation and you’re good to go.
                </p>
              </div>
            </div>

            <div className="callout">
              <span>Tip:</span> If you want cookies for a gift or event,
              order early — drops can sell out.
            </div>
          </div>
        </section>

        {/* PICKUP */}
        <section id="pickup">
          <div className="container">
            <h2 className="section-title display">
              Pickup details
            </h2>

            <div className="grid-3">
              <div className="mini">
                <img
                  className="context-image"
                  src="/packaging.jpeg"
                  alt="Cookie packaging ready for pickup"
                />
                <strong>Pickup experience</strong>
                <p>
                  Boxed and ready. Pickup instructions provided
                  after confirmation.
                </p>
              </div>

              <div className="mini">
                <strong>Pickup windows</strong>
                <p>
                  Limited windows by drop.
                  You’ll choose a date and time when ordering.
                </p>
              </div>

              <div className="mini">
                <strong>Allergens</strong>
                <p>
                  Contains wheat, eggs, and dairy.
                  Produced in a shared-kitchen environment.
                </p>
              </div>
            </div>

         <div className="callout">
  <span>Storage:</span> Airtight at room temp 2–3 days, or freeze up to 30 days.
  <br />
  <span>Reheat:</span> Microwave 8–10 seconds (best for gooey center) or bake at 300°F for 3–4 minutes.
</div>

          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="container">
            <h2 className="section-title display">FAQ</h2>

            <div className="faq">
              <div className="faq-item">
                <button className="faq-q" type="button">
                  How big are the cookies?
                  <span>▾</span>
                </button>
                <div className="faq-a">
                  Each cookie is portioned at about <strong>120g</strong>.
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-q" type="button">
                  Can I warm them up?
                  <span>▾</span>
                </button>
                <div className="faq-a">
                  Yes — a few seconds brings back that fresh-baked softness.
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-q" type="button">
                  Do you deliver or ship?
                  <span>▾</span>
                </button>
                <div className="faq-a">
                  Right now it’s <strong>pickup only</strong>
                  so quality stays consistent.
                </div>
              </div>

              <div className="faq-item">
                <button className="faq-q" type="button">
                  What’s your policy?
                  <span>▾</span>
                </button>
                <div className="faq-a">
                  Orders are confirmed after payment is received.
                  All sales are final on baked goods.
                </div>
              </div>
            </div>

            <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">
                Order
              </button>
              <a className="btn btn-soft" href="#top">
                Back to top
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="container footer-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/logo.jpg"
                alt="Korey Baker’s logo"
                style={{ width: '28px', borderRadius: '12px' }}
              />
              <div>
                <div className="display" style={{ fontWeight: 900 }}>
                  Korey Baker’s
                </div>
                <div>Rochester, NY</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="mailto:orders@koreybakers.com">
                orders@koreybakers.com
              </a>
              <span>•</span>
              <a href="#">Instagram</a>
              <span>•</span>
              <span>© {new Date().getFullYear()} Korey Baker’s</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
