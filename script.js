// script.js — menu, custom cursor, magnetic buttons, contact form, page transition
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile menu ---------- */
  var burger = document.querySelector('[data-burger]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- generic scroll reveal ---------- */
  document.documentElement.classList.add('reveal-ready');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- header shadow/compact on scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      header.style.borderBottomColor = window.scrollY > 8 ? 'rgba(28,27,24,0.22)' : '';
      lastY = window.scrollY;
    }, { passive: true });
  }

  /* ---------- custom cursor ---------- */
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    var cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.innerHTML = '<span class="cursor__label"></span>';
    document.body.appendChild(cursor);
    var label = cursor.querySelector('.cursor__label');

    var mouseX = 0, mouseY = 0, curX = 0, curY = 0, active = false;
    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX; mouseY = e.clientY;
      if (!active) { active = true; cursor.classList.add('is-active'); }
    });
    document.addEventListener('mouseleave', function () {
      active = false; cursor.classList.remove('is-active');
    });

    function raf() {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursor.style.transform = 'translate(' + curX + 'px, ' + curY + 'px) translate(-50%, -50%)';
      requestAnimationFrame(raf);
    }
    raf();

    document.querySelectorAll('a, button, [data-cursor]').forEach(function (el) {
      var text = el.getAttribute('data-cursor-label') || '';
      el.addEventListener('mouseenter', function () {
        cursor.classList.add('is-hover');
        label.textContent = text;
      });
      el.addEventListener('mouseleave', function () {
        cursor.classList.remove('is-hover');
        label.textContent = '';
      });
    });
  }

  /* ---------- magnetic buttons (mouse-follow with elastic snap-back) ---------- */
  function initMagnetic(el, strength) {
    if (reduceMotion || !window.matchMedia('(hover: hover)').matches) return;
    strength = strength || 0.35;
    var rect, raf1;
    var tx = 0, ty = 0, cx = 0, cy = 0;
    var active = false;

    function loop() {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      el.style.transform = 'translate(' + cx + 'px, ' + cy + 'px)';
      if (active || Math.abs(cx - tx) > 0.1 || Math.abs(cy - ty) > 0.1) {
        raf1 = requestAnimationFrame(loop);
      } else {
        raf1 = null;
      }
    }

    el.addEventListener('mouseenter', function () {
      rect = el.getBoundingClientRect();
      active = true;
      if (!raf1) raf1 = requestAnimationFrame(loop);
    });
    el.addEventListener('mousemove', function (e) {
      if (!rect) rect = el.getBoundingClientRect();
      var relX = e.clientX - (rect.left + rect.width / 2);
      var relY = e.clientY - (rect.top + rect.height / 2);
      tx = relX * strength;
      ty = relY * strength;
    });
    el.addEventListener('mouseleave', function () {
      active = false;
      tx = 0; ty = 0;
      if (!raf1) raf1 = requestAnimationFrame(loop);
    });
  }
  document.querySelectorAll('[data-magnetic]').forEach(function (el) {
    initMagnetic(el, parseFloat(el.getAttribute('data-magnetic')) || 0.35);
  });

  /* ---------- home index accordion (pure CSS grid-template-rows trick,
     no GSAP/CDN dependency — must work even if the animation CDN fails) ---------- */
  var indexRows = document.querySelectorAll('.index-row');
  if (indexRows.length) {
    indexRows.forEach(function (row, i) {
      row.addEventListener('click', function () {
        var wasOpen = row.classList.contains('is-open');
        indexRows.forEach(function (other) { other.classList.remove('is-open'); });
        if (!wasOpen) row.classList.add('is-open');
      });
      if (i === 0) row.classList.add('is-open');
    });
  }

  /* ---------- interest tag picker (Contacts) ---------- */
  var interestTags = document.querySelectorAll('[data-interest-tag]');
  var interestInput = document.querySelector('[data-interest-input]');
  if (interestTags.length) {
    interestTags.forEach(function (tag) {
      tag.addEventListener('click', function () {
        interestTags.forEach(function (t) { t.classList.remove('is-selected'); });
        tag.classList.add('is-selected');
        if (interestInput) interestInput.value = tag.textContent.trim();
      });
    });
  }

  /* ---------- contact form ---------- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var successEl = form.querySelector('[data-form-success]');
    var errorEl = form.querySelector('[data-form-error]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (successEl) successEl.classList.remove('is-visible');
      if (errorEl) errorEl.classList.remove('is-visible');

      var action = form.getAttribute('action') || '';
      var isPlaceholder = action.indexOf('YOUR_FORM_ID') !== -1 || !action;

      if (isPlaceholder) {
        if (successEl) successEl.classList.add('is-visible');
        form.reset();
        return;
      }

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          if (successEl) successEl.classList.add('is-visible');
          form.reset();
        } else if (errorEl) {
          errorEl.classList.add('is-visible');
        }
      }).catch(function () {
        if (errorEl) errorEl.classList.add('is-visible');
      });
    });
  }

  /* ---------- page transition (fade on internal nav) ---------- */
  if (!reduceMotion) {
    var overlay = document.createElement('div');
    overlay.className = 'page-transition';
    document.body.appendChild(overlay);

    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || link.target === '_blank' || href.indexOf('://') !== -1 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;
      link.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        overlay.style.transition = 'transform 0.5s cubic-bezier(0.65,0,0.35,1)';
        overlay.style.transform = 'translateY(0%)';
        setTimeout(function () { window.location.href = href; }, 480);
      });
    });

    window.addEventListener('pageshow', function () {
      overlay.style.transition = 'none';
      overlay.style.transform = 'translateY(100%)';
      requestAnimationFrame(function () {
        overlay.style.transition = 'transform 0.6s cubic-bezier(0.65,0,0.35,1) 0.05s';
      });
    });
  }
})();
