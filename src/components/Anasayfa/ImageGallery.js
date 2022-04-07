import React, { useState } from "react";
import { Carousel, Col, Row, Image } from "antd";
import getAllImages from "../../fetchImages";
import etkinlikler from "../Etkinliklerimiz/etkinliklerimiz.json";
import { FcMusic } from "react-icons/fc";
import { Button } from "antd";
import styles from "./styles.module.scss";

export default function ImageGallery() {
  const events = JSON.parse(JSON.stringify(etkinlikler));
  const defaultValue = events.find((event) => event.id === 1);
  console.log(defaultValue);
  const [selectedEvent, setSelectedEvent] = useState(defaultValue);

  const handleClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Col span={16} offset={4}>
      <Row className={styles.flexCard}>
        <Col span={5} className={styles.cardHeader}>
          {events.map((event, index) => (
            <div className={styles.cardTitle}>
              <div className={styles.cardIcon}>{<FcMusic />}</div>
              <a onClick={() => handleClick(event)}>{event.title}</a>
            </div>
          ))}
        </Col>

        <Col span={19}>
          <Row>
            <Col span={14}>
              <div className={styles.contentText}>
                <h3>{selectedEvent.title}</h3>
                <p>{selectedEvent.description}</p>
              </div>
            </Col>
            <Col  span={10}>
              <div className={styles.imageWrapper} >
                <img className={styles.cardImage} src="https://picsum.photos/400/200" />
              </div>
              
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
