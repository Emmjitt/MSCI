export default {
  name: 'landing-page-component',
  inject: ['itemsStore'],
  computed: {
    featured() {
      return this.itemsStore.items.slice(0, 4);
    },
  },
  template: `
    <div>
      <!-- HERO -->
      <section class="hero">
        <div class="hero-sash" aria-hidden="true"></div>
        <img src="./assets/images/MSCI-Logo.png" alt="Miss Central Indiana &amp; Miss White River crest" class="hero-logo-right" />
        <div class="container position-relative">
          <div class="row">
            <div class="col-lg-9">
              <p class="eyebrow" style="color: var(--gold-400);">Official Preliminary to Miss America &amp; Miss America's Teen</p>
              <h1 class="mt-3 mb-4">Miss Central Indiana &amp; Miss White River Scholarship Competition</h1>
              <p class="lead">
                Two titles, one mission: helping Indiana's young women earn scholarships, build real-world
                confidence, and put their voice to work for causes they believe in.
              </p>
              <div class="d-flex flex-wrap gap-3 mt-4">
                <router-link to="/items" class="btn btn-gold btn-lg">Meet Our Titleholders</router-link>
                <router-link to="/about" class="btn btn-outline-velvet btn-lg">How to Compete</router-link>
              </div>

              <div class="hero-stats">
                <div>
                  <span class="hero-stat-number">2</span>
                  <span class="hero-stat-label">Titles &mdash; Open &amp; Closed Divisions</span>
                </div>
                <div>
                  <span class="hero-stat-number">5</span>
                  <span class="hero-stat-label">Areas of Competition</span>
                </div>
                <div>
                  <span class="hero-stat-number">14&ndash;28</span>
                  <span class="hero-stat-label">Miss &amp; Teen Age Range</span>
                </div>
                <div>
                  <span class="hero-stat-number">100%</span>
                  <span class="hero-stat-label">Scholarship-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TWO PROGRAMS -->
      <section class="section">
        <div class="container">
          <p class="eyebrow">Two Ways to Compete</p>
          <h2 class="mt-2">Choose the title that fits you</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-2">
            <div class="col-md-6">
              <div class="program-card">
                <span class="program-badge open">Open Competition</span>
                <h3 class="h4">Miss Central Indiana</h3>
                <p class="text-secondary">
                  Open to any woman who resides, works, or attends school full time anywhere in Indiana.
                  If you call Indiana home in any way, you're eligible to compete for this title.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="program-card">
                <span class="program-badge closed">Closed Competition</span>
                <h3 class="h4">Miss White River</h3>
                <p class="text-secondary mb-2">
                  Reserved for contestants from a defined group of East-Central Indiana counties:
                </p>
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
        </div>
      </section>

      <!-- AREAS OF COMPETITION -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">On Stage</p>
          <h2 class="mt-2">Five areas of competition</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-2">
            <div class="col-sm-6 col-lg-4">
              <div class="score-card">
                <div class="score-icon"><i class="bi bi-chat-quote"></i></div>
                <h3 class="h6 mb-1">Private Interview</h3>
                <p class="text-secondary small mb-0">9.5 minutes with the judges, opening with a 30-second introduction.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="score-card">
                <div class="score-icon"><i class="bi bi-mic"></i></div>
                <h3 class="h6 mb-1">On-Stage Question</h3>
                <p class="text-secondary small mb-0">Answered live, on stage, in interview attire.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="score-card">
                <div class="score-icon"><i class="bi bi-star"></i></div>
                <h3 class="h6 mb-1">Talent</h3>
                <p class="text-secondary small mb-0">Each contestant has 90 seconds to showcase her talent.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="score-card">
                <div class="score-icon"><i class="bi bi-heart-pulse"></i></div>
                <h3 class="h6 mb-1">Fitness Modeling</h3>
                <p class="text-secondary small mb-0">Styled in Rebel Wear activewear.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="score-card">
                <div class="score-icon"><i class="bi bi-gem"></i></div>
                <h3 class="h6 mb-1">Evening Gown</h3>
                <p class="text-secondary small mb-0">Contestant's choice &mdash; a moment of pure poise.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="score-card">
                <div class="score-icon"><i class="bi bi-mortarboard"></i></div>
                <h3 class="h6 mb-1">Scholarship Fund</h3>
                <p class="text-secondary small mb-0">Every titleholder competes for cash scholarships toward her education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SHINING STARS -->
      <section class="section section-velvet">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-7">
              <p class="eyebrow" style="color: var(--gold-400);">Community Partnership</p>
              <h2 class="mt-2">The Shining Stars Program</h2>
              <p class="mt-3" style="color: rgba(250,246,239,0.8); max-width: 40rem;">
                Our titleholders proudly partner with local individuals with disabilities through the
                Shining Stars program, welcoming them alongside our contestants at appearances and events
                throughout the year.
              </p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <router-link class="btn btn-outline-velvet btn-lg" to="/shining-stars">
                Learn More &amp; Apply
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURED TITLEHOLDERS -->
      <section class="section">
        <div class="container">
          <div class="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div>
              <p class="eyebrow">Meet the Class</p>
              <h2 class="mt-2 mb-0">Current titleholders</h2>
            </div>
            <router-link to="/items" class="btn btn-outline-plum">View All Titleholders</router-link>
          </div>
          <div class="section-divider"></div>

          <div v-if="itemsStore.isLoading" class="state-panel mt-4">
            <div class="spinner-gold"></div>
            Loading titleholders&hellip;
          </div>
          <div v-else-if="itemsStore.error" class="state-panel mt-4">
            <i class="bi bi-exclamation-circle fs-3 d-block mb-2" style="color: var(--gold-600);"></i>
            {{ itemsStore.error }}
          </div>
          <div v-else class="row g-4 mt-1">
            <div class="col-sm-6 col-lg-3" v-for="item in featured" :key="item.id">
              <router-link :to="'/items/' + item.id" class="text-decoration-none text-reset">
                <div class="titleholder-card sash-corner" :data-sash="item.category">
                  <img :src="item.imageUrl" class="collection-card-image" :alt="item.name" loading="lazy" />
                  <div class="titleholder-card-body">
                    <h3 class="titleholder-name">{{ item.name }}</h3>
                    <div class="titleholder-location">
                      <i class="bi bi-geo-alt"></i> {{ item.location }}
                    </div>
                    <p class="collection-description">{{ item.description }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <site-footer-component></site-footer-component>
    </div>
  `,
};
