import "./contact_jumbotron.css";

const ContactJumbotron = () => {
  return (
    <div>
      <div className="contact_jumbotron">
        <div className="contact_content w-100">
          <div className="row w-100">
            <div className="col-md-4 text-center text-dark mb-3">
              <h2 className="mb-3">Başvurular</h2>
              <p>Organ Bağışı İle Umut Ol</p>
              <p>26 Ekim - 26 Kasım Arası</p>
              <p>Tüm Konya Şehir Hastanesi Personelleri</p>
              <p>2 Adet Slogan</p>
              <p>organbagisi.anestezietkinlik.com üzerinden katıl</p>
            </div>
            <div className="col-md-4 text-center text-dark mb-3">
              <h2 className="mb-3">Sonuçlar</h2>
              <p>1 Kasım 2024 tarihinde</p>
              <p>'Başvuru Sonuçları' Sekmesinden Takip Et</p>
              <p>Ödül Töreni 3-9 Kasım Arası</p>
              <p>Konya Şehir Hastanesi / Konferans Salonu</p>
            </div>
            <div className="col-md-4 text-center text-dark mb-3">
              <h2 className="mb-3">İletişim</h2>
              <p>Doç. Dr. Mehmet Akif Yazar</p>
              <p>+90 505 566 57 58</p>
              <p>example@gmail.com</p>
              <p>Konya Şehir Hastanesi</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactJumbotron;