export default function Slider() {
  const slides = [
    "BlockChain",
    "Android",
    "iOS",
    "UX Design",
    "SAAS",
    "Web Design",
    "IoT",
  ];

  return (
    <div
      className="slider relative bg-white h-[150px] mx-auto overflow-hidden flex items-center justify-center"
      style={{ position: 'relative' }}
    >
      {/* Gradient Overlay - Left */}
      <div
        className="absolute top-0 left-0 h-[150px] w-[200px] z-10"
        style={{
          background: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>

      {/* Gradient Overlay - Right */}
      <div
        className="absolute top-0 right-0 h-[150px] w-[200px] z-10"
        style={{
          background: 'linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      ></div>

      {/* Slide Track */}
      <div
        className="slide-track flex items-center"
        style={{
          animation: 'scroll 10s linear infinite',
          display: 'flex',
          gap: '150px',
          width: 'calc((270px + 20px) * 14)',
        }}
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            className="slide h-[150px] w-[270px] flex items-center justify-center text-black font-normal text-6xl whitespace-nowrap"
            key={index}
          >
            <span>{slides[index % slides.length]}</span>
            <span className="text-black font-semibold text-8xl ml-16">&middot;</span>
          </div>
        ))}
      </div>

      {/* Keyframe animation for Tailwind */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc((-270px - 20px) * 7)); }
        }
      `}</style>
    </div>
  );
}
