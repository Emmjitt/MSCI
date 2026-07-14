export default {
  name: 'about-page-component',
  template: `
    <div>
      <section class="hero" style="padding: 4rem 0 3.5rem;">
        <div class="hero-sash" aria-hidden="true"></div>
        <div class="container position-relative">
          <p class="eyebrow" style="color: var(--gold-400);">2025&ndash;2026 Competition Details</p>
          <h1 class="mt-3 mb-3" style="font-size: clamp(2rem, 4vw, 3rem);">About &amp; Eligibility</h1>
          <p class="lead">Everything a prospective contestant needs to know before she registers.</p>
        </div>
      </section>

      <!-- FEES -->
      <section class="section">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-5">
              <p class="eyebrow">Getting Started</p>
              <h2 class="mt-2">Fees &amp; Paperwork</h2>
              <div class="section-divider"></div>
              <p class="text-secondary">
                Registration is completed through the Miss America Organization (MAO) platform. Here's
                what to budget for and submit before your local competition.
              </p>
            </div>
            <div class="col-lg-7">
              <div class="row g-3">
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-credit-card"></i></div>
                    <h3 class="h6 mb-1">MAO Subscription</h3>
                    <p class="text-secondary small mb-0">$49.99, renews automatically each year.</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-hand-thumbs-up"></i></div>
                    <h3 class="h6 mb-1">AHA Spot Fund</h3>
                    <p class="text-secondary small mb-0">$30.00 donation submitted with registration.</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-file-earmark-text"></i></div>
                    <h3 class="h6 mb-1">MAO Contract</h3>
                    <p class="text-secondary small mb-0">Submit directly on the MAO site once per year if you haven't already competed this season.</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-pencil-square"></i></div>
                    <h3 class="h6 mb-1">Register on MAO</h3>
                    <p class="text-secondary small mb-0">Choose Miss Central Indiana or Miss White River during registration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- COMPETITION AREAS -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">On Stage</p>
          <h2 class="mt-2">Areas of Competition</h2>
          <div class="section-divider"></div>
          <div class="row g-3 mt-1">
            <div class="col-md-6 col-lg-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-chat-quote me-2" style="color:var(--gold-600);"></i>Private Interview</h3>
                <p class="text-secondary small mb-0">9.5 minutes with the judges, beginning with a 30-second opening statement.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-mic me-2" style="color:var(--gold-600);"></i>On-Stage Question</h3>
                <p class="text-secondary small mb-0">Delivered live on stage, contestants answer in interview attire.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-star me-2" style="color:var(--gold-600);"></i>Talent</h3>
                <p class="text-secondary small mb-0">A 90-second performance built around each contestant's HERStory.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-heart-pulse me-2" style="color:var(--gold-600);"></i>Fitness Modeling</h3>
                <p class="text-secondary small mb-0">Styled in Rebel Wear activewear (Rebel code: MAOINGB).</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-gem me-2" style="color:var(--gold-600);"></i>Evening Gown</h3>
                <p class="text-secondary small mb-0">Contestant's choice of gown &mdash; her moment to shine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AGE ELIGIBILITY -->
      <section class="section">
        <div class="container">
          <p class="eyebrow">Who Can Compete</p>
          <h2 class="mt-2">Age Eligibility</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-md-6">
              <div class="program-card h-100">
                <span class="program-badge open">Miss Division</span>
                <p class="text-secondary mb-0">18 years old by June 15, 2026, and under 28.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="program-card h-100">
                <span class="program-badge closed">Teen Division</span>
                <p class="text-secondary mb-0">14 years old by June 15, 2026, and under 19.</p>
              </div>
            </div>
          </div>
          <div class="state-panel text-start mt-4">
            <i class="bi bi-info-circle me-2" style="color: var(--gold-600);"></i>
            Contestants who are 18 by June 15, 2026 may choose either the Miss or Teen division for a
            single "pivot" year. Once a division is chosen, a contestant may not switch divisions until
            the next competition cycle.
          </div>
        </div>
      </section>

      <!-- PROGRAM ELIGIBILITY -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">Two Ways to Compete</p>
          <h2 class="mt-2">Am I eligible?</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-md-6">
              <div class="program-card h-100">
                <span class="program-badge open">Open Competition</span>
                <h3 class="h5">Miss Central Indiana</h3>
                <p class="text-secondary mb-0">
                  Open to any woman who resides, works, or attends school full time in Indiana.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="program-card h-100">
                <span class="program-badge closed">Closed Competition</span>
                <h3 class="h5">Miss White River</h3>
                <p class="text-secondary mb-2">Open only to residents of these counties:</p>
                <div>
                  <span class="county-chip">Blackford</span><span class="county-chip">Delaware</span>
                  <span class="county-chip">Fayette</span><span class="county-chip">Grant</span>
                  <span class="county-chip">Henry</span><span class="county-chip">Huntington</span>
                  <span class="county-chip">Jay</span><span class="county-chip">Kosciusko</span>
                  <span class="county-chip">Madison</span><span class="county-chip">Randolph</span>
                  <span class="county-chip">Rush</span><span class="county-chip">Wabash</span>
                  <span class="county-chip">Wayne</span><span class="county-chip">Whitley</span>
                  <span class="county-chip">Union</span>
                </div>
              </div>
            </div>
          </div>

          <div class="program-card mt-4">
            <h3 class="h5">General Requirements &mdash; All Ages</h3>
            <div class="row mt-2">
              <div class="col-sm-6">
                <ul class="text-secondary small">
                  <li>United States citizen</li>
                  <li>Female</li>
                  <li>Single, with no legal dependents</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="text-secondary small">
                  <li>Meets residency requirements for her city or state</li>
                  <li>Miss America 18&ndash;28: no older than 28 as of September 30, 2026; no younger than 18 as of September 1, 2026</li>
                  <li>Miss America's Teen 14&ndash;17: no younger than 14 as of September 1, 2026; no older than 18 as of September 30, 2026</li>
                </ul>
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
              <h2 class="mt-2">Talk to our Executive Directors</h2>
              <p class="mt-3" style="color: rgba(250,246,239,0.8);">
                Debra and Joe Gossett lead the Miss Central Indiana and Miss White River organization and
                are happy to walk prospective contestants and families through registration.
              </p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <a class="btn btn-gold btn-lg" href="mailto:info@misscentralindiana.org">
                <i class="bi bi-envelope me-2"></i>Email the Directors
              </a>
            </div>
          </div>
        </div>
      </section>

      <site-footer-component></site-footer-component>
    </div>
  `,
};
