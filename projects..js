const projects = [
  {
    id: "intercity-mall",
    title: "Intercity Mall",
    cover: "./projects/intercity-mall/1.jpg.jpeg"
  },
  {
    id: "school-nahr-al-riyadh-soi-mall",
    title: "School Nahr Al Riyadh ",
    cover: "./projects/school Nahr Al Riyadh & SOI Mall/1.jpeg"
  },
   {
    id: "SOI",
    title: "SOI Mall",
    cover: "./projects/SOI/1.jpeg"
  }
];

const grid = document.getElementById("projectsGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.cover}" alt="${project.title}">
    <div class="overlay">
      <h3>${project.title}</h3>
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `project-details.html?id=${project.id}`;
  });

  grid.appendChild(card);
});
