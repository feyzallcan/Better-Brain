document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "72px";
      nav.style.right = "1rem";
      nav.style.background = "rgba(7,19,31,0.9)";
      nav.style.padding = "1rem";
      nav.style.borderRadius = "12px";
      nav.style.border = "1px solid rgba(255,255,255,0.04)";
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("mousemove", (ev) => {
      const blobs = document.querySelectorAll(".blob");
      blobs.forEach((b, i) => {
        const speed = (i + 1) * 0.02;
        const x = (ev.clientX - window.innerWidth / 2) * speed;
        const y = (ev.clientY - window.innerHeight / 2) * speed;
        b.style.transform = `translate(${x}px, ${y}px) rotate(${i ? -6 : 6}deg)`;
      });
    });
  }

  const form = document.querySelector(".signup");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const input = form.querySelector("input[type=email]");
      if (!input || !input.value) return;
      const button = form.querySelector(".button");
      const original = button.textContent;
      button.textContent = "Thanks — we got you!";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        input.value = "";
      }, 1800);
    });
  }
});
