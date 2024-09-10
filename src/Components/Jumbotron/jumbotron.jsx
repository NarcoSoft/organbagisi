import "./jumbotron.css";
import MenuComponents from "../MenuComponents/menu_components";

const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="content">
          <div className="row">
            <div className="col-xl-12 text-center text-dark">
              <div className="">
                <MenuComponents />
              </div>
<<<<<<< HEAD
              <div className="display-6 mt-4 justify-content-center justify-content-lg-end app_date">
                <p>Başvuru Tarihleri: </p> 
                <p>26 Eylül - 26 Ekim 2024</p>
              </div>
=======
              <div className="display-6 mt-4 justify-content-center justify-content-lg-end d-flex app_date" style={{fontWeight: '600'}}>Başvuru Tarihleri: 26 Eylül - 26 Ekim 2024</div>
>>>>>>> c83c54f (Commit mesajınız)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
