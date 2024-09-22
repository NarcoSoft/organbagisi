import './yarisma_hakkinda.css'
import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const YarismaHakkinda = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('yarisma-hakkinda'))
    window.scrollTo(0,0)
  },[setSheetState])

  return (
    <div className="container my-5 yarisma_hakkinda">
      <h1 className='mb-4'>Genel Bilgi</h1>
      <div>
        <p>
           Hastanemizde organ bağışı konusunda farkındalığın artırılması için hastane personeline ve çocuklarına yönelik Konya Şehir Hastanesi Organ ve Doku Nakli Koordinatörlüğü tarafından bir slogan yarışması gerçekleştirilmesi planlanmıştır.
        </p>
      
      </div>
    </div>
  );
}

export default YarismaHakkinda;