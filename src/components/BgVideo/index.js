import React, { useState } from 'react'
import bg from "../../videos/bg2.mp4"
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { Col, Row, Button } from 'antd'
import styles from './styles.module.scss'

export default function BgVideo({handleClick}) {
  const [isMuted,setIsMuted] = useState(true)

  const handleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className={styles.bgVideo}>
      <div  className={styles.backgroundVideo}>
        <video loop autoPlay="autoplay" muted={isMuted} >
          <source src={bg} type="video/mp4" />
        </video>
        <Col span={1} offset={23} data-aos="fade-up">
          <div className={styles.iconWrapper}>
            <Button onClick={handleMute} className={styles.icon} type="primary" size="large" shape="circle" icon={isMuted?<FaVolumeUp/> :<FaVolumeMute />} />
            <Button onClick={handleClick} className={styles.icon} type="primary" ghost size="large" shape="circle" icon={<BsChevronDown />} />
          </div>
        </Col>
      </div>
    </div>
  )
}
