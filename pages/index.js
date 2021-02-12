import Head from 'next/head'
import styles from '../pages/index.module.scss'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.overlay}></div>
      <div className={styles.wrap}>
        <h1 className={styles.center_heading}>Welcome</h1>
        <p className={styles.text}>We have the ninjas you need</p>
        <Link href="/ninjas"><a><button className={styles.button}>View Ninjas</button></a></Link>
      </div>
    </div>
  )
}
