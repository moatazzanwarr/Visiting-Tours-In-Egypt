const menu_open = document.querySelector("#menu_open");
const menu_close = document.querySelector("#menu_close");
const mobNav = document.querySelector("#mobNav");

menu_open.addEventListener("click",()=>{
    mobNav.style.top = "120px";
    menu_close.style.display = "block"
    menu_open.style.display = "none"
});
menu_close.addEventListener("click",()=>{
    mobNav.style.top = "-100vh";
    menu_close.style.display = "none"
    menu_open.style.display = "block"
});


document.addEventListener("DOMContentLoaded", function () {
  const selectedDestination = localStorage.getItem("selectedDestination");
  const location = document.getElementById("location-text");
  if (selectedDestination) {
    location.textContent = selectedDestination;
  }
});

//slider
const buttons = document.querySelectorAll("[data-carousel-button]");
const mainDiv = document.querySelector(".mainDiv");
let newIndex;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const startInterval = function () {
  start = setInterval(() => {
    buttons[1].click();
  }, 3000);
};

const stopInterval = function () {
  clearInterval(start);
};

buttons.forEach((button) => {
  button.addEventListener("mouseleave", () => {
    startInterval();
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    stopInterval();
  });
});

startInterval();

//buttons
const informationBtn = document.getElementById("information");
const galleryBtn = document.getElementById("gallery");
const tripPlanBtn = document.getElementById("trip");
const includeBtn = document.getElementById("include");
const overviewDiv = document.getElementById("overviewDiv");
const galleryDiv = document.getElementById("galleryDiv");
const tripPlanDiv = document.getElementById("tripPlanDiv");
const includeDiv = document.getElementById("includeDiv");

informationBtn.addEventListener("click", () => {
  informationBtn.classList.add("active-button");
  galleryBtn.classList.remove("active-button");
  tripPlanBtn.classList.remove("active-button");
  includeBtn.classList.remove("active-button");
  galleryDiv.style.cssText = `display:none;`;
  overviewDiv.style.cssText = `display:block;`;
  tripPlanDiv.style.cssText = `display:none;`;
  includeDiv.style.cssText = `display:none;`;
});

galleryBtn.addEventListener("click", () => {
  galleryBtn.classList.add("active-button");
  informationBtn.classList.remove("active-button");
  tripPlanBtn.classList.remove("active-button");
  includeBtn.classList.remove("active-button");
  galleryDiv.style.cssText = `display:block;`;
  overviewDiv.style.cssText = `display:none;`;
  tripPlanDiv.style.cssText = `display:none;`;
  includeDiv.style.cssText = `display:none;`;
});

tripPlanBtn.addEventListener("click", () => {
  galleryBtn.classList.remove("active-button");
  informationBtn.classList.remove("active-button");
  tripPlanBtn.classList.add("active-button");
  includeBtn.classList.remove("active-button");
  galleryDiv.style.cssText = `display:none;`;
  overviewDiv.style.cssText = `display:none;`;
  tripPlanDiv.style.cssText = `display:block;`;
  includeDiv.style.cssText = `display:none;`;
});

includeBtn.addEventListener("click", () => {
  galleryBtn.classList.remove("active-button");
  informationBtn.classList.remove("active-button");
  tripPlanBtn.classList.remove("active-button");
  includeBtn.classList.add("active-button");
  galleryDiv.style.cssText = `display:none;`;
  overviewDiv.style.cssText = `display:none;`;
  tripPlanDiv.style.cssText = `display:none;`;
  includeDiv.style.cssText = `display:block;`;
});

// Read more Information
const readMoreBtn = document.getElementById("read-more-span");
const moreText = document.getElementById("more-text-span");

readMoreBtn.addEventListener("click", () => {
  if (readMoreBtn.textContent === "Read More") {
    moreText.style.display = "inline";
    readMoreBtn.textContent = "Read Less";
  } else if (readMoreBtn.textContent === "Read Less") {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});

//Gallery
const data = [
  {
    name: "The Great Pyramid of Giza",
    stars: "../images/Group 4.png",
    paragraph: "150$",
    image: "../images/nariman-mesharrafa-qqDPI-294mw-unsplash 1.png",
  },
  {
    name: "Luxor Temple",
    stars: "../images/Group 5.png",
    paragraph: "250$",
    image: "../images/egypt-3321124_1920 2.png",
  },
  {
    name: "The Great Pyramid of Giza",
    stars: "../images/Group 4.png",
    paragraph: "350$",
    image: "../images/nariman-mesharrafa-qqDPI-294mw-unsplash 1.png",
  },
  {
    name: "Karnak Temple",
    stars: "../images/Group 4.png",
    paragraph: "150$",
    image: "../images/egypt-3088059_1920.png",
  },
  {
    name: "Temple of Hatshepsut",
    stars: "../images/Group 5.png",
    paragraph: "250$",
    image: "../images/egypt-1343526_1920.png",
  },
  {
    name: "The Great Pyramid of Giza",
    stars: "../images/Group 4.png",
    paragraph: "350$",
    image: "../images/jeremy-zero-cmnAbClSqG0-unsplash.png",
  },
  {
    name: "Karnak Temple",
    stars: "../images/Group 4.png",
    paragraph: "150$",
    image: "../images/karnak-4634094_1920.png",
  },
  {
    name: "Karnak Temple",
    stars: "../images/Group 5.png",
    paragraph: "250$",
    image: "../images/karnak-4634094_1920.png",
  },
  {
    name: "The Pyramids of Giza",
    stars: "../images/Group 5.png",
    paragraph: "350$",
    image: "../images/pyramids.png",
  },
  {
    name: "The Great Sphinx of Giza",
    stars: "../images/Group 4.png",
    paragraph: "250$",
    image: "../images/sphinx.png",
  },
  {
    name: "Valley of the Kings",
    stars: "../images/Group 4.png",
    paragraph: "150$",
    image: "../images/tomb-4300251_1920.png",
  },
  {
    name: "Abu Simbel Temples",
    stars: "../images/Group 5.png",
    paragraph: "350$",
    image: "../images/temple-3932028_1920.png",
  },
  // Add more data objects here as needed
];

// image section
let imagesPerPage = 4;
let currentImagePage = 1;
function showImages(page) {
  const startPoint = (page - 1) * imagesPerPage;
  const endPoint = startPoint + imagesPerPage;
  const imageSectionDiv = document.getElementById("gallery-container");
  imageSectionDiv.innerHTML = "";

  for (let i = startPoint; i < endPoint && i < data.length; i++) {
    const item = data[i];
    const img = document.createElement("img");
    img.src = item.image;
    imageSectionDiv.append(img);
  }
}

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const totalGalleryPages = Math.ceil(data.length / imagesPerPage);

nextBtn.addEventListener("click", () => {
  if (currentImagePage < totalGalleryPages && imagesPerPage == 4) {
    currentImagePage++;
    showImages(currentImagePage);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentImagePage > 1 && imagesPerPage == 4) {
    currentImagePage--;
    showImages(currentImagePage);
  }
});

showImages(currentImagePage);

//trip plan section
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".accordion-title");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        // Close the content
        content.style.maxHeight = null;
        content.style.padding = "0 15px";
      } else {
        // Close any other open content
        document.querySelectorAll(".accordion-content").forEach((content) => {
          content.style.maxHeight = null;
          content.style.padding = "0 15px";
        });

        // Open the clicked content
        content.style.maxHeight = "300px";
        content.style.padding = "15px";
      }
    });
  });
});

//image slider

let itemsPerPage = 3; // Number of items to show per page
let currentPage = 1;

function displayItems(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear previous content

  for (let i = startIndex; i < endIndex && i < data.length; i++) {
    const item = data[i];
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = `
    <img class="images" src="${item.image}" alt="Image">
    <h4>${item.name}</h4>
    <img class="stars" src="${item.stars}" alt="image">
    <p>${item.paragraph}/ <span>Person</span> </p>
        `;

    contentDiv.appendChild(div);
  }
}

const buttonForward = document.createElement("button");
const buttonBackward = document.createElement("button");
const paginationDiv = document.getElementById("pagination");
const buttonsDiv = document.createElement("div");
const totalPages = Math.ceil(data.length / itemsPerPage);
buttonBackward.textContent = "<";
buttonForward.textContent = ">";
buttonsDiv.append(buttonBackward, buttonForward);
paginationDiv.appendChild(buttonsDiv);
paginationDiv.style.cssText = ` width: 90%;
margin: 0px auto;
display: flex;
align-items: center;
justify-content: space-between;
`;

buttonsDiv.style.cssText = `    `;

buttonForward.style.cssText = `padding: 5px;
width: 40px;
background: #071597;
border: 1px solid lightgrey;
font-size: larger;
font-weight: bold;
color: white;
margin-left:20px;
cursor:pointer;
border-radius: 7px;`;

buttonBackward.style.cssText = `padding: 5px;
width: 40px;
background: white;
border: 1px solid lightgrey;
font-size: larger;
font-weight: bold;
color: #071597;
cursor:pointer;
border-radius: 7px;`;

buttonForward.addEventListener("click", () => {
  if (currentPage < totalPages && itemsPerPage == 3) {
    currentPage++;
    displayItems(currentPage);
  }
});

buttonBackward.addEventListener("click", () => {
  if (currentPage > 1 && itemsPerPage == 3) {
    currentPage--;
    displayItems(currentPage);
  }
});

displayItems(currentPage);

//feedback
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".card");
const prevButton = document.querySelector(".nav-button.left");
const nextButton = document.querySelector(".nav-button.right");
let currentIndex = 0;
let isTransitioning = false;

function updateSliderPosition() {
  sliderWrapper.style.transition = "transform 0.5s ease";
  sliderWrapper.style.transform = `translateX(-${currentIndex * 80}%)`;
}
sliderWrapper.addEventListener("mouseenter", () => {
  stopSlider();
});

sliderWrapper.addEventListener("mouseleave", () => {
  startSlider();
});

function showNextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
}

function showPrevSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
}

sliderWrapper.addEventListener("transitionend", () => {
  isTransitioning = false;
});

prevButton.addEventListener("click", () => {
  showPrevSlide();
});

nextButton.addEventListener("click", () => {
  showNextSlide();
});

function startSlider() {
  intervalId = setInterval(showNextSlide, 1500);
  // Change slide every 3 seconds
}

function stopSlider() {
  clearInterval(intervalId);
}

startSlider();

//animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const options = {
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Optional: Stop observing once animated
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
