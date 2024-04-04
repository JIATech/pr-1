import ToggleDarkMode from "./Toggle";
import { Grid, GridItem, SlideFade, useColorMode, Box } from "@chakra-ui/react";
import CV_1 from "./content/cv-1";
import CV_2 from "./content/cv-2";
import CV_3 from "./content/cv-3";
import Title from "./content/title";
import Header from "./content/header";
import Nav from "./content/nav";
import Footer from "./content/footer";
import VideoBackground from "./content/backgroundComponent";

const Home = () => {
    const { colorMode } = useColorMode();
    return (
        <SlideFade in={true} delay={0.5}>
            <>
                <VideoBackground>
                    <ToggleDarkMode />
                    <Box overflowX="auto">
                        <Grid
                            templateRows="20% 6% auto 20%" // Alto de header, title, contenido principal y footer
                            templateColumns="20vh auto" // Ancho de nav y main
                            templateAreas={`"header header"
                            "nav title"
                            "nav main"
                            "nav footer"`} // Áreas definidas
                            gap={0}
                            minW="100vh"
                            h="100vh"
                            margin={{ base: "0", lg: "0 25vh" }}
                            className="content-overlay"
                            backgroundColor={
                                colorMode === "dark"
                                    ? "rgba(0,0,0,0)"
                                    : "rgba(0,0,0,0.15)"
                            }
                        >
                            <GridItem
                                w="100%"
                                h="100%"
                                area="header"
                                border={"2px"}
                                borderColor={{
                                    default: "black",
                                    chakraUiDark: "white",
                                }}
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                            >
                                <Header
                                    title="Curriculum Vitae"
                                    subtitle="Web Developer"
                                />
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                area="nav"
                                border={"2px"}
                                borderColor={{
                                    default: "black",
                                    chakraUiDark: "white",
                                }}
                                borderRight={"none"}
                                borderTop={"none"}
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                            >
                                <Nav />
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                area="title"
                                border={"2px"}
                                borderTop={"none"}
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                                fontSize={{ base: "1.5rem", lg: "2rem" }}
                            >
                                <Title />
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                border={"2px"}
                                borderTop={"none"}
                                area="main"
                                overflowY={"auto"}
                            >
                                <GridItem>
                                    <Grid
                                        templateColumns="repeat(3, 1fr)"
                                        gap={4}
                                        backgroundColor={
                                            colorMode === "dark"
                                                ? "rgba(0,0,0,0)"
                                                : "rgba(0,0,0,0.7)"
                                        }
                                        color={
                                            colorMode === "dark"
                                                ? "black"
                                                : "white"
                                        }
                                        borderLeftColor={{
                                            default: "white",
                                            chakraUiDark: "black",
                                        }}
                                    >
                                        <GridItem>
                                            <CV_1 />
                                        </GridItem>
                                        <GridItem>
                                            <CV_2 />
                                        </GridItem>
                                        <GridItem>
                                            <CV_3 />
                                        </GridItem>
                                    </Grid>
                                </GridItem>
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                area="footer"
                                border={"2px"}
                                borderColor={{
                                    default: "black",
                                    chakraUiDark: "white",
                                }}
                                borderTop={"none"}
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                            >
                                <Footer />
                            </GridItem>
                        </Grid>
                    </Box>
                </VideoBackground>
            </>
        </SlideFade>
    );
};

export default Home;
