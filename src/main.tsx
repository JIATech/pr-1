import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Home.tsx";
import "./index.css";
import { About, MicrofrontendSPA, MicrofrontendSvelte, MicrofrontendVue, HtmlCssExample } from "./routes/root.tsx";

const router = createBrowserRouter([{ 
    path: "/", 
    element: <Home />
}, {
    path: "/about",
    element: <About />
}, {
    path: "/spa",
    element: <MicrofrontendSPA />
}, {
    path: "/svelte",
    element: <MicrofrontendSvelte />
}, {
    path: "/vue",
    element: <MicrofrontendVue />
}, {
    path: "/htmlcss",
    element: <HtmlCssExample />
}
]);

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
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
