import { Link } from 'react-router-dom';
import './basvuru_formu.css'
import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const BasvuruFormu = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('basvuru-formu'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(
    <div className="form-body">
      <div className="container">
        <div className="d-flex">
          
        <iframe
          id="JotFormIFrame-242554616412049"
          title="Organ Bağışı Slogan Yarışması"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242554616412049"
          frameborder="0"
          style={{minWidth: '100%', maxWidth: '100%', height: '640px', border: 'none'}}
          scrolling="yes"
          className='mt-2 mb-4'
        >
        </iframe>
        <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
        <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-242554616412049']", "https://form.jotform.com/")</script>
    
        </div>
        <div className='d-flex'>
          <Link className=' mx-auto mb-2' to={'/'}><button className='btn btn-primary'>Anasayfa'ya Dön</button></Link>
        </div>
    </div>
    </div>
  )
}


export default BasvuruFormu;