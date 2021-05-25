import React from "react";
import Header from "./partials/Header.comp";
import Footer from "./partials/Footer.comp";

const DefaultLayout = ({ children }) => {
    return ( <div>
        <div className = "default-layour" >
        <header className = "header" >
        <Header/>
        </header> <main className = "main" > { children } </main>
         <footer className = "footer" >
        <Footer />
        </footer> 
        </div> 
        </div>
    );
};

export default DefaultLayout;