import React, { useState } from 'react'
import styles from "./styles.module.scss"
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs"

export default function Carousel() {
  const [current, setCurrent] = useState(1)
  const [array,setArray] = useState([0,1,2])

  const increaseCurrent = () => {
    const newCurrent = current + 1 > 2 ? 2 : current + 1
    const newArray = [...array]
    const elem = newArray.shift()
    newArray.push(elem)
    setArray(newArray)
    console.log(newArray)
    setCurrent(newCurrent)
  }

  const decreaseCurrent = () => {
    const newCurrent = current - 1 < 0 ? 0 : current - 1
    const newArray = [...array]
    const elem = newArray.pop()
    newArray.unshift(elem)
    setArray(newArray)
    console.log(newArray)
    setCurrent(newCurrent)
  }
  return (
    <div className={styles.carousel}>

      <div className={styles.events}>
        <BsArrowBarLeft onClick={decreaseCurrent} className={`${styles.arrow} ${styles.lArrow}`} />
        <div className={styles.event}></div>
        <div className={styles.event}></div>
        {array.map((val, index) => (
          <div className={`${styles.event} ${1 > index ? styles[`b${current-1}`]: 1 < index ? styles[`a${1-current}`] : styles.active}`} >

            <h3>Event Title {val}</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, odio! Ducimus odio dicta optio explicabo,
              saepe mollitia aperiam reiciendis quibusdam sapiente. Ad sint error deleniti,
              dolores tempore rerum dolor odio.
            </span>
          </div>
        ))}
        <BsArrowBarRight onClick={increaseCurrent} className={`${styles.arrow} ${styles.rArrow}`} />
      </div>
    </div>
  )
}
