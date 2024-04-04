import React from "react";
import { Text, Stack, Divider, Center, useColorMode } from "@chakra-ui/react";

const CV_3: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Stack
            paddingLeft={"5px"}
            spacing={2}
            color={colorMode === "dark" ? "white" : "white"}
        >
            <Center position="relative" paddingTop={"20px"}>
                <Divider borderWidth="1px" my="4" />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    biribiri
                </Text>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <Text fontSize={"14px"}>
                <span style={{ fontWeight: "bold" }}>biri biri:</span> biri biri
            </Text>
            <Text fontSize={"14px"}>
                <span style={{ fontWeight: "bold" }}>biri biri:</span> biri biri
            </Text>
            <Text fontSize={"14px"}>
                <span style={{ fontWeight: "bold" }}>biribiri.:</span> biri biri
            </Text>
            <Text fontSize={"14px"}>
                <span style={{ fontWeight: "bold" }}>biri biri:</span> biri biri
            </Text>
            <Text fontSize={"14px"}>
                <span style={{ fontWeight: "bold" }}>biri biri:</span> biri
                <br />
                biri
            </Text>
            <Center position="relative" paddingTop={"20px"} paddingLeft={"0px"}>
                <Divider borderWidth="1px" my="4" />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    Biri biri
                </Text>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <Text fontSize={"14px"}>biri biri</Text>
            <Text fontSize={"14px"}>biri biri</Text>
            <Text fontSize={"14px"}>biri biri</Text>
            <Text fontSize={"14px"}>biri biri</Text>
        </Stack>
    );
};

export default CV_3;
