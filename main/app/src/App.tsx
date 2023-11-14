import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text, HStack, Badge, Box, Flex, Image, IconButton } from "@chakra-ui/react";
import githubLogo from './images/github.png';


type IconProps = {
  name:any;
  size?: number;
  color?: string;
}



var name = "Cal";
function App() {
  return (
    <div className="App">
      <div>
        <Box
          className="box"
          borderRadius="md"
          borderWidth="0px"
          backgroundColor = "transparent"
        >
          <Text
            align="left"
            fontSize="50"
            fontWeight="bold"
          >
            <h1 className="firstHeader">Hi! I'm <span id="name">{name}</span>.</h1>
          </Text>
          <HStack>
            <Flex
              align="baseline"
              mt={2}
            ><Badge
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
          <IconButton 
            aria-label='Search database'
            backgroundColor={"transparent"}
            _hover={{ backgroundColor: 'transparent' }}
            icon={<Image src={githubLogo} height={8} width={8}/>}
          >
</IconButton>
        
        </Box>

      </div>
      
      <header className="App-header">
          
      </header>
    </div>
  );
}

export default App;
