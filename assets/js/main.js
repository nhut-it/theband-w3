var slides = document.querySelectorAll(".slider");
var currentslider = 1;

setInterval(() => {
  var slideActives = document.querySelectorAll(".slider.active");

  slideActives.forEach((slideActive) => {
    slideActive.classList.remove("active");
  });
  slides[currentslider].classList.add("active");
  currentslider++;
  if (currentslider === slides.length) {
    currentslider = 0;
  }
}, 3000);

// Handel Modal Tickets

const btnTickets = document.querySelectorAll(".js-modal-buy");
const modal = document.querySelector(".js-modal");
const closeModal = document.querySelector(".js-modal-close");
btnTickets.forEach((ticket) => {
  ticket.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  e.target.classList.remove("active");
  // modal.classList.remove('active')
});

// collapse menu

const btnCollapse = document.querySelector(".js-collapse");
const collapseMenu = document.querySelector(".js-collapse-menu");
const menuItems = document.querySelectorAll(".js-collapse-menu  li  a");
btnCollapse.addEventListener("click", () => {
  collapseMenu.classList.toggle("show");
});

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.lastElementChild) {
      console.log(item);
        e.preventDefault()
      
    } else {
      collapseMenu.classList.remove("show");
    }
  });
});
