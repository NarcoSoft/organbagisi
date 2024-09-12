import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Oduller = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('oduller'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(
    <div className="container my-5">
      <h1 className="mb-4">Ödüller</h1>
      <p><strong>Ödül Tören Tarihi:</strong> 3-9 Kasım 2024 Organ Bağışı Haftası içerisinde yapılacaktır. </p>
      <p><strong>Yer:</strong> Konya Şehir Hastanesi / Konferans Salonu</p>
      <h2 className="mt-5">Ödül Töreni Programı</h2>
      <p>Ödül töreni programı, Konya Şehir Hastanesi konferans salonunda gerçekleştirilecektir. Programa sağlık kurumlarımızdaki yöneticiler ve tüm hastane personeli davet edilecektir. İçerik olarak organ bağışına yönelik konuşmalar ve yarışmada dereceye girenlere ödül takdimi olacaktır.</p>
    </div>
  )
}

export default Oduller;