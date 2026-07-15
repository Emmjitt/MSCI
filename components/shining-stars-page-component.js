export default {
  name: 'shining-stars-page-component',
  template: `
    <div>
      <section class="hero" style="padding: 4rem 0 3.5rem;">
        <div class="hero-sash" aria-hidden="true"></div>
        <div class="container position-relative">
          <p class="eyebrow" style="color: var(--gold-400);">Community Partnership &middot; 2025 Program</p>
          <h1 class="mt-3 mb-3" style="font-size: clamp(2rem, 4vw, 3rem);">Shining Stars Program</h1>
          <p class="lead">
            Our titleholders proudly partner with local individuals with disabilities through the
            Shining Stars program, welcoming them alongside our contestants at appearances and
            events throughout the year &mdash; and giving them their own moment on our stage.
          </p>
          <div class="d-flex flex-wrap gap-3 mt-4">
            <a
              class="btn btn-gold btn-lg"
              href="https://misscentralindiana.weebly.com/uploads/1/1/9/8/119815556/shining_star_one_page_infographic__1_.pdf"
              target="_blank"
              rel="noopener">
              <i class="bi bi-file-earmark-pdf me-2"></i>View Shining Stars Application
            </a>
            <a class="btn btn-outline-velvet btn-lg" href="mailto:twooley18@gmail.com">Questions?</a>
          </div>
        </div>
      </section>

      <!-- QUICK FACTS -->
      <section class="section">
        <div class="container">
          <p class="eyebrow">The Details</p>
          <h2 class="mt-2">Event Quick Facts</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-sm-6 col-lg-4">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi bi-calendar-event"></i></div>
                <h3 class="h6 mb-1">Pageant Date</h3>
                <p class="text-secondary small mb-0">Sunday, September 28, 2025.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi bi-geo-alt"></i></div>
                <h3 class="h6 mb-1">Location</h3>
                <p class="text-secondary small mb-0">Cornerstone Center for the Arts &mdash; 320 E Main Street, Muncie, IN.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi bi-cash-coin"></i></div>
                <h3 class="h6 mb-1">Participation Fee</h3>
                <p class="text-secondary small mb-0">
                  $125 per participant &mdash; $100 if invited to attend with a 2025 Miss or Teen titleholder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEES INCLUDE -->
      <section class="section section-blush">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-5">
              <p class="eyebrow">What's Covered</p>
              <h2 class="mt-2">Fees Include</h2>
              <div class="section-divider"></div>
              <p class="text-secondary mt-3">
                Every registration covers a full day of activities, keepsakes, and a moment in the spotlight.
              </p>
            </div>
            <div class="col-lg-7">
              <div class="row g-3">
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-ticket-perforated"></i></div>
                    <h3 class="h6 mb-1">One Chaperone Ticket</h3>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-controller"></i></div>
                    <h3 class="h6 mb-1">Fun Activity</h3>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-gem"></i></div>
                    <h3 class="h6 mb-1">Official Tiara</h3>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-cup-straw"></i></div>
                    <h3 class="h6 mb-1">Snack</h3>
                  </div>
                </div>
                <div class="col-12">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-mic"></i></div>
                    <h3 class="h6 mb-1">Onstage Performance with Introduction</h3>
                  </div>
                </div>
                <div class="col-12">
                  <div class="score-card h-100">
                    <div class="score-icon"><i class="bi bi-people"></i></div>
                    <h3 class="h6 mb-1">Meet &amp; Greet with Our 2025 Titleholders</h3>
                    <p class="text-secondary small mb-0">
                      Kinley Shoemaker, Miss Indiana 2025, and Addison Chattin, Miss Indiana's Teen 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="state-panel text-start mt-4">
            <i class="bi bi-credit-card me-2" style="color: var(--gold-600);"></i>
            <strong>Payment Options:</strong> Venmo @debra-gossett, or check payable to Debra Gossett.
            To send a check, email
            <a href="mailto:misscentralindiana23@gmail.com">misscentralindiana23@gmail.com</a> for the mailing address.
          </div>
        </div>
      </section>

      <!-- KEY DATES & INFO -->
      <section class="section">
        <div class="container">
          <p class="eyebrow">Plan Ahead</p>
          <h2 class="mt-2">Key Dates &amp; Info</h2>
          <div class="section-divider"></div>
          <div class="row g-3 mt-1">
            <div class="col-md-6 col-lg-3">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-bag-heart me-2" style="color:var(--gold-600);"></i>Attire</h3>
                <p class="text-secondary small mb-2">For the show: a party dress, sundress, or any outfit that makes them feel fabulous.</p>
                <p class="text-secondary small mb-0">For rehearsal: something comfortable. Feel free to bring a pillow and blanket &mdash; nap areas are available.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-person-check me-2" style="color:var(--gold-600);"></i>Eligibility</h3>
                <p class="text-secondary small mb-0">Ages 3&ndash;12. If you know someone who might be interested, please share this page with them.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-calendar-check me-2" style="color:var(--gold-600);"></i>Decision Deadline</h3>
                <p class="text-secondary small mb-0">Sunday, August 31. Please confirm participation by this date so we can order the Miss America tiaras.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-calendar2-week me-2" style="color:var(--gold-600);"></i>Registration Deadline</h3>
                <p class="text-secondary small mb-0">Sunday, September 14 at 5:00 PM &mdash; submit the completed registration form and headshot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PERFORMANCE & SCHEDULE -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">On Competition Day</p>
          <h2 class="mt-2">Performance &amp; Schedule</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-md-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-music-note-beamed me-2" style="color:var(--gold-600);"></i>Performance Details</h3>
                <p class="text-secondary small mb-0">
                  Our Shining Stars perform and are introduced onstage following intermission. It's a long day,
                  so feel free to take your little one home after they perform &mdash; unless they're scheduled to
                  appear onstage with our 2025 titleholders for the farewell.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-play-circle me-2" style="color:var(--gold-600);"></i>Routine Access</h3>
                <p class="text-secondary small mb-0">
                  The performance routine will be available by Sunday, August 31 at
                  <a href="https://misscentralindiana.weebly.com" target="_blank" rel="noopener">misscentralindiana.weebly.com</a>.
                  Choreographer: Kayla Myers, Miss White River 2025.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="program-card h-100">
                <h3 class="h6 mb-2"><i class="bi bi-clock-history me-2" style="color:var(--gold-600);"></i>Event Schedule</h3>
                <p class="text-secondary small mb-0">
                  Arrival will be in the afternoon, after lunch. Exact timing will be determined the week of September 22.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RISING STARS -->
      <section class="section">
        <div class="container">
          <div class="row g-5 align-items-start">
            <div class="col-lg-5">
              <p class="eyebrow">A Special Invitation</p>
              <h2 class="mt-2">Miss Indiana 2025 &ldquo;Rising Stars&rdquo;</h2>
              <div class="section-divider"></div>
              <p class="text-secondary mt-3">
                Girls who attended Miss/Teen Indiana with our current titleholders are invited back as
                Rising Stars &mdash; no participation fee required.
              </p>
            </div>
            <div class="col-lg-7">
              <div class="program-card">
                <span class="program-badge open">No Fee Required</span>
                <ul class="text-secondary small mb-0 mt-2">
                  <li>Perform in the routine</li>
                  <li>Participate in all Shining Stars activities</li>
                  <li>Be onstage with their titleholder during the farewell speech</li>
                  <li>Only financial responsibility is tickets and any optional program book(s)</li>
                  <li><strong>Important:</strong> since there is no fee, you must bring your official Miss Indiana Star crown from State</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- REGISTER / CONTACT -->
      <section class="section section-velvet">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-7">
              <p class="eyebrow" style="color: var(--gold-400);">To Register</p>
              <h2 class="mt-2">Request your registration form</h2>
              <p class="mt-3" style="color: rgba(250,246,239,0.8); max-width: 40rem;">
                Contact Teen Director Toma to request the Shining Stars registration form. Corinth Oglesby,
                our Shining Stars Director, oversees all participants during competition day.
              </p>
              <p class="mt-3" style="color: rgba(250,246,239,0.8);">
                Debra &amp; Joe Gossett, Executive Directors &mdash; Miss Central Indiana/Miss White River
                Scholarship Organization, Inc.<br />
                <a href="mailto:misscentralindiana23@gmail.com" style="color: var(--gold-300);">misscentralindiana23@gmail.com</a>
              </p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <div class="d-flex flex-wrap justify-content-lg-end gap-3">
                <a class="btn btn-gold btn-lg" href="mailto:twooley18@gmail.com">
                  <i class="bi bi-envelope-paper me-2"></i>Email Toma, Teen Director
                </a>
                <a
                  class="btn btn-outline-velvet btn-lg"
                  href="https://misscentralindiana.weebly.com/uploads/1/1/9/8/119815556/shining_star_one_page_infographic__1_.pdf"
                  target="_blank"
                  rel="noopener">
                  <i class="bi bi-file-earmark-pdf me-2"></i>View Application PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <site-footer-component></site-footer-component>
    </div>
  `,
};
