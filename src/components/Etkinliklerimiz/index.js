import React from 'react'
import etkinliklerimiz from './etkinliklerimiz.json'
import { Col, Divider, Image, Row, Typography } from 'antd'

const { Title, Text } = Typography
const etkinlikler = JSON.parse(JSON.stringify(etkinliklerimiz))
export default function Etkinliklerimiz() {
  return (
    <div className="events">
      {etkinlikler.map((etkinlik, index) => (
        <div className="event" key={index}>
          <Col span={4}>
            <div className="eventTitle">
              <h3>{etkinlik.title}</h3>
            </div>
          </Col>

          <Col className="eventDescs" span={8}>
            <p>{etkinlik.description}</p>
          </Col>
          <Col span={2}></Col>
          <Col span={10}>
            <img
              className="eventImage"
              src={require(`../../images/${etkinlik.img}.jpg`)}
            />
          </Col>
        </div>
      ))}
    </div>
  )
}
