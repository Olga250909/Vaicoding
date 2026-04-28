const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));

const typedTarget = document.getElementById("hero-typed");

if (typedTarget) {
  const phrases = [
    "Лендинги, интерфейсы, digital-проекты",
    "AI + web опыт с сильной подачей",
    "Быстро, визуально, осмысленно"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typingSpeed = 60;
  const deletingSpeed = 35;
  const pauseDuration = 1800;

  const typeLoop = () => {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      typedTarget.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex += 1;

      if (charIndex === currentPhrase.length) {
        deleting = true;
        setTimeout(typeLoop, pauseDuration);
        return;
      }
      setTimeout(typeLoop, typingSpeed);
    } else {
      typedTarget.textContent = currentPhrase.slice(0, charIndex - 1);
      charIndex -= 1;

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      setTimeout(typeLoop, deletingSpeed);
    }
  };

  setTimeout(typeLoop, 400);
}
