import React from "react";
import { Text, Stack, Divider, Center } from "@chakra-ui/react";

const CV_3: React.FC = () => {
    return (
        <Stack paddingLeft={"5px"} spacing={2}>
            <Center position="relative" paddingTop={"20px"}>
                <Divider />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    biri biri
                </Text>
                <Divider />
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
            <Center
                position="relative"
                paddingTop={"20px"}
                paddingLeft={"20px"}
            >
                <Divider />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    Biri biri
                </Text>
                <Divider />
            </Center>
            <Text fontSize={"14px"}>biri biri</Text>
            <Text fontSize={"14px"}>biri biri</Text>
            <Text fontSize={"14px"}>biri biri</Text>
            <Text fontSize={"14px"}>biri biri</Text>
        </Stack>
    );
};

export default CV_3;
