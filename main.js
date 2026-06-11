// Subscribe button function blog-menu-page
// it gives error = Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// at HTMLDocument.<anonymous> (main.js:7:8)
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("subscribeForm");
//   const subscribeMessage = document.getElementById("subscribeMessage");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     subscribeMessage.classList.remove("hidden");
//   });
// });
// Navbar Function
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

// Navbar background color change
window.addEventListener("scroll", () => {
  const navHeader = document.getElementById("main-header");
  const logo = document.getElementById("logo");
  const navLinks = document.querySelectorAll("#nav-links a");

  if (window.scrollY > 50) {
    // 1. Change background color
    navHeader.classList.add(
      "bg-white",
      "dark:bg-[#121212]",
      "transition-all",
      "duration-150",
      "shadow-md",
      "z-50"
    );
    // 2. Shrink logo
    logo.classList.replace("md:text-5xl", "text-2xl");
    // 3. Shring nav links to text-sm
    navLinks.forEach((link) => {
      link.classList.remove("md:text-xl", "lg:text-2xl");
      link.classList.add("text-sm");
    });
  } else {
    // Reset everything when back at the top
    navHeader.classList.remove("bg-white", "shadow-md", "dark:bg-[#121212]");
    logo.classList.replace("text-2xl", "md:text-5xl");

    navLinks.forEach((link) => {
      link.classList.add("md:text-xl", "lg:text-2xl");
      link.classList.remove("text-sm");
    });
  }
});

// Dark mode toggle button
const html = document.documentElement;
const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");
lightBtn.addEventListener("click", () => {
  html.classList.remove("dark");
  localStorage.setItem("theme", "light");
});
darkBtn.addEventListener("click", () => {
  html.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

// Card stack function (Landing page)
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

// Services Pages service cards
// 1. Use querySelectorAll to get a NodeList (so .forEach works)
// const tabBtns = document.querySelectorAll(".tab-btn");
// const tabPanels = document.querySelectorAll(".tab-panel");

// tabBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // Remove active styles from ALL buttons
//     tabBtns.forEach((b) => b.classList.remove("active", "text-orange-400"));

//     // Hide ALL panels
//     tabPanels.forEach((p) => {
//       p.classList.remove("active");
//       p.style.display = "none";
//     });

//     // Add active style to the clicked button
//     btn.classList.add("active", "text-orange-400");

//     const target = btn.dataset.tab;

//     if (target === "all") {
//       // Show everything
//       tabPanels.forEach((p) => {
//         p.classList.add("active");
//         p.style.display = "grid";
//       });
//     } else {
//       // Show only the specific panel matching "tab-web" or "tab-amazon"
//       const panel = document.getElementById("tab-" + target);
//       if (panel) {
//         panel.classList.add("active");
//         panel.style.display = "grid";
//       }
//     }
//   });
// });

// Project tab control
const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll("[class*='panel-']");
const projectCount = document.querySelector(".project-count");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const tabData = btn.dataset.category;
    console.log(tabData);
    panels.forEach((panel) => {
      if (tabData === "tabAll") {
        panel.style.display = "block";
        const total = document.querySelectorAll("[class*='panel-']").length;
        projectCount.textContent = total + " projects";
      } else if (panel.classList.contains(`panel-${tabData}`)) {
        panel.style.display = "block";
        const count = document.querySelectorAll(`.panel-${tabData}`).length;
        projectCount.textContent = count + " projects";
      } else {
        panel.style.display = "none";
        const count2 = document.querySelectorAll(`.panel-${tabData}`).length;
        projectCount.textContent = count2 + " projects";
      }
    });
  });
});
