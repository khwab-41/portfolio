import Image from "next/image";
import Header from "./Components/Header";
import { SocialIcon } from "react-social-icons";
import MainBody from "./Components/MainBody";
import About from "./Components/About";

export default function Home() {
  return (
    <div className="bg-back_potfolio h-screen text-gray space-y-8 z-0 snap-y overflow-scroll">
        <Header />
      <section className="snap-start">
        <MainBody />
      </section>
      <section className="snap-center">
        <About />
      </section>

      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}
