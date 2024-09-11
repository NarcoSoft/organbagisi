import './navbar.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const sheetState = useSelector((state) => state.sheet)
  const handleClick = (route) => {
    navigate(route);
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand d-lg-none" href="#">
          Organ Bağışı Slogan Yarışması
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-lg-auto mb-2 mb-lg-0">
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='home' ? 'active' : ''}`} aria-current="page" onClick={() => handleClick('/')}>
                Anasayfa
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='yarisma-hakkinda' ? 'active' : ''}`} onClick={() => handleClick('/yarisma-hakkinda')}>
                Yarışma Hakkında
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='duzenleme-kurulu' ? 'active' : ''}`} onClick={() => handleClick('/duzenleme-kurulu')}>
                Düzenleme Kurulu
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='basvuru-sartlari' ? 'active' : ''}`} onClick={() => handleClick('/basvuru-sartlari')}>
                Başvuru Şartları
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='basvuru-formu' ? 'active' : ''}`} onClick={() => handleClick('/basvuru-formu')}>
                Başvuru Yap
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='basvuru-sonuclari' ? 'active' : ''}`} onClick={() => handleClick('/basvuru-sonuclari')}>
                Yarışma Sonuçları
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='oduller' ? 'active' : ''}`} onClick={() => handleClick('/oduller')}>
                Ödüller
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className={`nav-link ${sheetState==='iletisim' ? 'active' : ''}`} onClick={() => handleClick('/iletisim')}>
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
