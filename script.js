// script.js

document.addEventListener("DOMContentLoaded", () => {
  initBubbles();
  
  if (window.matchMedia("(hover: hover)").matches) {
    initCursor();
  }
});

function initBubbles() {
  // Target the specific background container, not the body
  // This ensures bubbles stay in the fixed layer
  const container = document.getElementById("bubble-container") || document.body;
  
  const bubbleCount = 40; 

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 8 + 2 + "vw"; 
    const left = Math.random() * 100 + "vw";
    const duration = Math.random() * 10 + 10 + "s"; // 10s to 20s
    
    // POSITIVE delay: ensures bubbles wait off-screen before starting
    const delay = Math.random() * 15 + "s";
    
    bubble.style.setProperty("--bubble-size", size);
    bubble.style.setProperty("--bubble-left", left);
    bubble.style.setProperty("--float-duration", duration);
    bubble.style.setProperty("--float-delay", delay);

    container.appendChild(bubble);
  }
}

function initCursor() {
  document.addEventListener("mousemove", (evt) => {
    const { clientX: x, clientY: y } = evt;

    // Move Gold Dot immediately
    gsap.set(".cursor-dot", { 
      x: x, 
      y: y,
      xPercent: -50,
      yPercent: -50
    });

    // Move Trailing Shapes
    gsap.to(".cursor-shape", {
      duration: 0.5,
      x: x,
      y: y,
      xPercent: -50,
      yPercent: -50,
      stagger: 0.08,
      ease: "power2.out",
      overwrite: "auto"
    });
  });
}