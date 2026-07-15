export default {
  name: 'donate-page-component',
  data() {
    return {
      waysToGive: [
        {
          icon: 'bi-award',
          title: 'Scholarship Sponsorship',
          description: 'Gold, Silver, and Bronze level sponsorships directly fund the scholarships awarded to our titleholders each year.',
        },
        {
          icon: 'bi-star',
          title: 'Shining Star Program',
          description: 'Sponsor a special-needs young woman’s participation in our Shining Star program, including her onstage moment and gifts.',
        },
        {
          icon: 'bi-gift',
          title: 'In-Kind & Silent Auction',
          description: 'Donate goods, services, or gift baskets for our Friends of Miss Central Indiana silent auction.',
        },
        {
          icon: 'bi-heart',
          title: 'General & Memorial Gifts',
          description: 'One-time gifts, including contributions to the David White Legacy Scholarship, support our mission year-round.',
        },
      ],
    };
  },
  template: `
    <div>
      <section class="hero" style="padding: 4rem 0 3.5rem;">
        <div class="hero-sash" aria-hidden="true"></div>
        <div class="container position-relative">
          <p class="eyebrow" style="color: var(--gold-400);">Invest in Scholarship &amp; Community</p>
          <h1 class="mt-3 mb-3" style="font-size: clamp(2rem, 4vw, 3rem);">Donate</h1>
          <p class="lead">
            Your generosity helps Indiana's young women earn scholarships, build confidence, and put
            their voice to work for causes they believe in. Here's how you can help.
          </p>
        </div>
      </section>

      <!-- WAYS TO GIVE -->
      <section class="section">
        <div class="container">
          <p class="eyebrow">Donation Opportunities</p>
          <h2 class="mt-2">Ways to Give</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-sm-6 col-lg-3" v-for="way in waysToGive" :key="way.title">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi" :class="way.icon"></i></div>
                <h3 class="h6 mb-1">{{ way.title }}</h3>
                <p class="text-secondary small mb-0">{{ way.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW TO DONATE -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">Getting Your Gift to Us</p>
          <h2 class="mt-2">How to Donate</h2>
          <div class="section-divider"></div>

          <div class="state-panel text-start mt-4">
            <i class="bi bi-credit-card me-2" style="color: var(--gold-600);"></i>
            <strong>Payment Options:</strong> Venmo @debra-gossett, or a check made payable to Debra Gossett.
            To send a check, email
            <a href="mailto:misscentralindiana23@gmail.com">misscentralindiana23@gmail.com</a> for the mailing address.
          </div>

          <p class="text-secondary small mt-4 mb-0" style="max-width: 44rem;">
            Interested in a sponsorship package, program ad, or corporate partnership? Reach out and we'll
            walk you through the available levels and recognition benefits.
          </p>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-velvet">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-7">
              <p class="eyebrow" style="color: var(--gold-400);">Thank You</p>
              <h2 class="mt-2">Every Gift Makes a Difference</h2>
              <p class="mt-3" style="color: rgba(250,246,239,0.85); max-width: 40rem;">
                Curious who your generosity stands alongside? Meet the sponsors, donors, and friends who
                make our scholarship competition possible.
              </p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <div class="d-flex flex-wrap justify-content-lg-end gap-3">
                <a class="btn btn-gold btn-lg" href="mailto:misscentralindiana23@gmail.com">
                  <i class="bi bi-envelope me-2"></i>Email Us
                </a>
                <router-link class="btn btn-outline-velvet btn-lg" to="/donors">
                  See Our Donors
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <site-footer-component></site-footer-component>
    </div>
  `,
};
