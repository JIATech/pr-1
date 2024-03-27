import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Home.tsx";
import "./index.css";

const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                transitionProperty:
                    "background-color, border-color, color, fill, stroke",
                transitionDuration: "2s",
                transitionTimingFunction: "ease-out",
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Home />
        </ChakraProvider>
    </React.StrictMode>
);
