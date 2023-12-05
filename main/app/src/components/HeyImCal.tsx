import * as React from "react";
import "../App.css";
import {
    Text,
    HStack,
    Badge,
    Box,
    Flex,
    Image,
    IconButton,
} from "@chakra-ui/react";
import githubLogo from "../images/github.png";

interface HeyImCalProps {
    name: string;
}
/**
  * This function creates the invisible box element that contains the "Hey, I'm Cal" text,
  * the two badges underneath, and the icons under the badges.
  @param { name } /The name of the user (in this case, cal.)
  */
export const HeyImCal: React.FC<HeyImCalProps> = ({ name }) => {
    return (
        <div>
            <Box
                className="box"
                borderRadius="md"
                borderWidth="0px"
                backgroundColor="transparent"
            >
                <Text align="left" fontSize="50" fontWeight="bold">
                    <h1 className="firstHeader">
                        Hi! I'm <span id="name">{name}</span>.
                    </h1>
                </Text>
                <HStack>
                    <Flex align="baseline" mt={2}>
                        <Badge
                            className="calBadge"
                            fontSize={15}
                            colorScheme="teal"
                        >
                            Developer
                        </Badge>
                        <Badge
                            className="calBadge"
                            fontSize={15}
                            colorScheme="green"
                        >
                            Student @ YSJ
                        </Badge>
                    </Flex>
                </HStack>
                <a
                    href="https://github.com/calrl"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IconButton
                        className="socialBadges"
                        aria-label="Search database"
                        backgroundColor={"transparent"}
                        _hover={{ backgroundColor: "transparent" }}
                        icon={<Image src={githubLogo} height={8} width={8} />}
                    ></IconButton>
                </a>
            </Box>
        </div>
    );
};
