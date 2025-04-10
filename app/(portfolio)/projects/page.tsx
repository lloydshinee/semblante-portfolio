import { projects } from "@/lib/projects";
import { Project } from "./Project";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {projects.map((project, index) => (
        <Project project={project} key={index} /> // Adjust the width as needed
      ))}
    </div>
  );
}
