import React from 'react';
import { Box, Text, Link, Icon, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <Box as="footer" py={4}>
            <Box maxW="container.lg" mx="auto" textAlign="center">
                <Text>&copy; 2022 Your Portfolio. All rights reserved.</Text>
                <Flex justifyContent="center" mt={2}>
                    <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" mx={2}>
                        <Icon as={FaGithub} boxSize={6} />
                    </Link>
                    <Link href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" mx={2}>
                        <Icon as={FaLinkedin} boxSize={6} />
                    </Link>
                    <Link href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" mx={2}>
                        <Icon as={FaTwitter} boxSize={6} />
                    </Link>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
