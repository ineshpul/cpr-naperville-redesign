module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Invalid JSON" });
    }
  }

  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const phone = String(body?.phone || "").trim();
  const message = String(body?.message || "").trim();
  const privacy = Boolean(body?.privacy);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!privacy) {
    return res.status(400).json({ error: "Please agree to the Privacy Policy." });
  }

  const payload = {
    name,
    email,
    phone,
    message,
    submittedAt: new Date().toISOString(),
    source: "cpr-naperville-redesign",
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const upstream = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!upstream.ok) {
        console.error("Contact webhook failed", upstream.status);
        return res.status(502).json({ error: "Unable to deliver message right now." });
      }
    } catch (err) {
      console.error("Contact webhook error", err);
      return res.status(502).json({ error: "Unable to deliver message right now." });
    }
  } else {
    console.log("[contact]", JSON.stringify(payload));
  }

  return res.status(200).json({ ok: true });
};
