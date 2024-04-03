import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const Nav: React.FC = () => {
    return (
        <nav style={{ padding: "5px" }}>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/">Home</ChakraLink>
            </Box>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/about">About</ChakraLink>
            </Box>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/contact">Contact</ChakraLink>
            </Box>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/cv">CV</ChakraLink>
            </Box>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/spa">SPA Example</ChakraLink>
            </Box>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/svelte">Svelte Example</ChakraLink>
            </Box>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/vue">Vue Example</ChakraLink>
            </Box>
            <Box>
                <ChakraLink as={ReactRouterLink} to="/htmlcss">HTML/CSS Example</ChakraLink>
            </Box>
        </nav>
    );
};

export default Nav;
