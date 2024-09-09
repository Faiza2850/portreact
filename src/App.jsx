import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Title } from "./components/Title";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import bgim from "./assets/bgim.jpg";

function App() {
  return (
    <>
      {/* Background image should cover the entire viewport and be responsive */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgim})` }}
      >
        <Navbar />

        {/* Ensure each section has appropriate padding and is responsive */}
        <div className="px-4 md:px-8 lg:px-16">
          <Home />

          <div className="py-8">
            <Title subTitle="Behind The Code" title="ABOUT " />
            <About />
          </div>

          <div className="py-8">
            <Title subTitle="What I do" title="SKILLS " />
            <Skills />
          </div>

          <div className="py-8">
            <Title subTitle="My recent work" title="PROJECTS " />
            <Projects />
          </div>

          <div className="py-8">
            <Title subTitle="Get In Touch" title="CONTACT ME " />
            <Contact />
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
