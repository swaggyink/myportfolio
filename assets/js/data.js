const portfolioData = {
  items: [
    {
      id: "item1",
      title: "Commercial Video",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1689.png",
      video: "assets/img/portfolio/new2/IMG_1689.MP4",
      type: "video",
    },
    {
      id: "item2",
      title: "Portrait Photography",
      description: "Portrait / Modeling",
      image: "assets/img/portfolio/new/rasem.jpg",
      type: "image",
    },
    {
      id: "item3",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/video1.png",
      video: "assets/img/portfolio/video1.mp4",
      type: "video",
    },
    {
      id: "item4",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/ai-shoes.jpg",
      type: "image",
    },
    {
      id: "item5",
      title: "Commercial Video",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1690.png",
      video: "assets/img/portfolio/new2/IMG_1690.MP4",
      type: "video",
    },
    {
      id: "item6",
      title: "Portrait Photography",
      description: "Portrait / Modeling",
      image: "assets/img/portfolio/new/helmt.jpg",
      type: "image",
    },
    {
      id: "item7",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/video2.png",
      video: "assets/img/portfolio/video2.mp4",
      type: "video",
    },
    {
      id: "item8",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/gov-1.jpg",
      type: "image",
    },
    {
      id: "item9",
      title: "Commercial Video",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1538.png",
      video: "assets/img/portfolio/new2/IMG_1538.mp4",
      type: "video",
    },
  ],
};

const cardContainer = document.getElementById("card-container");
if (cardContainer) {
  // Clear existing content
  cardContainer.innerHTML = "";

  // Number of items to show initially
  const itemsPerPage = 6;
  let currentPage = 1;

  function createPortfolioItem(item, index) {
    const newCard = document.createElement("div");
    newCard.classList.add("col-lg-4", "col-md-6");

    if (item.type === "video") {
      newCard.innerHTML = `     
      <div class="st-portfolio-single st-style1" data-index="${index}">
        <div class="st-portfolio-item">
          <img src="assets/img/di9rnbxjT.gif" alt="portfolio" class="play-btn-overlay">
          <a href="${item.video}" class="st-portfolio st-zoom" data-type="video" data-src="${item.video}" data-poster="${item.image}">
            <div class="st-portfolio-img st-zoom-in">
              <img src="${item.image}" alt="portfolio">
            </div>
            <div class="st-portfolio-item-hover">
              <i class="fas fa-plus-circle"></i>
              <h5>${item.title}</h5>
              <p>${item.description}</p>
            </div>
          </a>
        </div>
      </div>`;
    } else {
      newCard.innerHTML = `
      <div class="st-portfolio-single st-style1" data-index="${index}">
        <div class="st-portfolio-item">
          <a href="${item.image}" class="st-portfolio st-zoom" data-type="image" data-src="${item.image}">
            <div class="st-portfolio-img st-zoom-in">
              <img src="${item.image}" alt="portfolio">
            </div>
            <div class="st-portfolio-item-hover">
              <i class="fas fa-plus-circle"></i>
              <h5>${item.title}</h5>
              <p>${item.description}</p>
            </div>
          </a>
        </div>
      </div>`;
    }

    return newCard;
  }

  function displayItems(page) {
    const startIndex = 0;
    const endIndex = page * itemsPerPage;
    const itemsToShow = portfolioData.items.slice(startIndex, endIndex);

    itemsToShow.forEach((item, index) => {
      const newCard = createPortfolioItem(item, index);
      cardContainer.appendChild(newCard);
    });

    // Show/hide load more button
    const loadMoreBtn = document.getElementById("load-more-btn");
    if (loadMoreBtn) {
      loadMoreBtn.style.display =
        endIndex >= portfolioData.items.length ? "none" : "block";
    }
  }

  // Create load more button
  const loadMoreContainer = document.createElement("div");
  loadMoreContainer.className = "col-12 text-center";
  loadMoreContainer.innerHTML = `
    <button id="load-more-btn" class="st-btn st-style1 st-color1">Load More</button>
  `;
  cardContainer.parentNode.appendChild(loadMoreContainer);

  // Initial display
  displayItems(currentPage);

  // Load more button click handler
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentPage++;
      displayItems(currentPage);
    });
  }

  // Initialize custom gallery
  const galleryItems = document.querySelectorAll(".st-portfolio.st-zoom");
  let currentIndex = 0;

  function createGallery() {
    const gallery = document.createElement("div");
    gallery.className = "custom-gallery";
    gallery.innerHTML = `
      <div class="gallery-overlay"></div>
      <div class="gallery-content">
        <button class="gallery-close">&times;</button>
        <button class="gallery-prev">&lt;</button>
        <button class="gallery-next">&gt;</button>
        <div class="gallery-media"></div>
        <div class="gallery-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>
    `;
    document.body.appendChild(gallery);
    return gallery;
  }

  const gallery = createGallery();
  const mediaContainer = gallery.querySelector(".gallery-media");
  const caption = gallery.querySelector(".gallery-caption");
  const overlay = gallery.querySelector(".gallery-overlay");
  const closeBtn = gallery.querySelector(".gallery-close");
  const prevBtn = gallery.querySelector(".gallery-prev");
  const nextBtn = gallery.querySelector(".gallery-next");

  function showGallery(index) {
    currentIndex = index;
    const item = portfolioData.items[index];
    const mediaElement =
      item.type === "video"
        ? `<video src="${item.video}" poster="${item.image}" controls></video>`
        : `<img src="${item.image}" alt="${item.title}">`;

    mediaContainer.innerHTML = mediaElement;
    caption.querySelector("h3").textContent = item.title;
    caption.querySelector("p").textContent = item.description;
    gallery.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function hideGallery() {
    gallery.classList.remove("active");
    document.body.style.overflow = "";
    if (mediaContainer.querySelector("video")) {
      mediaContainer.querySelector("video").pause();
    }
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % portfolioData.items.length;
    showGallery(currentIndex);
  }

  function showPrev() {
    currentIndex =
      (currentIndex - 1 + portfolioData.items.length) %
      portfolioData.items.length;
    showGallery(currentIndex);
  }

  // Event listeners
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      showGallery(index);
    });
  });

  closeBtn.addEventListener("click", hideGallery);
  overlay.addEventListener("click", hideGallery);
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!gallery.classList.contains("active")) return;

    switch (e.key) {
      case "Escape":
        hideGallery();
        break;
      case "ArrowLeft":
        showPrev();
        break;
      case "ArrowRight":
        showNext();
        break;
    }
  });
} else {
  console.error("Card container element not found!");
}
