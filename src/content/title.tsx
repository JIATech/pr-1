import React from "react";
import { Flex, useColorMode, Avatar, Text, Image } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@chakra-ui/react";

const Title: React.FC = () => {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex
                align="center"
                color={colorMode === "dark" ? "white" : "white"}
            >
                {" "}
                <Avatar
                    name="Juan Arnaboldi"
                    src="/src/assets/profile.jpeg"
                    size={"md"}
                    onClick={onOpen}
                    _hover={{ cursor: "pointer" }}
                />
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay bg="transparent" />
                    <ModalContent bg="transparent" shadow="none">
                        <ModalBody>
                            <Image
                                src="/src/assets/profile.jpeg"
                                display={"block"}
                                m={"auto"}
                                alt="Juan Arnaboldi"
                                borderRadius={"full"}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Text ml={3}>Juan Ignacio Arnaboldi</Text>{" "}
            </Flex>
        </>
    );
};

export default Title;
