let currentSlides = [0, 0, 0]; // For 3 projects

function openModal(projectNumber) {
  document.getElementById(`modal${projectNumber}`).style.display = "flex";
  showSlide(currentSlides[projectNumber - 1], projectNumber);
}

function closeModal(projectNumber) {
  document.getElementById(`modal${projectNumber}`).style.display = "none";
}

function changeSlide(n, projectNumber) {
  currentSlides[projectNumber - 1] += n;
  const images = document.querySelectorAll(`#modal${projectNumber} .carousel-image`);
  if (currentSlides[projectNumber - 1] < 0) currentSlides[projectNumber - 1] = images.length - 1;
  if (currentSlides[projectNumber - 1] >= images.length) currentSlides[projectNumber - 1] = 0;
  showSlide(currentSlides[projectNumber - 1], projectNumber);
}

function setSlide(n, projectNumber) {
  currentSlides[projectNumber - 1] = n;
  showSlide(n, projectNumber);
}

function showSlide(n, projectNumber) {
  const images = document.querySelectorAll(`#modal${projectNumber} .carousel-image`);
  const dots = document.querySelectorAll(`#modal${projectNumber} .dot`);

  images.forEach((img, i) => {
    img.classList.toggle("active", i === n);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === n);
  });
}
