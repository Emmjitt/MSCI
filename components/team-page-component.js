export default {
  name: 'team-page-component',
  template: `
    <div>
      <section class="hero" style="padding: 4rem 0 3.5rem;">
        <div class="hero-sash" aria-hidden="true"></div>
        <div class="container position-relative">
          <p class="eyebrow" style="color: var(--gold-400);">Our Organization</p>
          <h1 class="mt-3 mb-3" style="font-size: clamp(2rem, 4vw, 3rem);">Meet the Team</h1>
          <p class="lead">The directors, board, and volunteers who make Miss Central Indiana &amp; Miss White River possible.</p>
        </div>
      </section>

      <!-- DIRECTORS -->
      <section class="section">
        <div class="container">
          <p class="eyebrow">Leadership</p>
          <h2 class="mt-2">Executive &amp; Co-Directors</h2>
          <div class="section-divider"></div>
          <div class="row justify-content-center mt-3">
            <div class="col-lg-8 col-xl-6">
              <img
                src="./assets/images/team-directors.png"
                alt="Meet the Team: Debra Gossett and Joe Gossett, Executive Directors; Charlene Greer, Miss Central Indiana Co-Director; Lora Black, Miss White River Co-Director; Toma Wooley, Miss White River's Teen Co-Director"
                class="img-fluid"
                style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" />
            </div>
          </div>
        </div>
      </section>

      <!-- BOARD & COMMITTEE -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">Behind the Scenes</p>
          <h2 class="mt-2">Board &amp; Committee</h2>
          <div class="section-divider"></div>
          <div class="row g-3 mt-1">
            <div class="col-sm-6 col-lg-4" v-for="member in boardMembers" :key="member.name">
              <div class="program-card h-100">
                <h3 class="h6 mb-1">{{ member.name }}</h3>
                <p class="text-secondary small mb-0">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section class="section section-velvet">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-7">
              <p class="eyebrow" style="color: var(--gold-400);">Questions?</p>
              <h2 class="mt-2">Get in touch with our team</h2>
              <p class="mt-3" style="color: rgba(250,246,239,0.8);">
                Debra and Joe Gossett lead the Miss Central Indiana and Miss White River organization and
                are happy to connect you with the right team member.
              </p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <a class="btn btn-gold btn-lg" href="mailto:misscentralindiana23@gmail.com">
                <i class="bi bi-envelope me-2"></i>Email the Directors
              </a>
            </div>
          </div>
        </div>
      </section>

      <site-footer-component></site-footer-component>
    </div>
  `,
  data() {
    return {
      boardMembers: [
        { name: 'Corinth Oglesby', role: 'Shining Stars Director' },
        { name: 'Elise Collins', role: 'Production Director / Stage Manager' },
        { name: 'Sam Robbins', role: 'Music and Sound' },
        { name: 'Danielle "Holland" Parker', role: 'Contestant Liaison' },
        { name: 'Matt Garrett', role: 'Caterer' },
        { name: 'Kristin Moon', role: 'Board Member' },
        { name: 'Joe Gossett', role: 'Executive Director / BOD President & Treasurer' },
        { name: 'Emma Schneider', role: 'Program Book Designer / Graphics & Website' },
        { name: 'Lauren Wright', role: 'Silent Auction Chair' },
        { name: 'Meadow Ryann', role: 'Stage Assistant' },
        { name: 'Elyssa DiRaddo', role: 'Technical Assistant / Music Creator' },
        { name: 'Molly Greer', role: 'Alumni Liaison' },
        { name: 'Amanda Antrim', role: 'Liaison, Monroe Central High School' },
        { name: 'Lisa Todd', role: 'Board Member' },
        { name: 'Bartanen Law Office, LLC', role: 'Legal Counsel' },
        { name: 'Gracie "Lyons" Stoll', role: 'Board of Directors' },
      ],
    };
  },
};
