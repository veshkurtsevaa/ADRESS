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
    initServiceScroll();
  });

  /* Note: the Home index-list accordion (gaelleperrin-style unfold) lives in
     script.js as plain CSS/JS on purpose — it is core navigation, not a nice-
     to-have, so it must keep working even if this GSAP bundle fails to load. */

  /* =========================================================
     ABOUT — journal-spread parallax (hedwig-style).
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

  /* =========================================================
     SERVICE — pinned, scroll-scrubbed word-then-photo sequence
     for the Personal categories section.
     ========================================================= */
  function initServiceScroll() {
    var section = document.querySelector('.service-scroll');
    if (!section) return;

    var pinEl = section.querySelector('.service-scroll__pin');
    var wordsBox = section.querySelector('.service-scroll__words');
    var words = Array.prototype.slice.call(section.querySelectorAll('.service-word'));
    var images = Array.prototype.slice.call(section.querySelectorAll('.service-image'));
    var photos = images.map(function (img) { return img.querySelector('.photo-placeholder'); });
    if (!words.length) return;

    ScrollTrigger.matchMedia({
      '(min-width: 861px)': function () {
        if (reduceMotion) {
          gsap.set(words, { x: 0, y: 0 });
          gsap.set(photos, { opacity: 1, y: 0 });
          return;
        }

        var containerRect = wordsBox.getBoundingClientRect();
        var targetX = words.map(function (word) {
          return word.getBoundingClientRect().left - containerRect.left;
        });
        var entryX = containerRect.width + 40;

        wordsBox.style.position = 'relative';
        words.forEach(function (word) {
          word.style.position = 'absolute';
          word.style.left = '0px';
          word.style.top = '0px';
        });

        gsap.set(words, { x: entryX, y: function () { return window.innerHeight; } });
        gsap.set(photos, { opacity: 0, y: 24 });

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=' + Math.round(window.innerHeight * 5),
            scrub: true,
            pin: pinEl
          }
        });

        words.forEach(function (word, i) {
          tl.to(word, { y: 0, duration: 1, ease: 'none' }, 'word' + i)
            .to(word, { x: targetX[i], duration: 1, ease: 'none' }, 'word' + i + '-slide');
        });

        tl.to(photos, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'none' });

        return function () {
          words.forEach(function (word) {
            word.style.position = '';
            word.style.left = '';
            word.style.top = '';
          });
          wordsBox.style.position = '';
        };
      },

      '(max-width: 860px)': function () {
        if (reduceMotion) {
          gsap.set(words, { opacity: 1, y: 0 });
          gsap.set(photos, { opacity: 1, y: 0 });
          return;
        }

        gsap.set(words, { opacity: 0, y: 16 });
        gsap.set(photos, { opacity: 0, y: 16 });

        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          once: true,
          onEnter: function () {
            var tl = gsap.timeline();
            tl.to(words, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'none' });
            tl.to(photos, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'none' }, '+=0.1');
          }
        });
      }
    });
  }
})();
