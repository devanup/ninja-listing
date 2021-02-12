import Link from 'next/link'
import styles from './navbar.module.scss'
const Navbar = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.logo}>
                Ninjas
            </div>
            <nav className={styles.nav}>
                <Link href="/"><a className={styles.links} active>Home</a></Link>
                <Link href="/About"><a className={styles.links}>About</a></Link>
                <Link href="/ninjas/"><a className={styles.links}>Ninja List</a></Link>
            </nav>
        </header>
     );
}
 
export default Navbar;