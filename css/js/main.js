// =============================================
// Forces Academy - Main JavaScript
// Author: Frontend Intern
// =============================================

// ---------- Counter Animation ----------
function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'));
  var start = 0;
  var duration = 2000;
  var step = Math.ceil(target / (duration / 16));

  var timer = setInterval(function () {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = start.toLocaleString();
  }, 16);
}

// Run counters when stats section is visible
function initCounters() {
  var counters = document.querySelectorAll('.counter-num');
  if (counters.length === 0) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(function (el) {
    observer.observe(el);
  });
}

// ---------- Gallery Filter ----------
function initGalleryFilter() {
  var filterBtns = document.querySelectorAll('.gallery-filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length === 0) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');

      galleryItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ---------- Lightbox ----------
function initLightbox() {
  var overlay = document.getElementById('lightboxOverlay');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxDesc = document.getElementById('lightboxDesc');
  var lightboxImg = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');

  if (!overlay) return;

  // Open lightbox on gallery item click
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var title = this.getAttribute('data-title') || 'Gallery Photo';
      var desc = this.getAttribute('data-desc') || 'Forces Academy';
      var img = this.getAttribute('data-img') || '';

      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxDesc) lightboxDesc.textContent = desc;
      if (lightboxImg && img) {
        lightboxImg.src = img;
        lightboxImg.alt = title;
      }

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close on button click
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close on overlay background click
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ---------- Results Filter ----------
function initResultsFilter() {
  var classFilter = document.getElementById('classFilter');
  var yearFilter = document.getElementById('yearFilter');
  var rows = document.querySelectorAll('.result-row');

  if (!classFilter || !yearFilter) return;

  function applyFilter() {
    var selectedClass = classFilter.value;
    var selectedYear = yearFilter.value;

    rows.forEach(function (row) {
      var rowClass = row.getAttribute('data-class');
      var rowYear = row.getAttribute('data-year');

      var classMatch = selectedClass === 'all' || rowClass === selectedClass;
      var yearMatch = selectedYear === 'all' || rowYear === selectedYear;

      if (classMatch && yearMatch) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  classFilter.addEventListener('change', applyFilter);
  yearFilter.addEventListener('change', applyFilter);
}

// ---------- Contact Form ----------
function initContactForm() {
  var form = document.getElementById('contactForm');
  var toast = document.getElementById('toastMsg');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation check
    var name = document.getElementById('contactName').value.trim();
    var email = document.getElementById('contactEmail').value.trim();
    var message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show success toast
    if (toast) {
      toast.style.display = 'block';
      setTimeout(function () {
        toast.style.display = 'none';
      }, 4000);
    }

    form.reset();
  });
}

// ---------- Navbar Active Link ----------
function setActiveNavLink() {
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// ---------- Smooth scroll for anchor links ----------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---------- Init All ----------
document.addEventListener('DOMContentLoaded', function () {
  initCounters();
  initGalleryFilter();
  initLightbox();
  initResultsFilter();
  initContactForm();
  setActiveNavLink();
  initSmoothScroll();
});
