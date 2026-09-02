// animations.js — GSAP/ScrollTrigger driven interactions.
// Requires GSAP + ScrollTrigger loaded via CDN before this file. Every
// animation checks for their presence and for prefers-reduced-motion, and
// falls back to the static CSS layout (nothing is hidden by default in CSS).
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    initAboutParallax();
  });

  /* Note: the Home index-list accordion (gaelleperrin-style unfold) lives in
     script.js as plain CSS/JS on purpose — it is core navigation, not a nice-
     to-have, so it must keep working even if this GSAP bundle fails to load. */

  /* =========================================================
     ABOUT — parallax drift on the full-bleed closing frame.
     The layer is inset past the section on both edges, so the
     drift never uncovers an edge.
     ========================================================= */
  function initAboutParallax() {
    var layers = document.querySelectorAll('[data-parallax]');
    if (!layers.length || reduceMotion) return;

    layers.forEach(function (layer) {
      var speed = parseFloat(layer.getAttribute('data-parallax')) || 0.15;
      gsap.to(layer, {
        y: function () { return window.innerHeight * speed; },
        ease: 'none',
        scrollTrigger: {
          trigger: layer,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

})();
