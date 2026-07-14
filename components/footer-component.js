export default {
  name: 'site-footer-component',
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <h5 class="display-serif h5">Miss Central Indiana &amp; Miss White River</h5>
            <p class="small mt-2" style="max-width: 22rem;">
              A Miss America and Miss America's Teen preliminary scholarship competition serving young
              women across Central and East-Central Indiana.
            </p>
          </div>
          <div class="col-md-4">
            <h5 class="h6 text-uppercase" style="letter-spacing:0.08em; color: var(--gold-400);">Explore</h5>
            <ul class="list-unstyled small mt-3">
              <li class="mb-2"><router-link to="/">Home</router-link></li>
              <li class="mb-2"><router-link to="/items">Titleholders</router-link></li>
              <li class="mb-2"><router-link to="/about">About &amp; Eligibility</router-link></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5 class="h6 text-uppercase" style="letter-spacing:0.08em; color: var(--gold-400);">Executive Directors</h5>
            <p class="small mt-3 mb-1">Debra &amp; Joe Gossett</p>
            <p class="small mb-1">
              <i class="bi bi-envelope me-1"></i>
              <a href="mailto:info@misscentralindiana.org">info@misscentralindiana.org</a>
            </p>
            <div class="d-flex gap-3 mt-3 fs-5">
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr class="footer-divider" />
        <div class="d-flex flex-column flex-sm-row justify-content-between small">
          <span>&copy; 2026 Miss Central Indiana &amp; Miss White River Scholarship Organization, Inc.</span>
          <span>Official Preliminary to Miss America &amp; Miss America's Teen</span>
        </div>
      </div>
    </footer>
  `,
};
