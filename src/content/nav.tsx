import React from 'react';
import { Box } from '@chakra-ui/react';

const Nav: React.FC = () => {
    return (
        <nav>
            <Box>
                <a href="#home">Home</a>
            </Box>
            <Box>
                <a href="/about">About</a>
            </Box>
            <Box>
                <a href="#projects">Projects</a>
            </Box>
            <Box>
                <a href="#contact">Contact</a>
            </Box>
            <Box>
                <a href="/spa">SPA Example</a>
            </Box>
            <Box>
                <a href="/svelte">Svelte Example</a>
            </Box>
            <Box>
                <a href="/vue">Vue Example</a>
            </Box>
            <Box>
                <a href="/htmlcss">HTML&CSS Example</a>
            </Box>
        </nav>
    );
};

export default Nav;
