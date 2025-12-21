import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    // NOTE: Replace the price + product details whenever you’re ready.
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Korey Baker’s Signature Chocolate Chip — 4 Pack",
              description: "Pickup only • Bakery-size cookies",
              images: [`${siteUrl}/signature-4pack.png`],
            },
            unit_amount: 2400, // $24.00 in cents
          },
          quantity: 1,
        },
      ],

      // Where Stripe sends them after checkout
      success_url: `${siteUrl}/?success=1`,
      cancel_url: `${siteUrl}/?canceled=1`,

      // Helpful metadata (shows in Stripe dashboard)
      metadata: {
        product: "signature_4pack",
        fulfillment: "pickup",
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
}
