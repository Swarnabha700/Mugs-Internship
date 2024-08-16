import React from 'react'
import styles from "@/pages/about/about.module.css"
import Image from 'next/image'

const About= () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/Group 7.png" height={650} width={650} alt='about'/>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div className={styles.skills}>
        <h1>UX</h1>
        <input type="range" name="range" value="90" className={styles.slider} readOnly/>
        <h1>Website Design</h1>
        <input type="range" name="range" value="85" className={styles.slider} readOnly/>
        <h1>App Design</h1>
        <input type="range" name="range" value="95" className={styles.slider} readOnly/>
        <h1>Graphic Design</h1>
        <input type="range" name="range" value="88" className={styles.slider} readOnly/>
        </div>
      </div>
      <div className={styles.rectangle}></div>
    </div>
  )
}

export default About
