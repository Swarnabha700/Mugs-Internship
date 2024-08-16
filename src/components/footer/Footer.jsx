import React from 'react'
import styles from "@/components/footer/footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const items =["Home", "About Me", "Services", "Projects", "Testimonials", "Contact"]
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image src="/Subtract.png" height={70} width={70} alt='logo' />
          <h1 className={styles.title}><b>M</b>umair</h1>
        </div>
        <div className={styles.links}>
          {items.map(item=>(
            <Link href={`#${item}`} key={item} className={styles.link}>{item}</Link>
          ))}
        </div>
        <div className={styles.socials}>
          <Image src="/Facebook.png" className={styles.icon} height={35} width={35} alt=''/>
          <Image src="/Twitter.png" className={styles.icon} height={35} width={35} alt=''/>
          <Image src="/Instagram.png" className={styles.icon} height={35} width={35} alt=''/>
          <Image src="/LinkedIn.png" className={styles.icon} height={35} width={35} alt=''/>
        </div>
      </div>
      <div className={styles.footer}>
        <p>© 2023 <b className={styles.color}>Mumair</b> All Rights Reserved, Inc.</p>
        </div>
    </div>
  )
}

export default Footer
