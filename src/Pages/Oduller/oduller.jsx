import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './oduller.css'

const Oduller = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('oduller'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(
    <div className="container my-5">
      <h1 className="mb-4">Ödüller</h1>
      <div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card_od mx-auto'>
              <img src="https://live.staticflickr.com/65535/54016710760_afb2496f98_c.jpg" width="250" height="250" alt="Kaft"/>
              <div className='number_box'>1.</div>
            </div>
            <div className='text_box_1'>BİRİNCİYE</div>
            <div className='text_box_2'>Kaft Çanta (Nevend Asphalt)</div>
          </div>
          <div className='col-lg-4'>
            <div className='card_od mx-auto'>
              <img src="https://live.staticflickr.com/65535/54015402492_b7f63e64d5_c.jpg" width="250" height="250" alt="Stanley"/>
              <div className='number_box'>2.</div>
            </div>
            <div className='text_box_1'>İKİNCİYE</div>
            <div className='text_box_2'>Stanley Quencher Pipetli Termos 1.18 Lt</div>
          </div>
          <div className='col-lg-4'>
            <div className='card_od mx-auto'>
              <img src="https://live.staticflickr.com/65535/54015870277_ce832ce6bd_c.jpg" width="250" height="250" alt="JBL"/>
              <div className='number_box'>3.</div>
            </div>
            <div className='text_box_1'>ÜÇÜNCÜYE</div>
            <div className='text_box_2'>JBL Headphone Tune T560 BT Siyah Wireless Bluetooth Kulaküstü Kulaklık</div>
          </div>  
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='card_od mx-auto'>
              <img src="https://live.staticflickr.com/65535/54015891147_f04743214e_z.jpg" width="250" height="250" alt="Kaft"/>
              <div className='number_box'>50</div>
            </div>
            <div className='text_box_1'>İLK 50 KİŞİYE</div>
            <div className='text_box_2'>Seramik Kupa</div>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <p><strong>Ödül Tören Tarihi:</strong> 3-9 Kasım 2024 Organ Bağışı Haftası içerisinde yapılacaktır. </p>
        <p><strong>Yer:</strong> Konya Şehir Hastanesi / Konferans Salonu</p>
        <h2 className="mt-5">Ödül Töreni Programı</h2>
        <p>Ödül töreni programı, Konya Şehir Hastanesi konferans salonunda gerçekleştirilecektir. Programa sağlık kurumlarımızdaki yöneticiler ve tüm hastane personeli davet edilecektir. İçerik olarak organ bağışına yönelik konuşmalar ve yarışmada dereceye girenlere ödül takdimi olacaktır.</p>
      </div>
      
    </div>
  )
}

export default Oduller;