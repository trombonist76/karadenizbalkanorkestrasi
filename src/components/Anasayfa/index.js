import React from 'react'
import getAllImages from '../../fetchImages'
import BgVideo from '../BgVideo'
import styles from "./styles.module.scss"
import { Col, Row, Button } from 'antd'
import { BsChevronDown } from "react-icons/bs"
import Etkinliklerimiz from "../Etkinliklerimiz"
import { useRefContext } from '../../contexts/RefContext'

export default function Anasayfa() {
  const images = getAllImages() //useMemo
  const {info,events,toScroll} = useRefContext()
  const handleClick = (ref) => {
    toScroll(ref)
  }
  return (
    <div>
      <BgVideo handleClick={()=>handleClick(info)} />

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
            <Button onClick={()=>handleClick(events)} type="primary" ghost size="large" shape="circle" icon={<BsChevronDown />} />
          </div>

        </Col>

        <Col span={9}>
          <div className={styles.infoImg}>
            <img src={require("../../images/varil2.JPG")} />
          </div>

        </Col>
      </Row>



      <div ref={events} >
        <Etkinliklerimiz /> 
      </div>
    </div>
  )
}
