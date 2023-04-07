import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

interface Ipage{
    children: JSX.Element,
}
const PageLayout = ({children}: Ipage) =>{

    return(
        <div>
            <Navbar />
            {children}

            <Footer />
        </div>
    )
}

export default PageLayout;