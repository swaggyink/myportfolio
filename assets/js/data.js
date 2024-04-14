const products = [
  {
    image: "assets/img/portfolio/new2/IMG_1689.png",
    video: "assets/img/portfolio/new2/IMG_1689.MP4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/new2/IMG_1690.png",
    video: "assets/img/portfolio/new2/IMG_1690.MP4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/new2/IMG_1538.png",
    video: "assets/img/portfolio/new2/IMG_1538.MP4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/new2/IMG_1536.png",
    video: "assets/img/portfolio/new2/IMG_1536.MP4",
    type: "video",
  },

  {
    image: "assets/img/portfolio/new2/IMG_1675.PNG",
  },
  {
    image: "assets/img/portfolio/new2/IMG_7445.png",
  },
  {
    image: "assets/img/portfolio/new/IMG_1045.jpg",
  },
  {
    image: "assets/img/portfolio/new/Untitled-1.jpg",
  },
  {
    image: "assets/img/portfolio/video1.png",
    video: "assets/img/portfolio/video1.mp4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/video2.png",
    video: "assets/img/portfolio/video2.mp4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/video3.png",
    video: "assets/img/portfolio/video3.mp4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/portfolio4.png",
    video: "assets/img/portfolio/portfolio4.mp4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/portfolio5.png",
    video: "assets/img/portfolio/portfolio5.mp4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/portfolio6.png",
    video: "assets/img/portfolio/portfolio6.mp4",
    type: "video",
  },
  {
    image: "assets/img/portfolio/portfolio1.JPG",
  },
  {
    image: "assets/img/portfolio/new/312.jpg",
  },
  {
    image: "assets/img/portfolio/new/ai-shoes.jpg",
  },
  {
    image: "assets/img/portfolio/new/darl-1.jpg",
  },
  {
    image: "assets/img/portfolio/new/darl-2.jpg",
  },
  {
    image: "assets/img/portfolio/new/darl-3.jpg",
  },
  {
    image: "assets/img/portfolio/new/fire.jpg",
  },
  {
    image: "assets/img/portfolio/new/gov-1.jpg",
  },
  {
    image: "assets/img/portfolio/new/gov2.jpg",
  },
  {
    image: "assets/img/portfolio/new/gov3.jpg",
  },
  {
    image: "assets/img/portfolio/new/gov4.jpg",
  },
  {
    image: "assets/img/portfolio/new/gov5.jpg",
  },
  {
    image: "assets/img/portfolio/new/helmt.jpg",
  },
  //   {
  //     image: "assets/img/portfolio/new/nabin.jpg",
  //   },
  {
    image: "assets/img/portfolio/new/rasem.jpg",
  },
];

const cardContainer = document.getElementById("card-container");
if (cardContainer) {
  products.map((card) => {
    const newCard = document.createElement("div");
    newCard.classList.add("col-lg-4", "col-md-6");

    if (card.type === "video") {
      newCard.innerHTML = `     
      <div class="st-portfolio-single st-style1" id="gallery-videojs-demo">
        <div class="st-portfolio-item">
          <a href=${card.video} class="st-portfolio st-zoom st-lightbox-item">
            <div class="st-portfolio-img st-zoom-in">
              <img src=${card.image} alt="portfolio">
            </div>
            <div class="st-portfolio-item-hover">
              <i class="fas fa-plus-circle"></i>
              <h5>Product Design</h5>
              <p>Design / Marketing</p>
            </div>
          </a>
        </div>
      </div>`;
    } else {
      newCard.innerHTML = `
    <div class="st-portfolio-single st-style1 st-lightgallery">
      <div class="st-portfolio-item">
        <a href=${card.image} class="st-portfolio st-zoom st-lightbox-item">
          <div class="st-portfolio-img st-zoom-in">
            <img src=${card.image} alt="portfolio">
          </div>
          <div class="st-portfolio-item-hover">
            <i class="fas fa-plus-circle"></i>
            <h5>photography</h5>
            <p>photography</p>
          </div>
        </a>
      </div>
    </div>
`;
    }

    cardContainer.appendChild(newCard);
  });
  // Create and append the "Load More" element
  const loadMoreContainer = document.createElement("div");
  loadMoreContainer.classList.add("col-lg-12", "text-center");

  const loadMoreButton = document.createElement("p");
  loadMoreButton.classList.add("st-btn", "st-style1", "st-color1", "loadmore1");
  loadMoreButton.textContent = "Load More";

  const loadMoreBtnWrapper = document.createElement("div");
  loadMoreBtnWrapper.classList.add("st-portfolio-btn");
  loadMoreBtnWrapper.appendChild(loadMoreButton);

  loadMoreContainer.appendChild(loadMoreBtnWrapper);
  cardContainer.appendChild(loadMoreContainer);
} else {
  console.error("Card container element not found!");
}
