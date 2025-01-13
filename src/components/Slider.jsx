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
        className="slider relative bg-white  h-[150px] mx-auto overflow-hidden  flex items-center justify-center"
        style={{ position: 'relative' }}
      >
        {/* Gradient Overlay - Left */}
        <div
          className="absolute top-0 left-0 h-[100px] w-[200px] z-10"
          style={{
            background: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></div>
  
        {/* Gradient Overlay - Right */}
        <div
          className="absolute top-0 right-0 h-[100px] w-[200px] z-10"
          style={{
            background: 'linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></div>
  
        {/* Slide Track */}
        <div
          className="slide-track flex"
          style={{
            animation: 'scroll 10s linear infinite',
            display: 'flex',
            width: 'calc(250px * 14)',
          }}
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <div
              className="slide h-[100px] w-[250px] flex items-center justify-center text-black font-semibold text-4xl"
              key={index}
            >
              {slides[index % slides.length]}
            </div>
          ))}
        </div>
  
        {/* Keyframe animation for Tailwind */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * 7)); }
          }
        `}</style>
      </div>
    );
  }
  