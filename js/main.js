/* ============================================================
   SOVEREIGN ESPORT — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Nav: solid background on scroll ── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('solid', window.scrollY > 60);
    });
  }

  /* ── 2. Game filter ── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const gameBlocks  = document.querySelectorAll('.game-block');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active pill
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const game = btn.dataset.game;

      // Show/hide blocks
      gameBlocks.forEach(block => {
        const match = game === 'all' || block.dataset.game === game;
        block.classList.toggle('hidden', !match);
      });
    });
  });

  /* ── 3. Scroll reveal ── */
  const revealEls = document.querySelectorAll('.rv');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        // Optional: stop observing after reveal for performance
        // revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── 4. Nav active pill on scroll ── */
  const sections   = document.querySelectorAll('section[id], div[id]');
  const navPills   = document.querySelectorAll('.nav-pill');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navPills.forEach(pill => {
          pill.classList.toggle('active', pill.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

});
