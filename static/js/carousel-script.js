document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("work-carousel");
  if (!carousel) return;

  // --- ДАННЫЕ ДЛЯ КАРУСЕЛИ ---
  const images = [
    "new1.webp",
    "new2.webp",
    "new3.webp",
    "new4.webp",
    "new5.webp",
    "new6.webp",
    "new7.webp",
    "new8.webp",
  ];
  const imagePath = "https://static.igem.wiki/teams/5861/membersatwork/";

  // --- ИНИЦИАЛИЗАЦИЯ ---
  const slidesContainer = carousel.querySelector(".carousel-slides");
  const dotsContainer = carousel.querySelector(".carousel-dots");
  const prevButton = carousel.querySelector(".carousel-button.prev");
  const nextButton = carousel.querySelector(".carousel-button.next");

  let currentIndex = 0;
  let autoScrollInterval; // Переменная для хранения ID таймера

  // Создаем слайды и точки
  images.forEach((fileName, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `<img src="${imagePath}${fileName}" alt="Team at work ${
      index + 1
    }">`;
    slidesContainer.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoScroll(); // Сбрасываем таймер при нажатии на точку
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".carousel-dot");

  // --- ФУНКЦИОНАЛ ---
  function goToSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function showNextSlide() {
    goToSlide((currentIndex + 1) % images.length);
  }

  function showPrevSlide() {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  }

  // Новая функция для сброса и перезапуска таймера
  function resetAutoScroll() {
    clearInterval(autoScrollInterval); // Очищаем старый таймер
    autoScrollInterval = setInterval(showNextSlide, 5000); // Запускаем новый
  }

  // --- СОБЫТИЯ ---
  nextButton.addEventListener("click", () => {
    showNextSlide();
    resetAutoScroll(); // Сбрасываем таймер при нажатии "вперед"
  });

  prevButton.addEventListener("click", () => {
    showPrevSlide();
    resetAutoScroll(); // Сбрасываем таймер при нажатии "назад"
  });

  // --- ЗАПУСК ---
  if (images.length > 0) {
    goToSlide(0);
    resetAutoScroll(); // Запускаем автопрокрутку в первый раз
  }
});
