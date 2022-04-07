import React, { useState } from "react";
import {Col, Row, Image } from "antd";
import getAllImages from "../../fetchImages";
import styles from "./styles.module.scss";


export default function Gallery() {
  return (
    <div className={styles.gallery}>
   
            <div className={styles.column}>
                <div className={styles.inner}>
                        <img src={"https://picsum.photos/200/200"}/>
                </div>
            </div>
            <div className={styles.column}>
                    <img src={"https://picsum.photos/200/200"}/>
                    <img src={"https://picsum.photos/200/200"}/>
            </div>
            <div className={styles.column}>
                    <img src={"https://picsum.photos/200/200"}/>
                    <img src={"https://picsum.photos/200/200"}/>
                    <img src={"https://picsum.photos/200/200"}/>
            </div>
            <div className={styles.column}>
                    <img src={"https://picsum.photos/200/200"}/>
                    <img src={"https://picsum.photos/200/200"}/>
            </div>
            <div className={styles.column}>
                    <img src={"https://picsum.photos/200/200"}/>
            </div>

    </div>
  )
}
