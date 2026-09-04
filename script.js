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

  /* ---------- contact menu: the header button offers Telegram or WhatsApp ---------- */
  var contactMenus = document.querySelectorAll('[data-contact-menu]');
  if (contactMenus.length) {
    contactMenus.forEach(function (menu) {
      var toggle = menu.querySelector('[data-contact-toggle]');
      var list = menu.querySelector('[data-contact-list]');
      if (!toggle || !list) return;

      function setOpen(open) {
        list.hidden = !open;
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(list.hidden);
      });
      /* a click inside the list is a channel being picked, so it may pass */
      list.addEventListener('click', function (e) { e.stopPropagation(); });
      document.addEventListener('click', function () { setOpen(false); });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !list.hidden) { setOpen(false); toggle.focus(); }
      });
    });
  }

  /* ---------- generic scroll reveal ---------- */
  document.documentElement.classList.add('reveal-ready');
  /* Inside a [data-reveal-stagger] block the children all cross the viewport
     together, so the sequence comes from the delay, not from the observer:
     each child waits a little longer than the one above it. */
  if (!reduceMotion) {
    document.querySelectorAll('[data-reveal-stagger]').forEach(function (group) {
      var step = parseInt(group.getAttribute('data-reveal-stagger'), 10) || 80;
      group.querySelectorAll('[data-reveal]').forEach(function (child, i) {
        child.style.transitionDelay = (i * step) + 'ms';
      });
    });
  }
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
  var headerBar = header && header.querySelector('.site-header__inner');
  if (headerBar) {
    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY > 8;
      /* scrolled: thicken the glass a little so text stays legible over
         whatever runs beneath it */
      headerBar.style.backgroundColor = scrolled ? 'rgba(247,243,236,0.5)' : '';
      headerBar.style.boxShadow = scrolled
        ? 'inset 0 1px 0 rgba(255,255,255,0.5), 0 10px 30px rgba(28,27,24,0.12)'
        : '';
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

    /* One delegated handler rather than a pair per element: moving from a row
       onto a link inside it used to fire the row's mouseleave and blank the
       label, so the word flickered away while the pointer was still on the
       row. Reading the target's nearest labelled ancestor keeps it up. */
    document.addEventListener('mouseover', function (e) {
      var target = e.target.closest ? e.target : e.target.parentElement;
      var hit = target && target.closest('a, button, [data-cursor]');
      if (!hit) {
        cursor.classList.remove('is-hover');
        label.textContent = '';
        return;
      }
      var labelled = target.closest('[data-cursor-label]');
      cursor.classList.add('is-hover');
      label.textContent = labelled ? labelled.getAttribute('data-cursor-label') : '';
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

  /* ---------- proximity magnet (Contacts submit button) ----------
     Distinct from the generic magnetic buttons above: this one starts
     pulling the button from up to REACH px away — before the cursor is
     anywhere near its box — and swaps to the accent color once the
     cursor is effectively "inside" the (moved) button, not just on a
     plain CSS :hover of its resting position. */
  document.querySelectorAll('[data-magnet-proximity]').forEach(function (el) {
    if (reduceMotion || !window.matchMedia('(hover: hover)').matches) return;
    var REACH = 260, PULL = 0.32, MAX = 46;
    var pointer = { x: -9999, y: -9999 };
    var pos = { x: 0, y: 0, s: 1 };
    var isNear = false;

    document.addEventListener('mousemove', function (e) {
      pointer.x = e.clientX; pointer.y = e.clientY;
    });

    function tick() {
      var rect = el.getBoundingClientRect();
      var cx = rect.left + rect.width / 2 - pos.x;
      var cy = rect.top + rect.height / 2 - pos.y;
      var dx = pointer.x - cx, dy = pointer.y - cy;
      var d = Math.hypot(dx, dy);
      var near = d < REACH;
      var tx = 0, ty = 0, ts = 1;
      if (near) {
        var f = 1 - d / REACH;
        var k = Math.min(MAX, d * PULL) / (d || 1);
        tx = dx * k * (0.4 + 0.6 * f);
        ty = dy * k * (0.4 + 0.6 * f);
        ts = 1 + 0.06 * f;
      }
      pos.x += (tx - pos.x) * 0.12;
      pos.y += (ty - pos.y) * 0.12;
      pos.s += (ts - pos.s) * 0.12;
      el.style.transform = 'translate3d(' + pos.x.toFixed(2) + 'px,' + pos.y.toFixed(2) + 'px,0) scale(' + pos.s.toFixed(3) + ')';
      var inside = d < rect.width / 2 + 8;
      if (inside !== isNear) {
        isNear = inside;
        el.classList.toggle('is-magnet-near', inside);
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  /* ---------- photo fallback ----------
     If a photo file isn't in assets/img yet (or fails to load), drop the <img>
     so the placeholder block underneath shows through instead of a broken icon. */
  document.querySelectorAll('.photo-placeholder__img').forEach(function (img) {
    function drop() { if (img.parentNode) img.parentNode.removeChild(img); }
    img.addEventListener('error', drop);
    if (img.complete && img.naturalWidth === 0) drop();
  });

  /* ---------- home index accordion (pure CSS grid-template-rows trick,
     no GSAP/CDN dependency — must work even if the animation CDN fails) ---------- */
  var indexRows = document.querySelectorAll('.index-row');
  if (indexRows.length) {
    indexRows.forEach(function (row) {
      row.addEventListener('click', function () {
        var wasOpen = row.classList.contains('is-open');
        indexRows.forEach(function (other) { other.classList.remove('is-open'); });
        if (!wasOpen) row.classList.add('is-open');
      });
    });
  }

  /* ---------- index row cursor-fill hover (fill grows from entry point) ----------
     --fill-r is set in px to the exact distance from the entry point to the row's
     farthest corner, so the clip-path circle is always just big enough to fully
     cover the row — never smaller (a gap left uncovered) or arbitrarily oversized. */
  document.querySelectorAll('.index-row__head').forEach(function (head) {
    function setFillOrigin(e) {
      var rect = head.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var corners = [
        [0, 0], [rect.width, 0], [0, rect.height], [rect.width, rect.height]
      ];
      var maxDist = 0;
      corners.forEach(function (c) {
        var d = Math.hypot(x - c[0], y - c[1]);
        if (d > maxDist) maxDist = d;
      });
      head.style.setProperty('--fill-x', x + 'px');
      head.style.setProperty('--fill-y', y + 'px');
      head.style.setProperty('--fill-r', maxDist + 'px');
    }
    head.addEventListener('mouseenter', setFillOrigin);
    head.addEventListener('mouseleave', setFillOrigin);
  });

  /* ---------- interest tag picker (Contacts) — up to 2 at once,
     oldest pick evicted when a 3rd is chosen ---------- */
  var interestTags = document.querySelectorAll('[data-interest-tag]');
  var interestInput = document.querySelector('[data-interest-input]');
  var INTEREST_MAX = 2;
  var selectedTags = [];

  /* The picks are held as elements, not as label text: the labels are
     translated in place, so the submitted value has to be rebuilt from
     them after a language switch — otherwise an English form carries the
     Russian words the visitor happened to click. */
  function syncInterestInput() {
    if (!interestInput) return;
    interestInput.value = selectedTags.map(function (tag) {
      return tag.textContent.trim();
    }).join(', ');
  }

  if (interestTags.length) {
    interestTags.forEach(function (tag) {
      tag.addEventListener('click', function () {
        var idx = selectedTags.indexOf(tag);
        if (idx !== -1) {
          selectedTags.splice(idx, 1);
          tag.classList.remove('is-selected');
        } else {
          selectedTags.push(tag);
          tag.classList.add('is-selected');
          if (selectedTags.length > INTEREST_MAX) {
            selectedTags.shift().classList.remove('is-selected');
          }
        }
        syncInterestInput();
      });
    });
    document.addEventListener('address:langchange', syncInterestInput);
  }

  /* ---------- contact forms ----------
     Contacts carries two: the short note at the top of the page and the
     trip brief on the closing slide, so each one is wired on its own. */
  document.querySelectorAll('[data-contact-form]').forEach(function (form) {
    /* Auto-grow the message textarea: starts one line tall (same tight
       underline gap as the Name/Email inputs) and expands as the user
       types past the first line, instead of always reserving 2 rows. */
    form.querySelectorAll('textarea[rows="1"]').forEach(function (field) {
      var growMessage = function () {
        field.style.height = 'auto';
        field.style.height = field.scrollHeight + 'px';
      };
      field.addEventListener('input', growMessage);
      growMessage();
    });

    /* Browser-native "required"/"type=email" validation bubbles are shown in the
       browser's own locale, not the page's — override them so a Russian-language
       page never shows an English validation message (or vice versa). */
    form.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('invalid', function () {
        var t = window.addressI18n && window.addressI18n.t;
        if (!t) return;
        if (field.validity.valueMissing) {
          field.setCustomValidity(t('contacts.form.validation.required'));
        } else if (field.validity.typeMismatch) {
          field.setCustomValidity(t('contacts.form.validation.email'));
        } else if (field.validity.patternMismatch) {
          field.setCustomValidity(t('contacts.form.validation.phone'));
        }
      });
      field.addEventListener('input', function () { field.setCustomValidity(''); });
    });

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
  });

  /* ---------- Contacts: copy the email / phone in one click ----------
     The value stays a real mailto:/tel: link — this only saves the
     select-and-copy for anyone writing from another device. */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var labelEl = btn.querySelector('span') || btn;
    var resetTimer;

    btn.addEventListener('click', function () {
      var value = btn.getAttribute('data-copy') || '';

      function confirmCopy() {
        var t = window.addressI18n && window.addressI18n.t;
        labelEl.textContent = t ? t('contacts.copied') : 'copied';
        btn.classList.add('is-copied');
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () {
          labelEl.textContent = t ? t('contacts.copy') : 'copy';
          btn.classList.remove('is-copied');
        }, 1800);
      }

      function copyFallback() {
        var ta = document.createElement('textarea');
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); confirmCopy(); } catch (e) {}
        document.body.removeChild(ta);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(confirmCopy).catch(copyFallback);
      } else {
        copyFallback();
      }
    });
  });

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
