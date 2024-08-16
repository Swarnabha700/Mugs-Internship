import React from 'react'
import styles from "@/pages/projects/projects.module.css"
import Image from 'next/image'

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Projects</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
      <div className={styles.designs}>
        <div className={styles.design}>
          All
        </div>
        <div className={styles.design}>
          UI/UX
        </div>
        <div id={styles.web} className={styles.design}>
          Web Design
        </div>
        <div className={styles.design}>
          App Design
        </div>
        <div className={styles.design}>
          Graphic Design
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <Image src="/Group 24.png" height={489} width={445} className={styles.imgSize}/>
          <div className={styles.details}>
            <p className={styles.type}>Web Design</p>
            <p className={styles.title}>AirCalling Landing Page Design</p>
          </div>
        </div>
        <div className={styles.project}>
          <Image src="/Group 24.png" height={489} width={445} className={styles.imgSize}/>
          <div className={styles.details}>
            <p className={styles.type}>Web Design</p>
            <p className={styles.title}>Business Landing Page Design</p>
          </div>
        </div>
        <div className={styles.project}>
          <Image src="/Group 24.png" height={489} width={445} className={styles.imgSize}/>
          <div className={styles.details}>
            <p className={styles.type}>Web Design</p>
            <p className={styles.title}>Ecom Web Page Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
