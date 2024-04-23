import React, { useState } from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import { FaCaretDown, FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <header>
        <navbar>
          <div className='logo'>
            <img src="https://kofe.al/assets/images/logo/logo.png?v=1.0" alt="" />
          </div>
          <div className={`menu ${sidebarOpen ? 'hidden' : ''}`}>
            <div className='bigmenu'>
              <NavLink to='/Uzvlerimiz' activeClassName='active'> Uzvlerimiz</NavLink>
              <NavLink to='/Fag' activeClassName='active'>Faq</NavLink>
              <NavLink to='/blog' activeClassName='active'>Bloq</NavLink>
            </div>
          </div>
          <div className={`sign ${sidebarOpen ? 'hidden' : ''}`}>
            <div className='nation'>
              <div className='Azerbaijan'> 
                <img src="https://kofe.al/assets/images/icons/az.png" alt="" />
                <span>Azərbaycan</span>
                <div className="caret-icon">
                  <FaCaretDown />
                </div>
              </div>
              <div className='othercountry'>
                <div className='English'> 
                  <img src="https://kofe.al/assets/images/icons/en.png" alt="" />
                  <span>English</span>
                </div>
                <div className='English'> 
                  <img src="https://kofe.al/assets/images/icons/tr.png" alt="" />
                  <span>Türkçe</span>
                </div>
                <div className='English'> 
                  <img src="https://kofe.al/assets/images/icons/ru.png" alt="" />
                  <span>Русский</span>
                </div>
              </div>
            </div>
            <div className='navbarbutton'>
              <div className='daxilol'>
                <span>Daxil ol</span>
                <div className="nested-div">
                  <span>Daxil olun</span>
                </div>
              </div>
              <div className='Qeydiyyat'>
                <span>Qeydiyyat</span>
                <div className="nested-divqeydiyyat">
                  <span>Qeydiyyat</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`sidebar-icon ${sidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
            <IoMdMenu />
          </div>
          {sidebarOpen && (
            <div className="sidebar-overlay" onClick={toggleSidebar}>
              <div className="sidebar">
                <div className="sidebar-content">
                  <div className='sidebartop'>
                    <div className='logo'>
                      <img src="https://kofe.al/assets/images/logo/logo.png?v=1.0" alt="" />
                      <div className="sidebar-close" onClick={toggleSidebar}>
                        <IoMdClose />
                      </div>
                    </div>
                  </div>
                  <div className='sidebarmedium'>
                    <div className='sidebarinfo'>
                      <p>Sevdiyin işlə məşğul ol, izləyicilərindən dəstək qazan!</p>
                    </div>
                    <div className='nation'>
                      <div className='Azerbaijan'> 
                        <img src="https://kofe.al/assets/images/icons/az.png" alt="" />
                        <span>Azərbaycan</span>
                        <div className="caret-icon">
                          <FaCaretDown />
                        </div>
                      </div>
                      <div className='othercountry'>
                        <div className='English'> 
                          <img src="https://kofe.al/assets/images/icons/en.png" alt="" />
                          <span>English</span>
                        </div>
                        <div className='English'> 
                          <img src="https://kofe.al/assets/images/icons/tr.png" alt="" />
                          <span>Türkçe</span>
                        </div>
                        <div className='English'> 
                          <img src="https://kofe.al/assets/images/icons/ru.png" alt="" />
                          <span>Русский</span>
                        </div>
                      </div>
                    </div>
                    <div className='bigmenu'>
                      <NavLink to='/Uzvlerimiz' activeClassName='active'>Uzvlerimiz</NavLink>
                      <hr />
                      <NavLink to='/Fag' activeClassName='active'>Faq</NavLink>
                      <hr />
                      <NavLink to='/blog' activeClassName='active'>Bloq</NavLink>
                    </div>
                    <div className='navbarbutton'>
                      <div className='daxilol'>
                        <span>Daxil ol</span>
                        <div className="nested-div">
                          <span>Daxil olun</span>
                        </div>
                      </div>
                      <div className='Qeydiyyat'>
                        <span>Qeydiyyat</span>
                        <div className="nested-divqeydiyyat">
                          <span>Qeydiyyat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sidebarfoot'>
                    <div className='biziizle'>Bizi izleyin</div>
                    <hr />
                    <div className='sidebaricons'>
                      <div className='facebook'>
                        <FaFacebookF />
                      </div>
                      <div className='instagram'>
                        <FaInstagramSquare />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </navbar>
      </header>
      
    </div>
  );
}

export default Header;
