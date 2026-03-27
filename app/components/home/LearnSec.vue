<template>
    <div class="section">
      <div class="section-header">
        <div class="section-header-left">
          <div class="section-title">
            <span class="dot" style="background:var(--accent4);"></span>
            Start Here — Read Before You Quiz
          </div>
          <div class="section-subtitle">Guides written to make things click, not just to test you</div>
        </div>
        <a class="see-all" href="#">All guides →</a>
      </div>
      <div class="guides-grid">

        <a href="#" class="guide-card">
          <div class="guide-band" style="background:linear-gradient(90deg,#5b6af0,#3df0c8);"></div>
          <div class="guide-card-body">
            <div class="guide-card-icon-row">
              <div class="guide-icon" style="background:rgba(91,106,240,0.12);color:#5b6af0;">📖</div>
              <div class="guide-type">Beginner Guide</div>
            </div>
            <div class="guide-title">How Python Decorators Actually Work</div>
            <div class="guide-desc">A gentle, jargon-free walkthrough of one of Python's most powerful (and confusing) features — with real examples.</div>
          </div>
          <div class="guide-footer">
            <div class="guide-meta"><span>⏱ 10 min</span><span>💻 Programming</span></div>
            <div class="guide-cta" style="color:var(--accent2);">Read →</div>
          </div>
        </a>

        <a href="#" class="guide-card">
          <div class="guide-band" style="background:linear-gradient(90deg,#f07a3d,#c8f03d);"></div>
          <div class="guide-card-body">
            <div class="guide-card-icon-row">
              <div class="guide-icon" style="background:rgba(240,122,61,0.12);color:#f07a3d;">🧬</div>
              <div class="guide-type">Explainer · Science</div>
            </div>
            <div class="guide-title">DNA Replication in Plain English</div>
            <div class="guide-desc">No textbook jargon. Just a clear, visual explanation of how DNA copies itself — and why it matters.</div>
          </div>
          <div class="guide-footer">
            <div class="guide-meta"><span>⏱ 8 min</span><span>🧬 Biology</span></div>
            <div class="guide-cta" style="color:#f07a3d;">Read →</div>
          </div>
        </a>

        <a href="#" class="guide-card">
          <div class="guide-band" style="background:linear-gradient(90deg,#3df0c8,#5b6af0);"></div>
          <div class="guide-card-body">
            <div class="guide-card-icon-row">
              <div class="guide-icon" style="background:rgba(61,240,200,0.12);color:#3df0c8;">🎵</div>
              <div class="guide-type">Beginner Guide · Music</div>
            </div>
            <div class="guide-title">Music Theory: Notes, Chords & Why They Sound Good</div>
            <div class="guide-desc">If you've always wanted to understand music theory but got lost in notation — this guide starts from scratch.</div>
          </div>
          <div class="guide-footer">
            <div class="guide-meta"><span>⏱ 12 min</span><span>🎵 Music</span></div>
            <div class="guide-cta" style="color:#3df0c8;">Read →</div>
          </div>
        </a>

        <a href="#" class="guide-card">
          <div class="guide-band" style="background:linear-gradient(90deg,#c8f03d,#f07a3d);"></div>
          <div class="guide-card-body">
            <div class="guide-card-icon-row">
              <div class="guide-icon" style="background:rgba(200,240,61,0.12);color:#c8f03d;">⚡</div>
              <div class="guide-type">Cheatsheet · Physics</div>
            </div>
            <div class="guide-title">Newton's Laws — What They Really Mean</div>
            <div class="guide-desc">Three laws, three real-world stories. By the end you'll never mix up inertia and momentum again.</div>
          </div>
          <div class="guide-footer">
            <div class="guide-meta"><span>⏱ 7 min</span><span>⚡ Physics</span></div>
            <div class="guide-cta" style="color:#c8f03d;">Read →</div>
          </div>
        </a>

      </div>
    </div>
</template>


<style scoped>
.section { margin-bottom: 3.5rem; }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.4rem;
    }

    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: 1.35rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .section-title .dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .section-subtitle {
      font-size: 0.82rem;
      color: var(--muted);
      margin-top: 0.2rem;
      font-weight: 300;
    }

    .section-header-left { display: flex; flex-direction: column; gap: 0.1rem; }

    .see-all {
      font-size: 0.8rem;
      color: var(--muted);
      text-decoration: none;
      border: 1px solid var(--border);
      padding: 0.3rem 0.9rem;
      border-radius: 100px;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .see-all:hover { color: var(--text); border-color: var(--text); }


    .guides-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }

    .guide-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      text-decoration: none;
      color: var(--text);
      display: flex;
      flex-direction: column;
      transition: transform 0.22s, border-color 0.22s, box-shadow 0.22s;
    }

    .guide-card:hover {
      transform: translateY(-3px);
      border-color: rgba(91,106,240,0.3);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    .guide-band { height: 4px; }

    .guide-card-body { padding: 1.2rem; flex: 1; }

    .guide-card-icon-row {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      margin-bottom: 0.8rem;
    }

    .guide-icon {
      width: 38px; height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.15rem;
      flex-shrink: 0;
    }

    .guide-type {
      font-size: 0.68rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--muted);
    }

    .guide-title {
      font-family: 'Syne', sans-serif;
      font-size: 0.92rem;
      font-weight: 700;
      margin-bottom: 0.35rem;
      line-height: 1.3;
    }

    .guide-desc { font-size: 0.79rem; color: var(--muted); line-height: 1.55; }

    .guide-footer {
      padding: 0.7rem 1.2rem;
      border-top: 1px solid var(--border);
      background: var(--surface2);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .guide-meta { font-size: 0.73rem; color: var(--muted); display: flex; gap: 0.8rem; }

    .guide-cta {
      font-family: 'Syne', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      transition: gap 0.2s;
    }

    .guide-card:hover .guide-cta { gap: 0.55rem; }

</style>