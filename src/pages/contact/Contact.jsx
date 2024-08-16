import React from 'react'
import styles from "@/pages/contact/contact.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Design Together</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className={styles.formContainer}>
        <input type="email" name="email" placeholder="Enter Your Email" className={styles.email}/>
        <button className={styles.contactBtn}>Contact Me</button>
      </div>
    </div>
  )
}

export default Contact
