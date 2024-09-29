import React, { useState } from 'react';
import './forming.css'; // CSS dosyasını ekleyin
import InputMask from 'react-input-mask';

const Form = () => {
  const [participantType, setParticipantType] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    slogan1: '',
    slogan2: '',
    participantType: '',
    role: '',
    schoolName: '',
    class: '',
    parentRole: '',
  });

  const sendVerificationCode = () => {
    setLoading(true);
    fetch('http://localhost/organbagisi/send_verification_code.php', {
      method: 'POST',
      credentials: 'include', // Oturum çerezlerini gönder
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ email: formData.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); // Yükleniyor durumunu kapat
        if (data.success) {
          alert('Doğrulama kodu e-posta adresinize gönderildi.');
          setIsCodeSent(true);
        } else {
          alert('Bir hata oluştu: ' + data.error);
        }
      })
      .catch((error) => {
        setLoading(false); // Yükleniyor durumunu kapat
        alert('Bir hata oluştu: ' + error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Zorunlu alanları kontrol et
    if (!termsAccepted) {
      alert('Lütfen şartları kabul edin.');
      return;
    }
    if (!formData.fullName || !formData.email || !formData.phone || !formData.slogan1 || !formData.participantType) {
      alert('Lütfen zorunlu alanları doldurun.');
      return;
    }

    // Doğrulama kodunu kontrol et
    fetch('http://localhost/organbagisi/verify_code.php', {
      method: 'POST',
      credentials: 'include', // Oturum çerezlerini gönder
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ code: verificationCode }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.valid) {
          // Form verilerini API'ye gönder
          fetch('http://localhost/organbagisi/submit_form.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                setIsFormSubmitted(true);
                // Formu temizle
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  slogan1: '',
                  slogan2: '',
                  participantType: '',
                  role: '',
                  schoolName: '',
                  class: '',
                  parentRole: '',
                });
                setIsCodeSent(false); // Doğrulama kodu gönderme durumunu sıfırla
                setTermsAccepted(false); // Şartları kabul etme durumunu sıfırla
                setVerificationCode(''); // Doğrulama kodunu temizle
              } else {
                alert('Bir hata oluştu: ' + data.error);
              }
            })
            .catch((error) => {
              alert('Bir hata oluştu: ' + error.message);
            });
        } else {
          alert('Doğrulama kodu hatalı.');
        }
      })
      .catch((error) => {
        alert('Bir hata oluştu: ' + error.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  if (isFormSubmitted) {
    return (
      <div className="card-container-h mx-auto my-5">
        <div className="card-h my-auto">
          <i class="fa-solid fa-thumbs-up mt-4"></i>
          <h2>Formunuz başarıyla gönderildi!</h2>
          <p className='mt-5'>Formunuzun bir örneği e-posta adresinize gönderilmiştir.</p>
          <p>Formunuzu gelen mailin altındaki düzenleme linkinden tekrar düzenleyebilirsiniz.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-container mt-5">
      <h1 className='mt-3 mb-5'>Başvuru Formu</h1>
      <div className="form-group">
        <label>
          Adınız Soyadınız: <span className="required">*</span>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" />
        </label>
      </div>
      <div className="form-group">
        <label>
          E-posta: <span className="required">*</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder='example@example.com' />
        </label>
      </div>
      <div className="form-group">
        <label>
          Telefon: <span className="required">*</span>
          <InputMask type="text" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" mask="(999) 999-9999" placeholder='(555) 555 5555'/>
        </label>
      </div>
      <div className="form-group">
        <label>
          Slogan 1: <span className="required">*</span>
          <input type="text" name="slogan1" value={formData.slogan1} onChange={handleChange} required className="form-input" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Slogan 2:
          <input type="text" name="slogan2" value={formData.slogan2} onChange={handleChange} className="form-input" />
        </label>
      </div>
      <div className="form-group">
        <label>
          Katılımcı Konumunuz: <span className="required">*</span>
          <select name="participantType" value={formData.participantType} onChange={(e) => {
            handleChange(e);
            setParticipantType(e.target.value);
          }} required className="form-select">
            <option value="">Seçin</option>
            <option value="Hastane Çalışanı">Hastane Çalışanı</option>
            <option value="Öğrenci">Öğrenci</option>
          </select>
        </label>
      </div>
      {participantType === 'Hastane Çalışanı' && (
        <div className="form-group">
          <label>
            Göreviniz: <span className="required">*</span>
            <select name="role" value={formData.role} onChange={handleChange} required className="form-select">
              <option value="">Seçin</option>
              <option value="Hekim">Hekim</option>
              <option value="Hemşire">Hemşire</option>
              <option value="Ebe">Ebe</option>
              <option value="Fizyoterapist">Fizyoterapist</option>
              <option value="Odyolog">Odyolog</option>
            </select>
          </label>
        </div>
      )}
      {participantType === 'Öğrenci' && (
        <>
          <div className="form-group">
            <label>
              Okulunuzun Adı: <span className="required">*</span>
              <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} required className="form-input" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Sınıfınız: <span className="required">*</span>
              <select name="class" value={formData.class} onChange={handleChange} required className="form-select">
                <option value="">Seçin</option>
                <option value="Lise 1">Lise 1</option>
                <option value="Lise 2">Lise 2</option>
                <option value="Lise 3">Lise 3</option>
                <option value="Lise 4">Lise 4</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Hastanede Çalışan anne veya babanızın görevi: <span className="required">*</span>
              <select name="parentRole" value={formData.parentRole} onChange={handleChange} required className="form-select">
                <option value="">Seçin</option>
                <option value="Hekim">Hekim</option>
                <option value="Hemşire">Hemşire</option>
                <option value="Ebe">Ebe</option>
                <option value="Fizyoterapist">Fizyoterapist</option>
                <option value="Odyolog">Odyolog</option>
              </select>
            </label>
          </div>
        </>
      )}
      <div className="form-group">
        <label>
          <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="form-checkbox" />
          Şartları kabul ediyorum. <span className="required">*</span>
        </label>
      </div>
       {loading && <p style={{color: 'red', fontWeight:'600'}}>Lütfen bekleyiniz...</p>}
      {
        loading | isCodeSent ? null: 
        <div className="form-group">
          <button type="button" onClick={sendVerificationCode} disabled={!termsAccepted} className="form-button">
            {loading ? 'Gönderiliyor...' : 'Doğrulama Kodu Gönder'}
          </button>
        </div>
      }
      
      {isCodeSent && (
        <div className="form-group">
          <label style={{fontWeight: '600'}}> 
            Lütfen E-posta adresinize gelen kodu giriniz:
            <input type="text" name="verificationCode" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required className="form-input" />
          </label>
        </div>
      )}
      {isCodeSent ? 
        <div className="form-group">
          <button type="submit" disabled={!termsAccepted} className="form-button">
            Gönder
          </button>
        </div> : null
      }
      
    </form>
  );
};

export default Form;
