import './App.css'
import Anasayfa from './components/Anasayfa'
import Navi from './components/Navbar'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

function App() {
  const { theme, switchTheme } = useTheme()
  return (
    <div className="App" data-theme={theme}>
      <Navi />
      <Anasayfa/>
    </div>
  )
}

export default App
