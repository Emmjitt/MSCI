export default {
  name: 'donors-page-component',
  data() {
    return {
      friendsOfMci: [
        { name: 'Parker House of Cakery', detail: '' },
        { name: 'Charlene Greer', detail: 'Presentation Florals' },
        { name: 'Antrim Mowing and More', detail: 'Caleb Antrim' },
        { name: 'Aveda', detail: 'Wellness Party — mini facial service, scalp and hair consultation, and a moment of wellness' },
        { name: 'Von Maur Beauty Basket', detail: 'Gucci "Flora" perfume, Burberry "Her" fragrance, Clarins skincare, Estée Lauder Advanced Night Repair, Marc Jacobs "Daisy" perfume' },
        { name: 'Von Maur Fan Gift Bag', detail: 'Oversized sweatshirt, 1,000-piece puzzle, mouse pad, coffee table book, playing cards, mug, and more' },
        { name: 'Toma and Nick Wooley', detail: 'Shining Star Donations' },
      ],
      alumniScholarshipDonors: [
        'Lauren "Petersen" Miss Central Indiana 2011',
        'Gracie "Lyons" Stoll, Miss Central Indiana 2013 and 2015',
        "Molly Greer, Miss Central Indiana's Outstanding Teen 2019",
        'Emma Schneider, White River 2019 and 2024, and Miss Central Indiana 2022',
        "Isabella Lange, Miss Central Indiana's Teen 2023",
        "Kingsley Southard, Miss Central Indiana's Teen 2025",
        "Jordyn Leininger, Miss Central Indiana's Outstanding Teen 2022",
        'Larissa "Stanfield" Rhodes, Miss White River Valley 2008',
      ],
      davidWhiteLegacyDonors: [
        'Andy Black and Lora "Garrett" Black, Emmitt and Elliot',
        'Michael Nash',
        'Courtney Jurick Seal',
        'The Kistler Family: Charles, Marcy, Morgan and Gabe',
      ],
      scholarshipTiers: [
        {
          badge: 'Gold Level',
          amount: '$500',
          donors: [
            'Premier Electrical and General Contracting, LLC, Tracey Aber, Owner',
            'Hoosier Crane G Communications, Gracie Stoll',
            'Prime 47, Nessa and Jeremy Hamman',
            'Astral Industries Inc.',
          ],
        },
        {
          badge: 'Silver Level',
          amount: '$250–$499',
          donors: [
            'Larissa "Stanfield" Rhodes and Family',
            'Dana and Linda Buck',
            'ForMotion Clinic',
            'Jacqueline Scott Estetics, LLC, Jackie Scott',
            'Patrick and Angie Patterson',
            'Crowning Achievement Consulting, Trevor Walker',
          ],
        },
        {
          badge: 'Bronze Level',
          amount: '$100–$249',
          donors: [
            'Stout Chiropractic, Dr. Benjamin and Dr. Melissa Stout, Chiropractors and Acupuncturists',
            'Pet Care Clinic of Kokomo, Dr. Charles Hiss',
            'Edward Jones — Financial Advisor, Matt Williams',
            'The Blevins Family',
            'Cinda Schneider',
            'Meadow Ryann',
            'L & M Quality Lawn Care, Ron Martin',
          ],
        },
      ],
    };
  },
  template: `
    <div>
      <section class="hero" style="padding: 4rem 0 3.5rem;">
        <div class="hero-sash" aria-hidden="true"></div>
        <div class="container position-relative">
          <p class="eyebrow" style="color: var(--gold-400);">With Deep Appreciation</p>
          <h1 class="mt-3 mb-3" style="font-size: clamp(2rem, 4vw, 3rem);">Our Donors</h1>
          <p class="lead">
            A genuine thank you and our deepest gratitude to all who have supported our organization.
            Your generous donations make our scholarship competition possible, and we are incredibly
            thankful for your continued contributions.
          </p>
          <router-link to="/donate" class="btn btn-gold btn-lg mt-4">Learn More About Donating</router-link>
        </div>
      </section>

      <!-- PROGRAM SPONSORS -->
      <section class="section">
        <div class="container">
          <p class="eyebrow">Presenting &amp; Program Sponsors</p>
          <h2 class="mt-2">Donation Levels</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-md-6">
              <div class="program-card h-100">
                <span class="program-badge open">Platinum Level &middot; $750&ndash;$1,200</span>
                <p class="text-secondary mb-0">
                  Official headshots by Chan Behind the Cam; Somato Stress and Pain Management.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="program-card h-100">
                <span class="program-badge closed">Silver Level &middot; $250&ndash;$499</span>
                <p class="text-secondary mb-0">
                  Stephen Bolinger, Photography Artist &mdash; personalized thank you cards and a framed card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FRIENDS OF MCI / SILENT AUCTION -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">In-Kind &amp; Silent Auction</p>
          <h2 class="mt-2">Friends of Miss Central Indiana</h2>
          <div class="section-divider"></div>
          <div class="row g-3 mt-1">
            <div class="col-sm-6 col-lg-4" v-for="friend in friendsOfMci" :key="friend.name">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi bi-gift"></i></div>
                <h3 class="h6 mb-1">{{ friend.name }}</h3>
                <p class="text-secondary small mb-0" v-if="friend.detail">{{ friend.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SCHOLARSHIP DONORS -->
      <section class="section section-velvet">
        <div class="container">
          <p class="eyebrow" style="color: var(--gold-400);">Because of You</p>
          <h2 class="mt-2">Scholarship Donors</h2>
          <div class="hero-stats" style="border-top: none; padding-top: 0; margin-top: 1.5rem;">
            <div>
              <span class="hero-stat-number">$6,000</span>
              <span class="hero-stat-label">Awarded in Scholarships This Year</span>
            </div>
          </div>
          <p class="mt-4" style="color: rgba(250,246,239,0.82); max-width: 40rem;">
            To our generous donors and devoted volunteers: thank you for your support. Because of you,
            we helped open doors to brighter futures for our titleholders.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <p class="eyebrow">Honoring the Past</p>
          <h2 class="mt-2">Alumni Scholarship Donors</h2>
          <div class="section-divider"></div>
          <div class="row g-3 mt-1">
            <div class="col-md-6" v-for="donor in alumniScholarshipDonors" :key="donor">
              <div class="score-card h-100 py-3">
                <p class="text-secondary small mb-0"><i class="bi bi-star-fill me-2" style="color: var(--gold-600);"></i>{{ donor }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">In Loving Memory</p>
          <h2 class="mt-2">The David White Legacy Scholarship</h2>
          <div class="section-divider"></div>
          <div class="row g-3 mt-1">
            <div class="col-md-6" v-for="donor in davidWhiteLegacyDonors" :key="donor">
              <div class="score-card h-100 py-3">
                <p class="text-secondary small mb-0"><i class="bi bi-heart-fill me-2" style="color: var(--gold-600);"></i>{{ donor }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <p class="eyebrow">Scholarship Sponsors</p>
          <h2 class="mt-2">Gold, Silver &amp; Bronze Levels</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-lg-4" v-for="tier in scholarshipTiers" :key="tier.badge">
              <div class="program-card h-100">
                <span class="program-badge" :class="tier.badge === 'Gold Level' ? 'open' : 'closed'">{{ tier.badge }} &middot; {{ tier.amount }}</span>
                <ul class="text-secondary small mb-0 mt-2">
                  <li v-for="donor in tier.donors" :key="donor">{{ donor }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WITH GRATITUDE -->
      <section class="section section-blush">
        <div class="container">
          <p class="eyebrow">With Gratitude</p>
          <h2 class="mt-2">A Special Thank You</h2>
          <div class="section-divider"></div>
          <div class="row g-4 mt-1">
            <div class="col-md-4">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi bi-people"></i></div>
                <h3 class="h6 mb-1">A Round of Applause</h3>
                <p class="text-secondary small mb-0">
                  To the families of Nicole Jackson, Kingsley Southard, Kayla Myers, and Dahlia Saling:
                  your support throughout this competition season has been appreciated.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi bi-building"></i></div>
                <h3 class="h6 mb-1">Recognition</h3>
                <p class="text-secondary small mb-0">
                  Cornerstone Center for the Arts: Ashton Baker, Stephanie Michaels, and Rob Jordan. It
                  has been a dream working with each of you these past two years.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="score-card h-100">
                <div class="score-icon"><i class="bi bi-book"></i></div>
                <h3 class="h6 mb-1">Gratitude</h3>
                <p class="text-secondary small mb-0">
                  To our Miss Central Indiana &amp; White River alumni, Emma Schneider, for her time and
                  treasures in creating and designing our program book.
                </p>
              </div>
            </div>
          </div>

          <p class="text-secondary small mt-4 mb-0" style="max-width: 44rem;">
            With deep appreciation, Joe and I recognize those who have gone above and beyond to support
            our mission. Your dedication truly makes all the difference &mdash; including our full volunteer
            committee and Board of Directors, whom you can meet on our
            <router-link to="/team">Team page</router-link>.
          </p>
          <p class="text-secondary small mt-3 mb-0" style="max-width: 44rem; font-style: italic;">
            Please note: our deadline for this publication, out of necessity, came a few days before the
            competition. If we have missed anyone in our acknowledgement, we apologize, but we want you
            to know that our appreciation is no less sincere.
          </p>
        </div>
      </section>

      <!-- SAVE THE DATE -->
      <section class="section section-velvet">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-7">
              <p class="eyebrow" style="color: var(--gold-400);">Save the Date</p>
              <h2 class="mt-2">Join us in 2026</h2>
              <p class="mt-3" style="color: rgba(250,246,239,0.85);">
                Once again we'll celebrate tradition, talent, and community at the Miss Central Indiana
                and Miss White River Competitions.
              </p>
              <p class="mt-3" style="color: rgba(250,246,239,0.8); max-width: 40rem;">
                <i class="bi bi-calendar-event me-2"></i>Mark your calendars for the Miss Indiana and Miss
                Indiana's Teen competitions, taking place June 17&ndash;20, 2026, at the Star Bank Performing
                Arts Center in Zionsville Community Schools, Zionsville, IN. Don't miss this incredible
                event showcasing Indiana's finest talent and leadership!
              </p>
            </div>
            <div class="col-lg-5 text-lg-end">
              <div class="d-flex flex-wrap justify-content-lg-end gap-3">
                <a class="btn btn-gold btn-lg" href="mailto:misscentralindiana23@gmail.com">
                  <i class="bi bi-envelope me-2"></i>Email Us
                </a>
                <a class="btn btn-outline-velvet btn-lg" href="https://misscentralindiana.weebly.com" target="_blank" rel="noopener">
                  Visit Our Website
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
