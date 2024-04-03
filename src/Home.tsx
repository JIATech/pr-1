// import "./Home.css";
import ToggleDarkMode from "./Toggle";
import { Grid, GridItem, SlideFade } from "@chakra-ui/react";
import CV_1 from "./content/cv-1";
import CV_2 from "./content/cv-2";
import CV_3 from "./content/cv-3";
import Title from "./content/title";
import Header from "./content/header";
import Nav from "./content/nav";
import Footer from "./content/footer";

const Home = () => {
    return (
        <SlideFade in={true} delay={0.5}>
            <>
                <ToggleDarkMode />
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
                >
                    <GridItem w="100%" h="100%" bg="orange.300" area="header">
                        <Header title="Curriculum Vitae" subtitle="Web Developer" />
                    </GridItem>
                    <GridItem w="100%" h="100%" bg="pink.300" area="nav">
                        <Nav />
                    </GridItem>
                    <GridItem w="100%" h="100%" bg="purple.300" area="title">
                        <Title />
                    </GridItem>
                    <GridItem
                        w="100%"
                        h="100%"
                        bg="green.300"
                        area="main"
                        overflowY={"auto"}
                    >
                        <GridItem>
                            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
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
                    <GridItem w="100%" h="100%" bg="blue.300" area="footer">
                        <Footer />
                    </GridItem>
                </Grid>
            </>
        </SlideFade>
    );
};

export default Home;
