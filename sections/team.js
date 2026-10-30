// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.

// Edit this list to add your teammates. Initials are made from the name automatically.
var TEAM = [
  { name: "Nathan", role: "Founder", bio: "Got tired of guessing what was in his dining hall lunch." },
  { name: "Teammate Two", role: "Design", bio: "Replace this with a one-line bio." },
  { name: "Teammate Three", role: "Engineering", bio: "Replace this with a one-line bio." },
  { name: "Teammate Four", role: "Nutrition data", bio: "Replace this with a one-line bio." }
];

section("team", () => `
  <style>
    #team .team-wrap { padding: 48px 8px 8px; }
    #team .team-head { text-align: center; max-width: 34em; margin: 0 auto 36px; }
    #team .team-kicker { margin: 0 0 8px; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: ${SITE.color}; }
    #team h2 { margin: 0 0 10px; font-size: clamp(1.8rem, 4.5vw, 2.4rem); line-height: 1.15; letter-spacing: -.02em; }
    #team .team-head p { margin: 0; color: #98a6bc; }
    #team .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 18px; }
    #team .team-card {
      text-align: center; padding: 28px 20px 24px; border-radius: 18px;
      background: #0f1a2e; border: 1px solid #1d2b45;
    }
    #team .team-avatar {
      width: 76px; height: 76px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center;
      font-size: 1.5rem; font-weight: 800; color: #0b1220;
      background: linear-gradient(140deg, ${SITE.color}, color-mix(in srgb, ${SITE.color} 55%, #eef3fa));
      box-shadow: 0 0 0 5px color-mix(in srgb, ${SITE.color} 15%, transparent);
    }
    #team h3 { margin: 0 0 2px; font-size: 1.1rem; }
    #team .team-role { margin: 0 0 10px; font-size: .78rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: ${SITE.color}; }
    #team .team-bio { margin: 0; color: #98a6bc; font-size: .9rem; }
  </style>

  <div class="team-wrap">
    <div class="team-head">
      <p class="team-kicker">Team</p>
      <h2>Made by Cal Poly students, for Cal Poly students</h2>
      <p>We eat on campus too. We built ${SITE.name} because we wanted to know what was on our plate.</p>
    </div>

    <div class="team-grid">
      ${TEAM.map(p => `
        <article class="team-card">
          <div class="team-avatar" aria-hidden="true">${p.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}</div>
          <h3>${p.name}</h3>
          <p class="team-role">${p.role}</p>
          <p class="team-bio">${p.bio}</p>
        </article>
      `).join("")}
    </div>

  </div>
`);
