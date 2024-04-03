import React from "react";
import { Text, Stack, Divider, Center } from "@chakra-ui/react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import TimeSince from "./refreshDate";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const CV_1: React.FC = () => {
    return (
        <Accordion allowMultiple>
            <Stack paddingLeft={"5px"} spacing={2}>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderBottom={"1px"} />
                    <Text fontWeight={"bold"}>
                        Datos
                    </Text>
                    <Divider borderBottom={"1px"} />
                </Center>
                <AccordionItem border={"none"}>
                    <AccordionButton paddingLeft={"0px"} paddingTop={"0px"} paddingBottom={"0px"}>
                        <Text flex={1} textAlign={"left"} fontSize={"14px"}>
                            <strong>Fecha de Nac.:</strong>‎ 25.12.1991<AccordionIcon />
                        </Text>
                    </AccordionButton>
                    <AccordionPanel paddingLeft={"0px"} paddingTop={"0px"} paddingBottom={"0px"}>
                        <Text fontSize={"14px"}><strong>Edad:</strong><TimeSince startDate={new Date(1991, 12, 25)} />
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                <Text fontSize={"14px"}>
                    <span style={{ fontWeight: "bold" }}>Nacionalidad:</span>{" "}
                    Argentina
                </Text>
                <Text fontSize={"14px"}>
                    <span style={{ fontWeight: "bold" }}>Cel.:</span> +54 9 221 690
                    8850
                </Text>
                <Text fontSize={"14px"}>
                    <span style={{ fontWeight: "bold" }}>E-mail:</span>{" "}
                    arnaboldi.juan@gmail.com
                </Text>
                <Text fontSize={"14px"}>
                    <span style={{ fontWeight: "bold" }}>Dirección:</span> B1906CHZ
                    <br />
                    Tolosa, La Plata, Buenos Aires
                </Text>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderBottom={"1px"} />
                    <Text fontWeight={"bold"} fontSize={"16px"}>
                        Formación
                    </Text>
                    <Divider borderBottom={"1px"} />
                </Center>
                <Text fontSize={"14px"}>
                    2021 - Actualidad <br />
                    UES21, sede La Plata <br />
                    Licenciatura en Informática (en curso)
                </Text>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderBottom={"1px"} />
                    <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                        Habilidades Técnicas Principales
                    </Text>
                    <Divider borderBottom={"1px"} />
                </Center>
                <List fontSize={"14px"}>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>JavaScript</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>Node.js</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>Express.js</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>PostgreSQL</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>MySQL</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>Git</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>Github</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>Docker</span>
                    </ListItem>
                </List>
                            <Center position="relative" paddingTop={"20px"}>
                    <Divider borderBottom={"1px"} />
                    <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                        Conocimientos Moderados
                    </Text>
                    <Divider borderBottom={"1px"} />
                </Center>
                <List fontSize={"14px"}>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>HTML+CSS</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>React</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>Python</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>PHP</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>Vue</span>
                    </ListItem>
                    <ListItem>
                        |<ListIcon as={ChevronRightIcon} />
                        <span style={{ fontStyle: "italic" }}>MongoDB</span>
                    </ListItem>
                </List>
            </Stack>
        </Accordion>
    );
};

export default CV_1;
