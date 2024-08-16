import React from 'react'
import Image from 'next/image'
import styles from "@/pages/services/services.module.css"

const Service = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Services</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <Image src="/UiUx.png" height={70} width={65} alt='Ui/Ux'/>
          <h1 className={styles.title}>UI / UX</h1>
          <p className={styles.details}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className={styles.box}>
        <Image src="/web.png" height={80} width={70} alt='web'/>
          <h1 className={styles.title}>Web Design</h1>
          <p className={styles.details}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className={styles.box}>
        <Image src="/app.png" height={80} width={45} alt='app'/>
          <h1 className={styles.title}>App Design</h1>
          <p className={styles.details}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
        <div className={styles.box}>
        <Image src="/graphic.png" height={70} width={75} alt='graphic'/>
          <h1 className={styles.title}>Graphic Design</h1>
          <p className={styles.details}>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
        </div>
      </div>
    </div>
  )
}

export default Service
