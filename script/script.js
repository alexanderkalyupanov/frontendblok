function openModal() {
  document.getElementById("overlay").style.top = "0px";
}

function closeModal() {
  document.getElementById("overlay").style.top = "-100vh";
}

let swiper = new Swiper(".newSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
