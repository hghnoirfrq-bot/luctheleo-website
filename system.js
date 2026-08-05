// CIRCA 25's SYSTEM control — added to connect this preserved site back
// into the LUCTHELEO system (DESTINATIONS / SKIALGIA / CIRCA 25 — CURRENT).
// Deliberately isolated from script.js: a small, self-contained module with
// no dependency on this site's existing state (splash sequence, visualizer,
// audio player, filter nav) and nothing in script.js depends on it either
// — safe to reason about on its own, and safe to remove later without
// touching anything else on this page.
(function () {
  'use strict';

  var HINT_SEEN_KEY = 'ltl:circa-system-hint-seen';

  document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.getElementById('ltl-system-trigger');
    var triggerLabel = document.getElementById('ltl-system-trigger-label');
    var overlay = document.getElementById('ltl-system-overlay');
    var menu = document.getElementById('ltl-system-menu');
    var hint = document.getElementById('ltl-system-hint');
    if (!trigger || !triggerLabel || !overlay || !menu) return;

    var open = false;

    function hintSeen() {
      try {
        return window.sessionStorage.getItem(HINT_SEEN_KEY) === '1';
      } catch (e) {
        return true;
      }
    }

    function markHintSeen() {
      try {
        window.sessionStorage.setItem(HINT_SEEN_KEY, '1');
      } catch (e) {
        // Hint just won't persist as dismissed — not a functional problem.
      }
    }

    function dismissHint() {
      if (!hint) return;
      hint.setAttribute('hidden', '');
      markHintSeen();
    }

    function openMenu() {
      if (open) return;
      open = true;
      overlay.removeAttribute('hidden');
      trigger.setAttribute('aria-expanded', 'true');
      triggerLabel.textContent = 'CLOSE';
      dismissHint();
      var firstLink = menu.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      if (!open) return;
      open = false;
      overlay.setAttribute('hidden', '');
      trigger.setAttribute('aria-expanded', 'false');
      triggerLabel.textContent = 'SYSTEM';
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

    // Shown once per session, only on this page (CIRCA 25) — never on
    // SKIALGIA, which has its own equivalent hint. Dismissed the instant
    // SYSTEM is opened, and never shown again this session even if the
    // visitor never opens it at all this visit (sessionStorage-scoped, same
    // convention SKIALGIA's own STATION_HINT_KEY uses).
    if (hint && !hintSeen()) {
      hint.removeAttribute('hidden');
    }
  });
})();
