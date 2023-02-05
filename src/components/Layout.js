import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return ( 
        <>
            <div className="content">

                <Navbar/>
                    {children}
                <Footer/>
            </div>
        </>
     );
}
 
export default Layout;