import React from "react";
import { Text, Stack, Divider, Center, Box } from "@chakra-ui/react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import TimeSince from "./refreshDate";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorMode,
} from '@chakra-ui/react'

const CV_1: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Accordion allowMultiple>
            <Stack paddingLeft={"5px"} spacing={1} color={colorMode === "dark" ? "white" : "white"}>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderWidth="1px" my="4" />
                    <Text fontWeight={"bold"}>Datos</Text>
                    <Divider borderWidth="1px" my="4" />
                </Center>
                <AccordionItem border={"none"}>
                    <AccordionButton
                        paddingLeft={"0px"}
                        paddingTop={"0px"}
                        paddingBottom={"0px"}
                    >
                        <Text flex={1} textAlign={"left"} fontSize={"14px"}>
                             <Box as="span" fontWeight="bold">Fecha de Nac.:</Box>‎ 25.12.1991
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel
                        paddingLeft={"0px"}
                        paddingTop={"0px"}
                        paddingBottom={"0px"}
                    >
                        <Text fontSize={"14px"}>
                             <Box as="span" fontWeight="bold">Edad:</Box>
                        </Text>
                        <Text fontSize={"14px"}>
                            <TimeSince startDate={new Date(1991, 12, 25)} />
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">Nacionalidad:</Box>{" "}
                    Argentina
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">Cel.:</Box> +54 9 221
                    690 8850
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">E-mail:</Box>{" "}
                    arnaboldi.juan@gmail.com
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">Dirección:</Box>{" "}
                    B1906CHZ
                    <br />
                    La Plata, Buenos Aires
                </Text>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderWidth="1px" my="4" />
                    <Text fontWeight={"bold"} fontSize={"16px"}>
                        Formación
                    </Text>
                    <Divider borderWidth="1px" my="4" />
                </Center>
                <Text fontSize={"14px"}>
                    2021 - Actualidad <br />
                    UES21, sede La Plata <br />
                    Licenciatura en Informática (en curso)
                </Text>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderWidth="1px" my="4" />
                    <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                        Habilidades Técnicas Principales
                    </Text>
                    <Divider borderWidth="1px" my="4" />
                </Center>
                <List fontSize={"14px"}>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">JavaScript</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">Node.js</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">Express.js</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">PostgreSQL</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">MySQL</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">Git</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">Github</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">Docker</Box>
                    </ListItem>
                </List>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderWidth="1px" my="4" />
                    <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                        Conocimientos Moderados
                    </Text>
                    <Divider borderWidth="1px" my="4" />
                </Center>
                <List fontSize={"14px"}>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">HTML+CSS</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">React</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">Python</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">PHP</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">Vue</Box>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <Box as="span" fontStyle="italic">MongoDB</Box>
                    </ListItem>
                </List>
            </Stack>
        </Accordion>
    );
};

export default CV_1;
