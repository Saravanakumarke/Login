import React from 'react'
import styles from './First.module.css'
import Log from './Image/login.png'
import {HiOutlinePencilAlt  } from 'react-icons/hi'
import {AiOutlineRight} from 'react-icons/ai'

function First() {
    return (
        <div>
          <div className={styles.container}>
              <div className={styles.img}>
                  <img src={Log}  alt='login' className={styles.img1} />
              </div>
              <h1 style={styles.h}>Welcome Back !</h1>
              <div>
                  <HiOutlinePencilAlt className={styles.pen} />
    <input type="text" className={styles.input} placeholder="Your Registration Number" /><br/>
    </div>
    <button className={styles.btn} >Next <span ><AiOutlineRight /></span></button><br/>
    <div className={styles.link}><span className={styles.texttwo}>Forgot your registration number?</span><a className={styles.cli} href="##">Click here</a></div>
          </div>
        </div>
    )
}

export default First
