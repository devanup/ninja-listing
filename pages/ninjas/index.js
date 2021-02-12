import styles from '../ninjas/ninjas.module.scss'
import Link from 'next/link'

// fetching data in build time using getStaticProps
// export async function getStaticProps(){ OR WRITE IT AS BELOW: 
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return{
        props:{ninjas: data}
    }
}

const Ninjas = ({ninjas}) => {
    return ( 
        <div className={styles.ninja_list}>
            <h1>All Ninjas</h1>
            <p className={styles.text}>Listed below are the ninjas who are actively available on duty <br/><br/> Pick your ninja</p>
            {ninjas.map(ninja=>(
                <Link href = {"/ninjas/" + ninja.id} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                        <p className={styles.city}>From {ninja.address.city}</p>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;