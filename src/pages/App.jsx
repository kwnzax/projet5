import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import LogementDetail from './LogementDetail.jsx'
import NotFound from './NotFound'


function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="logement/:id" element={<LogementDetail />} />
          <Route path="/404" element={<NotFound/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;