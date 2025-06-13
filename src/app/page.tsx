import HomePage from "./screens/HomePage";
import Contact from "./screens/Contact";
import About from "./screens/About";
import ProjectsPage from "./screens/ProjectsPage";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomePage/>
      <About />
      <ProjectsPage />
      <Contact />
    </div>
  );
}
