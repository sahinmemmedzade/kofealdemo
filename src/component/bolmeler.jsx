import React, { useState } from 'react';
import './Bolmeler.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Bolmeler = () => {
    const [hoverPosition, setHoverPosition] = useState('left');

    const handleHover = () => {
        setHoverPosition('right');
    };

    const handleMouseOut = () => {
        setHoverPosition('left');
    };

    return (
        <div className='bolmeler'>
            <div className='vebdizayn'>
               <img src="https://kofe.al/storage/images/categories/web-design.jpg" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Veb dizayn </p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
                   <Link  to='/Uzvlerimiz' className='uzvlerimizlink' >  133 Yaradici <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
            <div className='vebdizayn'>
             <img src="https://kofe.al/storage/images/categories/graphic-design.jpg" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Qrafik Dizayn </p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
                    <Link  to='/Uzvlerimiz' className='uzvlerimizlink' > 155 Yaradici <FaArrowRight></FaArrowRight></Link>  
                </div>
            </div> <div className='vebdizayn'>
               <Link  to='/Uzvlerimiz'></Link> <img src="https://kofe.al/storage/images/categories/personal-development.jpg" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Sexsi Inkisaf</p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
                    <Link  to='/Uzvlerimiz' className='uzvlerimizlink' > 321 Yaradici <FaArrowRight></FaArrowRight></Link>  
                </div>
            </div> <div className='vebdizayn'>
               <Link  to='/Uzvlerimiz'></Link> <img src="https://kofe.al/storage/images/categories/author.png" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Yaziciliq</p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
                   <Link  to='/Uzvlerimiz' className='uzvlerimizlink' > 147 Yaradici <FaArrowRight></FaArrowRight></Link>  
                </div>
            </div> <div className='vebdizayn'>
               <Link  to='/Uzvlerimiz'></Link> <img src="https://kofe.al/storage/images/categories/artist.png" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Incesenet</p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
                    <Link  to='/Uzvlerimiz' className='uzvlerimizlink' > 174 Yaradici <FaArrowRight></FaArrowRight></Link>  
                </div>
            </div> <div className='vebdizayn'>
               <Link  to='/Uzvlerimiz'></Link> <img src="https://kofe.al/storage/images/categories/arts.jpg" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Blog</p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
                    <Link  to='/Uzvlerimiz' className='uzvlerimizlink' > 321 Yaradici <FaArrowRight></FaArrowRight></Link>  
                </div>
            </div> <div className='vebdizayn'>
               <Link  to='/Uzvlerimiz'></Link> <img src="https://kofe.al/storage/images/categories/Sport.png" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Idman</p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
  <Link  to='/Uzvlerimiz' className='uzvlerimizlink' > 100 Yaradici <FaArrowRight></FaArrowRight></Link>                  </div>
            </div>
            <div className='vebdizayn'>
               <Link  to='/Uzvlerimiz'></Link> <img src="https://kofe.al/storage/images/categories/musician.png" alt="" />
                <div className="overlay"></div>
                <p className="category-title">Musiqi</p>
                <div
                    className={`hover-text ${hoverPosition === 'left' ? 'left-to-right' : 'right-to-left'}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOut}
                >
  <Link  to='/Uzvlerimiz' className='uzvlerimizlink' > 94 Yaradici <FaArrowRight></FaArrowRight></Link>                  </div>
            </div>
        </div>
    );
};

export default Bolmeler;
