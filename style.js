window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => loader.remove(), 1000);
  });










  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => loader.style.display = "none", 500);
  });


  const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, canvas.width, canvas.height);