import React, { useEffect, useState } from "react";
import "../App.css";
import { Text, Box, Image, Center, color } from "@chakra-ui/react";
const url = "https://api.lanyard.rest/v1/users/242276511028084738";
let avatar =
    "https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096";
export const DiscordInfo: React.FC = () => {
    return (
        <div className="center-items main2">
            <Box
                marginTop={10}
                className=""
                borderRadius="md"
                padding={3}
                borderWidth="0px"
                backgroundColor="#36393e"
                display="flex"
            >
                <Image
                    src={avatar}
                    borderRadius="full"
                    boxSize="75px"
                    borderWidth="3px"
                    borderColor="Grey"
                ></Image>
                <Box
                    marginLeft={5}
                    fontSize={16}
                    fontWeight="500"
                    fontStyle="italic"
                >
                    <Text display="flex">
                        <Text>He/Him</Text>
                    </Text>
                    <Text>Tag: caldev</Text>
                    <Text>
                        Status: <GetColor />
                    </Text>
                </Box>
            </Box>
        </div>
    );
};

export const GetColor: React.FC = () => {
    const [status, setStatus] = useState<string | null>(null);

    useEffect(() => {
        const getDiscordInfomation = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                });
                const data = await response.json();
                const discordStatus = data.data.discord_status;
                setStatus(discordStatus);
            } catch (error) {
                console.error("Error fetching Discord information", error);
            }
        };

        getDiscordInfomation();
    }, []);
    return (
        <Text
            display="inline-block"
            color={status === "online" ? "#8EFF9B" : "#FF6565"}
        >
            {status}
        </Text>
    );
};
