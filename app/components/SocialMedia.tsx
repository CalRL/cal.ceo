import * as React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import ModeSwtich from "./ModeSwitch";

const SocialMedia: React.FC = () => {
  return (
    <div className="flex justify-between space-x-2">
      <a
        href="https://github.com/CalRL"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-gray-500 transition-colors duration-500"
      >
        <DiGithubBadge className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/callum-burns-o-regan-519451258/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-gray-500 transition-colors duration-500"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialMedia;
