import './App.css'
import Anasayfa from './components/Anasayfa'
import Navi from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import ImageGallery from './components/Anasayfa/ImageGallery'
import { Col } from 'antd'
import Etkinliklerimiz from './components/Etkinliklerimiz'
import Hakkimizda from './components/Hakkimizda'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

function App() {
  const { theme, switchTheme } = useTheme()
  return (
    <div className="App" data-theme={theme}>
      <Navi />

      <Col span={20} offset={2}>
        <Routes>
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route exact path="/" element={<ImageGallery />} />
          <Route path="/etkinliklerimiz" element={<Etkinliklerimiz />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
        </Routes>
      </Col>
    </div>
  )
}

export default App
