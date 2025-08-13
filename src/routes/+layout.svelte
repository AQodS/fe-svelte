<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container">
    <a href="/" class="navbar-brand">Home</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            href="https://github.com/AQodS/fe-svelte"
            target="_blank"
            class="nav-link active"
            aria-current="page"
          >
            Express-Svelte
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-5">
  <!-- This is where the page content will be injected, slot is like children in React -->
  <slot></slot> 
</div>
