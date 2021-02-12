import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import styles from "./layout.module.scss"

// This file will wrap all different pages
const Layout = ({children}) => { // since layout is the parent component now so we get access to its children property
    return ( 
        <div className={styles.content}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;