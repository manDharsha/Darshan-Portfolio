
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6">
    
          <div className="text-center h-50 w-50 rounded-full object-fill bg-[url(../src/assets/hai.jpg)]"></div>
                
      
        <div className="text-center px-4 pt-3">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Darshan
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer dedicated to crafting reliable web applications. I enjoy turning complex ideas into smooth digital experiences with high-performance results.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
