// Pulsating Effect for Threads (Optional)
document.querySelectorAll('.thread').forEach((thread, index) => {
  setInterval(() => {
    thread.style.transform = `scale(${1 + 0.05 * Math.sin(Date.now() / 500)})`;
  }, 100);
});
