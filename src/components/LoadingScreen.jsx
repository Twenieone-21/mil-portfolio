import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Hello Everyone 👋";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">   
      <div className="mb-8 text-5xl font-mono font-bold">
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          {text.replace(' 👋', '')}
        </span>
        {text.includes('👋') && <span className="ml-2">👋</span>}
        <span className="animate-pulse ml-2 text-purple-400">|</span>
      </div>
      <div className="w-80 h-1 bg-gray-800 rounded-full relative overflow-hidden">
        <div className="w-2/5 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
      </div>
      <div className="mt-6 flex space-x-2">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
      </div>
    </div>
  );
};