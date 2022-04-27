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
      <div className={styles.images}></div>
        <div className={styles.image}><span>GELİN ÇIKARMA</span></div>
        <div className={styles.image}><span>GELİN ÇIKARMA</span></div>
        <div className={styles.image}><span>GELİN ÇIKARMA</span></div>
        <div className={styles.image}><span>GELİN ÇIKARMA</span></div>
        <div className={styles.image}><span>GELİN ÇIKARMA</span></div>

      <div className={styles.content}>
        <h1>ETKİNLİKLERİMİZ</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt commodi impedit fugit itaque eos deserunt provident adipisci? Esse, sapiente nulla dolor eum quaerat laborum mollitia illo eaque cumque nisi libero!
        Sit ut fugiat voluptates, a atque iure accusamus quasi possimus debitis blanditiis harum sunt perferendis iste, repellendus nam rerum totam ea maxime quas similique consectetur iusto. Recusandae, nihil? Exercitationem, tempora.</span>
      </div>
  
      
    </div>
  )
}
