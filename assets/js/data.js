const portfolioData = {
  items: [
    {
      id: "item24",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/gov5.jpg",
      type: "image",
    },
    {
      id: "item23",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/gov2.jpg",
      type: "image",
    },
    {
      id: "item22",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/gov-1.jpg",
      type: "image",
    },
    {
      id: "item21",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/fire.jpg",
      type: "image",
    },
    {
      id: "item20",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/darl-3.jpg",
      type: "image",
    },
    {
      id: "item19",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/darl-2.jpg",
      type: "image",
    },
    {
      id: "item18",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/darl-1.jpg",
      type: "image",
    },
    {
      id: "item17",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/ai-shoes.jpg",
      type: "image",
    },
    {
      id: "item16",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/312.jpg",
      type: "image",
    },
    {
      id: "item15",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/portfolio1.JPG",
      type: "image",
    },
    {
      id: "item14",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/portfolio6.png",
      video: "assets/img/portfolio/portfolio6.mp4",
      type: "video",
    },
    {
      id: "item13",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/portfolio5.png",
      video: "assets/img/portfolio/portfolio5.mp4",
      type: "video",
    },
    {
      id: "item12",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/portfolio4.png",
      video: "assets/img/portfolio/portfolio4.mp4",
      type: "video",
    },
    {
      id: "item11",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/video3.png",
      video: "assets/img/portfolio/video3.mp4",
      type: "video",
    },
    {
      id: "item10",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/video2.png",
      video: "assets/img/portfolio/video2.mp4",
      type: "video",
    },
    {
      id: "item9",
      title: "Event Coverage",
      description: "Events / Marketing",
      image: "assets/img/portfolio/video1.png",
      video: "assets/img/portfolio/video1.mp4",
      type: "video",
    },
    {
      id: "item8",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/Untitled-1.jpg",
      type: "image",
    },
    {
      id: "item7",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/IMG_1045.jpg",
      type: "image",
    },
    {
      id: "item6",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_7445.png",
      type: "image",
    },
    {
      id: "item5",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1675.PNG",
      type: "image",
    },
    {
      id: "item4",
      title: "Commercial Video",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1536.png",
      video: "assets/img/portfolio/new2/IMG_1536.mp4",
      type: "video",
    },
    {
      id: "item3",
      title: "Commercial Video",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1538.png",
      video: "assets/img/portfolio/new2/IMG_1538.mp4",
      type: "video",
    },
    {
      id: "item2",
      title: "Commercial Video",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1690.png",
      video: "assets/img/portfolio/new2/IMG_1690.MP4",
      type: "video",
    },
    {
      id: "item1",
      title: "Commercial Video",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new2/IMG_1689.png",
      video: "assets/img/portfolio/new2/IMG_1689.MP4",
      type: "video",
    },
    {
      id: "item24",
      title: "Commercial Photography",
      description: "Commercial / Marketing",
      image: "assets/img/portfolio/new/gov5.jpg",
      type: "image",
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
  let gallery = null; // Single gallery instance

  function createPortfolioItem(item, index) {
    const newCard = document.createElement("div");
    newCard.classList.add("col-lg-4", "col-md-6");

    if (item.type === "video") {
      newCard.innerHTML = `     
      <div class="st-portfolio-single st-style1" data-index="${index}">
        <div class="st-portfolio-item">
          <img src="assets/img/di9rnbxjT.gif" alt="portfolio" class="play-btn-overlay">
          <div class="st-portfolio st-zoom" data-type="video" data-src="${item.video}" data-poster="${item.image}" data-index="${index}">
            <div class="st-portfolio-img st-zoom-in">
              <img src="${item.image}" alt="portfolio">
            </div>
            <div class="st-portfolio-item-hover">
              <i class="fas fa-plus-circle"></i>
              <h5>${item.title}</h5>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      </div>`;
    } else {
      newCard.innerHTML = `
      <div class="st-portfolio-single st-style1" data-index="${index}">
        <div class="st-portfolio-item">
          <div class="st-portfolio st-zoom" data-type="image" data-src="${item.image}" data-index="${index}">
            <div class="st-portfolio-img st-zoom-in">
              <img src="${item.image}" alt="portfolio">
            </div>
            <div class="st-portfolio-item-hover">
              <i class="fas fa-plus-circle"></i>
              <h5>${item.title}</h5>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      </div>`;
    }

    return newCard;
  }

  function displayItems(page) {
    // Calculate start and end indices for current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    // Get items and reverse them for display
    const itemsToShow = [...portfolioData.items]
      .reverse()
      .slice(startIndex, endIndex);

    // Add new items to the container
    itemsToShow.forEach((item, index) => {
      const newCard = createPortfolioItem(
        item,
        portfolioData.items.length - 1 - (startIndex + index)
      );
      cardContainer.appendChild(newCard);
    });

    // Show/hide load more button
    const loadMoreBtn = document.getElementById("load-more-btn");
    if (loadMoreBtn) {
      loadMoreBtn.style.display =
        endIndex >= portfolioData.items.length ? "none" : "block";
    }

    // Reinitialize gallery for new items
    initializeGallery();
  }

  // Create load more button
  const loadMoreContainer = document.createElement("div");
  loadMoreContainer.className = "col-12 text-center mt-4";
  loadMoreContainer.style.display = "flex";
  loadMoreContainer.style.justifyContent = "center";
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

  function initializeGallery() {
    // Create gallery if it doesn't exist
    if (!gallery) {
      gallery = document.createElement("div");
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
    }

    const mediaContainer = gallery.querySelector(".gallery-media");
    const caption = gallery.querySelector(".gallery-caption");
    const overlay = gallery.querySelector(".gallery-overlay");
    const closeBtn = gallery.querySelector(".gallery-close");
    const prevBtn = gallery.querySelector(".gallery-prev");
    const nextBtn = gallery.querySelector(".gallery-next");
    let currentIndex = 0;

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
      currentIndex =
        (currentIndex - 1 + portfolioData.items.length) %
        portfolioData.items.length;
      showGallery(currentIndex);
    }

    function showPrev() {
      currentIndex = (currentIndex + 1) % portfolioData.items.length;
      showGallery(currentIndex);
    }

    // Remove old event listeners
    const oldItems = document.querySelectorAll(".st-portfolio.st-zoom");
    oldItems.forEach((item) => {
      const newItem = item.cloneNode(true);
      item.parentNode.replaceChild(newItem, item);
    });

    // Add new event listeners
    document.querySelectorAll(".st-portfolio.st-zoom").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const index = parseInt(item.getAttribute("data-index"));
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
  }

  // Initial gallery setup
  initializeGallery();
} else {
  console.error("Card container element not found!");
}
