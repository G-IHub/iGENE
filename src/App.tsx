import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-[#9D2398] selection:text-white overflow-hidden relative flex flex-col">
        
        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE ROUTES */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

      </div>
    </Router>
  )
}
