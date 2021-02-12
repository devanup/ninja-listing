import Link from 'next/link'
import Image from 'next/image'
import styles from '../pages/404.module.scss'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter()
    useEffect(() => { //This hook fires the function when the component first mounts
        setTimeout(()=>{
            router.push('/')
        },2000)
    }, [])
    return ( 
        <div className={styles.not_found}>
            <Image className={styles.image} src="/404.png" width={500} height={400}/>
            <h1 className={styles.heading}>Page not found</h1>
            <p>The page you're looking for does not exist ...</p>
            <p>Go to <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;