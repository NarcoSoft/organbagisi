import { Link } from 'react-router-dom';
import './basvuru_formu.css'

const BasvuruFormu = () => {
  return(
    <div className="form-body">
      <div className="container">
        <div className="d-flex">
          <iframe className="d-flex mx-auto my-4" src="https://docs.google.com/forms/d/e/1FAIpQLScJsjodL6-oKPgIO7iLj2GmR1CUP-oT9gBIe2eAOspnq612Fw/viewform?embedded=true" width="640" height="520" frameborder="0">Yükleniyor…</iframe>
          
        </div>
        <div className='d-flex'>
          <Link className=' mx-auto mb-2' to={'/'}><button className='btn btn-primary'>Anasayfa'ya Dön</button></Link>
        </div>
    </div>
    </div>
  )
}

export default BasvuruFormu;