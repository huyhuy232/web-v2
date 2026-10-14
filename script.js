const navLinks = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("backToTop");

const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(section => section !== null);

// Cap nhat muc dang xem tren thanh dieu huong
function updateActiveLink() {
    let currentSection = sections[0];

    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 160) {
            currentSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (
            currentSection &&
            link.getAttribute("href") === "#" + currentSection.id
        ) {
            link.classList.add("active");
        }
    });
}

// Theo doi vi tri cuon trang
window.addEventListener("scroll", updateActiveLink);

// Cap nhat khi bam vao muc dieu huong
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Quay lai dau trang
backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Cap nhat trang thai khi tai trang
updateActiveLink();
