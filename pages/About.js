import styles from '../pages/about.module.scss'
const About = () => {
    return ( 
        <div className={styles.about}>
            <h1 className={styles.heading}>About Ninjas</h1>
            <div>
                <p className={styles.text}>
                    A ninja or shinobi was a covert agent or mercenary in feudal Japan. The functions of a ninja included espionage, deception, and surprise attacks. Their covert methods of waging irregular warfare were deemed dishonorable and beneath the honor of the samurai.
                </p>
            </div>
        </div>
     );
}
 
export default About;