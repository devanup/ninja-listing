import styles from '../../pages/ninjas/details.module.scss'
import Image from 'next/image'
// Specify dynamic routes to pre-render pages based on data.
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    // Get the paths we want to pre-render based on data. It stores id that's being returned
    const paths = data.map(ninja=>{ // learn more at: https://bit.ly/2NklUQT
        return{
            params: {id: ninja.id.toString()}
        }
    })
    return{
        paths: paths,
        fallback: false // if false, any paths not returned by getStaticPaths will result in a 404 page
    }
} // this is working exclusively for paths, doesn't directly work with the component below

// Now we need to get the data for each ninja and send it to the individual pages. We will send each ninja into the component as a prop.
// this is where we fetch the data for each individual ninja and then return it so it can be sent into the component itself
export const getStaticProps = async (context) =>{
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()
    return{
        props:{ninja: data}
    }
}

const Details = ({ninja}) => {
    return ( 
        <div className={styles.profile}>
            <div className={styles.profile_card}>    
                <div className={styles.img}>
                    <Image className={styles.image} src={"/" + ninja.id + ".jpg"} width={140} height={140}/>
                </div>
                <h1 className={styles.heading}>{ninja.name}</h1>
                <p>{ninja.email}</p>
                <p>{ninja.website}</p>
                <p>{ninja.address.city}</p>
            </div>
        </div>
     );
}
 
export default Details;