import React, { useEffect, useState } from 'react'
import { Typography, Col, Image, Row } from 'antd'
import { Link } from 'react-router-dom'

import { Switch } from 'antd'
import { IoMoonSharp } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from '../../contexts/ThemeContext';

export default function Navi() {
  const {switchTheme } = useTheme()
 
  return (
    <div className="nav">
      <Col span={4} offset={1}>
        <img className="logo" src={require('../../logo.png')} />
      </Col>

      <Col span={16}>

      </Col>
      <Col span={2}>
        <Row className="nav-items">
          <Switch
            checkedChildren={<IoMoonSharp />}
            unCheckedChildren={<BsSunFill />}
            theme="outlined"
            onClick={switchTheme}
          />

        </Row>

      </Col>
    </div>
  )
}
