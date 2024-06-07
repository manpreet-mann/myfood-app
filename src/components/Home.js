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
            <div className="main-content">
            <About />
            <Menu />
            <Contact />
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default Home;