import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Sid_Arth SPL</h2>
          <h1 className={styles.title}>
            We create beautiful, robust and secure software products catering to the complex requirements of our customers.
          </h1>
          <p className={styles.desc}>Our team of dedicated professionals possesses a keen understanding of the dynamic landscape of software development. We embrace complexity as an opportunity to showcase our prowess, consistently delivering products that not only meet but exceed the expectations of our clients.</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='/about.png'
            alt='Pic of author'
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
