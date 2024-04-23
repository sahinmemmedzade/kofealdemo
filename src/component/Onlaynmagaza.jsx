import React from 'react';

const Onlaynmagaza = () => {
    return (
        <div className='kofeal onlayn '>
            <div className='kofealdescriptiononlayn'>
                <div className='desktek destekonlayn'>
                    <p>ONLAYN MAĞAZA</p>
                </div>
                <h3>Məhsul və Xidmətlərinizi satın</h3>
                <p>Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya fiziki əşyalar əlavə edin. Heç bir abunə və ya aktivləşdirmə haqqı yoxdur. Sadəcə məhsul və ya xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!</p>
                <h6>Nə satmaq olar?:</h6>
                <ul className="custom-list">
                    <li>
                        <div className="icon-circle"><div className="correct-icon"></div></div>
                        Fiziki məhsul
                    </li>
                    <li>
                        <div className="icon-circle"><div className="correct-icon"></div></div>
                        Digital məhsul
                    </li>
                    <li>
                        <div className="icon-circle"><div className="correct-icon"></div></div>
                        Affiliate məhsul
                    </li>
                    <li>
                        <div className="icon-circle"><div className="correct-icon"></div></div>
                        Xidmət
                    </li>
                    <li>
                        <div className="icon-circle"><div className="correct-icon"></div></div>
                        Tədbirə giriş
                    </li>
                    <li>
                        <div className="icon-circle"><div className="correct-icon"></div></div>
                        Çap işləri
                    </li>
                </ul>
            </div>
            <div className='kofealimgonlayn'>
                <img src="https://kofe.al/assets/images/splash/layout/az/2-shop.png" alt="" />
            </div>
        </div>
    );
}

export default Onlaynmagaza;
