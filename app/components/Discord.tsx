import * as React from "react";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypeGen from "./TypeGen";

const url = "https://api.lanyard.rest/v1/users/242276511028084738";

const GetStatus: React.FC = () => {
  const [status, setStatus] = React.useState<string | undefined>();

  useEffect(() => {
    const getDiscordInformation = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const discordStatus = data.data.discord_status;
        setStatus(discordStatus);
      } catch (error) {
        console.error("Error fetching Discord information", error);
      }
    };

    getDiscordInformation();
  }, []);

  // Format status string to have the first letter capitalized
  const statusString = status
    ? status.charAt(0).toUpperCase() + status.slice(1)
    : "";

  return (
    <span
      className={`inline-block ${
        status === "online" ? "text-green-500" : "text-red-500"
      }`}
    >
      {statusString}
    </span>
  );
};

// Circle component displaying colored circle based on the status
export const StatusCircle: React.FC = () => {
  const [status, setStatus] = React.useState<string | undefined>();

  useEffect(() => {
    const getDiscordInformation = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const discordStatus = data.data.discord_status;
        setStatus(discordStatus);
      } catch (error) {
        console.error("Error fetching Discord information", error);
      }
    };

    getDiscordInformation();
  }, []);

  return (
    <span
      className={`inline-block w-4 h-4 rounded-full ${
        status === "online" ? "bg-green-500" : "bg-red-500"
      }`}
    ></span>
  );
};

const DiscordComponent: React.FC = () => {
  return (
    <div className="flex space-x-2 w-full">
      <div className="">
        <div className=" flex items-center justify-center">
          I am currently
          <div className="pl-1">
            <GetStatus />
          </div>
          !
        </div>
      </div>
    </div>
  );
};

export default DiscordComponent;
