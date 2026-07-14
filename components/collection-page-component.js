export default {
  name: 'collection-page-component',
  inject: ['itemsStore'],
  data() {
    return {
      activeCategory: 'All',
    };
  },
  computed: {
    categories() {
      const unique = new Set(this.itemsStore.items.map((item) => item.category).filter(Boolean));
      return ['All', ...unique];
    },
    filteredItems() {
      if (this.activeCategory === 'All') return this.itemsStore.items;
      return this.itemsStore.items.filter((item) => item.category === this.activeCategory);
    },
  },
  methods: {
    setCategory(category) {
      this.activeCategory = category;
    },
  },
  template: `
    <div>
      <section class="hero" style="padding: 4rem 0 3.5rem;">
        <div class="hero-sash" aria-hidden="true"></div>
        <div class="container position-relative">
          <p class="eyebrow" style="color: var(--gold-400);">The Class of 2025&ndash;2026</p>
          <h1 class="mt-3 mb-3" style="font-size: clamp(2rem, 4vw, 3rem);">Meet Our Titleholders</h1>
          <p class="lead">Scholars, performers, and advocates representing Central and East-Central Indiana.</p>
        </div>
      </section>

      <section class="section">
        <div class="container">

          <div v-if="itemsStore.isLoading" class="state-panel">
            <div class="spinner-gold"></div>
            Loading titleholders&hellip;
          </div>

          <div v-else-if="itemsStore.error" class="state-panel">
            <i class="bi bi-exclamation-circle fs-3 d-block mb-2" style="color: var(--gold-600);"></i>
            {{ itemsStore.error }}
          </div>

          <div v-else-if="itemsStore.items.length === 0" class="state-panel">
            <i class="bi bi-people fs-3 d-block mb-2" style="color: var(--gold-600);"></i>
            No titleholders have been added yet. Check back soon.
          </div>

          <div v-else>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <button
                v-for="cat in categories"
                :key="cat"
                type="button"
                class="filter-pill"
                :class="{ active: activeCategory === cat }"
                @click="setCategory(cat)">
                {{ cat }}
              </button>
            </div>

            <div class="row g-4">
              <div class="col-sm-6 col-lg-4" v-for="item in filteredItems" :key="item.id">
                <router-link :to="'/items/' + item.id" class="text-decoration-none text-reset">
                  <div class="titleholder-card sash-corner" :data-sash="item.category">
                    <img :src="item.imageUrl" class="collection-card-image" :alt="item.name" loading="lazy" />
                    <div class="titleholder-card-body">
                      <h2 class="titleholder-name h5">{{ item.name }}</h2>
                      <div class="titleholder-location">
                        <i class="bi bi-geo-alt"></i> {{ item.location }}
                      </div>
                      <p class="collection-description">{{ item.description }}</p>
                      <span class="btn btn-outline-plum btn-sm mt-3 align-self-start">Read Her Story</span>
                    </div>
                  </div>
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
