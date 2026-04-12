import React from "react";

const Explanation = ({ aiResult }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-100">* AI Analysis</h2>
      <div>
        <p className="text-gray-300 text-sm leading-relaxed max-w-5xl">
          {aiResult.analysisText}
        </p>
      </div>
    </div>
  );
};

export default Explanation;
