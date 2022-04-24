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
      <Row>
        
      </Row>
  );
}
