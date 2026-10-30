// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features .feat-wrap { padding: 48px 8px 8px; }
    #features .feat-head { text-align: center; max-width: 36em; margin: 0 auto 36px; }
    #features .feat-kicker { margin: 0 0 8px; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: ${SITE.color}; }
    #features h2 { margin: 0 0 10px; font-size: clamp(1.8rem, 4.5vw, 2.4rem); line-height: 1.15; letter-spacing: -.02em; }
    #features .feat-head p { margin: 0; color: #98a6bc; }
    #features .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    #features .feat-card {
      display: flex; flex-direction: column; padding: 24px; border-radius: 18px;
      background: #0f1a2e; border: 1px solid #1d2b45; transition: border-color .15s ease, transform .15s ease;
    }
    #features .feat-card:hover { border-color: color-mix(in srgb, ${SITE.color} 55%, transparent); transform: translateY(-3px); }
    #features .feat-num {
      width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; margin-bottom: 16px;
      font-weight: 800; color: ${SITE.color}; background: color-mix(in srgb, ${SITE.color} 14%, transparent);
    }
    #features h3 { margin: 0 0 8px; font-size: 1.15rem; }
    #features .feat-card > p { margin: 0 0 18px; color: #98a6bc; font-size: .95rem; }
    #features .feat-demo { margin-top: auto; padding: 14px; border-radius: 12px; background: #0b1220; border: 1px solid #1a2740; font-size: .8rem; }

    #features .feat-menu-row { display: flex; justify-content: space-between; gap: 8px; padding: 6px 0; border-bottom: 1px solid #1a2740; }
    #features .feat-menu-row:last-child { border-bottom: 0; }
    #features .feat-menu-row span { color: #98a6bc; }
    #features .feat-open { display: inline-flex; align-items: center; gap: 6px; margin-bottom: 6px; color: ${SITE.color}; font-weight: 600; }
    #features .feat-open::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: ${SITE.color}; }

    #features .feat-dish { font-weight: 600; margin-bottom: 10px; }
    #features .feat-chips { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; text-align: center; }
    #features .feat-chips div { padding: 8px 4px; border-radius: 9px; background: #12203a; }
    #features .feat-chips b { display: block; font-size: .95rem; }
    #features .feat-chips small { color: #98a6bc; font-size: .68rem; }
    #features .feat-chips div:first-child b { color: ${SITE.color}; }

    #features .feat-log { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; }
    #features .feat-log button {
      font: inherit; font-weight: 700; font-size: .78rem; padding: 7px 12px; border-radius: 9px; border: 0; cursor: pointer;
      color: #0b1220; background: ${SITE.color};
    }
    #features .feat-log button:focus-visible { outline: 3px solid #eef3fa; outline-offset: 2px; }
    #features .feat-log button[disabled] { cursor: default; color: ${SITE.color}; background: color-mix(in srgb, ${SITE.color} 14%, transparent); }
    #features .feat-total { display: flex; justify-content: space-between; color: #98a6bc; margin-bottom: 6px; }
    #features .feat-total b { color: #eef3fa; }
    #features .feat-bar { height: 7px; border-radius: 7px; background: #1d2b45; overflow: hidden; }
    #features .feat-bar i { display: block; height: 100%; width: 52%; border-radius: 7px; background: ${SITE.color}; transition: width .4s ease; }

    @media (max-width: 820px) { #features .feat-grid { grid-template-columns: 1fr; } }
  </style>

  <div class="feat-wrap">
    <div class="feat-head">
      <p class="feat-kicker">Features</p>
      <h2>Eat well on campus without the guesswork</h2>
      <p>${SITE.name} puts the menu, the nutrition facts and your daily goals in one place.</p>
    </div>

    <div class="feat-grid">
      <article class="feat-card">
        <div class="feat-num">1</div>
        <h3>Every menu, kept current</h3>
        <p>See what's being served at campus dining locations right now, updated as menus change through the day.</p>
        <div class="feat-demo" aria-hidden="true">
          <div class="feat-open">Open now · Lunch</div>
          <div class="feat-menu-row">Grilled chicken bowl <span>620 cal</span></div>
          <div class="feat-menu-row">Veggie stir-fry <span>480 cal</span></div>
          <div class="feat-menu-row">Turkey pesto panini <span>710 cal</span></div>
        </div>
      </article>

      <article class="feat-card">
        <div class="feat-num">2</div>
        <h3>Macros before you order</h3>
        <p>Calories, protein, carbs and fat for every item, so you can pick the plate that fits your goals.</p>
        <div class="feat-demo" aria-hidden="true">
          <div class="feat-dish">Grilled chicken bowl</div>
          <div class="feat-chips">
            <div><b>620</b><small>cal</small></div>
            <div><b>42g</b><small>protein</small></div>
            <div><b>68g</b><small>carbs</small></div>
            <div><b>18g</b><small>fat</small></div>
          </div>
        </div>
      </article>

      <article class="feat-card">
        <div class="feat-num">3</div>
        <h3>Log it in one tap</h3>
        <p>Add what you ate straight from the menu. Your daily totals update instantly. No searching, no typing.</p>
        <div class="feat-demo">
          <div class="feat-log">Grilled chicken bowl
            <button type="button" onclick="this.disabled=true;this.textContent='Logged ✓';var c=this.closest('.feat-demo');c.querySelector('.feat-bar i').style.width='78%';c.querySelector('.feat-total b').textContent='1,870 / 2,400';">+ Log</button>
          </div>
          <div class="feat-total">Today <b>1,250 / 2,400</b></div>
          <div class="feat-bar"><i></i></div>
        </div>
      </article>
    </div>
  </div>
`);
