import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/components/navbar/navbar.module.css"

const Navbar = () => {
  const items = ["Home", "About Me", "Services", "Projects", "Testimonials", "Contact"]
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/Subtract.png" alt='logo' height={60} width={60} />
        <p><b>M</b>umair</p>
      </div>
      <div className={styles.navbar}>
        {items.map(item => (
          <Link className={styles.tabs} href={`#${item}`} key={item}>
            {item}
          </Link>
        ))}
        <button className={styles.cvbtn}>Download CV</button>
      </div>
    </div>
  )
}

export default Navbar
