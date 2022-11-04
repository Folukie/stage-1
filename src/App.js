import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
export default App
