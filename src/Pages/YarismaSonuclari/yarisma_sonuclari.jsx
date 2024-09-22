import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './yarisma_sonuclari.css'

const YarismaSonuclari = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('yarisma-sonuclari'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(
    <div className="container my-5">
      <h1>Yarışma Sonuçları</h1>
      <div className="d-flex mt-5">
        <h4 className="d-flex mx-auto"></h4>
      </div>
      <div className="d-flex my-2 info">
        <div className="d-flex mx-auto info-header"> Yarışma sonuçları 1 Kasım 2024 tarihinde sitemizden duyurulacaktır.</div>
        <p className='d-flex mt-5 justify-content-center'>Ayrıca sonuçlar katılımcılara e-mail olarak gönderilecektir. </p>
      </div>
    </div>
  )
}

export default YarismaSonuclari;