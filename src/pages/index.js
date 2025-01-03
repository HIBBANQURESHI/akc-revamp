import Hero from "@/components/Hero";
import Navbar from "../components/DesktopMenu";
import Journey from "@/components/Journey";
import Slider from "@/components/Slider";
import Development from "@/components/Development";
import VerticalTab from "@/components/VerticalTab";
import Testimonial from "@/components/Testimonial";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div>
        <Journey/>
      </div>
      <Slider/>
      <div className="py-9">
        <Development/>
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-left mt-9 text-black max-w-7xl mx-auto px-6 ">Technologies we used</h1>
        <p className="text-2xl lg:text-2xl sm:text-xl md:text-2xl text-left font-extralight mt-12 max-w-3xl max-w-7xl mx-auto px-6">Hire from our pool of 350+ specialized experts in web, mobile, and software<br/> engineering, specializing in the latest technologies and frameworks, ready to<br/> scale your development teams effortlessly.</p>
        <div className="py-32 mx-auto px-6">
        <VerticalTab/>
        </div>
        <div
          className="py-36 mt-72 text-center relative"
          style={{
            backgroundImage: "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
            backgroundColor: "#3b82f6", 
            backgroundSize: "100% 100%",
          }}
        >
          <h2 className="mt-0 text-6xl font-semibold">Our clients simply love <span className="text-yellow-500">what we do.</span></h2>
          <p className="text-black text-2xl py-8"> Proud to serve as the innovation partner for industry leaders who have experienced our <br/> expertise and excellence firsthand. </p>
          <Testimonial />
        </div>
        sadisajdi
        </div>
    </div>
  );
}