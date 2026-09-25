      (function () {
        const toggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("toc-menu");
        if (!toggle || !menu) return;
        toggle.addEventListener("click", () => {
          const isOpen = menu.classList.toggle("is-open");
          toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
        menu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
          });
        });
        window.addEventListener("resize", () => {
          if (window.innerWidth > 900) {
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
          }
        });
      })();
