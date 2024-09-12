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



document
  .getElementById("your destination")
  .addEventListener("change", function () {
    const selectedValue = this.value;
    localStorage.setItem("selectedDestination", selectedValue);
  });

//typing animatoion
const h3Div = document.querySelector(".texth3");
const text = "enjoy your trip visiting egyp tours to get your own satisfaction";

//discover button
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "/destination_page/destination.html"; // Change this to your target page
});
//

function typingEffect(element, text, i = 0) {
  element.textContent += text[i];
  if (i === text.length - 1) {
    return;
  }
  setTimeout(() => {
    typingEffect(h3Div, text, i + 1);
  }, 40);
}

typingEffect(h3Div, text);

document.addEventListener("DOMContentLoaded", function () {
  var dateInput = document.getElementById("tour-date");

  // Initialize the input as a placeholder
  dateInput.value = "";
  dateInput.classList.add("placeholder");

  // On focus, change type to date and clear placeholder
  dateInput.addEventListener("focus", function () {
    dateInput.type = "date";
    dateInput.classList.remove("placeholder");
  });

  // On blur, if the input is empty, change type back to text and show placeholder
  dateInput.addEventListener("blur", function () {
    if (dateInput.value === "") {
      dateInput.type = "text";
      dateInput.value = "";
      dateInput.classList.add("placeholder");
    }
  });
});

//pagination
const data = [
  {
    name: "The Great Pyramid of Giza",
    stars: "./images/Group 4.png",
    paragraph: "150$",
    image: "./images/pyramids.png",
  },
  {
    name: "Luxor Temple",
    stars: "./images/Group 5.png",
    paragraph: "250$",
    image: "./images/egypt-3321124_1920 2.png",
  },
  {
    name: "Nariman-Mesharrafa",
    stars: "./images/Group 4.png",
    paragraph: "350$",
    image: "./images/nariman-mesharrafa-qqDPI-294mw-unsplash 1.png",
  },
  {
    name: "Karnak Temple",
    stars: "./images/Group 4.png",
    paragraph: "150$",
    image: "./images/egypt-3088059_1920.png",
  },
  {
    name: "Temple of Hatshepsut",
    stars: "./images/Group 5.png",
    paragraph: "250$",
    image: "./images/egypt-1343526_1920.png",
  },
  {
    name: "The Great Pyramid of Giza",
    stars: "./images/Group 4.png",
    paragraph: "350$",
    image: "./images/jeremy-zero-cmnAbClSqG0-unsplash.png",
  },
  {
    name: "Karnak Temple",
    stars: "./images/Group 4.png",
    paragraph: "150$",
    image: "./images/karnak-4634094_1920.png",
  },
  {
    name: "Karnak Temple",
    stars: "./images/Group 5.png",
    paragraph: "250$",
    image: "./images/karnak-4634094_1920.png",
  },
  {
    name: "The Pyramids of Giza",
    stars: "./images/Group 5.png",
    paragraph: "350$",
    image: "./images/pyramids.png",
  },
  {
    name: "The Great Sphinx of Giza",
    stars: "./images/Group 4.png",
    paragraph: "250$",
    image: "./images/sphinx.png",
  },
  {
    name: "Valley of the Kings",
    stars: "./images/Group 4.png",
    paragraph: "150$",
    image: "./images/tomb-4300251_1920.png",
  },
  {
    name: "Abu Simbel Temples",
    stars: "/home_page/images/Group 5.png",
    paragraph: "350$",
    image: "./images/temple-3932028_1920.png",
  },
];

let itemsPerPage = 6; // Number of items to show per page
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
  if (currentPage < totalPages && itemsPerPage == 6) {
    currentPage++;
    displayItems(currentPage);
  }
});

buttonBackward.addEventListener("click", () => {
  if (currentPage > 1 && itemsPerPage == 6) {
    currentPage--;
    displayItems(currentPage);
  }
});

displayItems(currentPage);

const viewAllButton = document.getElementById("viewAll");

viewAllButton.addEventListener("click", () => {
  itemsPerPage = 1000;
  displayItems(currentPage);
  viewAllButton.style.cssText = `display:none;`;
});
displayItems(currentPage);

// slider
// const sliderWrapper = document.querySelector(".slider-wrapper");
// const slides = document.querySelectorAll(".card");
// const prevButton = document.querySelector(".nav-button.left");
// const nextButton = document.querySelector(".nav-button.right");
// let currentIndex = 0;

// function updateSliderPosition() {
//   sliderWrapper.style.transform = `translateX(-${currentIndex * 80}%)`;
// }

// prevButton.addEventListener("click", () => {
//   if (currentIndex >= 0) {
//     currentIndex--;
//     updateSliderPosition();
//   } else if (currentIndex < 0) {
//     currentIndex = 2;
//     updateSliderPosition();
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentIndex <= slides.length - 1) {
//     currentIndex++;
//     updateSliderPosition();
//   } else if (currentIndex > slides.length - 1) {
//     currentIndex = 0;
//     updateSliderPosition();
//   }
// });

// setInterval(() => {
//   if (currentIndex <= slides.length - 1) {
//     currentIndex++;
//     updateSliderPosition();
//   } else if ((currentIndex = slides.length - 1)) {
//     currentIndex = 0;
//     updateSliderPosition();
//   }
// }, 3000);

//slider 2

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

// about animation
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
//

// Ensure the DOM is fully loaded before accessing the element
// let selectorValue;
// const selector = document.querySelector(".mySelector");
// selector.addEventListener("change", () => {
//   selectorValue = selector.value;
//   console.log(selectorValue);
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const selectElement = document.getElementById("your destination");

//   selectElement.addEventListener("change", () => {
//     const selectedValue = selectElement.value;
//     exportedValue = selectedValue;
//     // console.log(selectedValue);
//   });
// });
// console.log(exportedValue);
