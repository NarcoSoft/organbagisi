import './basvuru_formu.css'
import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Forming from "../../Components/Forming/forming"

const BasvuruFormu = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('basvuru-formu'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(

  <>

    <div className="form-body">
      <div className="container">
        <div className="d-flex">  
          <Forming/>      
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