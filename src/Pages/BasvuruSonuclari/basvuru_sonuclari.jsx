import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const BasvuruSonuclari = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('basvuru-sonuclari'))
  },[setSheetState])
  return(
    <div className="container my-5">
      <h1>Başvuru Sonuçları</h1>
      <div className="d-flex mt-5">
        <h4 className="d-flex mx-auto">Başvurular henüz başlamamıştır. </h4>
      </div>
      <div className="d-flex my-2">
        <p className="d-flex mx-auto">Başvurular 26 Eylül - 26 Ekim 2024 tarihleri arasında yapılacak olup yarışma sonuçları 1 Kasım'da sitemizden duyurulacaktır.</p>
      </div>
    </div>
  )
}

export default BasvuruSonuclari;