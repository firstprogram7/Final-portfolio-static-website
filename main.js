const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const links = menu.querySelectorAll("a");

const closeMenu = () => {
  btn.classList.remove("open");
  menu.classList.remove("scale-y-100");
  menu.classList.add("scale-y-0"); // Explicitly force it closed
};

btn.addEventListener("click", () => {
  const isOpen = btn.classList.contains("open");
  if (isOpen) {
    closeMenu();
  } else {
    btn.classList.add("open");
    menu.classList.add("scale-y-100");
    menu.classList.remove("scale-y-0");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
/* ✅ Close when resizing to desktop */
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    // lg breakpoint
    closeMenu();
  }
});

// Card stack function
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const experienceSection = document.getElementById("experience");
  const triggerCard = document.getElementById("trigger-card");
  const mergedBlock = document.getElementById("merged-block");
  const cards = document.querySelectorAll(".card");

  if (!experienceSection || !triggerCard || !mergedBlock) return;

  const sectionRect = experienceSection.getBoundingClientRect();
  const cardRect = triggerCard.getBoundingClientRect();
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Check direction
  const isScrollingDown = currentScroll > lastScrollTop;
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  // Calculate distance past the sticky point (128px is top-32)
  const scrollDistancePastStick = Math.abs(cardRect.top - 128);

  // CONDITIONS
  const isAtTriggerPoint = cardRect.top <= 130 && scrollDistancePastStick > 200;
  const sectionIsFinished = sectionRect.bottom < 200; // Block dies 200px before section ends
  const isBackAtTop = sectionRect.top > 0;

  // THE LOGIC GATE
  if (isScrollingDown && isAtTriggerPoint && !sectionIsFinished) {
    // SHOW MERGED BLOCK
    mergedBlock.classList.remove(
      "opacity-0",
      "scale-95",
      "pointer-events-none"
    );
    mergedBlock.classList.add(
      "opacity-100",
      "scale-100",
      "pointer-events-auto"
    );
    cards.forEach((card) => card.classList.add("opacity-0", "blur-md"));
  } else {
    // HIDE EVERYTHING (If scrolling up, finished section, or not deep enough)
    mergedBlock.classList.add("opacity-0", "scale-95", "pointer-events-none");
    mergedBlock.classList.remove(
      "opacity-100",
      "scale-100",
      "pointer-events-auto"
    );
    cards.forEach((card) => card.classList.remove("opacity-0", "blur-md"));
  }
});

// Scroll indicator
