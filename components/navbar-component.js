export default {
  name: 'navbar-component',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
  },
  template: `
    <header class="site-header">
      <nav class="navbar navbar-expand-lg site-navbar">
        <div class="container">
          <router-link class="navbar-brand site-brand" to="/" @click="closeMenu">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 34 L12 14 L18 26 L24 10 L30 26 L36 14 L42 34 Z" fill="currentColor" />
                <rect x="6" y="34" width="36" height="3.5" rx="1" fill="currentColor" />
              </svg>
            </span>
            <span class="brand-text">
              <span class="brand-line1">Miss Central Indiana</span>
              <span class="brand-line2">&amp; Miss White River</span>
            </span>
          </router-link>

          <button
            class="navbar-toggler"
            type="button"
            @click="isOpen = !isOpen"
            aria-label="Toggle navigation"
            :aria-expanded="isOpen">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" :class="{ show: isOpen }">
            <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1 mt-3 mt-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/" @click="closeMenu">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/items" @click="closeMenu">Titleholders</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about" @click="closeMenu">About &amp; Eligibility</router-link>
              </li>
              <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a class="btn btn-gold btn-sm w-100" href="mailto:info@misscentralindiana.org">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
};
