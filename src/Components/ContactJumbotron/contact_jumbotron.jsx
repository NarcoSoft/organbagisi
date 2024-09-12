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
              <p>Tarih: 26 Eylül - 26 Ekim Arası</p>
              <p>Tüm Konya Şehir Hastanesi Personelleri</p>
            </div>
            <div className="col-lg-4 text-center text-dark mb-3">
              <h2 className="mb-3">Sonuçlar</h2>
              <p>Açıklanma: 1 Kasım 2024 tarihinde</p>
              <p>Tarih: Ödül Töreni 3-9 Kasım Arası</p>
              <p>Yer: Konya Şehir Hastanesi / Konferans Salonu</p>
            </div>
            <div className="col-lg-4 text-center text-dark mb-3">
              <h2 className="mb-3">İletişim</h2>
              <p>Koordinatör: Doç. Dr. Mehmet Akif Yazar</p>
              <p>Telefon: +90 505 566 57 58</p>
              <p>E-posta: makifyazar@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactJumbotron;