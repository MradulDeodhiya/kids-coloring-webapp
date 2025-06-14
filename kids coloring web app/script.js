document.addEventListener("DOMContentLoaded", () => {
  // Add click event listeners to all coloring cards
  const coloringCards = document.querySelectorAll(".coloring-card");

  coloringCards.forEach((card) => {
    card.addEventListener("click", () => {
      const pageId = card.getAttribute("data-page");
      window.location.href = `coloring-page.html?id=${pageId}`;
    });
  });
});
