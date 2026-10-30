// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
// This form is pretend: nothing is sent anywhere. It just shows a thank-you message.
section("signup", () => `
  <style>
    #signup .su-wrap {
      margin-top: 32px; padding: 52px 32px; border-radius: 22px; text-align: center;
      border: 1px solid color-mix(in srgb, ${SITE.color} 35%, #1d2b45);
      background:
        radial-gradient(circle at 50% 0%, color-mix(in srgb, ${SITE.color} 20%, transparent), transparent 60%),
        #0f1a2e;
    }
    #signup .su-kicker { margin: 0 0 8px; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: ${SITE.color}; }
    #signup h2 { margin: 0 0 10px; font-size: clamp(1.8rem, 4.5vw, 2.4rem); line-height: 1.15; letter-spacing: -.02em; }
    #signup .su-sub { margin: 0 auto 28px; max-width: 32em; color: #98a6bc; }
    #signup form { display: flex; gap: 10px; max-width: 480px; margin: 0 auto; }
    #signup label { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
    #signup input {
      flex: 1; min-width: 0; font: inherit; padding: 14px 16px; border-radius: 12px;
      color: #eef3fa; background: #0b1220; border: 1px solid #2a3a58;
    }
    #signup input::placeholder { color: #6f7f99; }
    #signup input:focus { outline: none; border-color: ${SITE.color}; box-shadow: 0 0 0 3px color-mix(in srgb, ${SITE.color} 25%, transparent); }
    #signup input[aria-invalid="true"] { border-color: #ef7f8f; }
    #signup button {
      font: inherit; font-weight: 700; padding: 14px 24px; border: 0; border-radius: 12px; cursor: pointer;
      color: #0b1220; background: ${SITE.color}; transition: transform .15s ease;
    }
    #signup button:hover { transform: translateY(-1px); }
    #signup button:focus-visible { outline: 3px solid #eef3fa; outline-offset: 2px; }
    #signup .su-msg { min-height: 1.6em; margin: 14px 0 0; font-size: .9rem; color: #98a6bc; }
    #signup .su-msg.su-err { color: #ef7f8f; }
    #signup .su-done { display: none; }
    #signup .su-done-icon {
      width: 56px; height: 56px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center;
      font-size: 1.6rem; font-weight: 800; color: #0b1220; background: ${SITE.color};
    }
    #signup .su-done h3 { margin: 0 0 6px; font-size: 1.4rem; }
    #signup .su-done p { margin: 0; color: #98a6bc; }
    #signup .su-done b { color: #eef3fa; }
    #signup .su-wrap.is-done .su-form-area { display: none; }
    #signup .su-wrap.is-done .su-done { display: block; }
    @media (max-width: 560px) {
      #signup .su-wrap { padding: 40px 20px; }
      #signup form { flex-direction: column; }
    }
  </style>

  <div class="su-wrap">
    <div class="su-form-area">
      <p class="su-kicker">Early access</p>
      <h2>Be first to try ${SITE.name}</h2>
      <p class="su-sub">Drop your email and we'll let you know when ${SITE.name} is ready for campus.</p>
      <form novalidate onsubmit="
        event.preventDefault();
        var wrap = this.closest('.su-wrap'), input = this.email, msg = wrap.querySelector('.su-msg');
        var ok = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input.value.trim());
        if (!ok) {
          input.setAttribute('aria-invalid', 'true');
          msg.textContent = 'Please enter a valid email address.';
          msg.classList.add('su-err');
          input.focus();
          return;
        }
        wrap.querySelector('.su-done b').textContent = input.value.trim();
        wrap.classList.add('is-done');
      ">
        <label for="su-email">Email address</label>
        <input id="su-email" name="email" type="email" placeholder="you@calpoly.edu" autocomplete="email"
          oninput="this.removeAttribute('aria-invalid'); var m=this.closest('.su-wrap').querySelector('.su-msg'); m.textContent='No spam. Just one email when we launch.'; m.classList.remove('su-err');">
        <button type="submit">Get early access</button>
      </form>
      <p class="su-msg" aria-live="polite">No spam. Just one email when we launch.</p>
    </div>

    <div class="su-done" aria-live="polite">
      <div class="su-done-icon">✓</div>
      <h3>You're on the list!</h3>
      <p>We'll email <b></b> when ${SITE.name} launches.</p>
    </div>
  </div>
`);
