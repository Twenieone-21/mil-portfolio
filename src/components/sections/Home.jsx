import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from 'react';

export const Home = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [...Array(100)].map((_, i) => ({
        id: `star-${i}-${Date.now()}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.3,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 w-full h-full bg-black z-0">
        <div className="absolute inset-0 opacity-60">
          {[...Array(80)].map((_, i) => (
            <div
              key={`static-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-pulse transition-opacity duration-1000"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" 
             style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" 
             style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" 
             style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-88 h-88 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" 
             style={{animationDelay: '4s'}}></div>
      </div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7x1 font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
              Hi, I'm Camille
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              As a first-year student, my goal is to provide 
              excellent work and learn how to become a front-end
              developer someday.
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
        </RevealOnScroll>
      </section>
    </div>
  );
};