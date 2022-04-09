import React, { useState } from 'react'
import etkinliklerimiz from './etkinliklerimiz.json'
import { Col, Row, Button } from 'antd'
import styles from "./styles.module.scss"
import { BsChevronRight } from "react-icons/bs"


const events = JSON.parse(JSON.stringify(etkinliklerimiz))


export default function Etkinliklerimiz() {
  const [eventIndex, setEventIndex] = useState(0)
  const event = events[eventIndex]

  const skipAnother = () => {
    let newIndex = eventIndex + 1
    newIndex = newIndex === events.length ? 0 : newIndex

    setEventIndex(newIndex)
  }

  return (
    <div className={styles.events}>
      <h1 className={styles.pageTitle}>ETKİNLİKLERİMİZ</h1>
      <Col span={16} offset={4}>
        <div class={styles.container}>
          {events.map(event => (

            <div className={styles.card}>
              <img className={styles.image} src={require('../../images/varil.jpg')} />
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{event.title}</h3>
                <div className={styles.bar}>
                  <div className={styles.emptyBar}></div>
                  <div className={styles.filledBar}></div>
                </div>
                <div>
                  <p className={styles.description}>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Col>
    </div>
  )
}
