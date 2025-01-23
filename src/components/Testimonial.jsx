import { useState } from "react";

function Testimonial() {
  return (
    <div className="py-12 px-4 space-y-12 sm:px-8 md:px-12">
      {/* 1st Testimonial */}
      <div
  className="mx-auto p-6 border-2 border-sky-300 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
  style={{
    height: "333.27px",
    width: "62%",
    backgroundColor: "transparent",
  }}
>
  <p className="text-xs sm:text-xl text-white mb-4 text-left lg:text-3xl py-8">
    "Our website woke up to a new dawn with AKC. Best software agency 2025? They deserve that crown."
  </p>
  {/* Image and Stars */}
  <div className="absolute bottom-8 flex items-center space-x-4">
    <img
      src="https://media.gettyimages.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA="
      alt="Jackie Dallas"
      className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
    />
    <div>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white text-left">
        Ace J.
      </p>
      <div className="flex space-x-1 text-xs sm:text-lg lg:text-2xl">
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
      </div>
    </div>
  </div>
</div>


      {/* 2nd Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-sky-300 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "333.27px",
          width: "62%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-xs sm:text-xs text-white mb-4 text-left lg:text-3xl py-7">
        "We needed to hire American web designers, and AKC delivered beyond expectations. Their process was seamless, and the results speak for themselves."        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-8 flex items-center space-x-2">
          <img
            src="https://media.gettyimages.com/id/1145046435/photo/portrait-of-a-happy-mature-black-man.jpg?s=612x612&w=0&k=20&c=YjV_4TQ3r0gqOBG3VOO8BU4sp6Gf11tjUB360QyZtzk="
            alt="Hamed Al Zadjal"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
           <div>
      <p className="text-md sm:text-lg lg:text-2xl font-semibold text-white text-left">
        Jacub M.
      </p>
      <div className="flex space-x-1 text-xs sm:text-lg lg:text-2xl">
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
      </div>
    </div>
        </div>
      </div>

      {/* 3rd Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-sky-300 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "333.27px",
          width: "62%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-xs sm:text-md lg:text-3xl text-white mb-4 text-left py-7">
        "AKC Link Tech Digitizing is the most affordable American web developer in the USA, and they left no place undone in transforming our outdated website into a modern masterpiece. I highly recommend them."
        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-8 flex items-center space-x-2 xs:py-6">
          <img
            src="https://media.gettyimages.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M="
            alt="Geoffrey Anderson"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
           <div>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white text-left">
        Lisa T.
      </p>
      <div className="flex space-x-1 text-xs sm:text-lg lg:text-2xl">
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
      </div>
    </div>
        </div>
      </div>

      {/* 4th Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-sky-300 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "333.27px",
          width: "62%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-xs sm:text-md lg:text-3xl text-white mb-4 text-left py-7">
        "Working with the USA’s best app developer was a game-changer for our finance startup. I’ve never seen this professionalism and quality anywhere else."
        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-8 flex items-center space-x-2">
          <img
            src="https://media.gettyimages.com/id/1437047112/photo/volunteer-friends-gardening-at-sunset-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=0Qp1W9TjUH_iVgGJOoyELBDIzmrwtIbe22x8xdBwV9M="
            alt="Cleitn Kimberly"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
               <div>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white text-left">
        Mickel A.
      </p>
      <div className="flex space-x-1 text-xs sm:text-lg lg:text-2xl">
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
      </div>
    </div>
        </div>
      </div>
        {/* 5th Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-sky-300 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "395.27px",
          width: "62%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-xs sm:text-md lg:text-3xl text-white mb-4 text-left py-7">
        "The team’s expertise in digital marketing made our brand a standout. There’s no doubt in calling them the top digital marketing company we need."
        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-8 flex items-center space-x-2">
          <img
            src="https://media.gettyimages.com/id/1304581885/photo/portrait-of-young-woman-smiling.jpg?s=612x612&w=0&k=20&c=szq9mHVYt-iWL6TebJ6BfxSX8e9WR1HqF-PbR5oma4Y="
            alt="Cleitn Kimberly"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
                   <div>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white text-left">
        Kelly R.
      </p>
      <div className="flex space-x-1 text-xs sm:text-lg lg:text-2xl">
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
        <span className="text-yellow-400">★</span>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
