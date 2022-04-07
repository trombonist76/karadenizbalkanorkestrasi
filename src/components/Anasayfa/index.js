import React from 'react'
import { Col, Row } from 'antd'
import getAllImages from '../../fetchImages'
import styles from "./styles.module.scss"
import { useTheme } from "../../contexts/ThemeContext"
import ImageGallery from './ImageGallery'
import Gallery from './Gallery'
import { BiVolumeMute } from "react-icons/bi";
import varil from "../../videos/varil.mp4"
export default function Anasayfa() {
  const { theme } = useTheme()
  const images = getAllImages() //useMemo


  return (
    <div className={styles.carousel}>
      <video className={styles.backgroundVideo} loop autoPlay>
        <source src={varil} type="video/mp4" />
      </video>
      <Row>
        <Col className={styles.firstSection} span={10}>
{/* 


          <div className={styles.title} >
            EN GÜZEL GÜNLERİNİZE
          </div>

          <div className={styles.title} >
            N<HiOutlineMusicNote className={styles.note} />TALARIMIZLA
          </div>

          <div className={styles.titleStrong} >
            ŞENLİK
          </div>

          <div className={styles.titleDown} >
            KATIYORUZ.
          </div> */}

        </Col>

        {/* <Col span={10} offset={4}>
          <div className={styles.images}>
            <div className={styles.image}>
              <img src={require(`../../images/pastakesimi.jpg`)} />
            </div>

            <div className={styles.image}>
              <img src={require(`../../images/kina.jpg`)} />
            </div>

            <div className={styles.image}>
              <img src={require(`../../images/gelinalma.jpg`)} />
            </div>

          </div>
        </Col> */}
      </Row>

      <Gallery></Gallery>
      <ImageGallery></ImageGallery>



    </div>
  )
}
