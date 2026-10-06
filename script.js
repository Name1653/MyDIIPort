document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  const profileImage = document.getElementById("profileImage");
  const imageFallback = document.getElementById("imageFallback");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    mobileNav.classList.remove("open");
  };

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      scrollToSection(button.dataset.scroll);
    });
  });

  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  profileImage.addEventListener("error", () => {
    profileImage.style.display = "none";
    imageFallback.style.display = "grid";
  });

  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      filter.classList.add("active");

      const selected = filter.dataset.filter;

      projects.forEach((project) => {
        const visible = selected === "all" || project.dataset.category === selected;
        project.style.display = visible ? "" : "none";
      });
    });
  });

  console.assert(document.title.includes("Supachok"), "Portfolio title should include the name");
  console.assert(document.querySelectorAll("[data-scroll]").length >= 8, "Navigation should have at least 8 sections");
  console.assert(document.querySelectorAll(".project").length >= 4, "Portfolio should contain at least 4 projects");
});
