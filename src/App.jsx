import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/footer'
import Home from './Pages/Home/home';
import YarismaHakkinda from './Pages/YarismaHakkinda/yarisma_hakkinda';
import BasvuruSartlari from './Pages/BasvuruSartlari/basvuru_sartlari';
import BasvuruFormu from './Pages/BasvuruFormu/basvuru_formu';
import BasvuruSonuclari from './Pages/BasvuruSonuclari/basvuru_sonuclari'
import Oduller from './Pages/Oduller/oduller';
import Contact from './Pages/Contact/contact';
import DuzenlemeKurulu from './Pages/DuzenlemeKurulu/duzenleme_kurulu';

export default function App() {
  return (
    <main>
      <div className='app_container'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/yarisma-hakkinda" element={<YarismaHakkinda/>} />
            <Route path="/duzenleme-kurulu" element={<DuzenlemeKurulu/>} />
            <Route path="/basvuru-sartlari" element={<BasvuruSartlari/>} />
            <Route path="/basvuru-formu" element={<BasvuruFormu/>} />
            <Route path="/basvuru-sonuclari" element={<BasvuruSonuclari/>} />
            <Route path="/oduller" element={<Oduller/>} />
            <Route path="/iletisim" element={<Contact/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
