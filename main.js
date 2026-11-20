const animatedCards = document.querySelectorAll(".article-card, .art-card");
const topics = document.querySelectorAll(".Topics");


if (animatedCards.length > 0 &&
  "IntersectionObserver" in window)
 {
  document.body.classList.add("has-scroll-animations");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedCards.forEach((card) => observer.observe(card));


}




