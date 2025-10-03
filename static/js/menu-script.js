document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".side-menu.dynamic");
  if (!menu) return;

  const mainContent = document.querySelector(".description-main-text");
  const menuList = document.getElementById("dynamic-menu-list");
  if (!mainContent || !menuList) return;

  const headings = mainContent.querySelectorAll("h3, h4");

  // 1. Генерируем меню
  let currentH3LI = null;
  headings.forEach((heading) => {
    if (heading.tagName === "H3") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <div class="menu-item-h3">
                    <a href="#${heading.id}">${heading.textContent}</a>
                    <button class="submenu-toggle" aria-expanded="false">
                        <svg viewBox="0 0 100 100"><path d="M25 10 L75 50 L25 90" fill="none" stroke="#333" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div>
            `;
      menuList.appendChild(listItem);
      currentH3LI = listItem;
    } else if (heading.tagName === "H4" && currentH3LI) {
      let submenu = currentH3LI.querySelector(".submenu");
      if (!submenu) {
        submenu = document.createElement("ul");
        submenu.className = "submenu";
        currentH3LI.appendChild(submenu);
      }
      const subListItem = document.createElement("li");
      subListItem.innerHTML = `<a href="#${heading.id}">${heading.textContent}</a>`;
      submenu.appendChild(subListItem);
    }
  });

  const allH3LIs = document.querySelectorAll(".side-menu.dynamic > ul > li");

  // 2. Логика кликов
  menuList.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const parentLI = link.closest(".side-menu.dynamic > ul > li");
    if (parentLI) {
      if (parentLI.classList.contains("open")) {
        return;
      }
      allH3LIs.forEach((li) => li.classList.remove("open"));
      parentLI.classList.add("open");
    }
  });

  // 3. Логика подсветки и раскрытия при скролле (Scroll Spy)
  const allMenuLinks = document.querySelectorAll(".side-menu.dynamic a");
  const headingElements = Array.from(headings);

  const observer = new IntersectionObserver(
    (entries) => {
      let currentActiveHeading = null;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (
            !currentActiveHeading ||
            entry.target.offsetTop < currentActiveHeading.offsetTop
          ) {
            currentActiveHeading = entry.target;
          }
        }
      }

      if (currentActiveHeading) {
        const currentId = currentActiveHeading.id;
        const activeLink = document.querySelector(
          `.side-menu.dynamic a[href="#${currentId}"]`
        );

        if (activeLink) {
          allMenuLinks.forEach((link) => link.classList.remove("active"));
          allH3LIs.forEach((li) => {
            li.classList.remove("active-parent");
            li.classList.remove("open");
          });

          const parentLI = activeLink.closest(".side-menu.dynamic > ul > li");
          if (parentLI) {
            parentLI.classList.add("active-parent");
            parentLI.classList.add("open");
          }

          if (activeLink.closest(".submenu")) {
            activeLink.classList.add("active");
          }
        }
      }
    },
    {
      rootMargin: "0px 0px -85% 0px",
      threshold: 0,
    }
  );

  headingElements.forEach((h) => observer.observe(h));
});
