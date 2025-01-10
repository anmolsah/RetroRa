import React, { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars =
      "HTMLCSSJAVASCRIPTREACTNODEJSAPIJSONXMLGITSQLPYTHONC++C#RUBYGOJAVAANGULARHTML5WEBPACKDEBUGBUILDTESTCODEVSCODELINUXHTTPHTTPSASCIIUNICODECONSOLECLIUXUIHTMLTAGSV8NPMYARNTCPIPWEBDEVFRONTENDBACKEND";
    const drops = []; 
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; 
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random colors
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

   
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default MatrixRain;
