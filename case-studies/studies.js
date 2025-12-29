const content = document.querySelector(".cs-content");
const sections = document.querySelectorAll(".cs-section");
const sidebarLinks = document.querySelectorAll(".cs-sidebar a");

content.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = 200;

    if (rect.top <= offset && rect.bottom >= offset) {
      currentSection = section.id;
    }
  });

  sidebarLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
