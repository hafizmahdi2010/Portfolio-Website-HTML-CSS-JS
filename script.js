AOS.init();

var typed = new Typed('#heroText', {
  strings: [
    'Web Developer',
    'App Developer',
    'Software Developer',
    'AI Developer',
    'Backend Developer',
    'Frontend Developer',
    'Full-Stack Developer',
    'Data Scientist',
    'Machine Learning Engineer',
    'DevOps Engineer',
    'UX/UI Designer',
    'Database Administrator',
    'Cloud Engineer',
    'Cybersecurity Specialist',
    'Game Developer',
  ],
  typeSpeed: 50,
});

let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", function () {
  let navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
  if (menuBtn.classList.contains("bx-menu")) {
    menuBtn.classList.replace("bx-menu", "bx-x");
  }
  else {
    menuBtn.classList.replace("bx-x", "bx-menu");
  }
})