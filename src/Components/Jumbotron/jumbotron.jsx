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
              <div className="display-6 mt-4 justify-content-center justify-content-lg-end app_date">
                <p>Başvuru Tarihleri: </p> 
                <p>26 Eylül - 26 Ekim 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
