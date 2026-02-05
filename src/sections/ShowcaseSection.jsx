import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const [visibleChunks, setVisibleChunks] = useState(1);

  useGSAP(() => {
    // Animate the section opacity
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animate each project card
    const projectCards = gsap.utils.toArray(".project-card-anim");
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * (index % 3), // Stagger based on position in chunk
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
          },
        },
      );
    });
  }, [visibleChunks]); // Re-run animation when visible chunks change

  // Helper to chunk the projects array into groups of 3
  const chunkProjects = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  };

  const projectChunks = chunkProjects(projects, 3);
  const totalChunks = projectChunks.length;

  const handleToggle = () => {
    if (visibleChunks < totalChunks) {
      setVisibleChunks(totalChunks);
    } else {
      setVisibleChunks(1);
      // Scroll back to the top of the section when showing less
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section ref={sectionRef} id="work" className="app-showcase relative transition-all duration-500">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col gap-20 relative">
          {projectChunks.slice(0, visibleChunks).map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="showcaselayout w-full">
              {/* LEFT - First project in current chunk */}
              {chunk[0] && (
                <div className="first-project-wrapper project-card-anim pointer-events-auto">
                  <div className="image-wrapper group overflow-hidden bg-[#1C1C21]">
                    <img
                      src={chunk[0].img}
                      alt={chunk[0].title}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-content">
                    <h2>{chunk[0].title}</h2>
                    <p className="text-white-50 md:text-xl">{chunk[0].subdesc}</p>
                  </div>
                </div>
              )}

              {/* RIGHT - Projects 2 and 3 in current chunk */}
              <div className="project-list-wrapper overflow-hidden w-full">
                {chunk.slice(1).map((project) => (
                  <div key={project.id} className="project project-card-anim pointer-events-auto">
                    <div
                      className="image-wrapper group overflow-hidden"
                      style={{ backgroundColor: project.bg || "#1C1C21" }}
                    >
                      <img
                        src={project.img}
                        alt={project.title}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h2>{project.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Gradient Overlay for Fade Effect */}
          {visibleChunks < totalChunks && (
            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
          )}
        </div>

        {totalChunks > 1 && (
          <div className="flex justify-center w-full relative z-20 transition-all duration-500 mt-10">
            <button
              onClick={handleToggle}
              className="group flex gap-3 items-center justify-center 
                backdrop-blur-md bg-white/5 border border-white/10 shadow-lg 
                px-8 py-4 rounded-full transition-all duration-300 
                hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:scale-105"
            >
              <span className="text-white font-medium uppercase tracking-widest text-sm group-hover:text-white transition-colors duration-300">
                {visibleChunks < totalChunks ? "Show More" : "Show Less"}
              </span>
              <img
                src="/images/arrow-down.svg"
                alt="arrow"
                className={`w-4 h-4 invert opacity-80 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-300 ${
                  visibleChunks === totalChunks ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;
