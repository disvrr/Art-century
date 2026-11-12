const animatedCards = document.querySelectorAll(".article-card, .art-card");
const topics = document.querySelectorAll(".Topics");


if (
  animatedCards.length > 0 &&
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.body.classList.add("has-scroll-animations");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedCards.forEach((card) => observer.observe(card));
}




