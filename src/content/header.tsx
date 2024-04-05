import React from 'react';
import { Box, useColorMode, Image } from '@chakra-ui/react';
import SelfWritingText from './selfWritingText';
import Login from "./login.tsx";
import ToggleDarkMode from '../Toggle.tsx';


const Header: React.FC = () => {
    const { colorMode } = useColorMode();
    const phrases1 = [
        "No programes para solucionar problemas, programa para crear soluciones."
    ];
    return (
        <>
            <Box
                as="header"
                p={4}
                color={colorMode === "dark" ? "white" : "white"}
                textAlign={{ base: "left", lg: "left" }}
                fontFamily={"monospace"}
                h="100%"
                w={{ base: "45%", lg: "100%" }}
                fontSize={{ base: "1rem", lg: "1.5rem" }}
                paddingTop={{ base: "25px", lg: "50px" }}
            >
                <Image
                    src="/src/assets/logo_lg_looka.com.png"
                    alt="logo"
                    borderRadius="full"
                    position="absolute"
                    top={{ base: "-5", lg: "5" }}
                    right={{ base: "0", lg: "10" }}
                    filter={colorMode === "dark" ? "invert(1)" : "invert(1)"}
                    transform={{ base: "scale(0.5)", lg: "scale(1)" }}
                    userSelect={"none"}
                />
                <SelfWritingText
                    phrases={phrases1}
                    erase={true}
                    cursor={true}
                />
            </Box>
            <ToggleDarkMode />
            <Login />
        </>
    );
};

export default Header;