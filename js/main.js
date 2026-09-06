// Mobile nav toggle.
(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
})();

// Desktop nav dropdowns (Eye Care / Dry Eye Center / Patient Resources):
// only one open at a time, and close on outside click or Escape.
(function () {
  var dropdowns = document.querySelectorAll(".nav-dropdown");

  if (!dropdowns.length) return;

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("toggle", function () {
      if (!dropdown.open) return;
      dropdowns.forEach(function (other) {
        if (other !== dropdown) other.open = false;
      });
    });
  });

  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      if (dropdown.open && !dropdown.contains(event.target)) {
        dropdown.open = false;
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    dropdowns.forEach(function (dropdown) {
      dropdown.open = false;
    });
  });
})();

// Footer copyright year.
(function () {
  var el = document.getElementById("copyrightYear");
  if (!el) return;
  el.textContent = new Date().getFullYear();
})();

// Contact form: no backend exists in this static site yet, so submission
// is intercepted and reported honestly rather than faking a success state.
// TODO(later-phase): wire this up to a real form-delivery destination.
(function () {
  var form = document.getElementById("contactForm");
  var status = document.getElementById("contactFormStatus");
  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    status.hidden = false;
    status.textContent =
      "Online form submission isn't connected yet — please call 610-326-2754 or email pottstown@newpathmedicalgroup.com directly for now.";
    status.setAttribute("role", "alert");
  });
})();
