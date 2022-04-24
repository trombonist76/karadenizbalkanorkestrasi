import React, { createRef, useRef, useState } from "react";
import { Col, Row, } from "antd";
import getAllImages from "../../fetchImages";
import etkinlikler from "../Etkinliklerimiz/etkinliklerimiz.json";
import { FcMusic } from "react-icons/fc";
import { Button } from "antd";
import styles from "./styles.module.scss";
import { BsChevronDown } from "react-icons/bs"

export default function Hakkimizda() {
  const events = JSON.parse(JSON.stringify(etkinlikler));
  const refs = useRef([])
  refs.current = [...Array(events.length).keys()].map(
    (_, i) => refs.current[i] ?? createRef()
  );

  function handleClick(index) {
    refs.current[index].current.scrollIntoView()
  }


  return (
    <div className={styles.events}>
      {console.log(refs)}
      {events.map((event, index) => (
        <Col ref={refs.current[index]} key={index} span={
          index === parseInt(events.length) - 1 ? 24 : 12
        }>
          <div  data-bg={index % 2 === 1 ? "dark" : ""} className={styles.event}>
            <div className={styles.image}>
              <img src={require("../../images/varil.jpg")}></img>
              <img src={require("../../images/varil.jpg")}></img>
              <img src={require("../../images/varil.jpg")}></img>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{event.title}</div>
              <div className={styles.description}>{event.description}</div>
            </div>
          </div>
          {index % 2 === 1 && events.lenth - 1 !== index ? <Button onClick={(index) => handleClick(index)} className={styles.icon} type="primary" size="large" shape="circle" icon={<BsChevronDown />} />:<></>}
        </Col>
      ))}
    </div>
  )
}
