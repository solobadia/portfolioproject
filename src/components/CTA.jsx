import React from 'react'
import styles from '../style';
import Button2 from './Button2';

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's build something great together!</h2>  
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nisi non nunc mattis vestibulum. </p>
      </div>

      <div className={`${styles.paragraph} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button2 />
      </div>

    </section>
  )


export default CTA