// Loads nav.html and footer.html into any page that has these mount points:
//   <div data-include="nav"></div>
//   <div data-include="footer"></div>
//
// Then highlights the current nav link based on the page's data-page attribute on <body>.

(async function () {
  const mounts = document.querySelectorAll('[data-include]');

  await Promise.all(
    Array.from(mounts).map(async (el) => {
      const name = el.getAttribute('data-include');
      try {
        const res = await fetch(`partials/${name}.html`);
        if (!res.ok) throw new Error(`Failed to load ${name}.html`);
        el.outerHTML = await res.text();
      } catch (err) {
        console.error(err);
      }
    })
  );

  // After nav is in the DOM, mark the current page's link
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage) {
    const activeLink = document.querySelector(`.nav-links a[data-nav="${currentPage}"]`);
    if (activeLink) activeLink.classList.add('current');
  }
})();