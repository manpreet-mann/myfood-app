import React from "react";
import Poster from "./Poster";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
    return (
        <>
            <Poster />
            <About />
            <Menu />
            <Contact />
            {/* <Footer /> */}
        </>
    );
}
export default Home;