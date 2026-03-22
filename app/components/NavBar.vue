<template>
  <nav>
    <a href="#" class="nav-logo">
      <span class="logo-box">MCQ</span>box
    </a>

    <ul class="nav-links">
      <li><a href="#">📖 Learn</a></li>
      <li><a href="#">🧩 Quizzes</a></li>
      <!-- <li><a href="#">🗺 My Path</a></li> -->
      <!-- <li><a href="#">🌐 Community</a></li> -->
    </ul>

    <div class="nav-right">
      <button class="nav-login">Log In</button>
      <button class="nav-cta">Start Learning Free</button>

      <!-- hamburger -->
      <button
        class="nav-hamburger"
        id="hamburger"
        @click="toggleDrawer"
        aria-label="Open menu"
        :class="{ open: drawerOpen }"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Drawer (you had this in HTML, so keeping same ID logic) -->
  <div class="nav-drawer" :class="{ open: drawerOpen }">
    <ul class="drawer-links">
      <li><a href="#" onclick="closeDrawer()">📖 &nbsp;Learn</a></li>
      <li><a href="#" onclick="closeDrawer()">🧩 &nbsp;Quizzes</a></li>
      <!-- <li><a href="#" onclick="closeDrawer()">🗺 &nbsp;My Path</a></li>
      <li><a href="#" onclick="closeDrawer()">🌐 &nbsp;Community</a></li> -->
    </ul>
    <div class="drawer-actions">
      <button class="drawer-login" onclick="closeDrawer()">Log In</button>
      <button class="drawer-cta" onclick="closeDrawer()">Start Learning Free →</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const drawerOpen = ref(false);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
  document.body.style.overflow = drawerOpen.value ? "hidden" : "";
}

function closeDrawer() {
  drawerOpen.value = false;
  document.body.style.overflow = "";
}

function handleResize() {
  if (window.innerWidth > 768) closeDrawer();
}

function handleClickOutside(e) {
  const drawer = document.querySelector(".nav-drawer");
  const hamburger = document.querySelector(".nav-hamburger");

  if (
    drawerOpen.value &&
    drawer &&
    !drawer.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeDrawer();
  }
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("click", handleClickOutside);
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* ── NAV ── */
    nav {
      position: sticky;
      top: 0;
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      height: 64px;
      background: rgba(13,13,15,0.95);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--border);
    }

    .nav-logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
      letter-spacing: -0.03em;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      text-decoration: none;
      color: var(--text);
      flex-shrink: 0;
    }

    .logo-box {
      background: var(--accent);
      color: var(--bg);
      padding: 2px 7px;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 800;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--muted);
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover { color: var(--text); }

    .nav-right { display: flex; align-items: center; gap: 0.75rem; }

    .nav-login {
      padding: 0.48rem 1.1rem;
      border-radius: 100px;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--muted);
      font-family: 'DM Sans', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .nav-login:hover { color: var(--text); border-color: var(--text); }

    .nav-cta {
      background: var(--accent);
      color: var(--bg);
      border: none;
      padding: 0.5rem 1.2rem;
      border-radius: 100px;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.2s;
      white-space: nowrap;
    }

    .nav-cta:hover { opacity: 0.85; transform: scale(0.97); }

    /* ── HAMBURGER ── */
    .nav-hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: var(--surface2);
      cursor: pointer;
      padding: 0;
      flex-shrink: 0;
    }

    .nav-hamburger span {
      display: block;
      width: 18px;
      height: 2px;
      background: var(--text);
      border-radius: 2px;
      transition: transform 0.25s, opacity 0.25s, width 0.25s;
    }

    .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav-hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
    .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── MOBILE DRAWER ── */
    .nav-drawer {
      display: none;
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 190;
      background: rgba(13,13,15,0.98);
      backdrop-filter: blur(20px);
      padding: 1.5rem 1.5rem 2.5rem;
      flex-direction: column;
      overflow-y: auto;
      transform: translateY(-10px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.28s;
    }

    .nav-drawer.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    .drawer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    .drawer-links li a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 0.25rem;
      border-bottom: 1px solid var(--border);
      text-decoration: none;
      color: var(--text);
      font-size: 1.05rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .drawer-links li:last-child a { border-bottom: none; }
    .drawer-links li a:hover { color: var(--accent); }

    .drawer-actions {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
    }

    .drawer-login {
      width: 100%;
      padding: 0.85rem;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: var(--surface2);
      color: var(--text);
      font-family: 'Syne', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }

    .drawer-login:hover { border-color: var(--accent2); color: var(--accent2); }

    .drawer-cta {
      width: 100%;
      padding: 0.9rem;
      border-radius: 14px;
      border: none;
      background: var(--accent);
      color: var(--bg);
      font-family: 'Syne', sans-serif;
      font-size: 0.95rem;
      font-weight: 800;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .drawer-cta:hover { opacity: 0.88; }

@media (max-width: 768px) {
      /* nav */
      nav { padding: 0 1.25rem; }
      .nav-links { display: none; }
      .nav-right .nav-login { display: none; }
      .nav-hamburger { display: flex; }
      .nav-drawer { display: flex; }
}
</style>