import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const handleClick = (route) => {
    navigate(route)
  }

  return( 
    <div className='footer'>
      <div className="">
        <div className="text-center text-white" style={{backgroundColor: '#3f51b5'}}>
          <div className="container">
            <section className="">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2 mb-2 mb-lg-0 mt-3 mt-lg-0">
                  <h6 className="text-uppercase font-weight-bold">
                    <a className="text-white" onClick={() => {handleClick('/')}}>Anasayfa</a>
                  </h6>
                </div>

                <div className="col-md-2 mb-2 mb-lg-0 mt-3 mt-lg-0">
                  <h6 className="text-uppercase font-weight-bold">
                    <a className="text-white" onClick={() => {handleClick('/yarisma-hakkinda')}}>Yarışma Hakkında</a>
                  </h6>
                </div>

                <div className="col-md-2 mb-2 mb-lg-0 mt-3 mt-lg-0">
                  <h6 className="text-uppercase font-weight-bold">
                    <a className="text-white" onClick={() => {handleClick('/basvuru-formu')}}>Başvuru Yap</a>
                  </h6>
                </div>

                <div className="col-md-2 mb-2 mb-lg-0 mt-3 mt-lg-0">
                  <h6 className="text-uppercase font-weight-bold">
                    <a className="text-white" onClick={() => {handleClick('/oduller')}}>Ödül Törenİ</a>
                  </h6>
                </div>

                <div className="col-md-2 mt-3 mt-lg-0">
                  <h6 className="text-uppercase font-weight-bold">
                    <a className="text-white" onClick={() => {handleClick('/iletisim')}}>İletİşİm</a>
                  </h6>
                </div>

              </div>
            </section>

            <hr className="my-5" />

            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p className='site-slogan'>
                    Her gün yenİ bİr umutla hayata gözlerİnİ açan yüreklere; sen de denİzİnden bİr damla, güneşİnden bİr ışık bağışla
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center mb-5">  
              <a href="https://instagram.com/organ_nakli_ksh" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
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