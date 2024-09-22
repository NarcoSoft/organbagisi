import { setSheetState } from '../../Store/Slices/sheetSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const BasvuruSartlari = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSheetState('basvuru-sartlari'))
    window.scrollTo(0,0)
  },[setSheetState])
  return(
    <div className="container my-5">
      <h1 className="mb-3">Yarışmaya Katılım Şartları</h1>
      <div>
        <ul>
          <li>
            Yarışmanın konusu “Organ Bağışı” dır.
          </li>
          <li>
            Yarışmaya sadece Konya Şehir Hastanesinde görev yapan tüm sağlık personeli, hastane destek elemanlarını içeren tüm personel ve bu personellerin 2024-2025 öğretim yılı itibariyle lise bölümüne giden çocukları katılabilecektir.
          </li>
          <li>
            Yarışmaya katılım ücretsizdir.
          </li>
          <li>
            Hastanede görev yapan tüm personel kapsamına; hekim, hemşire, ebe, eczacı, sağlık memuru, anestezi teknikeri, diğer sağlık teknisyenleri ve teknikerleri, fizyoterapist, odyolog, diyetisyen, sekreter, yardımcı sağlık personeli, anlaşmalı şirketlere ait güvenlik görevlisi, taşıma, yönlendirme gibi tüm destek hizmetlerini sağlayan ve hastanede resmi olarak görev yapan tüm personel girmektedir.
          </li>
          <li>
            Yarışmaya katılacak sloganlar orijinal nitelikte olmalıdır. Daha önce başka bir yarışmada sunulan, başka bir yerde yayınlanan veya başka birine ait olduğu tespit edilen sloganlar, seçici kurul tarafından yarışma dışı kalacaktır.
          </li>
          <li>
            Yarışmaya bir kişi en fazla 2 (iki) slogan ile katılabilir.
          </li>
          <li>
            Yarışmaya; seçici kurul üyeleri ve organ nakil koordinatörleri, idari personelden başhekim ve yardımcıları, idari ve mali hizmetler müdürleri ve yardımcıları, destek ve kalite hizmetleri müdürü ve yardımcıları, sağlık bakım hizmetleri müdürü ve yardımcıları ve bu kişilerin çocukları yarışmaya katılamazlar.
          </li>
          <li>
            Başvuru yapan kişi, başvuru formunu doldurmakla; yarışmaya katılacağı sloganın sahibi olduğunu ve bu eser üzerinde haiz olduğu ve 5846 sayılı Türk Fikir ve Sanat Eserleri Kanunu’nun 21-25. madde hükümlerinde tanımlanan işleme, çoğaltma, yayma, temsil ve işaret, ses ve/veya görüntü naklinde yarayan araçlarla umuma iletim mali haklarını münhasır olmayan basit ruhsat şeklinde herhangi bir yer, süre ve sayı kısıtlaması olmaksızın ve 3. kişilere devir hakkını da kapsayacak surette Konya Şehir Hastanesine verdiğini, Konya Şehir Hastanesinin söz konusu sloganı kullanmak, sergilemek, arşivinde tutmak, internet ortamında ve sair şekillerde yayınlamak suretiyle ve bunlarla sınırlı olmaksızın dilediği her şekilde kullanmasına muvafakatinin olduğunu peşinen beyan ve kabul etmiş demektir.
          </li>
        </ul>
      </div>  
      <h1 className="mt-5 mb-3">Yarışmaya Katılacak Sloganlarda Aranacak Şartlar</h1>
      <div>
        <ul>
          <li>Slogan; organ bağışı ile ilgili, kısa akılda kalıcı ve etkili bir ifade olmalı ve <strong>en fazla 6 kelimeden</strong> oluşmalıdır.</li>
          <li>
            Başvurular sadece <strong>'organbagisi.anestezietkinlik.com'</strong> internet sayfası üzerinden yapılacaktır. 
          </li>         
          <li>
            Slogan ifadesi 'Başvuru Yap' bölümünde bulunan başvuru formundaki 'Slogan' kısmına yazılarak form onaylanacaktır. Sistem otomatik olarak sloganı kaydedecektir.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BasvuruSartlari;