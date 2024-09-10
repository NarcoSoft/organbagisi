import "./menu_components.css";
import { useNavigate } from "react-router-dom";

const MenuComponents = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };
  
  return (
    <>
      <div className="card_container">
        
        <div className="card" onClick={() => handleClick('yarisma-hakkinda')}>
          <div className="card-body">
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <div className="card-footer"> <h6>Yarışmaa Hakkında</h6></div>
        </div>

        <div className="card">
          <div className="card-body">
            <i class="fa-solid fa-file"></i>
          </div>
          <div className="card-footer"> <h6>Düzenleme Kurulu</h6></div>
        </div>

        <div className="card" onClick={() => handleClick('basvuru-sartlari')}>
          <div className="card-body">
            <i class="fa-solid fa-flag"></i>
          </div>
          <div className="card-footer"> <h6>Başvuru Şartları</h6></div>
        </div>

        <a className="card"  onClick={() => handleClick('basvuru-formu')} style={{textDecoration: 'none'}}>
          <div className="card-body">
            <i class="fa-solid fa-file-lines"></i>
          </div>
          <div className="card-footer"> <h6>Başvuru Yap</h6></div>
        </a>       

        <div className="card" onClick={() => handleClick('basvuru-sonuclari')}>
          <div className="card-body">
            <i class="fa-solid fa-bullhorn"></i>
          </div>
          <div className="card-footer"> <h6>Yarışma Sonuçları</h6></div>
        </div>

        <div className="card" onClick={() => handleClick('oduller')}>
          <div className="card-body">
            <i class="fa-solid fa-award"></i>
          </div>
          <div className="card-footer"> <h6>Ödüller</h6></div>
        </div>
        
      </div>
    </>
  );
};

export default MenuComponents;
