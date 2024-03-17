import React from "react";
import { useIntersectionObserver } from "usehooks-ts";

const AllToolsSection: React.FC = ({}) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <div className="bg-gray-900">
      <h1 className="text-center text-blue-500 text-4xl font-bold py-3">
        All Tools: ({isIntersecting ? "Intersecting" : null})
      </h1>

      <div ref={ref} className=""></div>
    </div>
  );
};

export default AllToolsSection;
