"use client"
import React from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import styles from "@/pages/testimonials/testimonials.module.css"

const Testimonials = () => {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  const fourthCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToFourthCat() {
    fourthCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Testimonials</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        <div className={styles.slides}>
            <div className={styles.slide} ref={firstCatRef}>
                <Image src="/display.png" width={430} height={270} alt='' className={styles.slideImg}/>
                <div className={styles.slideDesc}>
                <p className={styles.slideTxt}>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                <h2 className={styles.slideName}>Name</h2>
                <p className={styles.slidePos}>CEO</p>
                </div>
            </div>
            <div className={styles.slide} ref={secondCatRef}>
                <Image src="/display.png" width={430} height={270} alt='' className={styles.slideImg}/>
                <div className={styles.slideDesc}>
                <p className={styles.slideTxt}>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                <h2 className={styles.slideName}>Name</h2>
                <p className={styles.slidePos}>CEO</p>
                </div>
            </div>
            <div className={styles.slide} ref={thirdCatRef}>
                <Image src="/display.png" width={430} height={270} alt='' className={styles.slideImg}/>
                <div className={styles.slideDesc}>
                <p className={styles.slideTxt}>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                <h2 className={styles.slideName}>Name</h2>
                <p className={styles.slidePos}>CEO</p>
                </div>
            </div>
            <div className={styles.slide} ref={fourthCatRef}>
                <Image src="/display.png" width={430} height={270} alt='' className={styles.slideImg}/>
                <div className={styles.slideDesc}>
                <p className={styles.slideTxt}>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                <h2 className={styles.slideName}>Name</h2>
                <p className={styles.slidePos}>CEO</p>
                </div>
            </div>
            
        </div>
        <div className={styles.dots}>
                <div className={styles.dot} onClick={handleScrollToFirstCat}></div>
                <div className={styles.dot} onClick={handleScrollToSecondCat}></div>
                <div className={styles.dot} onClick={handleScrollToThirdCat}></div>
                <div className={styles.dot} onClick={handleScrollToFourthCat}></div>
            </div>
    </div>
    
  )
}

export default Testimonials
