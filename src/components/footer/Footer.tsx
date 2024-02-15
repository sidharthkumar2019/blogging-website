import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Sid_Arth</div>
            <div className={styles.text}>
                Sid_Arth Software Products Ltd. © All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
