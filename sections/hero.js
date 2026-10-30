// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .hero-wrap {
      display: grid; grid-template-columns: 1.15fr 1fr; gap: 36px; align-items: center;
      padding: 56px 40px; border-radius: 22px; border: 1px solid #1d2b45;
      background:
        radial-gradient(circle at 88% 12%, color-mix(in srgb, ${SITE.color} 24%, transparent), transparent 55%),
        linear-gradient(160deg, #101c33, #0b1220);
    }
    #hero .hero-eyebrow {
      display: inline-flex; align-items: center; gap: 8px; margin: 0 0 18px;
      padding: 5px 12px; border-radius: 999px; font-size: .8rem; font-weight: 600; letter-spacing: .02em;
      color: ${SITE.color}; background: color-mix(in srgb, ${SITE.color} 12%, transparent);
      border: 1px solid color-mix(in srgb, ${SITE.color} 35%, transparent);
    }
    #hero .hero-dot { width: 7px; height: 7px; border-radius: 50%; background: ${SITE.color}; }
    #hero h1 { margin: 0 0 14px; font-size: clamp(2.6rem, 7vw, 4rem); line-height: 1.02; letter-spacing: -.03em; }
    #hero h1 span { color: ${SITE.color}; }
    #hero .hero-tagline { margin: 0 0 12px; font-size: 1.2rem; color: #eef3fa; }
    #hero .hero-sub { margin: 0 0 28px; color: #98a6bc; max-width: 34em; }
    #hero .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    #hero .hero-btn {
      display: inline-block; padding: 16px 30px; border-radius: 14px; font-size: 1.1rem; font-weight: 700;
      text-decoration: none; color: #0b1220; background: ${SITE.color};
      box-shadow: 0 10px 30px color-mix(in srgb, ${SITE.color} 35%, transparent);
      transition: transform .15s ease, box-shadow .15s ease;
    }
    #hero .hero-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 36px color-mix(in srgb, ${SITE.color} 50%, transparent); }
    #hero .hero-btn:focus-visible, #hero .hero-link:focus-visible { outline: 3px solid #eef3fa; outline-offset: 3px; }
    #hero .hero-link { color: #eef3fa; text-decoration: none; font-weight: 600; padding: 14px 8px; }
    #hero .hero-link:hover { color: ${SITE.color}; }
    #hero .hero-points { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 28px 0 0; padding: 0; list-style: none; color: #98a6bc; font-size: .92rem; }
    #hero .hero-points li::before { content: "✓ "; color: ${SITE.color}; font-weight: 700; }

    #hero .hero-card {
      background: #0d1729; border: 1px solid #22324f; border-radius: 20px; padding: 22px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, .35);
    }
    #hero .hero-card-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 18px; }
    #hero .hero-card-top b { font-size: 1rem; }
    #hero .hero-card-top small { color: #98a6bc; font-size: .75rem; }
    #hero .hero-ring-row { display: flex; align-items: center; gap: 20px; margin-bottom: 18px; }
    #hero .hero-ring {
      flex: none; width: 116px; height: 116px; border-radius: 50%; display: grid; place-items: center;
      background: conic-gradient(${SITE.color} 0 68%, #1d2b45 68% 100%);
    }
    #hero .hero-ring div {
      width: 94px; height: 94px; border-radius: 50%; background: #0d1729;
      display: grid; place-items: center; text-align: center; line-height: 1.1;
    }
    #hero .hero-ring strong { font-size: 1.25rem; display: block; }
    #hero .hero-ring span { font-size: .68rem; color: #98a6bc; }
    #hero .hero-macros { flex: 1; display: grid; gap: 10px; }
    #hero .hero-macro { font-size: .78rem; color: #98a6bc; }
    #hero .hero-macro p { display: flex; justify-content: space-between; margin: 0 0 4px; }
    #hero .hero-macro p b { color: #eef3fa; font-weight: 600; }
    #hero .hero-bar { height: 6px; border-radius: 6px; background: #1d2b45; overflow: hidden; }
    #hero .hero-bar i { display: block; height: 100%; border-radius: 6px; background: ${SITE.color}; }
    #hero .hero-meal {
      display: flex; justify-content: space-between; align-items: center; gap: 10px;
      padding: 12px 14px; border-radius: 12px; background: #12203a; margin-top: 8px; font-size: .88rem;
    }
    #hero .hero-meal small { display: block; color: #98a6bc; font-size: .74rem; }
    #hero .hero-meal em { font-style: normal; font-weight: 700; color: ${SITE.color}; white-space: nowrap; }
    #hero .hero-note { margin: 12px 0 0; text-align: center; font-size: .72rem; color: #6f7f99; }

    @media (max-width: 760px) {
      #hero .hero-wrap { grid-template-columns: 1fr; padding: 36px 22px; gap: 28px; }
      #hero .hero-btn { width: 100%; text-align: center; }
    }
  </style>

  <div class="hero-wrap">
    <div>
      <p class="hero-eyebrow"><span class="hero-dot"></span>Built for Cal Poly students</p>
      <h1>${SITE.name.replace(/(Eats)$/, "<span>$1</span>")}</h1>
      <p class="hero-tagline">${SITE.tagline}</p>
      <p class="hero-sub">See what's being served across campus dining today, check the calories and macros before you order, and log your meal in one tap.</p>
      <div class="hero-actions">
        <a class="hero-btn" href="#signup">Get early access</a>
        <a class="hero-link" href="#features">See how it works →</a>
      </div>
      <ul class="hero-points">
        <li>Up-to-date campus menus</li>
        <li>Calories, protein, carbs, fat</li>
        <li>Daily meal tracking</li>
      </ul>
    </div>

    <div class="hero-card" aria-label="Preview of the ${SITE.name} app">
      <div class="hero-card-top"><b>Today</b><small>Sample day</small></div>
      <div class="hero-ring-row">
        <div class="hero-ring"><div><strong>1,640</strong><span>of 2,400 cal</span></div></div>
        <div class="hero-macros">
          <div class="hero-macro"><p>Protein <b>98 / 140 g</b></p><div class="hero-bar"><i style="width:70%"></i></div></div>
          <div class="hero-macro"><p>Carbs <b>182 / 280 g</b></p><div class="hero-bar"><i style="width:65%"></i></div></div>
          <div class="hero-macro"><p>Fat <b>51 / 80 g</b></p><div class="hero-bar"><i style="width:64%"></i></div></div>
        </div>
      </div>
      <div class="hero-meal"><div>Grilled chicken rice bowl<small>Lunch · logged 12:40 pm</small></div><em>620 cal</em></div>
      <div class="hero-meal"><div>Greek yogurt parfait<small>Breakfast · logged 8:15 am</small></div><em>310 cal</em></div>
      <p class="hero-note">Example numbers for illustration</p>
    </div>
  </div>
`);
