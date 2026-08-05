// CIRCA 25's SYSTEM control — connects this preserved site back into the
// LUCTHELEO system (DESTINATIONS / SKIALGIA / BROADCAST / TERMINAL /
// CIRCA 25 — CURRENT). Deliberately isolated from script.js: a small,
// self-contained module with no dependency on this site's existing state
// (splash sequence, visualizer, audio player, filter nav) and nothing in
// script.js depends on it either — safe to reason about on its own, and
// safe to remove later without touching anything else on this page.
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.getElementById('ltl-system-trigger');
    var overlay = document.getElementById('ltl-system-overlay');
    var menu = document.getElementById('ltl-system-menu');
    if (!trigger || !overlay || !menu) return;

    var open = false;

    function openMenu() {
      if (open) return;
      open = true;
      overlay.removeAttribute('hidden');
      trigger.setAttribute('aria-expanded', 'true');
      var firstLink = menu.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      if (!open) return;
      open = false;
      overlay.setAttribute('hidden', '');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }

    trigger.addEventListener('click', function () {
      if (open) closeMenu();
      else openMenu();
    });

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && open) closeMenu();
    });
  });
})();
