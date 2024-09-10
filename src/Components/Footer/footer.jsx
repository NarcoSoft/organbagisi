import React from 'react'
import './footer.css'

const Footer = () => {
  return( 
    <div className='footer'>
      <div className="">
        <div className="text-center text-white" style={{backgroundColor: '#3f51b5'}}>
          <div className="container">
            <section className="">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Organ Bağışı</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Yarışma Hakkında</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Başvurular</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Ödül Törenİ</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">İletİşİm</a>
                  </h6>
                </div>

              </div>
            </section>

            <hr className="my-5" />

            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Her gün yeni bir umutla hayata gözlerini açan yüreklere; sen de denizinden bir damla, güneşinden bir ışık bağışla. 
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center mb-5">
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
              className="text-center p-3"
              style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
              >
            © 2024 Copyright | Narcode Software
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;