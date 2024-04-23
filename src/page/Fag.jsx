import React, { useState } from 'react';
import './faq.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='faq'>
      <div className='topfaq'></div>
      <div className='faqmain'>
        <h2>Sual-Cavab</h2>
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAnswer(0)}>
            Kofe.al nedir? {activeIndex === 0 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 0 ? 'active' : ''}`}>
            Kofe.al, pərəstişkarlarınızdan birbaşa gəlir əldə etməyiniz üçün ən sadə yoldur. Siz bəxşişlər qəbul edə, üzvlük səviyyələri yarada, onlayn mağaza aça və 9% platforma haqqı ilə komissiya ala bilərsiniz.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAnswer(1)}>
            Kofe.al nedir? {activeIndex === 1 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 1 ? 'active' : ''}`}>
            Kofe.al, pərəstişkarlarınızdan birbaşa gəlir əldə etməyiniz üçün ən sadə yoldur. Siz bəxşişlər qəbul edə, üzvlük səviyyələri yarada, onlayn mağaza aça və 9% platforma haqqı ilə komissiya ala bilərsiniz.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAnswer(2)}>
            Kofe.al kimler ucundur? {activeIndex === 2 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 2 ? 'active' : ''}`}>
            Sənətkarlar, Rəssamlar, Streamerlər, Podkastçılar, Yazıçılar, Fotoqraflar, Kinorejissorlar, İnfluencerlər və hər cür yaradıcı şəxslər Kofe.al-dan istifadə edirlər.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAnswer(3)}>
            Kofe.al kimler ucundur? {activeIndex === 3 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 3 ? 'active' : ''}`}>
            Sənətkarlar, Rəssamlar, Streamerlər, Podkastçılar, Yazıçılar, Fotoqraflar, Kinorejissorlar, İnfluencerlər və hər cür yaradıcı şəxslər Kofe.al-dan istifadə edirlər.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAnswer(4)}>
            Kofe.al ile ne qeder qazana bilerem? {activeIndex === 4 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 4 ? 'active' : ''}`}>
            Hər şey sizin izləyici və pərəstişkarlarınız ilə münasibət və kommunikasiyadan asılıdır. Kofe.al olaraq toplanacaq məbləğə heç bir limit tətbiq etmirik. Yetər ki, siz yaradın, paylaşın, satın və qazanın.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleAnswer(5)}>
            Kofe.al ile ne qeder qazana bilerem? {activeIndex === 5 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 5 ? 'active' : ''}`}>
            Hər şey sizin izləyici və pərəstişkarlarınız ilə münasibət və kommunikasiyadan asılıdır. Kofe.al olaraq toplanacaq məbləğə heç bir limit tətbiq etmirik. Yetər ki, siz yaradın, paylaşın, satın və qazanın.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleAnswer(6)}>
            Odenilen vesaitler ile kofe almaliyam? {activeIndex === 6 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 6 ? 'active' : ''}`}>
            Təbii ki, yox! Biz qəhvəni sevirik, amma bu, sadəcə dostluq metaforasıdır. Sadəcə, işinizi dəstəkləmək üçün pərəstişkarlarından "qəhvə almağı" xahiş etmək sadəcə "ianə vermək"dən daha bəsitdir. Siz həmçinin "qəhvə"ni öz zövqünüzü uyğun başqa bir şeyə dəyişə bilərsiniz. Məsələn kofe əvəzinə; çay, dönər, hamburger, su və ya pizza istəyə bilərsiniz.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleAnswer(7)}>
            Odenilen vesaitler ile kofe almaliyam? {activeIndex === 7 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 7 ? 'active' : ''}`}>
            Təbii ki, yox! Biz qəhvəni sevirik, amma bu, sadəcə dostluq metaforasıdır. Sadəcə, işinizi dəstəkləmək üçün pərəstişkarlarından "qəhvə almağı" xahiş etmək sadəcə "ianə vermək"dən daha bəsitdir. Siz həmçinin "qəhvə"ni öz zövqünüzü uyğun başqa bir şeyə dəyişə bilərsiniz. Məsələn kofe əvəzinə; çay, dönər, hamburger, su və ya pizza istəyə bilərsiniz.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleAnswer(8)}>
            Xidmet haqqi nee qederdir? {activeIndex === 8 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 8 ? 'active' : ''}`}>
            Biz bütün əməliyyat haqları və komissiyamız daxil olmaqla 9% komissiya alırıq.
          </div>
        </div>

        {/* Duplicate the question and answer pairs */}
        <div className='questionandanswer'>
          <div className={`question ${activeIndex === 9 ? 'active' : ''}`} onClick={() => toggleAnswer(9)}>
            Xidmet haqqi nee qederdir? {activeIndex === 9 ? <FaMinus /> : <FaPlus />}
          </div>
          <div className={`answer ${activeIndex === 9 ? 'active' : ''}`}>
            Biz bütün əməliyyat haqları və komissiyamız daxil olmaqla 9% komissiya alırıq.
          </div>
        </div>
        
        {/* Duplicate the question and answer pairs */}
        {/* You can repeat the above block for each question and answer pair */}
      </div>
    </div>
  );
};

export default Faq;
