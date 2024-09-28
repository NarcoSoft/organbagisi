import './basvuru_formu.css'
import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BasvuruFormu = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('basvuru-formu'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(

  <>

    <div className="form-body mt-5">
      <div className="container">
        <div className="d-flex">        
          <iframe className='mx-auto my-3 form-frame' src="https://docs.google.com/forms/d/e/1FAIpQLSfV-r_fMRhguUI1vMUbwz0Eg34sIxrlShuiK5qvCkJcBsffQg/viewform?embedded=true" width="100%" height="510" frameborder="0" marginheight="10" marginwidth="10">Yükleniyor…</iframe>
        </div>
        <div className='d-flex'>
          <Link className=' mx-auto my-4' to={'/'}><button className='btn btn-primary'>Anasayfa'ya Dön</button></Link>
        </div>
    </div>
    </div>
  
  </>
  )
}

export default BasvuruFormu;