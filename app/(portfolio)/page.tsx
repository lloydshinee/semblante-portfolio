import { Hero } from "./(sections)/Hero";
import { Skills } from "./(sections)/Skills";
import { Services } from "./(sections)/Services";
import { FeaturedProjects } from "./(sections)/FeaturedProjects";

export default function PortfolioPage() {
  return (
    <div>
      <Hero />
      <Skills />
      <Services />
      <FeaturedProjects />
    </div>
  );
}
