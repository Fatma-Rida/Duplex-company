const projectsData = {
  "intercity-mall": {
    title: "Intercity Mall",
    images: [
      "./projects/intercity-mall/1.jpg.jpeg",
      "./projects/intercity-mall/2.jpg.jpeg",
      "./projects/intercity-mall/3.jpg.jpeg",
      "./projects/intercity-mall/4.jpg.jpeg"
    ]
  },

  "school-nahr-al-riyadh-soi-mall": {
    title: "School Nahr Al Riyadh & SOI Mall",
    images: [
      "./projects/school Nahr Al Riyadh & SOI Mall/1.jpeg",
      "./projects/school Nahr Al Riyadh & SOI Mall/2.jpeg",
      "./projects/school Nahr Al Riyadh & SOI Mall/3.jpeg",
      "./projects/school Nahr Al Riyadh & SOI Mall/4.jpeg",
      "./projects/school Nahr Al Riyadh & SOI Mall/5.jpeg"
    ]
  },

  "SOI": {
    title: "SOI Mall",
    images: [
      "./projects/SOI/1.jpeg",
      "./projects/SOI/2.jpeg",
      "./projects/SOI/3.jpeg",
      "./projects/SOI/4.jpeg",
      "./projects/SOI/5.jpeg"
    ]
  }
};

// ===== Get project id from URL =====
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const titleEl = document.getElementById("projectTitle");
const gallery = document.getElementById("gallery");

// ===== Lightbox elements =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeLightbox");

const project = projectsData[projectId];

if (!project) {
  titleEl.innerText = "Project not found";
} else {
  titleEl.innerText = project.title;

  project.images.forEach((src, index) => {
    // wrapper للأنيميشن
    const wrap = document.createElement("div");
    wrap.className = "img-wrap";
    wrap.style.animationDelay = `${index * 0.12}s`; // ظهور تدريجي

    const img = document.createElement("img");
    img.src = src;
    img.alt = project.title;

    // فتح lightbox عند الضغط
    wrap.addEventListener("click", () => {
      lightboxImg.src = src;
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden"; // يمنع scroll
    });

    wrap.appendChild(img);
    gallery.appendChild(wrap);
  });
}

// ===== Close lightbox =====
function closeLightbox(){
  lightbox.classList.remove("show");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeLightbox);

// اقفل لما تضغطي على الخلفية السودا
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// اقفل بزر ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("show")) {
    closeLightbox();
  }
});
