import { asset } from './publicUrl';

// Same script stack as t.commonsupport.com/strnix/index-4.html.
// Paths must use PUBLIC_URL so GitHub Pages (/greenrockweb/...) can load them.
const TEMPLATE_SCRIPTS = [
  asset('/assets/js/jquery.js'),
  asset('/assets/js/popper.min.js'),
  asset('/assets/js/bootstrap.min.js'),
  asset('/assets/js/jquery-ui.js'),
  asset('/assets/js/jquery.fancybox.js'),
  asset('/assets/js/owl.js'),
  asset('/assets/js/appear.js'),
  asset('/assets/js/wow.js'),
  asset('/assets/js/scrollbar.js'),
  asset('/assets/js/validate.js'),
  asset('/assets/js/paroller.js'),
  asset('/assets/js/element-in-view.js'),
  asset('/assets/js/custom-script.js'),
];

const GOOGLE_MAPS_SRC =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBHJe2MPH8B-gLzZu5QI0Alc73nvkLuuqQ';
const MAP_SCRIPT_SRC = asset('/assets/js/map-script.js');

let scriptsPromise = null;
let mapScriptsPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-template-src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.templateSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

/** Hide template preloaders so they cannot block hover/clicks after SPA navigations. */
export function hideStrnixPreloader() {
  document.body.classList.add('page-loaded');
  document.querySelectorAll('.preloader').forEach((el) => {
    el.style.display = 'none';
    el.style.pointerEvents = 'none';
  });

  const $ = window.jQuery;
  if ($) {
    $('.preloader').stop(true, true).hide();
  }
}

/** Load template plugins once (safe to call many times). */
export function ensureTemplateScripts() {
  if (!scriptsPromise) {
    scriptsPromise = (async () => {
      try {
        for (const src of TEMPLATE_SCRIPTS) {
          await loadScript(src);
        }
      } finally {
        // Always clear the spinner — even if a script 404s on deploy.
        hideStrnixPreloader();
      }
    })();
  }
  return scriptsPromise;
}

function readOwlOptions($el) {
  let options = $el.data('options');
  if (typeof options === 'string') {
    try {
      options = JSON.parse(options);
    } catch (err) {
      options = {};
    }
  }
  return options && typeof options === 'object' ? options : {};
}

/**
 * Init / re-init Owl carousels using the same options as custom-script.js.
 * Call this whenever a page with .strnix-carousel mounts (SPA navigation).
 */
export function initStrnixCarousels() {
  const $ = window.jQuery;
  if (!$ || !$.fn.owlCarousel) return;

  $('.strnix-carousel').each(function () {
    const $el = $(this);

    // Fresh React markup after route change must be (re)initialized.
    if ($el.hasClass('owl-loaded')) {
      $el.trigger('destroy.owl.carousel');
      $el.find('.owl-stage-outer').children().unwrap();
      $el.removeClass('owl-loaded owl-hidden owl-drag owl-grab');
    }

    const owlAttr = {
      navText: [
        '<span class="icon fa fa-angle-left"></span>',
        '<span class="icon fa fa-angle-right"></span>',
      ],
    };
    $.extend(owlAttr, readOwlOptions($el));
    $el.owlCarousel(owlAttr);
  });

  // Force layout after SPA mount so center/hover styles apply correctly.
  window.setTimeout(() => {
    $(window).trigger('resize');
    $('.strnix-carousel').trigger('refresh.owl.carousel');
  }, 50);
}

/** Re-bind Fancybox lightboxes (custom-script only binds once on first load). */
export function initStrnixFancybox() {
  const $ = window.jQuery;
  if (!$ || !$.fn.fancybox) return;

  $('.lightbox-image').fancybox({
    openEffect: 'fade',
    closeEffect: 'fade',
    helpers: {
      media: {},
    },
  });
}

/**
 * Re-bind fun-fact counters (appear + animate) using the same logic as custom-script.js.
 * custom-script only binds once on first load, so SPA remounts need this.
 */
export function initStrnixCounters() {
  const $ = window.jQuery;
  if (!$ || !$.fn.appear) return;

  $('.count-box').each(function () {
    const $box = $(this);
    $box.removeClass('counted');
    $box.find('.count-text').text('0');
  });

  $('.count-box').appear(
    function () {
      const $t = $(this);
      const n = $t.find('.count-text').attr('data-stop');
      const r = parseInt($t.find('.count-text').attr('data-speed'), 10);

      if (!$t.hasClass('counted')) {
        $t.addClass('counted');
        $({ countNum: $t.find('.count-text').text() }).animate(
          { countNum: n },
          {
            duration: r,
            easing: 'linear',
            step: function () {
              $t.find('.count-text').text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find('.count-text').text(this.countNum);
            },
          }
        );
      }
    },
    { accY: 0 }
  );

  // Force appear to evaluate elements already in the viewport after SPA navigation.
  $(window).trigger('scroll');
}

export async function setupStrnixCarousels() {
  await ensureTemplateScripts();
  hideStrnixPreloader();
  initStrnixCarousels();
  initStrnixFancybox();
  initStrnixCounters();
  initStrnixWow();
  initStrnixInView();
}

export async function setupStrnixCounters() {
  await ensureTemplateScripts();
  initStrnixCounters();
}

/**
 * Re-sync WOW entrance animations after React route changes.
 * Without this, newly mounted .wow cards can stay visibility:hidden
 * (so hover overlays never appear) until a full page refresh.
 */
export function initStrnixWow() {
  if (typeof window.WOW !== 'function') return;

  if (!window.__strnixWow) {
    window.__strnixWow = new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
    });
    window.__strnixWow.init();
  } else if (typeof window.__strnixWow.sync === 'function') {
    window.__strnixWow.sync();
  }

  // Ensure any cards still stuck hidden become interactive for hover.
  window.setTimeout(() => {
    document.querySelectorAll('.wow').forEach((el) => {
      if (window.getComputedStyle(el).visibility === 'hidden') {
        el.style.visibility = 'visible';
        el.classList.add('animated');
      }
    });
    window.dispatchEvent(new Event('scroll'));
  }, 60);
}

/** Re-apply element-in-view classes used by .service-block animations. */
export function initStrnixInView() {
  const $ = window.jQuery;
  if (!$ || typeof $.fn.visible !== 'function') return;

  $('.pricing-block, .service-block, .recent-proj-tabs .tab').each(function () {
    const $el = $(this);
    if ($el.visible(true)) {
      $el.addClass('now-in-view');
    }
  });
  $(window).trigger('scroll');
}

/**
 * Re-run all template UI plugins needed after a React route change.
 * Safe to call on every navigation (Home, Services, About, etc.).
 */
export async function setupStrnixPageEffects() {
  await ensureTemplateScripts();
  hideStrnixPreloader();

  // Wait a frame so React has committed the new page DOM.
  await new Promise((resolve) => {
    window.requestAnimationFrame(() => resolve());
  });

  initStrnixCarousels();
  initStrnixFancybox();
  initStrnixCounters();
  initStrnixWow();
  initStrnixInView();
}

/** Load Google Maps + existing map-script.js once (same as contact.html). */
export function ensureMapScripts() {
  if (!mapScriptsPromise) {
    mapScriptsPromise = (async () => {
      await ensureTemplateScripts();
      await loadScript(GOOGLE_MAPS_SRC);
      await loadScript(MAP_SCRIPT_SRC);
    })();
  }
  return mapScriptsPromise;
}

/**
 * Init the contact map. map-script.js only binds window.onload, which does not
 * fire again on React Router navigations — so we call GmapInit directly.
 */
export async function setupContactMap() {
  await ensureMapScripts();

  if (typeof window.GmapInit === 'function') {
    window.GmapInit();
    return;
  }

  if (typeof window.MapLoadScript === 'function') {
    window.MapLoadScript();
  }
}
