import React from "react";
import { Text, Stack, Divider, Center, Box, useColorMode } from "@chakra-ui/react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import TimeSince from "./refreshDate";

const CV_2: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Stack
            paddingLeft={"5px"}
            spacing={1}
            color={colorMode === "dark" ? "white" : "white"}
        >
            <Center position="relative" paddingTop={"20px"}>
                <Divider borderWidth="1px" my="4" />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    Experiencia
                </Text>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <Text fontSize={"14px"} paddingBottom={"0px"} marginBottom={"0px"}>
                <Box as="span" fontWeight="bold">
                    Ministerio de Justicia, Arg.
                </Box>
                <br />
                S.P.B., D.T.I.
                <br />
                <Box as="span" fontWeight="bold">
                    Puesto:
                </Box>
                <br />
                Desarrollador especializado en Backend
                <br />
                <Box as="span" fontWeight="bold">
                    Tiempo en el puesto:
                </Box>
            </Text>
            <Text fontSize={"14px"} paddingTop={"0px"} marginTop={"0px"}>
                <TimeSince startDate={new Date(2023, 10, 27)} />
            </Text>
            <Center position="relative" paddingTop={"20px"} paddingLeft={"0px"}>
                <Divider borderWidth="1px" my="4" />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    Proyectos
                </Text>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <Text fontSize={"14px"}>Proyecto1</Text>
            <Text fontSize={"14px"}>....</Text>
            <Text fontSize={"14px"}>Proyecto2</Text>
            <Text fontSize={"14px"}>....</Text>
            <Center position="relative" paddingTop={"20px"} paddingLeft={"0px"}>
                <Divider borderWidth="1px" my="4" />
                <Text fontWeight={"bold"} fontSize={"16px"} align={"center"}>
                    Proyectos Personales
                </Text>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <List fontSize={"14px"}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    Proyecto1
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    Proyecto2
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    Proyecto3
                </ListItem>
            </List>
        </Stack>
    );
};

export default CV_2;
