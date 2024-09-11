import './yarisma_hakkinda.css'
import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const YarismaHakkinda = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('yarisma-hakkinda'))
  },[setSheetState])

  return (
    <div className="container my-5 yarisma_hakkinda">
      <h1 className='mb-4'>Genel Bilgi</h1>
      <div>
        <p>
           Hastanemizde ve ilimizde organ bağışı konusunda farkındalığın artırılması için hastane personeli ve çocuklarının organ bağışı ve nakli konusunda bilgi seviyesini artırmak amacıyla Konya Şehir Hastanesi Organ ve Doku Nakli Koordinatörlüğü tarafından “Organ Bağışı ile Umut Ol” konulu bir slogan yarışması gerçekleştirilmesi planlanmıştır.
        </p>
      
      </div>
    </div>
  );
}

export default YarismaHakkinda;