<!-- HERO -->
<template>

    <section class="hero">
        <div class="hero-badge fade-up"><span></span> A pressure-free learning space</div>
        <h1 class="fade-up fade-up-1">
            Learn it first.<br><em>Then test yourself.</em>
        </h1>
        <p class="fade-up fade-up-2">
            MCQbox is built for curious minds, not exam anxiety. Explore any topic at your own pace — read, understand,
            then quiz yourself to see how much actually stuck.
        </p>
        <div class="hero-ctas fade-up fade-up-3">
            <button class="hero-btn-primary">📖 Start Exploring Topics</button>
            <button class="hero-btn-secondary">🧩 Try a Quick Quiz →</button>
        </div>
        <!-- <div class="hero-stats fade-up fade-up-4">
            <div class="stat"><strong>50K+</strong><span>Questions</span></div>
            <div class="stat"><strong>200+</strong><span>Topics</span></div>
            <div class="stat"><strong>1.2M</strong><span>Learners</span></div>
            <div class="stat"><strong>No timers</strong><span>Ever</span></div>
        </div> -->
    </section>

</template>

<style scoped>
.hero {
      padding: 5rem 2rem 4.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 65% 55% at 50% 0%, rgba(91,106,240,0.13) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 80% 80%, rgba(61,240,200,0.08) 0%, transparent 60%),
        radial-gradient(ellipse 30% 40% at 10% 60%, rgba(200,240,61,0.06) 0%, transparent 60%);
      pointer-events: none;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.9rem;
      border-radius: 100px;
      border: 1px solid rgba(91,106,240,0.35);
      background: rgba(91,106,240,0.08);
      color: var(--accent2);
      font-size: 0.78rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .hero-badge span {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--accent2);
      display: inline-block;
      animation: pulse 1.8s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.7); }
    }

    .hero h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.6rem, 6vw, 5rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.04em;
      margin-bottom: 1.2rem;
    }

    .hero h1 em { font-style: normal; color: var(--accent2); }
    .hero h1 .hi { color: var(--accent); }

    .hero p {
      max-width: 540px;
      margin: 0 auto 2rem;
      color: var(--muted);
      font-size: 1.05rem;
      line-height: 1.7;
      font-weight: 300;
    }

    /* hero CTA row */
    .hero-ctas {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      margin-bottom: 2.8rem;
    }

    .hero-btn-primary {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.6rem;
      border-radius: 100px;
      background: var(--accent2);
      color: #fff;
      border: none;
      font-family: 'Syne', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }

    .hero-btn-primary:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(91,106,240,0.35); }

    .hero-btn-secondary {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      border-radius: 100px;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
      font-size: 0.88rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .hero-btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

    .hero-stats {
      display: inline-flex;
      gap: 2.5rem;
      padding: 1rem 2rem;
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: 16px;
    }

    .stat { text-align: center; }

    .stat strong {
      display: block;
      font-family: 'Syne', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--accent);
    }

    .stat span { font-size: 0.78rem; color: var(--muted); }

@media (max-width: 768px) {
    .hero { padding: 3.5rem 1.25rem 3rem; }
      .hero h1 { font-size: 2.4rem; }
      .hero p { font-size: 0.98rem; }
      .hero-stats { gap: 1.5rem; padding: 0.9rem 1.4rem; flex-wrap: wrap; justify-content: center; }
      .hero-ctas { flex-direction: column; align-items: stretch; }
      .hero-btn-primary, .hero-btn-secondary { justify-content: center; }

}


</style>