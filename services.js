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
const activateDarkSwitch = document.getElementById("dark_switch");
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
    // 4. Show the dark mode toggle button
    activateDarkSwitch.classList.remove("hidden");
  } else {
    // Reset everything when back at the top
    navHeader.classList.remove("bg-white", "shadow-md", "dark:bg-[#121212]");
    logo.classList.replace("text-2xl", "md:text-5xl");
    activateDarkSwitch.classList.add("hidden");
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

//  Dark mode toggle button on reducing to navbar
const lightBtnNav = document.getElementById("light-mode-nav");
const darkBtnNav = document.getElementById("dark-mode-nav");
lightBtnNav.addEventListener("click", () => {
  html.classList.remove("dark");
  localStorage.setItem("theme", "light");
});
darkBtnNav.addEventListener("click", () => {
  html.classList.add("dark");
  localStorage.setItem("theme", "dark");
});


// SERVICES TAB CONTROLS
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel, .tab-panel-all");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset buttons
    tabBtns.forEach((b) => b.classList.remove("active", "text-orange-400"));

    // Hide all panels
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // Activate button
    btn.classList.add("active", "text-orange-400");

    const target = btn.dataset.tab;

    if (target === "all") {
      document.getElementById("tab-all").classList.add("active");
    } else {
      document.getElementById("tab-" + target).classList.add("active");
    }
  });
});

