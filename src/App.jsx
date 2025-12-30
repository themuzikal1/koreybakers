export default function App() {
  const nextDrop = {
    dateLabel: "Saturday • Dec 27",
    windowLabel: "Pickup 12–3pm",
    note: "Limited quantity • pickup only",
  };

  // Temporary product list (display only). Checkout stays the same for now.
  const products = [
    {
      id: "signature-4pack",
      name: "Signature Chocolate Chip (4-Pack)",
      kicker: "Featured box",
      price: "$24",
      meta: "4-pack • pickup only",
      desc:
        "Thick, bakery-style cookies with crisp edges and a soft center — rich chocolate, buttery bite, and that signature top texture.",
      tags: ["Bakery-size (120g)", "Crisp edge • soft center", "Chef-driven • small batch"],
      image: "/signature-4pack.png", // your local image
      cta: "Order",
    },

    // Locked-in items + southern lineup
    {
      id: "maries-teacakes",
      name: "Marie’s Teacakes",
      kicker: "Southern classics",
      price: "Coming soon",
      meta: "limited drops",
      // IMPORTANT: locked phrasing (exact)
      desc:
        "Soft, old-fashioned tea cakes made with vanilla and nutmeg, inspired by my grandmother Marie.",
      tags: ["Old-fashioned", "Vanilla + nutmeg", "Small-batch"],
      // temp web photo
      image:
        "https://www.aspicyperspective.com/wp-content/uploads/2022/06/Earl-Grey-Cookies-Tea-Cake-Recipe-9-650x840.jpg",
      cta: "Notify me",
    },
    {
      id: "sweet-potato-pie",
      name: "Sweet Potato Pie",
      kicker: "Southern classics",
      price: "Coming soon",
      meta: "seasonal drops",
      desc:
        "Southern sweet potato pie with warm spice and a smooth, custardy slice — a heritage staple at the core of Korey Baker’s.",
      tags: ["Warm spice", "Smooth custard", "Holiday-ready"],
      image: "https://joyfoodsunshine.com/wp-content/uploads/2022/11/sweet-potato-pie-recipe-3.jpg",
      cta: "Notify me",
    },
    {
      id: "frednas-hoecakes",
      name: "Fredna’s Hoecakes",
      kicker: "Family-inspired",
      price: "Coming soon",
      meta: "pickup only",
      desc:
        "Skillet-fried corn cakes with crisp edges and a tender center — named for my Southern great-grandmother, Fredna.",
      tags: ["Skillet-fried", "Crisp edges", "Southern comfort"],
      image: "https://www.gritsandpinecones.com/wp-content/uploads/2022/04/hoecakes-new-1.jpeg",
      cta: "Notify me",
    },
    {
      id: "glazed-oatmeal-cookies",
      name: "Warm Glazed Oatmeal Cookies",
      kicker: "Nostalgia drop",
      price: "Coming soon",
      meta: "limited drop",
      desc:
        "Soft oatmeal cookies with a sweet glaze — made for that warm, just-bought feeling (the dashboard snack energy).",
      tags: ["Soft + chewy", "Sweet glaze", "Nostalgic"],
      image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2024/11/Iced-Oatmeal-Cookies-24.jpg",
      cta: "Notify me",
    },
  ];

  const params = new URLSearchParams(window.location.search);
  const isSuccess = params.get("success");
  const isCanceled = params.get("canceled");

  const startCheckout = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}), // later we can send { productId }
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");

      window.location.href = data.url;
    } catch (e) {
      alert(e.message);
    }
  };

  const GalleryRail = () => <div className="rail" aria-hidden="true" />;

  const MenuGrid = () => {
    return (
      <div className="grid-3">
        {products.slice(1).map((p) => (
          <div className="mini" key={p.id}>
            {/* image */}
            <img
              className="context-image"
              src={p.image}
              alt={p.name}
              loading="lazy"
            />

            <strong>{p.name}</strong>
            <p style={{ marginTop: 8 }}>{p.desc}</p>

            <div style={{ marginTop: 12 }} className="feature-row" aria-label={`${p.name} tags`}>
              {p.tags.map((t) => (
                <span key={t} className="feature" style={{ display: "inline-flex" }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="price-line" style={{ marginTop: 14 }}>
              <div>
                <div className="price" style={{ fontSize: 18 }}>{p.price}</div>
                <div className="meta">{p.meta}</div>
              </div>

              {/* For now: "Notify me" just scrolls to alerts; "Order" uses your checkout */}
              {p.cta === "Order" ? (
                <button className="btn btn-primary" onClick={startCheckout}>
                  {p.cta}
                </button>
              ) : (
                <a className="btn btn-soft" href="#alerts">
                  {p.cta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top">
            <img className="logo" src="/logo.jpg" alt="Korey Baker’s logo" />
            <div>
              <p className="name">Korey Baker’s</p>
              <p className="sub">Signature Cookies • Rochester, NY</p>
            </div>
          </a>

          <nav aria-label="Primary">
            <a className="navlink" href="#product">Cookies</a>
            <a className="navlink" href="#menu">Menu</a>
            <a className="navlink" href="#collections">Collections</a>
            <a className="navlink" href="#about">About</a>
            <a className="navlink" href="#how">Ordering</a>
            <a className="navlink" href="#pickup">Pickup</a>
            <a className="navlink" href="#faq">FAQ</a>
            <button className="btn btn-primary" onClick={startCheckout}>
              Order
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main id="top">
        {/* STATUS BANNERS */}
        {(isSuccess || isCanceled) && (
          <section aria-label="Order status">
            <div className="container">
              {isSuccess && (
                <div className="callout">
                  <span>Success:</span> Payment received. Check your email for confirmation.
                </div>
              )}
              {isCanceled && (
                <div className="callout">
                  <span>Not completed:</span> Your payment was canceled.
                </div>
              )}
            </div>
          </section>
        )}

        {/* HERO */}
        <section className="hero" aria-label="Featured drop">
          <div className="container hero-grid">
            <div className="card">
              <div className="stack">
                <div className="kicker">Fresh-baked, small batches • Limited drops</div>

                <div className="callout">
                  <span>Next drop:</span> {nextDrop.dateLabel} • {nextDrop.windowLabel} — {nextDrop.note}
                  <div className="help">Orders are confirmed after payment is received.</div>
                </div>

                <h1 className="title display">Signature Chocolate Chip Cookie</h1>

                <p className="subtitle">
                  Thick, bakery-style cookies with crisp edges and a soft center —
                  made to feel like a treat you’d bring to someone you love.
                </p>

                {/* Editorial “photo moment” */}
                <img
                  className="context-image hero-photo"
                  src="/interior.jpeg"
                  alt="Korey Baker’s — bakery aesthetic"
                />

                <ul className="feature-row" aria-label="Highlights">
                  <li className="feature">Bakery-size (120g)</li>
                  <li className="feature">Crisp edge • soft center</li>
                  <li className="feature">Chef-driven • small batch</li>
                </ul>

                <p className="help">Baked in a licensed commercial kitchen in Rochester, NY.</p>

                <div className="row row-wrap">
                  <button className="btn btn-primary" onClick={startCheckout}>Order</button>
                  <a className="btn btn-soft" href="#pickup">Pickup details</a>
                </div>
              </div>
            </div>

            {/* PRODUCT CARD */}
            <aside className="card product" id="product" aria-label="Product">
              <div className="stack">
                <div className="divider" />

                <div className="kicker">{products[0].kicker}</div>
                <h3 className="display">{products[0].name}</h3>

                <img
                  className="product-image"
                  src={products[0].image}
                  alt="Boxed 4-pack of Korey Baker’s Signature Chocolate Chip Cookies"
                />

                <p>{products[0].desc}</p>

                <div className="price-line">
                  <div>
                    <div className="price">{products[0].price}</div>
                    <div className="meta">{products[0].meta}</div>
                  </div>
                  <button className="btn btn-primary" onClick={startCheckout}>
                    {products[0].cta}
                  </button>
                </div>

                <div className="callout">
                  <span>Drop-style:</span> small batches on set dates. Once it’s gone, it’s gone.
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* MENU (NEW) */}
        <section id="menu" aria-label="Menu">
          <div className="container">
            <h2 className="section-title display">Menu (Southern drops)</h2>
            <GalleryRail />

            <div className="card">
              <div className="stack">
                <p className="subtitle">
                  These are the next items I’m building into the rotation — family-inspired, Southern-rooted,
                  and made for limited drops.
                </p>

                <MenuGrid />

                <div className="callout">
                  <span>Note:</span> These are “coming soon” on the site for now. When you’re ready,
                  we’ll wire each item to its own Stripe product + price.
                </div>

                <div className="row row-wrap">
                  <a className="btn btn-soft" href="#alerts">Get drop alerts</a>
                  <a className="btn btn-soft" href="#pickup">Pickup details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DROP ALERTS */}
        <section id="alerts" aria-label="Drop alerts">
          <div className="container">
            <h2 className="section-title display">Get drop alerts</h2>
            <GalleryRail />

            <div className="card">
              <div className="stack">
                <p className="subtitle">One email when a drop opens. No spam, no newsletters.</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.currentTarget.email.value;
                    if (!email) return;
                    alert(`Thanks! Drop alerts will go to: ${email}`);
                    e.currentTarget.reset();
                  }}
                >
                  <div className="row row-wrap">
                    <input name="email" type="email" required placeholder="you@example.com" />
                    <button className="btn btn-primary" type="submit">Notify me</button>
                  </div>
                </form>

                <p className="help">Tip: Add us to contacts so alerts don’t land in spam.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COLLECTIONS */}
        <section id="collections" aria-label="Collections">
          <div className="container">
            <h2 className="section-title display">Collections</h2>
            <GalleryRail />

            <div className="grid-3">
              <div className="mini">
                <strong>Signature Cookies</strong>
                <p>Small-batch boxes, drop-based pickup.</p>
              </div>
              <div className="mini">
                <strong>Southern Drops</strong>
                <p>Tea cakes, pies, and nostalgic cookies (limited rotation).</p>
              </div>
              <div className="mini">
                <strong>Seasonal</strong>
                <p>Limited items built around holidays + events.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU’RE GETTING */}
        <section aria-label="What you’re getting">
          <div className="container">
            <h2 className="section-title display">What you’re getting</h2>
            <GalleryRail />

            <div className="grid-3">
              <div className="mini">
                <img className="context-image" src="/interior.jpeg" alt="Cookies cooling on a rack" />
                <strong>Small-batch consistency</strong>
                <p>Same portion, same bake, same texture — so your cookie always hits the way it should.</p>
              </div>

              <div className="mini">
                <strong>Giftable + boxed</strong>
                <p>Designed to travel well and look intentional the moment you open the box.</p>
              </div>

              <div className="mini">
                <strong>Best warm</strong>
                <p>Pop one in for a few seconds and you’ll get that fresh-from-the-oven feeling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" aria-label="About">
          <div className="container">
            <h2 className="section-title display">About Korey</h2>
            <GalleryRail />

            <div className="grid-3">
              <div className="mini">
                <div className="about-card">
                  <img src="/korey-about.jpeg" alt="Korey Baker" className="about-avatar" />
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
                  I bake in limited runs so every box stays fresh, warm-ready, and giftable.
                  No shortcuts, no “factory batch” vibes — just premium cookies made like they’re for someone you love.
                </p>
              </div>
            </div>

            <div className="callout">
              <span>What I’m building:</span> A premium cookie brand with commissary drops,
              pickup-first ordering, and delivery expansion — without sacrificing quality.
            </div>

            <div className="row row-wrap">
              <button className="btn btn-primary" onClick={startCheckout}>Order</button>
              <a className="btn btn-soft" href="#how">How it works</a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" aria-label="How ordering works">
          <div className="container">
            <h2 className="section-title display">How ordering works</h2>
            <GalleryRail />

            <div className="grid-3">
              <div className="mini">
                <strong>1) Choose your drop</strong>
                <p>Select a pickup date and how many 4-packs you want.</p>
              </div>
              <div className="mini">
                <strong>2) Pay to confirm</strong>
                <p>Orders are confirmed after payment is received.</p>
              </div>
              <div className="mini">
                <strong>3) Pickup + enjoy</strong>
                <p>Bring your name or confirmation and you’re good to go.</p>
              </div>
            </div>

            <div className="callout">
              <span>Tip:</span> If you want cookies for a gift or event, order early — drops can sell out.
            </div>
          </div>
        </section>

        {/* PICKUP */}
        <section id="pickup" aria-label="Pickup details">
          <div className="container">
            <h2 className="section-title display">Pickup details</h2>
            <GalleryRail />

            <div className="grid-3">
              <div className="mini">
                <img className="context-image" src="/packaging.jpeg" alt="Cookie packaging ready for pickup" />
                <strong>Pickup experience</strong>
                <p>Boxed and ready. Pickup instructions provided after confirmation.</p>
              </div>

              <div className="mini">
                <strong>Pickup windows</strong>
                <p>Limited windows by drop. You’ll choose a date and time when ordering.</p>
              </div>

              <div className="mini">
                <strong>Allergens</strong>
                <p>Contains wheat, eggs, and dairy. Produced in a shared-kitchen environment.</p>
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
        <section id="faq" aria-label="FAQ">
          <div className="container">
            <h2 className="section-title display">FAQ</h2>
            <GalleryRail />

            <div className="faq">
              <div className="faq-item">
                <button className="faq-q" type="button">
                  How big are the cookies?
                  <span>▾</span>
                </button>
                <div className="faq-a">Each cookie is portioned at about <strong>120g</strong>.</div>
              </div>

              <div className="faq-item">
                <button className="faq-q" type="button">
                  Can I warm them up?
                  <span>▾</span>
                </button>
                <div className="faq-a">Yes — a few seconds brings back that fresh-baked softness.</div>
              </div>

              <div className="faq-item">
                <button className="faq-q" type="button">
                  Do you deliver or ship?
                  <span>▾</span>
                </button>
                <div className="faq-a">Right now it’s <strong>pickup only</strong> so quality stays consistent.</div>
              </div>

              <div className="faq-item">
                <button className="faq-q" type="button">
                  What’s your policy?
                  <span>▾</span>
                </button>
                <div className="faq-a">Orders are confirmed after payment is received. All sales are final on baked goods.</div>
              </div>
            </div>

            <div className="row row-wrap">
              <button className="btn btn-primary" onClick={startCheckout}>Order</button>
              <a className="btn btn-soft" href="#top">Back to top</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="container footer-inner">
            <div className="row" style={{ alignItems: "center" }}>
              <img className="logo" src="/logo.jpg" alt="Korey Baker’s logo" />
              <div>
                <div className="display footer-brand">Korey Baker’s</div>
                <div>Rochester, NY</div>
              </div>
            </div>

            <div className="row row-wrap">
              <a href="mailto:orders@koreybakers.com">orders@koreybakers.com</a>
              <a href="#">Instagram</a>
              <span>© {new Date().getFullYear()} Korey Baker’s</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
