import React from "react";
import { Flex, useColorMode, Avatar, Box, Image } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@chakra-ui/react";
import SelfWritingText from "./selfWritingText";

const Title: React.FC = () => {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const phrases1 = [
        "       Juan Ignacio Arnaboldi",
        ];
    const phrases2 = [
        "                             Desarrollador Full Stack"];
    return (
        <>
            <Flex
                align="center"
                color={colorMode === "dark" ? "white" : "white"}
            >
                <Avatar
                    name="Juan Arnaboldi"
                    src="/src/assets/profile2.jpeg"
                    size={"md"}
                    onClick={onOpen}
                    _hover={{ cursor: "pointer" }}
                    filter={"grayscale(100%)"}
                />
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay bg="transparent" />
                    <ModalContent bg="transparent" shadow="none">
                        <ModalBody>
                            <Image
                                src="/src/assets/profile2.jpeg"
                                display={"block"}
                                m={"auto"}
                                alt="Juan Arnaboldi"
                                borderRadius={"full"}
                                filter={"grayscale(100%)"}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Box
                    ml={4}
                    fontSize={{ base: "xl", md: "md", lg: "2xl" }}
                    fontWeight="bold"
                    fontFamily={"monospace"}
                >
                    <SelfWritingText
                        phrases={phrases1}
                        erase={false}
                        cursor={false}
                    />
                </Box>
                <Box
                    ml={4}
                    mt={{ base: 4, md: 4, lg: 4, xl: 4 }}
                    fontSize={{ base: "md", md: "md", lg: "md", xl: "xl" }}
                    fontFamily={"monospace"}
                >
                    <SelfWritingText
                        phrases={phrases2}
                        erase={false}
                        cursor={false}
                    />
                </Box>
            </Flex>
        </>
    );
};

export default Title;
