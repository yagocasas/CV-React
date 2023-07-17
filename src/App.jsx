import { CV } from "./utils/data/CV";
import { useState } from "react";
import { MyContext } from "./shared/Context";
import Hero from "./components/Hero";
import Navbar from "./components/Header/Navbar";
import Render from "./components/render/Render";
import Footer from "./components/Footer";
import { Container, Flex } from "@chakra-ui/react";

const { hero } = CV;

const App = () => {
    const [data, setData] = useState("metadata");

    return (
        <MyContext.Provider value={{ data, setData }}>
            <Flex direction={"column"} flex={1} minH={"100vh"}>
                <Navbar />
                <Container
                    pt={24}
                    pb={2}
                    flex={1}
                    minW={"full"}
                    display={"flex"}
                    justify={"center"}
                >
                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        flex={1}
                        justifyContent={"space-between"}
                    >
                        <Hero info={hero} />
                        <Render />
                    </Flex>
                </Container>
                <Footer />
            </Flex>
        </MyContext.Provider>
    );
};

export default App;
