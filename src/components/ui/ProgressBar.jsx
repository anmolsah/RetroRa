import React from "react";

const ProgressBar = ({ value, label = "PROFICIENCY_LEVEL" }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-center text-sm font-ibm">
        <span className="text-neon-pink">{label}</span>
        <span className="text-neon-cyan">{value}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
