export default {
  name: 'alumni-page-component',
  template: `
    <div>
      <section class="hero" style="padding: 4rem 0 3.5rem;">
        <div class="hero-sash" aria-hidden="true"></div>
        <div class="container position-relative">
          <p class="eyebrow" style="color: var(--gold-400);">Since 2006</p>
          <h1 class="mt-3 mb-3" style="font-size: clamp(2rem, 4vw, 3rem);">Our Alumni</h1>
          <p class="lead">Celebrating every young woman who has proudly worn a Miss Central Indiana or Miss White River crown.</p>
        </div>
      </section>

      <section class="section" v-for="group in rosters" :key="group.title">
        <div class="container">
          <p class="eyebrow">{{ group.eyebrow }}</p>
          <h2 class="mt-2">{{ group.title }}</h2>
          <div class="section-divider"></div>
          <div class="row justify-content-center mt-3">
            <div class="col-lg-9">
              <img
                :src="group.image"
                :alt="group.title + ' titleholder roster'"
                class="img-fluid"
                style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" />
            </div>
          </div>
        </div>
      </section>

      <site-footer-component></site-footer-component>
    </div>
  `,
  data() {
    return {
      rosters: [
        {
          eyebrow: 'Open Division',
          title: 'Miss Central Indiana Titleholders',
          image: './assets/images/alumni-miss-central-indiana.png',
        },
        {
          eyebrow: 'Open Division — Teen',
          title: "Miss Central Indiana's Outstanding Teen Titleholders",
          image: './assets/images/alumni-miss-ci-teen.png',
        },
        {
          eyebrow: 'Closed Division',
          title: 'Miss White River Titleholders',
          image: './assets/images/alumni-miss-white-river.png',
        },
        {
          eyebrow: 'Closed Division — Teen',
          title: "Miss White River's Teen Titleholders",
          image: './assets/images/alumni-miss-wr-teen.png',
        },
      ],
    };
  },
};
