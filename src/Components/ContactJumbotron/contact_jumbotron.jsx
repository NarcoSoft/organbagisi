import "./contact_jumbotron.css";

const ContactJumbotron = () => {
  return (
    <div>
      <div className="contact_jumbotron">
        <div className="contact_content w-100">
          <div className="row w-100">
            <div className="col-lg-4 text-center text-dark mb-3">
              <h2 className="mb-3">Başvurular</h2>
              <p>Konu: Organ Bağışı İle Umut Ol</p>
              <p>Son Başvuru Tarihi: 26 Ekim 2024 Cumartesi</p>
              <p>Konya Şehir Hastanesi Çalışanları ve Çocukları</p>
            </div>
            <div className="col-lg-4 text-center text-dark mb-3">
              <h2 className="mb-3">Sonuçlar</h2>
              <p>Açıklanma: 1 Kasım 2024 tarihinde</p>
              <p>Ödül Takdimi: Organ Bağışı Etkinliği'nde</p>
              <p>Yer: Konya Şehir Hastanesi / Konferans Salonu</p>
            </div>
            <div className="col-lg-4 text-center text-dark mb-3">
              <h2 className="mb-3">İletişim</h2>
              <p>Koordinatör: Doç. Dr. Mehmet Akif Yazar</p>
              <p>Telefon: +90 505 566 57 58</p>
              <p>Tüm Sorularınız İçin: makifyazar@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactJumbotron;