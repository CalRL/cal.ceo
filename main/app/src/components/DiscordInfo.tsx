import React, { useEffect, useState } from "react";
import "../App.css";
import { Text, Box, Image, Center } from "@chakra-ui/react";
const url = "https://api.lanyard.rest/v1/users/242276511028084738";
let avatar =
    "https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096";
export const DiscordInfo: React.FC = () => {
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
                <Box marginLeft={5}>
                    <Text display="flex">
                        <Text marginRight={1}>Cal</Text>
                        <Text>He/Him</Text>
                    </Text>
                    <Text>Status: {status}</Text>
                </Box>
            </Box>
        </div>
    );
};
