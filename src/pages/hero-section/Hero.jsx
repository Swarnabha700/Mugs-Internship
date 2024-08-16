import React from 'react'
import styles from "@/pages/hero-section/hero.module.css"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Hi I am</h1>
        <div className={styles.title}>
          <h1 className={styles.name}>Muhammad Umair</h1>
          <h1 className={styles.left}>UI & UX</h1>
          <h1 className={styles.right}>Designer</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <button className={styles.hireBtn}>Hire Me</button>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/Group 2.png" height={600} width={540} />
        <div className={styles.socials}>
          <Image className={styles.icon} src="/Facebook.png" height={35} width={35} />
          <Image className={styles.icon} src="/Twitter.png" height={35} width={35} />
          <Image className={styles.icon} src="/Instagram.png" height={35} width={35} />
          <Image className={styles.icon} src="/LinkedIn.png" height={35} width={35} />
        </div>
      </div>
      <div className={styles.rectangle}></div>
    </div>
  )
}

export default Hero
