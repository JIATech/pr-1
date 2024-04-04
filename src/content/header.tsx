import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const { colorMode } = useColorMode();
    return (
        <Box
            as="header"
            p={4}
            color={colorMode === "dark" ? "white" : "white"}
            textAlign={{ base: "left", lg: "center" }}
            userSelect={"none"}
        >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </Box>
    );
};

Header.defaultProps = {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
};

export default Header;