AOS.init({
  duration: 1000,
  once: false
});

function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => section.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "profile") {
    document.querySelectorAll(".profile-item").forEach((item) => {
      item.style.animation = "none";
      item.offsetHeight; // trigger reflow
      item.style.animation = "slideInLeft 1s ease forwards";
    });
  }
}

