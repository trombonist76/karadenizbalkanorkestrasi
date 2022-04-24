import React from 'react'
import getAllImages from '../../fetchImages'
import BgVideo from '../BgVideo'
import styles from "./styles.module.scss"
import { Col, Row, Button } from 'antd'
import { BsChevronDown } from "react-icons/bs"
import { IconContext } from "react-icons"
import Etkinliklerimiz from "../Etkinliklerimiz"
import { useRefContext } from '../../contexts/RefContext'
import Hakkimizda from '../Hakkimizda'

export default function Anasayfa() {
  const images = getAllImages() //useMemo
  const { info, events, toScroll } = useRefContext()
  const handleClick = (ref) => {
    toScroll(ref)
  }
  return (
    <IconContext.Provider value={{ color: "white", size: "1.1em", verticalAlign:"middle" }}>
      <div>
        <BgVideo handleClick={() => handleClick(info)} />

        <Row>
          <Col span={14} offset={1}>
            <div ref={info} className={styles.info}>
              <div className={styles.infoContent}>
                <div className={styles.title}>Karadeniz Balkan
                  <div>Orkestrası</div>
                </div>
              </div>
              <div className={styles.handWritten}>
                En mutlu günlerinize notalarımızla şenlik katıyoruz.
              </div>

            </div>


            <div className={styles.infoBtn}>
              <Button onClick={() => handleClick(events)} type="primary" size="large" shape="circle" icon={<BsChevronDown />} />
            </div>

          </Col>

          <Col span={9}>
            <div className={styles.infoImg}>
              <img src={require("../../images/varil2.JPG")} />
            </div>

          </Col>
        </Row>
        <div ref={events} >
          <Hakkimizda />
        </div>
      </div>
    </IconContext.Provider>
  )
}
