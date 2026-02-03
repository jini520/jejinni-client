import LiquidGlass from "@/app/_components/LiquidGlass/LiquidGlass";
import classNames from "classnames";
import React from "react";

const ProjectCardSkeleton = () => {
  return (
    <LiquidGlass className={classNames("project__card animate-pulse")}>
      <div className="project__card-inner">
        <div className="w-8 h-8 bg-gray-200 rounded-sm"></div>
        <div>
          <h4 className="project__card-title w-48 h-7 bg-gray-200 rounded-sm"></h4>
          <div className="project__card-description w-full \">
            <p className="w-full h-4 bg-gray-200 rounded-sm"></p>
            <p className="w-full h-4 mt-1 bg-gray-200 rounded-sm"></p>
            <p className="w-[50%] h-4 mt-1 bg-gray-200 rounded-sm"></p>
          </div>
        </div>
        <div className="project__card-skills">
          {[1, 2, 3].map((skill) => (
            <div key={skill} className="w-6 h-6 bg-gray-200 rounded-sm"></div>
          ))}
        </div>
      </div>
    </LiquidGlass>
  );
};

export default ProjectCardSkeleton;
