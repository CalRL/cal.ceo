import * as React from "react";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 max-w-[40%]">
      <div className="">
        <p>
          Most of my projects are on{" "}
          <a
            href="https://github.com/CalRL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fa4de9] hover:underline dark:text-[#f895ea] transition-colors duration-500"
          >
            github
          </a>{" "}
          although most of it is privated.
        </p>
        <p className="mt-4 text-left">
          Some interesting projects that are public of note are:
        </p>
        <ul className="list-disc list-inside mt-4 text-left">
          <li>
            <a
              href="https://github.com/CalRL/ShiroJS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fa4de9] hover:underline dark:text-[#f895ea] transition-colors duration-500"
            >
              ShiroJS
            </a>
            : A discontinued discord bot made in JavaScript using discord.js.
          </li>
          <li>
            <a
              href="https://github.com/CalRL/JustAnotherChatRoom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fa4de9] hover:underline dark:text-[#f895ea] transition-colors duration-500"
            >
              JustAnotherChatRoom
            </a>
            : A simple socket/websocket chat room made in Java for a university
            project.
          </li>
          <li>
            <a
              href="https://github.com/CalRL/cal.ceo2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fa4de9] hover:underline dark:text-[#f895ea] transition-colors duration-500"
            >
              cal.ceo2
            </a>
            : Previous iteration of this website, using the lanyard API to
            display my discord status.
          </li>
          <li>
            <a
              href="https://github.com/CalRL/Hubbly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fa4de9] hover:underline dark:text-[#f895ea] transition-colors duration-500"
            >
              Hubbly
            </a>
            : [WIP] An All in One plugin for Minecraft servers, specifically
            lobbies.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
