// Build a personal portfolio website that showcase your skills, projects and accomplishments as a web developer. Design an attractive and visually appealing layout that captures visitors' attention. Include a home page with a captivating headline, proffesional photo, and summary of your skills. Provide an "About Me" section with a detailed background, eduction, and proffessional experience.


let home = document.getElementById("home");
let about = document.getElementById("about");
let work = document.getElementById("work");


let topPart = document.getElementById("top-section");
let aboutPart = document.getElementById("about-section");
let workPart = document.getElementById("work-section");

home.addEventListener("click", function () {
  topPart.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

about.addEventListener("click", function () {
    console.log("Clicked");
  aboutPart.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

work.addEventListener("click", function () {
  workPart.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});
