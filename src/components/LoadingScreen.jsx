import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1200); // smooth delay
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-white font-mono select-none">
      <div className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide">
        {text}
        <span className="animate-blink text-blue-400 ml-1">|</span>
      </div>

      <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
        <div className="h-full w-2/5 bg-blue-500 animate-loading-bar rounded-full shadow-[0_0_12px_#3b82f6]"></div>
      </div>
    </div>
  );
};
