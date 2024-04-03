import React from "react";
import { Text, Stack, Divider, Center } from "@chakra-ui/react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import TimeSince from "./refreshDate";

const CV_2: React.FC = () => {
    return (
        <Stack paddingLeft={"5px"} spacing={2}>
            <Center position="relative" paddingTop={"20px"}>
                <Divider />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    Experiencia
                </Text>
                <Divider />
            </Center>
            <Text fontSize={"14px"}>
                <span style={{ fontWeight: "bold" }}>
                    Ministerio de Justicia, Argentina
                </span><br />
                Servicio Penitenciario Bonaerense
                <br />
                Dirección de Tecnología Informática
                <br />
                <strong>Puesto:</strong><br />Desarrollador especializado en Back-end
                <br />
                <TimeSince startDate={new Date(2023, 10, 27)} />
            </Text>
            <Center
                position="relative"
                paddingTop={"20px"}
                paddingLeft={"20px"}
            >
                <Divider />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    Proyectos
                </Text>
                <Divider />
            </Center>
            <Text fontSize={"14px"}>Proyecto1</Text>
            <Text fontSize={"14px"}>....</Text>
            <Text fontSize={"14px"}>Proyecto2</Text>
            <Text fontSize={"14px"}>....</Text>
            <Center
                position="relative"
                paddingTop={"20px"}
                paddingLeft={"20px"}
            >
                <Divider />
                <Text fontWeight={"bold"} fontSize={"16px"} align={"center"}>
                    Proyectos Personales
                </Text>
                <Divider />
            </Center>
            <List fontSize={"14px"}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.500" />
                    Proyecto1
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.500" />
                    Proyecto2
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color="green.500" />
                    Proyecto3
                </ListItem>
            </List>
        </Stack>
    );
};

export default CV_2;
