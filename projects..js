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
  },
  {
    id: "Administrative Building",
    title: "Administrative Building (Contributor)",
    cover: "./projects/Administrative Building/proo_page1.png"
  },
  {
    id: "Americana Group Factory",
    title: "Americana Group Factory (Contributor)",
    cover: "./projects/Americana Group Factory/proo_page7.png"
  },
  {
    id: "EL-Majd Oil Factory",
    title: "EL-Majd Oil Factory (Contributor)",
    cover: "./projects/EL-Majd Oil Factory/proo_page6.png"
  },
  {
    id: "IPI Factory",
    title: "IPI Factory (Contributor)",
    cover: "./projects/IPI Factory/proo_page5.png"
  },{
    id: "Royels Food Factory",
    title: "Royels Food Factory (Contributor)",
    cover: "./projects/Royels Food Factory/proo_page2.png"
  },{
    id: "Sanita Factory",
    title: "Sanita Factory (Contributor)",
    cover: "./projects/Sanita Factory/proo_page3.png"
  },
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
