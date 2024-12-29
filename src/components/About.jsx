import React from "react";
import useSound from "use-sound";

const About = () => {
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.5 });
  return (
    <section>
      <div></div>
    </section>
  );
};

export default About;
