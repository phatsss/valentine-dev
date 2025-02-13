import confetti from "canvas-confetti";

const ValentineConfettiButton = () => {
  // Valentine's Day Emojis
  const valentineEmojis = [
    "❤️",
    "💖",
    "💘",
    "💕",
    "🩵",
    "💛",
    "💜",
    "🌹",
    "😍",
    "🎈",
    "🌻",
  ];

  const fireConfetti = () => {
    const emoji =
      valentineEmojis[Math.floor(Math.random() * valentineEmojis.length)];

    // Create a canvas to draw emoji confetti
    const myConfetti = confetti.create(undefined, {
      resize: true,
      useWorker: true,
    });

    // Draw emoji on canvas
    myConfetti({
      particleCount: 50,
      spread: 160,
      startVelocity: 30,
      scalar: 2, // Makes the emoji bigger
      shapes: ["circle"], // Confetti must use supported shape
      zIndex: 1000, // Ensures confetti is on top
      origin: { x: Math.random(), y: Math.random() * 0.5 },
      colors: ["#FF6B81", "#FFB6C1", "#FF69B4"], // Soft Valentine colors
    });

    // Create simulated emoji particles
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        myConfetti({
          particleCount: 2,
          spread: 180,
          startVelocity: Math.random() * 30 + 20,
          scalar: 2,
          ticks: 200,
          origin: { x: Math.random(), y: Math.random() * 0.5 },
          shapes: ["circle"],
        });

        // Append emoji directly into DOM (hacky but effective)
        const emojiElement = document.createElement("div");

        emojiElement.textContent = emoji;
        emojiElement.style.position = "absolute";
        emojiElement.style.fontSize = "2rem";
        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.top = `${Math.random() * 50}vh`;
        emojiElement.style.opacity = "1";
        emojiElement.style.transition = "all 1.5s ease-out";

        document.body.appendChild(emojiElement);

        // Remove emoji after animation
        setTimeout(() => {
          emojiElement.style.opacity = "0";
          emojiElement.style.transform = "translateY(-200px)";
          setTimeout(() => emojiElement.remove(), 1500);
        }, 100);
      }, i * 100);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  text-white">
      <button
        className="relative overflow-hidden rounded-full p-[2.5px] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        onClick={fireConfetti}
      >
        {/* Spinning Border */}
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]" />

        {/* Inner Button */}
        <div className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 group-hover:bg-gray-800 transition-all px-5 py-2 text-lg font-semibold text-white backdrop-blur-3xl">
          🎉 Love 💖
        </div>
      </button>
    </div>
  );
};

export default ValentineConfettiButton;
