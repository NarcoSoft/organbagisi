import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const DuzenlemeKurulu = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('duzenleme-kurulu'))
  },[setSheetState])
  return (
    <div className="container my-5 duzenleme_kurulu">
      <div className="card_dk w-50">
        <div className="display-4 mb-4">Düzenleme Kurulu</div>
        <h1>Konya Şehir Hastanesi Organ ve Doku Nakli Koordinatörlüğü</h1>
      </div>
    </div>
  );
}

export default DuzenlemeKurulu;