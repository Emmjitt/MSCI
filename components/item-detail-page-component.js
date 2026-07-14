export default {
  name: 'item-detail-page-component',
  inject: ['itemsStore'],
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    routeId() {
      return this.id || this.$route.params.id;
    },
    item() {
      return this.itemsStore.items.find((entry) => entry.id === this.routeId);
    },
  },
  template: `
    <div>
      <section class="section" style="padding-top: 3rem;">
        <div class="container">
          <router-link to="/items" class="btn btn-outline-plum btn-sm mb-4">
            <i class="bi bi-arrow-left me-1"></i> Back to Titleholders
          </router-link>

          <div v-if="itemsStore.isLoading" class="state-panel">
            <div class="spinner-gold"></div>
            Loading titleholder&hellip;
          </div>

          <div v-else-if="itemsStore.error" class="state-panel">
            <i class="bi bi-exclamation-circle fs-3 d-block mb-2" style="color: var(--gold-600);"></i>
            {{ itemsStore.error }}
          </div>

          <div v-else-if="!item" class="state-panel">
            <i class="bi bi-person-x fs-3 d-block mb-2" style="color: var(--gold-600);"></i>
            We couldn't find that titleholder.
            <div class="mt-3">
              <router-link to="/items" class="btn btn-gold btn-sm">View All Titleholders</router-link>
            </div>
          </div>

          <div v-else class="row g-5 align-items-start">
            <div class="col-lg-5 sash-corner" :data-sash="item.category">
              <img :src="item.imageUrl" :alt="item.name" class="item-detail-image" />
            </div>
            <div class="col-lg-7">
              <p class="eyebrow">{{ item.category }}</p>
              <h1 class="item-detail-title mt-2 mb-2">{{ item.name }}</h1>
              <div class="titleholder-location mb-4">
                <i class="bi bi-geo-alt"></i> {{ item.location }}
              </div>
              <div class="section-divider"></div>
              <p class="fs-5" style="color: var(--ink-soft); max-width: 40rem;">{{ item.description }}</p>

              <div class="d-flex flex-wrap gap-3 mt-4">
                <router-link to="/items" class="btn btn-outline-plum">See More Titleholders</router-link>
                <a class="btn btn-gold" href="mailto:info@misscentralindiana.org">Book an Appearance</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <site-footer-component></site-footer-component>
    </div>
  `,
};
