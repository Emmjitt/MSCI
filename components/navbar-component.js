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
      <nav class="navbar navbar-expand-xxl site-navbar">
        <div class="container">
          <router-link class="navbar-brand site-brand" to="/" @click="closeMenu">
            <span class="brand-mark" aria-hidden="true">
              <img src="./assets/images/MSCI-Logo.png" alt="" class="brand-mark-img" />
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
              <li class="nav-item">
                <router-link class="nav-link" to="/shining-stars" @click="closeMenu">Shining Stars Program</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/alumni" @click="closeMenu">Alumni</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/team" @click="closeMenu">Meet the Team</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/donors" @click="closeMenu">Donors</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/donate" @click="closeMenu">Donate</router-link>
              </li>
              <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a class="btn btn-gold btn-sm w-100" href="mailto:misscentralindiana23@gmail.com">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
};
