import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import BodyOfWork from './pages/BodyOfWork'
import Openings from './pages/Openings'
import OpeningDetail from './pages/OpeningDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:bodyId" element={<BodyOfWork />} />
        <Route path="/openings" element={<Openings />} />
        <Route path="/openings/:openingId" element={<OpeningDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
