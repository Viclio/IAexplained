      // Reveal on scroll
      (function () {
        const targets = document.querySelectorAll(
          'section h2, section h3, section p, section figure, section .callout, section .card, section .tl-item, section pre, section .table-wrap, section ol > li, section ul > li'
        );
        targets.forEach((el) => el.classList.add('reveal'));
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
              }
            });
          },
          { rootMargin: '-40px 0px -40px 0px' }
        );
        targets.forEach((el) => io.observe(el));
      })();
