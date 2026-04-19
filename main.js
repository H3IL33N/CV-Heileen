// Audio
const playBtn = document.getElementById('playAudio');
const audio = document.getElementById('audio');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏹️ Detener';
    playBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
  } else {
    audio.pause();
    playBtn.textContent = '🎵 Presentación';
    playBtn.style.background = 'transparent';
  }
});

// Skill bars
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.querySelector('.skill-progress');
      const width = progress.dataset.width;
      progress.style.width = width;
    }
  });
});

document.querySelectorAll('.skill-card').forEach(card => {
  observer.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
