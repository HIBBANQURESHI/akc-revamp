import Hero from "@/components/Hero";
import Navbar from "../components/DesktopMenu";
import Journey from "@/components/Journey";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div>
        <Journey/>
      </div>
    </div>
  );
}