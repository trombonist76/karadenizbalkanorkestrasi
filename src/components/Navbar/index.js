import React, { useEffect, useState } from 'react'
import { Typography, Col, Image, Row } from 'antd'
import { Link } from 'react-router-dom'

import { Switch } from 'antd'
import { IoMoonSharp } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from '../../contexts/ThemeContext';

export default function Navi() {
  const [activeItem, setActiveItem] = useState()
  const {theme,switchTheme} = useTheme()
  const { Title } = Typography
  const navItems = [
    {
      name: 'Anasayfa',
      path: '/anasayfa',
    },
    {
      name: 'Etkinliklerimiz',
      path: '/etkinliklerimiz',
    },
    {
      name: 'Hakkımızda',
      path: '/hakkimizda',
    },
  ]

  const handleClick = (item) => {
    console.log(item)
    setActiveItem(item.name)
  }

  useEffect(() => {}, [activeItem])

  return (
    <div className="nav">
      <Col span={4} offset={1}>
        <img className="logo" src={require('../../logo.png')} />
      </Col>

      <Col span={12}>
       
      </Col>
      <Col span={6}>
        {/* <Row className="nav-items">
          {navItems.map((item, index) => (
            <Link
              key={index}
              className={`navBtn ${item.name === activeItem ? 'active' : ''}`}
              onClick={() => handleClick(item)}
              to={item.path}
            >
              <Title
                level={5}
                style={{
                  color: 'white',
                }}
              >
                {item.name}
              </Title>
            </Link>
          ))}

          <Switch
            checkedChildren={<IoMoonSharp/>}
            unCheckedChildren={<BsSunFill />}
            theme="outlined"
            onClick={switchTheme}
          />
        </Row> */}
      </Col>
    </div>
  )
}
